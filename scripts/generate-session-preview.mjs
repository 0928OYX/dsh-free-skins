/**
 * Generate the 'new conversation page' promo (preview/session-shorekeeper.svg):
 * DSH 新会话页 mockup with the 守岸人 theme and an original seaside+crystal
 * wallpaper illustration (no third-party artwork is embedded).
 * Usage: node scripts/generate-session-preview.mjs
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const OUT = fileURLToPath(new URL('../preview/session-shorekeeper.svg', import.meta.url))
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const p = {
  canvas: '#eef5fc', panel: '#f7fbfe', ink: '#1c3355', inkSoft: '#4a6488', inkFaint: '#8098b8',
  line: '#8fb4e4', accent: '#5f7fe0', accentBright: '#4f74e8', accentInk: '#ffffff',
  sidebarFill: '#e8f2fc', navActive: '#dbe9fb', input: '#ffffff'
}
const S = []
S.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" font-family="Segoe UI, Microsoft YaHei, sans-serif">')
S.push('<defs>')
S.push('<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f3fd"/><stop offset="0.55" stop-color="#cfe6fa"/><stop offset="1" stop-color="#a9cdf2"/></linearGradient>')
S.push('<radialGradient id="glow" cx="0.5" cy="0.28" r="0.55"><stop offset="0" stop-color="#ffffff" stop-opacity="0.7"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>')
S.push('<linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcd9f5" stop-opacity="0.95"/><stop offset="1" stop-color="#8fb8e8" stop-opacity="0.95"/></linearGradient>')
S.push('</defs>')
// 桌面壁纸区：原创海岸与晶光插画（守岸人主题氛围）
S.push('<rect width="1280" height="720" fill="url(#sky)"/>')
S.push('<rect width="1280" height="720" fill="url(#glow)"/>')
S.push('<circle cx="1010" cy="148" r="54" fill="#ffffff" opacity="0.92"/>')
S.push('<circle cx="1032" cy="128" r="48" fill="#cfe6fa"/>')
S.push('<path d="M0 520 Q 300 468 640 510 T 1280 498 V720 H0 Z" fill="#8fb8e8" opacity="0.3"/>')
S.push('<path d="M0 556 Q 160 528 320 556 T 640 556 T 960 556 T 1280 556 V720 H0 Z" fill="url(#sea)"/>')
S.push('<path d="M0 598 Q 200 572 400 598 T 800 598 T 1280 598 V720 H0 Z" fill="#7fa9dc" opacity="0.85"/>')
S.push('<path d="M0 648 Q 240 622 480 648 T 960 648 T 1280 648 V720 H0 Z" fill="#5f8fd0" opacity="0.9"/>')
S.push('<path d="M0 690 Q 320 668 640 690 T 1280 690 V720 H0 Z" fill="#3f6fc0" opacity="0.95"/>')
// 漂浮晶光（守岸人冰晶粒子主题）
const crystals = [[140,170,12,"#a8c8f2",0.9],[360,120,9,"#dcebff",0.8],[600,200,10,"#9db8ef",0.85],[900,120,13,"#a8c8f2",0.9],[1150,250,9,"#dcebff",0.8],[760,420,8,"#9db8ef",0.7],[300,430,9,"#dcebff",0.75],[1100,480,10,"#a8c8f2",0.8]];
crystals.forEach(function (c) {
  const x = c[0], y = c[1], s = c[2], f = c[3], o = c[4];
  S.push('<path d="M' + x + ' ' + (y - s) + 'l' + (s * 0.72) + ' ' + s + ' -' + (s * 0.72) + ' ' + s + ' -' + (s * 0.72) + ' -' + s + 'z" fill="' + f + '" opacity="' + o + '"/>')
  S.push('<path d="M' + x + ' ' + (y - s * 0.4) + 'l' + (s * 0.4) + ' ' + (s * 0.4) + ' -' + (s * 0.4) + ' ' + (s * 0.4) + ' -' + (s * 0.4) + ' -' + (s * 0.4) + 'z" fill="#ffffff" opacity="' + (o * 0.9) + '"/>')
})
// 侧栏
S.push('<rect width="200" height="720" fill="' + p.sidebarFill + '" opacity="0.94"/>')
S.push('<rect x="200" y="0" width="1.5" height="720" fill="' + p.line + '" opacity="0.4"/>')
S.push('<circle cx="34" cy="36" r="14" fill="' + p.accent + '"/>')
S.push('<text x="34" y="41" text-anchor="middle" font-size="13" font-weight="700" fill="' + p.accentInk + '">DSH</text>')
S.push('<text x="60" y="41" font-size="14" font-weight="600" fill="' + p.ink + '">DeepSeek Harness</text>')
const nav = [['会话', true], ['工作区', false], ['模型', false], ['皮肤', false], ['插件', false]];
nav.forEach(function (item, i) {
  const y = 78 + i * 42; const active = item[1];
  if (active) S.push('<rect x="12" y="' + y + '" width="176" height="34" rx="10" fill="' + p.navActive + '"/>')
  S.push('<text x="28" y="' + (y + 23) + '" font-size="13" fill="' + (active ? p.accent : p.inkSoft) + '" font-weight="' + (active ? 600 : 400) + '">' + esc(item[0]) + '</text>')
})
// 新会话主区
S.push('<text x="620" y="300" text-anchor="middle" font-size="32" font-weight="700" fill="' + p.ink + '">守岸人 · 新会话</text>')
S.push('<text x="620" y="342" text-anchor="middle" font-size="16" fill="' + p.inkSoft + '">你好，我是 DeepSeek，有什么可以帮你？</text>')
const chips = ['帮我写一段代码', '总结这份文档', '打开皮肤设置', '分析这份数据'];
chips.forEach(function (label, i) {
  const x = 470 + i * 150;
  S.push('<rect x="' + x + '" y="376" width="136" height="34" rx="17" fill="' + p.panel + '" stroke="' + p.line + '" stroke-opacity="0.6"/>')
  S.push('<text x="' + (x + 68) + '" y="397" text-anchor="middle" font-size="12" fill="' + p.inkSoft + '">' + esc(label) + '</text>')
})
// 底部输入区
S.push('<rect x="330" y="596" width="440" height="46" rx="14" fill="' + p.input + '" stroke="' + p.line + '" stroke-opacity="0.6"/>')
S.push('<text x="348" y="624" font-size="12.5" fill="' + p.inkFaint + '">输入消息，Ctrl+Enter 发送…</text>')
S.push('<rect x="712" y="604" width="52" height="30" rx="15" fill="' + p.accentBright + '"/>')
S.push('<text x="738" y="624" text-anchor="middle" font-size="12.5" font-weight="600" fill="' + p.accentInk + '">发送</text>')
// 署名
S.push('<text x="1264" y="706" text-anchor="end" font-size="11" fill="' + p.inkFaint + '">0928OYX · CC BY-NC-SA 4.0 · 主题灵感：鸣潮「守岸人」（不内置任何第三方素材）</text>')
S.push('</svg>')
writeFileSync(OUT, S.join('\n'))
console.log('preview/session-shorekeeper.svg')