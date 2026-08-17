/**
 * Deploy the skin gallery and its skins into a dsh profile.
 *
 * What it does (idempotent):
 *   1. Copies every skins/<id> package into
 *      <profile>/node_modules/@linxin666/dsh-client-ui-skin-<id> — the
 *      registry location the skin-center host half scans (real directories;
 *      symlinks are skipped by its scanner).
 *   2. Junction-links the skin-gallery plugin into
 *      <profile>/node_modules/@dsh-external/dsh-client-ui-skin-gallery so
 *      the profile loader can resolve it.
 *   3. Adds an insert row for the gallery to the profile's own
 *      cordis.patch.yml (the loader wiring; on CLI surfaces the Cordis HMR
 *      watcher re-applies it live, on the desktop app it takes effect at
 *      the next restart). The profile manifest is deliberately untouched:
 *      skins activate exclusively through the skin-center's managed section
 *      (~/.dsh/cordis.patch.yml), and the gallery must not be wired twice.
 *
 * Usage: node scripts/deploy.mjs [profile-name]   (default: desktop)
 */
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url))
const SKINS_DIR = join(REPO_ROOT, 'skins')
const GALLERY_DIR = join(REPO_ROOT, 'skin-gallery')

const GALLERY_PKG = '@dsh-external/dsh-client-ui-skin-gallery'
const GALLERY_ROW_ID = 'ui-app-skin-gallery'
const profileName = process.argv[2] ?? 'desktop'
const harnessHome = process.env.DSH_HOME?.trim() || join(homedir(), '.dsh')
const profileDir = join(harnessHome, 'profiles', profileName)
const modulesDir = join(profileDir, 'node_modules')
const profilePatchPath = join(profileDir, 'cordis.patch.yml')

if (!existsSync(join(profileDir, 'package.json'))) {
  console.error(`profile not found: ${profileDir}`)
  process.exit(1)
}

function copyDir(source, target) {
  rmSync(target, { recursive: true, force: true })
  cpSync(source, target, { recursive: true })
  console.log(`copied ${source} -> ${target}`)
}

// 1. registry copies of the gallery skins
for (const entry of readdirSync(SKINS_DIR)) {
  const skinDir = join(SKINS_DIR, entry)
  if (!existsSync(join(skinDir, 'skin.json'))) continue
  copyDir(skinDir, join(modulesDir, '@linxin666', `dsh-client-ui-skin-${entry}`))
}


// 2b. Resolution junctions inside the DEPLOYED profile: the skin-center's
// path resolver falls back to the "web" profile when the host process cwd is
// not the profile dir (true for DSH Desktop), so useSkin junctions skins into
// the web profile while THIS profile resolves plugin names from its own
// node_modules at boot. Pre-creating the junctions here keeps the home-patch
// insert rows resolvable in this profile regardless of which profile the
// skin-center operated on.
for (const entry of readdirSync(SKINS_DIR)) {
  const skinDir = join(SKINS_DIR, entry)
  if (!existsSync(join(skinDir, 'skin.json'))) continue
  const pkg = JSON.parse(readFileSync(join(skinDir, 'skin.json'), 'utf8')).package
  const link = join(modulesDir, pkg)
  const target = join(modulesDir, '@linxin666', `dsh-client-ui-skin-${entry}`)
  if (!existsSync(link)) {
    mkdirSync(join(modulesDir, '@dsh-external'), { recursive: true })
    symlinkSync(target, link, 'junction')
    console.log(`junction ${link} -> ${target}`)
  }
}
// The bundled @linxin666 skins (miku, qq98, ...) ride the same junction
// channel: their carrier dirs live inside dsh-skins/skins/<id>.
{
  const carrier = join(modulesDir, '@linxin666', 'dsh-skins', 'skins')
  if (existsSync(carrier)) {
    for (const entry of readdirSync(carrier)) {
      const skinDir = join(carrier, entry)
      if (!existsSync(join(skinDir, 'skin.json'))) continue
      const pkg = JSON.parse(readFileSync(join(skinDir, 'skin.json'), 'utf8')).package
      const link = join(modulesDir, pkg)
      if (!existsSync(link)) {
        symlinkSync(skinDir, link, 'junction')
        console.log(`junction ${link} -> ${skinDir}`)
      }
    }
  }
}

// 3. gallery junction
const galleryLink = join(modulesDir, GALLERY_PKG)
if (!existsSync(galleryLink)) {
  mkdirSync(join(modulesDir, '@dsh-external'), { recursive: true })
  try {
    symlinkSync(GALLERY_DIR, galleryLink, 'junction')
    console.log(`junction ${galleryLink} -> ${GALLERY_DIR}`)
  } catch (error) {
    console.error(`junction failed (${error?.code}): ${error?.message}`)
    process.exit(1)
  }
} else {
  console.log(`gallery link already present: ${galleryLink}`)
}

// 4. profile patch insert row (loader wiring)
const patch = existsSync(profilePatchPath) ? readFileSync(profilePatchPath, 'utf8') : ''
const rowPattern = new RegExp(`- id: ${GALLERY_ROW_ID}\\n`)
if (rowPattern.test(patch)) {
  console.log('profile patch already wires the gallery')
} else {
  const marker = `# Skin gallery (dsh-free-skins/skin-gallery): the 界面皮肤 settings section.\n# Wired here (not in dsh.profile.bundles) so the row never duplicates.\n- insert:\n    - id: ${GALLERY_ROW_ID}\n      name: '${GALLERY_PKG}'\n`
  const next = `${patch.replace(/\s+$/, '')}\n\n${marker}`
  writeFileSync(profilePatchPath, next)
  console.log(`profile patch wired: ${profilePatchPath}`)
}
console.log('done — CLI surfaces hot-apply the patch layer; the desktop app picks it up at the next restart')

