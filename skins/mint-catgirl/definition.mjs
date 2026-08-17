/**
 * 薄荷 · 猫娘茶会 — mint catgirl skin definition.
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. Original character, CC BY-NC-SA 4.0.
 */

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eafbf3"/><stop offset="1" stop-color="#c4edda"/></linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.24" r="0.5"><stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#sun)"/>
  <path d="M0 640 Q 400 560 820 630 T 1600 610 V900 H0 Z" fill="#a5e3c8" opacity="0.8"/>
  <path d="M0 740 Q 500 680 1000 740 T 1600 730 V900 H0 Z" fill="#7fd4ae" opacity="0.85"/>
  <g transform="translate(160,590)">
    <circle cx="90" cy="60" r="52" fill="#7fd4ae"/>
    <circle cx="40" cy="30" r="34" fill="#a5e3c8"/>
    <circle cx="150" cy="34" r="30" fill="#8fdabd"/>
    <path d="M60 40 c-4 8-2 14 4 18 2-6 2-12-4-18z" fill="#2bb38f"/>
    <path d="M120 26 c-3 7-2 12 3 15 2-5 1-10-3-15z" fill="#2bb38f"/>
  </g>
  <g transform="translate(1120,540)">
    <rect x="0" y="90" width="220" height="12" rx="6" fill="#8a6a4f"/>
    <rect x="70" y="40" width="12" height="62" fill="#8a6a4f"/>
    <ellipse cx="110" cy="96" rx="110" ry="14" fill="#fdf6ee" stroke="#8a6a4f" stroke-width="6"/>
    <path d="M60 30c0-16 8-26 20-26h60c12 0 20 10 20 26z" fill="#fdf6ee" stroke="#8a6a4f" stroke-width="6"/>
    <path d="M62 34h76" stroke="#d9b78e" stroke-width="4"/>
    <ellipse cx="110" cy="34" rx="18" ry="7" fill="#e8c9a0"/>
    <path d="M104 26c2-3 6-3 8 0" stroke="#8a6a4f" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <g fill="#2bb38f" opacity="0.6">
    <ellipse cx="380" cy="170" rx="7" ry="8"/>
    <circle cx="380" cy="163" r="2.4"/><circle cx="374" cy="158" r="2.4"/><circle cx="386" cy="158" r="2.4"/>
    <ellipse cx="560" cy="250" rx="5" ry="6"/>
    <circle cx="560" cy="245" r="1.8"/><circle cx="556" cy="241" r="1.8"/><circle cx="564" cy="241" r="1.8"/>
    <ellipse cx="760" cy="160" rx="6" ry="7"/>
    <circle cx="760" cy="154" r="2.1"/><circle cx="755" cy="150" r="2.1"/><circle cx="765" cy="150" r="2.1"/>
    <ellipse cx="960" cy="330" rx="5" ry="6"/>
    <circle cx="960" cy="325" r="1.8"/><circle cx="956" cy="321" r="1.8"/><circle cx="964" cy="321" r="1.8"/>
  </g>
    <rect width="1600" height="900" fill="#0d4f38" opacity="0.05"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2019"/><stop offset="1" stop-color="#163229"/></linearGradient>
    <radialGradient id="moon" cx="0.74" cy="0.2" r="0.32"><stop offset="0" stop-color="#e0f6ec" stop-opacity="0.85"/><stop offset="0.45" stop-color="#e0f6ec" stop-opacity="0.2"/><stop offset="1" stop-color="#e0f6ec" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#moon)"/>
  <circle cx="1184" cy="180" r="46" fill="#e6faf0"/>
  <circle cx="1200" cy="166" r="40" fill="#0d2019"/>
  <path d="M0 650 Q 400 580 820 640 T 1600 630 V900 H0 Z" fill="#0a1a14"/>
  <path d="M0 750 Q 500 700 1000 750 T 1600 740 V900 H0 Z" fill="#071209"/>
  <g transform="translate(160,600)">
    <circle cx="90" cy="60" r="52" fill="#123428"/>
    <circle cx="40" cy="30" r="34" fill="#0e2a20"/>
    <circle cx="150" cy="34" r="30" fill="#103026"/>
  </g>
  <g transform="translate(1120,540)">
    <rect x="0" y="90" width="220" height="12" rx="6" fill="#4a3826"/>
    <rect x="70" y="40" width="12" height="62" fill="#4a3826"/>
    <ellipse cx="110" cy="96" rx="110" ry="14" fill="#1a2e25" stroke="#4a3826" stroke-width="6"/>
    <path d="M60 30c0-16 8-26 20-26h60c12 0 20 10 20 26z" fill="#1a2e25" stroke="#4a3826" stroke-width="6"/>
    <path d="M62 34h76" stroke="#6e5a3e" stroke-width="4"/>
    <ellipse cx="110" cy="34" rx="18" ry="7" fill="#6e5a3e"/>
  </g>
  <g fill="#3ecf9e" opacity="0.8">
    <circle cx="300" cy="220" r="3"/><circle cx="420" cy="160" r="2.4"/><circle cx="560" cy="300" r="2.8"/>
    <circle cx="700" cy="200" r="2.4"/><circle cx="860" cy="380" r="3"/><circle cx="980" cy="240" r="2.6"/>
    <circle cx="240" cy="400" r="2.6"/><circle cx="1080" cy="460" r="2.4"/>
  </g>
  <g fill="#2bb38f" opacity="0.55">
    <ellipse cx="460" cy="200" rx="6" ry="7"/>
    <circle cx="460" cy="194" r="2"/><circle cx="455" cy="190" r="2"/><circle cx="465" cy="190" r="2"/>
    <ellipse cx="800" cy="280" rx="5" ry="6"/>
    <circle cx="800" cy="274" r="1.8"/><circle cx="795" cy="270" r="1.8"/><circle cx="805" cy="270" r="1.8"/>
  </g>
    <rect width="1600" height="900" fill="#040d09" opacity="0.3"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0 2 Q 60 16 168 64" stroke="#2bb38f" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="40" cy="34" r="7" fill="#e8a33d"/>
  <circle cx="40" cy="34" r="2.6" fill="#f7d48a"/>
  <ellipse cx="82" cy="52" rx="8" ry="9" fill="#2bb38f" opacity="0.9"/>
  <circle cx="82" cy="45" r="2.8"/><circle cx="75" cy="39" r="2.8"/><circle cx="89" cy="39" r="2.8"/>
  <path d="M124 30l3.4 8.6 8.6 3.4-8.6 3.4-3.4 8.6-3.4-8.6-8.6-3.4 8.6-3.4z" fill="#ffd76a"/>
</svg>`

const PARTICLE = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="10" cy="10" rx="7" ry="8" fill="#7ee2b8"/>
  <circle cx="10" cy="7.5" r="2.6" fill="#2bb38f"/>
  <circle cx="6.6" cy="4.6" r="2.2" fill="#2bb38f"/>
  <circle cx="13.4" cy="4.6" r="2.2" fill="#2bb38f"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#1d5c46"/>
  <ellipse cx="16" cy="17" rx="9" ry="10" fill="#7ee2b8"/>
  <circle cx="16" cy="14" r="3.4" fill="#1d5c46"/>
  <circle cx="11.6" cy="10" r="2.8" fill="#1d5c46"/>
  <circle cx="20.4" cy="10" r="2.8" fill="#1d5c46"/>
</svg>`

export default {
  id: 'mint-catgirl',
  pkg: '@dsh-external/dsh-client-ui-skin-mint-catgirl',
  bodyAttr: 'data-dsh-mint-catgirl',
  wiringId: 'ui-skin-mint-catgirl',
  name: '薄荷 · 猫娘茶会',
  nameEn: 'Mint Catgirl',
  author: '0928OYX',
  tagline: '奶油薄荷 · 肉垫与铃铛 · 午后茶会',
  description: '原创猫娘角色皮肤：薄荷绿与奶油白界面，花园茶会背景，猫爪肉垫缓缓飘落，铃铛与星光点缀角标，按钮圆润柔软。',
  tags: ['anime', 'catgirl', 'mint', 'tea', 'garden', 'paws'],
  accent: '#2bb38f',
  order: 7,
  chromeColor: '#0d2019',
  title: '薄荷 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#f2fbf7', panel: '#ffffff', ink: '#1d3a32', inkSoft: '#47665c', inkFaint: '#75948a',
      line: '#4ec08f', accent: '#2bb38f', accentBright: '#21b487', accentHover: '#1ba678', accentInk: '#ffffff',
      glassHover: 'rgba(33,180,135,0.10)', glassActive: 'rgba(33,180,135,0.18)',
      navActive: '#dcf5ec', navHover: 'rgba(33,180,135,0.08)', sidebarFill: '#f2fbf8',
      bubble: '#ffffff', bubbleHi: '#dcf5ec', input: '#ffffff', mask: '#0d2019', shadow: '#0d4f38',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#0f1d19', panel: '#172823', ink: '#e0f2ea', inkSoft: '#b2d5c6', inkFaint: '#7fa897',
      line: '#2c6a52', accent: '#3ecf9e', accentBright: '#3ecf9e', accentHover: '#55d8ab', accentInk: '#0f1d19',
      glassHover: 'rgba(62,207,158,0.14)', glassActive: 'rgba(62,207,158,0.22)',
      navActive: '#1f3a30', navHover: 'rgba(62,207,158,0.12)', sidebarFill: '#12201b',
      bubble: '#1e332b', bubbleHi: '#27443a', input: '#1e332b', mask: '#07100c', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  scrim: { light: 'rgba(242,251,247,0.16)', dark: 'rgba(15,29,25,0.42)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, count: 10, duration: 19 },

}
