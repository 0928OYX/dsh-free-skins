/**
 * Generate preview/*.svg marketing cards from the gallery's card art.
 * Usage: node scripts/generate-previews.mjs
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const repoRoot = fileURLToPath(new URL('..', import.meta.url))
const gallery = readFileSync(repoRoot + 'skin-gallery/lib/client.js', 'utf8')

const SKINS = [
  { id: 'sakura-miko', art: 'ART_SAKURA', name: '樱歌 · 神社巫女', nameEn: 'Sakura Miko', preview: '#ffe9f0', dark: '#261019', accent: '#e8567d' },
  { id: 'stella-witch', art: 'ART_STELLA', name: '星语 · 星尘魔女', nameEn: 'Stella Witch', preview: '#f0ecff', dark: '#140e2e', accent: '#7c5cff' },
  { id: 'azure-blade', art: 'ART_BLADE', name: '凛霜 · 苍雪剑姬', nameEn: 'Azure Blade', preview: '#e8f5fc', dark: '#0c1a2b', accent: '#4ea8de' },
  { id: 'scarlet-noir', art: 'ART_SCARLET', name: '绯月 · 蔷薇千金', nameEn: 'Scarlet Noir', preview: '#fbeef1', dark: '#1a0c12', accent: '#c2284b' },
  { id: 'mint-catgirl', art: 'ART_MINT', name: '薄荷 · 猫娘茶会', nameEn: 'Mint Catgirl', preview: '#e7faf2', dark: '#0d1f18', accent: '#2bb38f' },
  { id: 'gold-alchemist', art: 'ART_GOLD', name: '琥珀 · 炼金少女', nameEn: 'Gold Alchemist', preview: '#fbf3df', dark: '#1c130a', accent: '#d99a2b' },
  { id: 'shorekeeper', art: 'ART_SHOREKEEPER', name: '守岸人', nameEn: 'Shorekeeper', preview: '#e8f2fc', dark: '#0c1830', accent: '#5f7fe0' },
]

mkdirSync(repoRoot + 'preview', { recursive: true })
for (const skin of SKINS) {
  const match = new RegExp('const ' + skin.art + ' = `([\\s\\S]*?)`;').exec(gallery)
  if (match === null) throw new Error('missing ' + skin.art)
  const icon = match[1]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 270">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${skin.preview}"/>
      <stop offset="1" stop-color="${skin.dark}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.35" r="0.55">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="480" height="270" rx="24" fill="url(#bg)"/>
  <rect width="480" height="270" rx="24" fill="url(#glow)"/>
  <g transform="translate(240 96)">
    <g transform="translate(-48 -48)">${icon}</g>
  </g>
  <text x="240" y="196" text-anchor="middle" font-family="'Segoe UI','Microsoft YaHei',sans-serif" font-size="26" font-weight="700" fill="#ffffff" text-shadow="0 2px 8px rgba(0,0,0,.45)">${skin.name}</text>
  <text x="240" y="222" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="15" fill="#ffffff" opacity="0.85">${skin.nameEn}</text>
  <text x="240" y="252" text-anchor="middle" font-family="'Segoe UI','Microsoft YaHei',sans-serif" font-size="12" fill="#ffffff" opacity="0.75">0928OYX · CC BY-NC-SA 4.0 · 免费皮肤</text>
</svg>`
  writeFileSync(repoRoot + 'preview/' + skin.id + '.svg', svg)
  console.log('preview/' + skin.id + '.svg')
}
console.log('done')
