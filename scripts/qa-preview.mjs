/**
 * QA preview page generator: renders every gallery skin's real art (backdrop
 * light/dark, mascot, corner, particle) plus a mock UI voiced with the REAL
 * token remap CSS extracted from the generated bundles, so the visual result
 * can be screenshotted before the skin ever reaches the GUI.
 *
 * Usage: node scripts/qa-preview.mjs [output-html]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url))
const SKINS_DIR = join(REPO_ROOT, 'skins')
const outPath = process.argv[2] ?? 'skin-qa.html'

const skins = []
for (const id of readdirSync(SKINS_DIR).sort()) {
  const defPath = join(SKINS_DIR, id, 'definition.mjs')
  if (!existsSync(defPath)) continue
  const def = (await import(pathToFileURL(defPath).href)).default
  const bundle = readFileSync(join(SKINS_DIR, id, 'lib', 'client.js'), 'utf8')
  const cssMatch = /const CSS = "((?:[^"\\]|\\.)*)"/.exec(bundle)
  if (cssMatch === null) throw new Error(`${id}: CSS not found in bundle`)
  // Re-scope the body selectors to the per-skin QA sections.
  const css = cssMatch[1]
    .replaceAll(`body[${def.bodyAttr}]`, `section.qa[${def.bodyAttr}]`)
  skins.push({ def, css })
}

const mockUi = (skin) => {
  const { bodyAttr, palettes } = skin.def
  const light = palettes.light
  const dark = palettes.dark
  const swatches = (p) => ['canvas', 'panel', 'ink', 'accent', 'accentBright', 'ok', 'err', 'warn']
    .map((key) => `<span class="swatch" style="background:${p[key]}"></span>`).join('')
  const chrome = `
    <div class="row">
      <div class="titlebar" style="color:var(--dsw-alias-label-primary)">${skin.def.name} · DeepSeek Harness</div>
    </div>
    <div class="row">
      <span class="navitem" style="background:var(--dsw-specific-sidebar-nav-item-active)">会话</span>
      <span class="navitem" style="background:var(--dsw-specific-sidebar-nav-item-hover)">工作区</span>
      <span class="navitem">模型</span>
      <span class="navitem">皮肤</span>
      <span class="navitem">插件</span>
    </div>
    <div class="row">
      <button class="btn" style="background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)">主按钮</button>
      <button class="btn" style="background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l3)">次按钮</button>
      <button class="btn" style="background:var(--dsw-alias-button-ghost-active-fill);color:var(--dsw-alias-label-primary)">幽灵按钮</button>
      <input class="input" style="background:var(--dsw-specific-input-major);color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l2)" placeholder="输入框" />
    </div>
    <div class="row">
      <span class="label" style="color:var(--dsw-alias-label-primary)">主文本</span>
      <span class="label" style="color:var(--dsw-alias-label-secondary)">次文本</span>
      <span class="label" style="color:var(--dsw-alias-label-tertiary)">三级文本</span>
      <span class="label" style="color:var(--dsw-alias-state-success-primary)">成功</span>
      <span class="label" style="color:var(--dsw-alias-state-error-primary)">错误</span>
      <span class="label" style="color:var(--dsw-alias-state-warn-label)">警告</span>
    </div>
    <div class="row">
      <div class="panel" style="background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2)">面板气泡 <span style="background:var(--dsw-specific-bubble);color:var(--dsw-alias-label-primary)">消息</span></div>
    </div>
    <div class="row swatches">${swatches(light)} <span style="color:var(--dsw-alias-label-tertiary)">(亮)</span></div>`
  const chromeDark = chrome.replace('(亮)', '(暗)')
  return `
  <div class="skin">
    <h3>${skin.def.name} <span class="en">${skin.def.nameEn}</span></h3>
    <div class="artRow">
      ${artBox(skin.def.backdrop.light, '亮')}
      ${artBox(skin.def.backdrop.dark, '暗')}
      ${skin.def.mascot ? `<div class="artBox plain"><div class="mascot">${skin.def.mascot}</div></div>` : ''}
      <div class="artBox plain"><div class="corner">${skin.def.corner}</div></div>
    </div>
    <div class="uiRow">
      <section class="qa" ${bodyAttr}>${chrome}</section>
      <section class="qa" ${bodyAttr} data-ds-dark-theme>${chromeDark}</section>
    </div>
  </div>`
}

/** Render one backdrop: photo data URIs as a tiled cover box, SVG strings inline. */
const artBox = (art, tag) => typeof art === 'string' && art.startsWith('data:')
  ? `<div class="artBox" style="background-image:url('${art}')"><span class="tag">${tag}</span></div>`
  : `<div class="artBox svgBox"><div class="artFill">${svgWide(art)}</div><span class="tag">${tag}</span></div>`

/** Inline a wide art SVG with slice semantics (mirrors background-size: cover). */
const svgWide = (svg) => {
  const viewBoxMatch = /viewBox="[^"]*"/.exec(svg)
  if (viewBoxMatch === null) return svg
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" ${viewBoxMatch[0]} preserveAspectRatio="xMidYMid slice" style="display:block">${svg
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>$/, '')}</svg>`
}

const page = `<!doctype html>
<html><head><meta charset="utf-8"><title>skin QA</title>
<style>
  body{font-family:'Segoe UI',sans-serif;background:#e9edf5;color:#1d2539;margin:0;padding:24px}
  h2{font-size:20px;margin:0 0 16px}
  h3{margin:18px 0 8px;font-size:16px}
  h3 .en{color:#8b93a9;font-size:12px;font-weight:400}
  .skin{border:1px solid #d6dae6;border-radius:12px;background:#fff;padding:14px;margin-bottom:20px}
  .artRow{display:flex;gap:10px;flex-wrap:wrap}
  .artBox{width:300px;height:169px;border-radius:8px;background-size:cover;background-position:center;position:relative;border:1px solid #d6dae6;overflow:hidden}
  .artFill{position:absolute;inset:0}
  .artBox.svgBox{background:#f7f8fb}
  .artBox .tag{position:absolute;top:6px;left:8px;color:#fff;font-size:11px;text-shadow:0 1px 3px #000;z-index:1}
  .artBox.plain{background:#f7f8fb}
  .mascot{width:96px;height:96px}
  .mascot svg,.corner svg{width:100%;height:100%}
  .corner{width:150px;height:120px}
  .uiRow{display:flex;gap:12px;margin-top:10px}
  .qa{flex:1;border-radius:8px;padding:10px;box-shadow:0 2px 8px rgba(0,0,0,.15)}
  .row{display:flex;gap:8px;align-items:center;margin-bottom:8px;flex-wrap:wrap}
  .titlebar{font-size:13px;font-weight:600}
  .navitem{padding:4px 10px;border-radius:8px;font-size:12px}
  .btn{padding:6px 14px;border-radius:16px;border:0;font-size:13px;cursor:pointer}
  .input{padding:6px 10px;border-radius:8px;font-size:13px;width:120px}
  .label{font-size:12.5px}
  .panel{padding:8px 10px;border-radius:10px;font-size:12.5px}
  .swatch{width:16px;height:16px;border-radius:4px;display:inline-block}
  .swatches{gap:4px}
</style></head>
<body>
<h2>dsh-free-skins 皮肤 QA（亮 / 暗 双主题 + 真实 token 重映射）</h2>
${skins.map(mockUi).join('\n')}
<style>${skins.map((s) => s.css).join('\n')}</style>
</body></html>`

writeFileSync(outPath, page)
console.log(`wrote ${outPath} (${page.length} bytes)`)
