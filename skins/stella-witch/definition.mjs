/**
 * 星语 · 星尘魔女 — stella witch skin definition.
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. Original character, CC BY-NC-SA 4.0.
 */

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9e4ff"/><stop offset="1" stop-color="#b9a8f5"/></linearGradient>
    <radialGradient id="glow" cx="0.7" cy="0.24" r="0.4"><stop offset="0" stop-color="#fff6d8" stop-opacity="0.9"/><stop offset="0.4" stop-color="#fff6d8" stop-opacity="0.3"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  <path d="M1120 190c38 0 70 24 70 62 0 38-32 70-70 70-28 0-52-18-52-46 0-34 24-56 52-56 0-20 14-30 32-30-12-4-22 0-32 0z" fill="#ffd76a"/>
  <g fill="#fff" opacity="0.85">
    <path d="M120 120l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" transform="scale(1.4)"/>
    <path d="M340 60l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(1.1)"/>
    <path d="M760 80l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.9)"/>
    <path d="M540 170l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.8)"/>
    <path d="M950 260l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.7)"/>
  </g>
  <path d="M0 700 Q 380 620 800 680 T 1600 660 V900 H0 Z" fill="#7c5cff" opacity="0.35"/>
  <path d="M0 780 Q 500 730 1000 780 T 1600 770 V900 H0 Z" fill="#5a3fd0" opacity="0.5"/>
  <g transform="translate(120,470)">
    <path d="M0 120 Q 90 60 190 96 L 200 112 Q 110 140 30 150 Z" fill="#4a3399"/>
    <rect x="6" y="130" width="210" height="26" rx="12" fill="#4a3399"/>
    <path d="M80 130 V60 M140 130 V60" stroke="#4a3399" stroke-width="8"/>
    <circle cx="110" cy="52" r="26" fill="#31266b"/>
    <path d="M80 40 Q 110 8 140 40" stroke="#31266b" stroke-width="10" fill="none"/>
  </g>
    <rect width="1600" height="900" fill="#241b4d" opacity="0.08"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#120d2e"/><stop offset="1" stop-color="#241b4d"/></linearGradient>
    <radialGradient id="moon" cx="0.72" cy="0.22" r="0.32"><stop offset="0" stop-color="#ffd76a" stop-opacity="0.9"/><stop offset="0.4" stop-color="#ffd76a" stop-opacity="0.25"/><stop offset="1" stop-color="#ffd76a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#moon)"/>
  <path d="M1150 190c40 0 74 26 74 66 0 40-34 74-74 74-30 0-55-19-55-49 0-36 26-60 55-60 0-21 15-32 34-32-13-4-23 0-34 1z" fill="#ffd76a"/>
  <g fill="#fff">
    <path d="M120 110l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" transform="scale(1.3)"/>
    <path d="M360 70l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(1)"/>
    <path d="M760 90l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.85)"/>
    <path d="M520 200l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.75)"/>
    <path d="M980 300l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.65)"/>
    <path d="M220 320l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.6)"/>
    <path d="M1400 420l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" transform="scale(0.7)"/>
    <circle cx="300" cy="240" r="1.6"/><circle cx="620" cy="150" r="1.4"/><circle cx="840" cy="420" r="1.5"/><circle cx="1040" cy="160" r="1.3"/><circle cx="1300" cy="260" r="1.6"/>
  </g>
  <path d="M0 700 Q 380 620 800 680 T 1600 660 V900 H0 Z" fill="#0e0a24" opacity="0.7"/>
  <path d="M0 790 Q 500 740 1000 790 T 1600 780 V900 H0 Z" fill="#0a0719"/>
  <g transform="translate(120,470)">
    <path d="M0 120 Q 90 60 190 96 L 200 112 Q 110 140 30 150 Z" fill="#1b1440"/>
    <rect x="6" y="130" width="210" height="26" rx="12" fill="#1b1440"/>
    <path d="M80 130 V60 M140 130 V60" stroke="#1b1440" stroke-width="8"/>
    <circle cx="110" cy="52" r="26" fill="#0e0a24"/>
    <path d="M80 40 Q 110 8 140 40" stroke="#0e0a24" stroke-width="10" fill="none"/>
  </g>
    <rect width="1600" height="900" fill="#05030f" opacity="0.2"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M128 30c22 14 32 38 26 64-28 0-52-8-70-24z" fill="#ffd76a"/>
  <path d="M128 30c-3 18 6 34 26 48-16 8-34 10-54 6 8-22 18-40 28-54z" fill="#7c5cff"/>
  <g fill="#fff">
    <path d="M30 30l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z"/>
    <path d="M70 56l2 5 6 1-4 3 1 6-5-3-5 3 1-6-4-3 6-1z"/>
    <path d="M104 78l2 5 6 1-4 3 1 6-5-3-5 3 1-6-4-3 6-1z"/>
  </g>
</svg>`

const PARTICLE = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 1l2.2 6.8L19 10l-6.8 2.2L10 19l-2.2-6.8L1 10l6.8-2.2z" fill="#ffd76a"/>
  <circle cx="10" cy="10" r="1.4" fill="#fff"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#241b4d"/>
  <path d="M16 5l3.2 9.8L29 18l-9.8 3.2L16 31l-3.2-9.8L3 18l9.8-3.2z" fill="#ffd76a"/>
</svg>`

export default {
  id: 'stella-witch',
  pkg: '@dsh-external/dsh-client-ui-skin-stella-witch',
  bodyAttr: 'data-dsh-stella-witch',
  wiringId: 'ui-skin-stella-witch',
  name: '星语 · 星尘魔女',
  nameEn: 'Stella Witch',
  author: '0928OYX',
  tagline: '月夜天文台 · 星尘与月牙 · 紫罗兰渐变',
  description: '原创魔法少女皮肤：深紫星夜与金色月牙构成背景，星尘缓缓飘浮，水晶质感按钮与紫罗兰渐变贯穿整个界面。',
  tags: ['anime', 'witch', 'stars', 'violet', 'observatory', 'magic'],
  accent: '#7c5cff',
  order: 4,
  chromeColor: '#241b4d',
  title: '星语 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#f5f3fd', panel: '#ffffff', ink: '#2c2547', inkSoft: '#5d547f', inkFaint: '#8f86b3',
      line: '#6b5bd2', accent: '#7c5cff', accentBright: '#7c5cff', accentHover: '#6a49f0', accentInk: '#ffffff',
      glassHover: 'rgba(124,92,255,0.10)', glassActive: 'rgba(124,92,255,0.18)',
      navActive: '#e9e2ff', navHover: 'rgba(124,92,255,0.08)', sidebarFill: '#f7f4ff',
      bubble: '#ffffff', bubbleHi: '#e9e2ff', input: '#ffffff', mask: '#171133', shadow: '#2c1f6b',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#16131f', panel: '#221c33', ink: '#ece7f7', inkSoft: '#c2b9dd', inkFaint: '#9489bb',
      line: '#574a8f', accent: '#9a7bff', accentBright: '#9a7bff', accentHover: '#ab90ff', accentInk: '#ffffff',
      glassHover: 'rgba(154,123,255,0.14)', glassActive: 'rgba(154,123,255,0.22)',
      navActive: '#2c2347', navHover: 'rgba(154,123,255,0.12)', sidebarFill: '#1a1526',
      bubble: '#2a2240', bubbleHi: '#352a54', input: '#2a2240', mask: '#0b0912', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  scrim: { light: 'rgba(245,243,253,0.16)', dark: 'rgba(22,19,31,0.4)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, count: 10, duration: 20 },

}
