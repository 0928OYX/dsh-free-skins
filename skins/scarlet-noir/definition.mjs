/**
 * 绯月 · 蔷薇千金 — scarlet noir skin definition.
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. Original character, CC BY-NC-SA 4.0.
 */

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7e8e4"/><stop offset="1" stop-color="#e9c6bd"/></linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.24" r="0.5"><stop offset="0" stop-color="#fff4ec" stop-opacity="0.95"/><stop offset="1" stop-color="#fff4ec" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#sun)"/>
  <path d="M0 640 Q 400 560 800 630 T 1600 610 V900 H0 Z" fill="#d9a89a" opacity="0.7"/>
  <path d="M0 740 Q 500 680 1000 740 T 1600 730 V900 H0 Z" fill="#c48d7e" opacity="0.85"/>
  <g transform="translate(150,210)">
    <path d="M0 0 H 260 V 300 H 0 Z" fill="#fdf2ec" stroke="#8a4a3c" stroke-width="8"/>
    <path d="M130 0 V 300 M 0 150 H 260" stroke="#8a4a3c" stroke-width="8"/>
    <path d="M0 0 C 60 120 200 120 260 0" fill="#e9c6bd" stroke="#8a4a3c" stroke-width="8"/>
  </g>
  <g transform="translate(880,560)">
    <path d="M20 300 V 120 M 20 120 H 80 V 300" stroke="#6e3a30" stroke-width="10" fill="none" stroke-linecap="round"/>
    <rect x="34" y="60" width="52" height="60" rx="6" fill="#f7c9a8"/>
    <rect x="14" y="300" width="92" height="16" rx="6" fill="#6e3a30"/>
    <path d="M60 90 c-6 6-9 11-9 18 0 5 4 8 9 8 s9-3 9-8c0-7-3-12-9-18z" fill="#ffd54e"/>
    <path d="M54 84 c-3 4-3 8 0 12 3-4 3-8 0-12z" fill="#ff9a2e"/>
  </g>
  <g fill="#c2284b" opacity="0.85">
    <circle cx="620" cy="180" r="7"/>
    <circle cx="652" cy="200" r="6"/>
    <circle cx="588" cy="208" r="5"/>
    <path d="M640 180c-8 8-12 16-12 26 0 12 6 20 12 20s12-8 12-20c0-10-4-18-12-26z" fill="#7c1f33"/>
    <path d="M1200 240c-7 7-11 15-11 24 0 11 5 18 11 18s11-7 11-18c0-9-4-17-11-24z" fill="#7c1f33"/>
  </g>
    <rect width="1600" height="900" fill="#6e1a30" opacity="0.06"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a0a10"/><stop offset="1" stop-color="#2b121c"/></linearGradient>
    <radialGradient id="moon" cx="0.74" cy="0.2" r="0.34"><stop offset="0" stop-color="#e05a78" stop-opacity="0.85"/><stop offset="0.5" stop-color="#e05a78" stop-opacity="0.18"/><stop offset="1" stop-color="#e05a78" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#moon)"/>
  <circle cx="1184" cy="182" r="52" fill="#d94a68"/>
  <circle cx="1202" cy="166" r="44" fill="#1a0a10"/>
  <path d="M0 600 Q 380 520 760 590 T 1600 570 V900 H0 Z" fill="#150910"/>
  <path d="M0 720 Q 460 660 940 720 T 1600 710 V900 H0 Z" fill="#100608"/>
  <g transform="translate(320,330)">
    <path d="M0 260 V 90 L 200 90 V 260 Z" fill="#0d0508" stroke="#33101c" stroke-width="5"/>
    <rect x="40" y="130" width="56" height="60" rx="4" fill="#e89a6a" opacity="0.9"/>
    <rect x="120" y="130" width="56" height="60" rx="4" fill="#e89a6a" opacity="0.75"/>
    <path d="M0 80 L 100 20 L 200 80 Z" fill="#0d0508"/>
    <circle cx="100" cy="210" r="18" fill="#33101c"/>
  </g>
  <g fill="#0d0508">
    <path d="M420 160c4 0 7 3 7 7l-3.5 7-3.5-7c0-4 0-7 0-7z" transform="scale(1.6)"/>
    <path d="M560 220c4 0 7 3 7 7l-3.5 7-3.5-7c0-4 0-7 0-7z" transform="scale(1.2)"/>
    <path d="M740 150c4 0 7 3 7 7l-3.5 7-3.5-7c0-4 0-7 0-7z" transform="scale(1.4)"/>
  </g>
  <g fill="#c2284b" opacity="0.75">
    <circle cx="940" cy="300" r="6"/>
    <circle cx="968" cy="316" r="5"/>
    <path d="M954 300c-6 6-9 12-9 20 0 9 4 15 9 15s9-6 9-15c0-8-3-14-9-20z" fill="#7c1f33"/>
  </g>
    <rect width="1600" height="900" fill="#080304" opacity="0.3"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0 4 Q 70 18 166 66" stroke="#8a3a4c" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M30 12c-2 10 2 20 10 26" stroke="#8a3a4c" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="60" cy="40" r="9" fill="#c2284b"/>
  <circle cx="60" cy="40" r="4" fill="#7c1f33"/>
  <circle cx="100" cy="66" r="7" fill="#c2284b"/>
  <circle cx="100" cy="66" r="3.2" fill="#7c1f33"/>
  <path d="M128 26l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z" fill="#d4af37"/>
</svg>`

const PARTICLE = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 2c3 2 5.5 4.4 5.5 7.4S12.4 15 10 16c-2.4-1-4.5-3-4.5-6.6S7 4 10 2z" fill="#c2284b"/>
  <path d="M10 5.5v9" stroke="#7c1f33" stroke-width="1" opacity="0.7"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#1a0a10"/>
  <path d="M16 5c3.4 2.2 6 4.9 6 8.3 0 3-2.7 5-6 6.2-3.3-1.2-6-3.2-6-6.2C10 9.9 12.6 7.2 16 5z" fill="#c2284b"/>
  <circle cx="16" cy="14" r="2" fill="#d4af37"/>
</svg>`

export default {
  id: 'scarlet-noir',
  pkg: '@dsh-external/dsh-client-ui-skin-scarlet-noir',
  bodyAttr: 'data-dsh-scarlet-noir',
  wiringId: 'ui-skin-scarlet-noir',
  name: '绯月 · 蔷薇千金',
  nameEn: 'Scarlet Noir',
  author: '0928OYX',
  tagline: '哥特蔷薇庄园 · 绯红黑金 · 烛火微光',
  description: '原创哥特千金皮肤：绯红、墨黑与描金构成界面，庄园、烛台与血月背景，玫瑰花瓣飘落，蕾丝质感的边框装饰。',
  tags: ['anime', 'gothic', 'rose', 'scarlet', 'mansion', 'candle'],
  accent: '#c2284b',
  order: 6,
  chromeColor: '#1a0a10',
  title: '绯月 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#faf3f4', panel: '#fffdfd', ink: '#351c22', inkSoft: '#6e4650', inkFaint: '#a37580',
      line: '#b34a5e', accent: '#c2284b', accentBright: '#c2284b', accentHover: '#aa2041', accentInk: '#ffffff',
      glassHover: 'rgba(194,40,75,0.08)', glassActive: 'rgba(194,40,75,0.16)',
      navActive: '#f6dfe4', navHover: 'rgba(194,40,75,0.07)', sidebarFill: '#fbf2f4',
      bubble: '#ffffff', bubbleHi: '#f6dfe4', input: '#ffffff', mask: '#1c0a10', shadow: '#4a1020',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#150c10', panel: '#22131a', ink: '#f0dde2', inkSoft: '#c9a6b1', inkFaint: '#9d7280',
      line: '#5e2436', accent: '#e05a78', accentBright: '#d94a68', accentHover: '#e2738d', accentInk: '#ffffff',
      glassHover: 'rgba(224,90,120,0.13)', glassActive: 'rgba(224,90,120,0.21)',
      navActive: '#3a1a26', navHover: 'rgba(224,90,120,0.11)', sidebarFill: '#190e13',
      bubble: '#2a1720', bubbleHi: '#3a1f2b', input: '#2a1720', mask: '#0a0507', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  scrim: { light: 'rgba(250,243,244,0.16)', dark: 'rgba(21,12,16,0.44)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, count: 9, duration: 20 },

}
