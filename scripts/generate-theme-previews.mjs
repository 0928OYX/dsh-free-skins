/**
 * Generate vivid theme mockup previews (preview/theme/<id>.svg) for every skin.
 * Usage: node scripts/generate-theme-previews.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const SKINS_DIR = fileURLToPath(new URL('../skins/', import.meta.url))
const OUT_DIR = fileURLToPath(new URL('../preview/theme/', import.meta.url))
const SKIN_LIST = ['sakura-miko','stella-witch','azure-blade','scarlet-noir','mint-catgirl','gold-alchemist','shorekeeper']

mkdirSync(OUT_DIR, { recursive: true })

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

for (const id of SKIN_LIST) {
  const def = (await import(pathToFileURL(join(SKINS_DIR, id, 'definition.mjs')).href)).default
  const p = def.palettes.light
  const corner = def.corner || ''
  const particle = (def.particle && def.particle.svg) ? def.particle.svg : ''
  const S = []
  S.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" font-family="Segoe UI, Microsoft YaHei, sans-serif">')
  S.push('<defs><radialGradient id="glow" cx="0.5" cy="0.25" r="0.6"><stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs>')
  S.push('<rect width="960" height="540" fill="' + p.canvas + '"/>')
  S.push('<rect width="960" height="540" fill="url(#glow)"/>')
  // sidebar
  S.push('<rect width="200" height="540" fill="' + p.sidebarFill + '"/>')
  S.push('<rect x="200" y="0" width="1.5" height="540" fill="' + p.line + '" opacity="0.35"/>')
  S.push('<circle cx="34" cy="36" r="14" fill="' + p.accent + '"/>')
  S.push('<text x="34" y="41" text-anchor="middle" font-size="13" font-weight="700" fill="' + p.accentInk + '">DSH</text>')
  S.push('<text x="60" y="41" font-size="15" font-weight="600" fill="' + p.ink + '">DeepSeek Harness</text>')
  const nav = [['会话', true], ['工作区', false], ['模型', false], ['皮肤', false], ['插件', false]]
  nav.forEach(function (item, i) {
    const y = 78 + i * 42
    const active = item[1]
    if (active) S.push('<rect x="12" y="' + y + '" width="176" height="34" rx="10" fill="' + p.navActive + '"/>')
    S.push('<text x="28" y="' + (y + 23) + '" font-size="13" fill="' + (active ? p.accent : p.inkSoft) + '" font-weight="' + (active ? 600 : 400) + '">' + esc(item[0]) + '</text>')
  })
  // main header
  S.push('<rect x="200" y="0" width="760" height="56" fill="' + p.panel + '" opacity="0.7"/>')
  S.push('<rect x="200" y="54.5" width="760" height="1.5" fill="' + p.accent + '" opacity="0.35"/>')
  S.push('<text x="228" y="35" font-size="16" font-weight="600" fill="' + p.ink + '">' + esc(def.name) + ' · DeepSeek Harness</text>')
  S.push('<text x="228" y="52" font-size="11" fill="' + p.inkFaint + '">' + esc(def.nameEn || '') + ' · 0928OYX</text>')
  // chat bubbles
  S.push('<text x="228" y="86" font-size="11" fill="' + p.inkFaint + '">今天 09:41</text>')
  const bubbles = [
    [230, 104, 420, 58, p.bubble, '你好，今天想聊点什么？你可以问我任何问题。'],
    [640, 176, 290, 50, p.bubbleHi, '帮我把界面皮肤调成这个主题吧 ~'],
    [230, 246, 380, 58, p.bubble, '好的，皮肤已经应用：' + esc(def.name) + '，背景与按钮配色已同步切换。'],
    [620, 318, 310, 50, p.bubbleHi, '很好看，谢谢你！']
  ]
  bubbles.forEach(function (b) {
    S.push('<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" rx="14" fill="' + b[4] + '" stroke="' + p.line + '" stroke-opacity="0.45"/>')
    S.push('<text x="' + (b[0] + 14) + '" y="' + (b[1] + 26) + '" font-size="12.5" fill="' + p.ink + '">' + esc(b[5].slice(0, 44)) + '</text>')
  })
  // input bar
  S.push('<rect x="230" y="392" width="560" height="46" rx="14" fill="' + p.input + '" stroke="' + p.line + '" stroke-opacity="0.6"/>')
  S.push('<text x="248" y="420" font-size="12.5" fill="' + p.inkFaint + '">输入消息，Ctrl+Enter 发送…</text>')
  S.push('<rect x="728" y="400" width="52" height="30" rx="15" fill="' + p.accentBright + '"/>')
  S.push('<text x="754" y="420" text-anchor="middle" font-size="12.5" font-weight="600" fill="' + p.accentInk + '">发送</text>')
  // buttons demo
  S.push('<rect x="230" y="466" width="86" height="30" rx="15" fill="' + p.accentBright + '"/>')
  S.push('<text x="273" y="486" text-anchor="middle" font-size="12" font-weight="600" fill="' + p.accentInk + '">主按钮</text>')
  S.push('<rect x="326" y="466" width="86" height="30" rx="15" fill="' + p.panel + '" stroke="' + p.line + '" stroke-opacity="0.6"/>')
  S.push('<text x="369" y="486" text-anchor="middle" font-size="12" fill="' + p.ink + '">次按钮</text>')
  // corner decoration
  if (corner !== '') S.push('<svg x="200" y="0" width="120" height="96" viewBox="0 0 170 130" overflow="visible">' + corner + '</svg>')
  // floating particles
  if (particle !== '') {
    const spots = [[340, 60, 22, 0.8], [560, 150, 16, 0.6], [860, 90, 26, 0.7], [700, 360, 18, 0.55]]
    spots.forEach(function (spt) {
      S.push('<svg x="' + spt[0] + '" y="' + spt[1] + '" width="' + spt[2] + '" height="' + spt[2] + '" viewBox="0 0 24 24" opacity="' + spt[3] + '" overflow="visible">' + particle + '</svg>')
    })
  }
  // footer
  S.push('<text x="960" y="526" text-anchor="end" font-size="11" fill="' + p.inkFaint + '">' + esc(def.name) + ' · 0928OYX · CC BY-NC-SA 4.0 · 免费皮肤</text>')
  S.push('</svg>')
  writeFileSync(join(OUT_DIR, id + '.svg'), S.join('\n'))
  console.log('preview/theme/' + id + '.svg')
}
console.log('done')