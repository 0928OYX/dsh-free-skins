/**
 * 琥珀 · 炼金少女 — gold alchemist skin definition.
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. Original character, CC BY-NC-SA 4.0.
 */

const GEAR = (cx, cy, r, fill, opacity) => `<g transform="translate(${cx},${cy})" opacity="${opacity}">
  <circle r="${r}" fill="none" stroke="${fill}" stroke-width="${r * 0.34}"/>
  ${Array.from({ length: 8 }, (_v, i) => {
    const a = (i * Math.PI) / 4
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r
    return `<rect x="${x - r * 0.16}" y="${y - r * 0.16}" width="${r * 0.32}" height="${r * 0.32}" rx="${r * 0.06}" fill="${fill}"/>`
  }).join('')}
  <circle r="${r * 0.24}" fill="${fill}"/>
</g>`

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdf6e6"/><stop offset="1" stop-color="#f0d9a8"/></linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.24" r="0.5"><stop offset="0" stop-color="#fffdf4" stop-opacity="0.95"/><stop offset="1" stop-color="#fffdf4" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#sun)"/>
  <path d="M0 680 Q 400 600 820 670 T 1600 650 V900 H0 Z" fill="#c9a468" opacity="0.6"/>
  <path d="M0 780 Q 500 730 1000 780 T 1600 770 V900 H0 Z" fill="#b08547" opacity="0.75"/>
  <g transform="translate(150,330)">
    <rect x="0" y="0" width="380" height="300" rx="10" fill="#8a6a2f"/>
    <rect x="10" y="10" width="360" height="280" rx="6" fill="#5e471d"/>
    <path d="M80 10 V 70 M 300 10 V 70" stroke="#8a6a2f" stroke-width="12"/>
    <path d="M90 52 h 200" stroke="#8a6a2f" stroke-width="12"/>
    <g>
      <path d="M110 62c0-14 8-22 20-22s20 8 20 22z" fill="#cfe8f2"/>
      <rect x="122" y="40" width="16" height="18" rx="3" fill="#8a6a2f"/>
      <path d="M120 52h22" stroke="#3ecf9e" stroke-width="3"/>
      <path d="M210 62c0-14 8-22 20-22s20 8 20 22z" fill="#f7c9a8"/>
      <rect x="222" y="40" width="16" height="18" rx="3" fill="#8a6a2f"/>
      <path d="M220 52h22" stroke="#e05a78" stroke-width="3"/>
      <path d="M300 72c0-12 6-18 15-18s15 6 15 18z" fill="#f4c95d"/>
      <rect x="310" y="54" width="14" height="16" rx="3" fill="#8a6a2f"/>
    </g>
    <circle cx="270" cy="250" r="36" fill="none" stroke="#e0a13a" stroke-width="4"/>
    <path d="M270 214l20 18-20 18-20-18z" fill="none" stroke="#e0a13a" stroke-width="3"/>
    <circle cx="270" cy="250" r="14" fill="none" stroke="#e0a13a" stroke-width="3"/>
  </g>
  ${GEAR(700, 260, 40, '#b08547', 0.8)}
  ${GEAR(770, 330, 26, '#c9a468', 0.7)}
  ${GEAR(1040, 500, 44, '#b08547', 0.75)}
  ${GEAR(1120, 570, 28, '#c9a468', 0.6)}
  <g fill="#e0a13a" opacity="0.75">
    <path d="M430 170l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z"/>
    <path d="M600 420l2.8 7 7 2.8-7 2.8-2.8 7-2.8-7-7-2.8 7-2.8z"/>
    <path d="M930 200l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z"/>
    <path d="M500 520l2.8 7 7 2.8-7 2.8-2.8 7-2.8-7-7-2.8 7-2.8z"/>
  </g>
    <rect width="1600" height="900" fill="#6e4a15" opacity="0.06"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a130a"/><stop offset="1" stop-color="#2a1f0f"/></linearGradient>
    <radialGradient id="lantern" cx="0.3" cy="0.3" r="0.5"><stop offset="0" stop-color="#f0c05e" stop-opacity="0.7"/><stop offset="1" stop-color="#f0c05e" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#lantern)"/>
  <path d="M0 690 Q 400 620 820 680 T 1600 660 V900 H0 Z" fill="#120d06"/>
  <path d="M0 790 Q 500 740 1000 790 T 1600 780 V900 H0 Z" fill="#0c0804"/>
  <g transform="translate(150,330)">
    <rect x="0" y="0" width="380" height="300" rx="10" fill="#5e471d"/>
    <rect x="10" y="10" width="360" height="280" rx="6" fill="#2e220f"/>
    <path d="M80 10 V 70 M 300 10 V 70" stroke="#5e471d" stroke-width="12"/>
    <path d="M90 52 h 200" stroke="#5e471d" stroke-width="12"/>
    <g>
      <path d="M110 62c0-14 8-22 20-22s20 8 20 22z" fill="#1d3f4e"/>
      <rect x="122" y="40" width="16" height="18" rx="3" fill="#5e471d"/>
      <path d="120 52h22" stroke="#3ecf9e" stroke-width="3" opacity="0.9"/>
      <path d="M210 62c0-14 8-22 20-22s20 8 20 22z" fill="#4e2530"/>
      <rect x="222" y="40" width="16" height="18" rx="3" fill="#5e471d"/>
      <path d="M220 52h22" stroke="#e05a78" stroke-width="3" opacity="0.9"/>
      <path d="M300 72c0-12 6-18 15-18s15 6 15 18z" fill="#4e3a16"/>
      <rect x="310" y="54" width="14" height="16" rx="3" fill="#5e471d"/>
    </g>
    <circle cx="270" cy="250" r="36" fill="none" stroke="#eab23f" stroke-width="4" opacity="0.9"/>
    <path d="M270 214l20 18-20 18-20-18z" fill="none" stroke="#eab23f" stroke-width="3" opacity="0.9"/>
    <circle cx="270" cy="250" r="14" fill="none" stroke="#eab23f" stroke-width="3" opacity="0.9"/>
  </g>
  ${GEAR(700, 260, 40, '#5e471d', 0.9)}
  ${GEAR(770, 330, 26, '#6e5320', 0.8)}
  ${GEAR(1040, 500, 44, '#5e471d', 0.85)}
  ${GEAR(1120, 570, 28, '#6e5320', 0.7)}
  <g fill="#eab23f" opacity="0.8">
    <path d="M430 170l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z"/>
    <path d="M600 420l2.8 7 7 2.8-7 2.8-2.8 7-2.8-7-7-2.8 7-2.8z"/>
    <path d="M930 200l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z"/>
    <path d="M500 520l2.8 7 7 2.8-7 2.8-2.8 7-2.8-7-7-2.8 7-2.8z"/>
  </g>
    <rect width="1600" height="900" fill="#070502" opacity="0.3"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0 2 Q 60 16 168 64" stroke="#b08547" stroke-width="5" fill="none" stroke-linecap="round"/>
  ${GEAR(44, 38, 16, '#b08547', 1)}
  ${GEAR(88, 60, 11, '#c9a468', 1)}
  <path d="M126 26l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z" fill="#e0a13a"/>
</svg>`

const PARTICLE = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="10" cy="10" r="7" fill="none" stroke="#e0a13a" stroke-width="2.6"/>
  <path d="M10 3v14M3 10h14" stroke="#e0a13a" stroke-width="2.6"/>
  <circle cx="10" cy="10" r="1.8" fill="#f7dfae"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#5e471d"/>
  <circle cx="16" cy="16" r="9" fill="none" stroke="#eab23f" stroke-width="3"/>
  <circle cx="16" cy="16" r="3" fill="#eab23f"/>
</svg>`

export default {
  id: 'gold-alchemist',
  pkg: '@dsh-external/dsh-client-ui-skin-gold-alchemist',
  bodyAttr: 'data-dsh-gold-alchemist',
  wiringId: 'ui-skin-gold-alchemist',
  name: '琥珀 · 炼金少女',
  nameEn: 'Gold Alchemist',
  author: '0928OYX',
  tagline: '炼金工房 · 齿轮与药剂 · 羊皮纸琥珀',
  description: '原创炼金术士皮肤：琥珀金与青铜色界面，工房背景的药瓶架、齿轮与炼成阵，金色星尘缓缓飘落，按钮像黄铜一样温暖。',
  tags: ['anime', 'alchemist', 'gold', 'gears', 'potions', 'workshop'],
  accent: '#d99a2b',
  order: 8,
  chromeColor: '#1a130a',
  title: '琥珀 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#fbf6ec', panel: '#fffdf7', ink: '#3a2d1a', inkSoft: '#6d5a3d', inkFaint: '#a08a67',
      line: '#c89a3c', accent: '#d99a2b', accentBright: '#e0a13a', accentHover: '#cf8f1f', accentInk: '#ffffff',
      glassHover: 'rgba(224,161,58,0.12)', glassActive: 'rgba(224,161,58,0.2)',
      navActive: '#f7ead0', navHover: 'rgba(224,161,58,0.1)', sidebarFill: '#fcf8ef',
      bubble: '#fffdf7', bubbleHi: '#f7ead0', input: '#fffdf7', mask: '#241a0c', shadow: '#6e4a15',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#171209', panel: '#221a0d', ink: '#f2e8d2', inkSoft: '#d3bf98', inkFaint: '#a58e62',
      line: '#6e5320', accent: '#eab23f', accentBright: '#eab23f', accentHover: '#f0c05e', accentInk: '#241a0c',
      glassHover: 'rgba(234,178,63,0.14)', glassActive: 'rgba(234,178,63,0.22)',
      navActive: '#332612', navHover: 'rgba(234,178,63,0.12)', sidebarFill: '#1a1309',
      bubble: '#2a2112', bubbleHi: '#3a2d17', input: '#2a2112', mask: '#0a0703', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  scrim: { light: 'rgba(251,246,236,0.16)', dark: 'rgba(23,18,9,0.42)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, count: 8, duration: 21 },

}
