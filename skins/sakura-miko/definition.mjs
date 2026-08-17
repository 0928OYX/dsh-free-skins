/**
 * 樱歌 · 神社巫女 — sakura miko skin definition.
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. Original character, CC BY-NC-SA 4.0.
 */

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2f6"/><stop offset="1" stop-color="#ffd3e0"/></linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.28" r="0.55"><stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#sun)"/>
  <path d="M0 660 Q 320 570 660 630 T 1600 610 V900 H0 Z" fill="#f2bcd0" opacity="0.75"/>
  <path d="M0 720 Q 430 650 900 710 T 1600 690 V900 H0 Z" fill="#e79dbb" opacity="0.85"/>
  <path d="M0 800 Q 500 750 1000 800 T 1600 790 V900 H0 Z" fill="#d982a5" opacity="0.9"/>
  <g transform="translate(140,250)">
    <path d="M0 44 C 64 8 196 8 260 44 L 272 58 H 248 L 246 42 C 192 18 68 18 14 42 L 12 58 H -12 Z" fill="#d8445c"/>
    <rect x="-10" y="58" width="280" height="15" fill="#d8445c"/>
    <rect x="56" y="73" width="17" height="380" fill="#d8445c"/>
    <rect x="187" y="73" width="17" height="380" fill="#d8445c"/>
    <rect x="24" y="120" width="212" height="13" fill="#d8445c"/>
    <rect x="24" y="405" width="212" height="15" fill="#d8445c"/>
  </g>
  <g fill="#f2a4bf" opacity="0.8">
    <path d="M380 150c8 4 12 10 12 18-8 2-16-2-20-8-2-4-2-8 0-10z"/>
    <path d="M520 220c7 3 10 9 10 15-7 2-13-1-17-7-1.5-3.5-1.5-7 0-8z"/>
    <path d="M300 330c6 3 9 8 9 13-6 2-11-1-14-6-1.5-3-1.5-6 0-7z"/>
    <path d="M760 130c8 4 12 10 12 18-8 2-16-2-20-8-2-4-2-8 0-10z"/>
    <path d="M900 300c6 3 9 8 9 13-6 2-11-1-14-6-1.5-3-1.5-6 0-7z"/>
    <path d="M640 400c7 3 10 9 10 15-7 2-13-1-17-7-1.5-3.5-1.5-7 0-8z"/>
    <path d="M1080 200c8 4 12 10 12 18-8 2-16-2-20-8-2-4-2-8 0-10z"/>
    <path d="M1210 380c6 3 9 8 9 13-6 2-11-1-14-6-1.5-3-1.5-6 0-7z"/>
  </g>
    <rect width="1600" height="900" fill="#8f1e44" opacity="0.05"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1020"/><stop offset="1" stop-color="#3a1630"/></linearGradient>
    <radialGradient id="moon" cx="0.72" cy="0.22" r="0.3"><stop offset="0" stop-color="#ffe9f2" stop-opacity="0.95"/><stop offset="0.35" stop-color="#ffe9f2" stop-opacity="0.25"/><stop offset="1" stop-color="#ffe9f2" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#moon)"/>
  <circle cx="1152" cy="198" r="46" fill="#ffedf3"/>
  <circle cx="1170" cy="180" r="40" fill="#2a1020"/>
  <path d="M0 680 Q 340 600 700 660 T 1600 640 V900 H0 Z" fill="#2e0d1e" opacity="0.9"/>
  <path d="M0 760 Q 460 710 940 760 T 1600 740 V900 H0 Z" fill="#250a18"/>
  <g transform="translate(140,280)">
    <path d="M0 44 C 64 8 196 8 260 44 L 272 58 H 248 L 246 42 C 192 18 68 18 14 42 L 12 58 H -12 Z" fill="#8f2c46"/>
    <rect x="-10" y="58" width="280" height="15" fill="#8f2c46"/>
    <rect x="56" y="73" width="17" height="360" fill="#8f2c46"/>
    <rect x="187" y="73" width="17" height="360" fill="#8f2c46"/>
    <rect x="24" y="120" width="212" height="13" fill="#8f2c46"/>
    <rect x="24" y="385" width="212" height="15" fill="#8f2c46"/>
  </g>
  <g fill="#f06a93" opacity="0.75">
    <path d="M400 140c8 4 12 10 12 18-8 2-16-2-20-8-2-4-2-8 0-10z"/>
    <path d="M560 260c7 3 10 9 10 15-7 2-13-1-17-7-1.5-3.5-1.5-7 0-8z"/>
    <path d="M320 360c6 3 9 8 9 13-6 2-11-1-14-6-1.5-3-1.5-6 0-7z"/>
    <path d="M820 150c8 4 12 10 12 18-8 2-16-2-20-8-2-4-2-8 0-10z"/>
    <path d="M960 320c6 3 9 8 9 13-6 2-11-1-14-6-1.5-3-1.5-6 0-7z"/>
    <path d="M700 430c7 3 10 9 10 15-7 2-13-1-17-7-1.5-3.5-1.5-7 0-8z"/>
  </g>
    <rect width="1600" height="900" fill="#0d0509" opacity="0.25"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0 2 Q 60 14 168 62" stroke="#d86a90" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M26 10 Q 34 26 26 44" stroke="#d86a90" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <g fill="#f2a4bf">
    <path d="M46 26c3.6 1.6 6 3.8 6 6.8-3.6.9-7.2-.9-9.6-3.6-1-1.6-1-3.4 0-4.2z"/>
    <path d="M62 38c3.2 1.4 5.4 3.4 5.4 6.1-3.2.8-6.5-.8-8.7-3.2-.9-1.4-.9-3 0-3.8z"/>
    <path d="M78 52c2.8 1.2 4.6 3 4.6 5.3-2.8.7-5.6-.7-7.5-2.8-.8-1.2-.8-2.6 0-3.3z"/>
    <path d="M94 66c2.4 1 4 2.6 4 4.6-2.4.6-4.8-.6-6.5-2.4-.7-1-.7-2.2 0-2.9z"/>
    <path d="M30 56c3.2 1.4 5.4 3.4 5.4 6.1-3.2.8-6.5-.8-8.7-3.2-.9-1.4-.9-3 0-3.8z"/>
  </g>
  <g fill="#e8567d">
    <circle cx="44" cy="44" r="5"/>
    <circle cx="72" cy="60" r="4"/>
    <circle cx="98" cy="74" r="3.4"/>
  </g>
</svg>`

const PARTICLE = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M12 1.6C16.9 4.9 20.2 9.7 19.8 14.8 19.5 19.2 16.5 22.2 12 22.2 7.5 22.2 4.5 19.2 4.2 14.8 3.8 9.7 7.1 4.9 12 1.6z" fill="#f5a3c2"/>
  <path d="M12 3.2C16.1 5.9 18.7 10 18.4 14.3 18.2 18 15.8 20.6 12 20.6 8.2 20.6 5.8 18 5.6 14.3 5.3 10 7.9 5.9 12 3.2z" fill="#fbc6d9"/>
  <path d="M12 3.4L12 20.4" stroke="#f291b4" stroke-width="0.7" opacity="0.9"/>
  <path d="M12 6.2C9.8 8 8.6 10.4 8.4 13.2" stroke="#f291b4" stroke-width="0.55" fill="none" opacity="0.8"/>
  <path d="M12 6.2C14.2 8 15.4 10.4 15.6 13.2" stroke="#f291b4" stroke-width="0.55" fill="none" opacity="0.8"/>
  <path d="M12 10C10.8 11 10.2 12.2 10 13.6" stroke="#e98eb0" stroke-width="0.5" fill="none" opacity="0.7"/>
  <path d="M12 10C13.2 11 13.8 12.2 14 13.6" stroke="#e98eb0" stroke-width="0.5" fill="none" opacity="0.7"/>
</svg>`

const PARTICLE_SPARK = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M8 1l1.8 5.2L15 8l-5.2 1.8L8 15l-1.8-5.2L1 8l5.2-1.8z" fill="#ffe9f2" opacity="0.95"/>
  <circle cx="8" cy="8" r="1.2" fill="#f7a9c8"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#e8567d"/>
  <path d="M16 7c3.2 1.7 6 4.3 6 8s-2.5 7-6 8c-3.5-1-6-3.7-6-8s2.8-6.3 6-8z" fill="#fff"/>
</svg>`

export default {
  id: 'sakura-miko',
  pkg: '@dsh-external/dsh-client-ui-skin-sakura-miko',
  bodyAttr: 'data-dsh-sakura-miko',
  wiringId: 'ui-skin-sakura-miko',
  name: '樱歌 · 神社巫女',
  nameEn: 'Sakura Miko',
  author: '0928OYX',
  tagline: '狐耳巫女 · 垂樱神社 · 精细花瓣飘落',
  description: '八重神子风的原创狐耳巫女角色皮肤：樱粉与朱红铺满界面，垂樱、鸟居与山丘构成背景，带叶脉的精细樱花瓣与星光在面板间缓缓飘落，按钮与状态色全部重新配音。',
  tags: ['anime', 'miko', 'sakura', 'pink', 'shrine', 'petals'],
  accent: '#e8567d',
  order: 3,
  chromeColor: '#a03256',
  title: '樱歌 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#fdf5f8', panel: '#ffffff', ink: '#43273a', inkSoft: '#74586a', inkFaint: '#a68a9c',
      line: '#c64e74', accent: '#e8567d', accentBright: '#e8567d', accentHover: '#d13f68', accentInk: '#ffffff',
      glassHover: 'rgba(232,86,125,0.10)', glassActive: 'rgba(232,86,125,0.18)',
      navActive: '#f8d9e4', navHover: 'rgba(232,86,125,0.08)', sidebarFill: '#fdf1f5',
      bubble: '#ffffff', bubbleHi: '#f8d9e4', input: '#ffffff', mask: '#2b1220', shadow: '#5c1e38',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#1f1019', panel: '#2b1723', ink: '#f6e2ea', inkSoft: '#d0a9ba', inkFaint: '#a1798f',
      line: '#8f4460', accent: '#f06a93', accentBright: '#ef6691', accentHover: '#f47fa3', accentInk: '#ffffff',
      glassHover: 'rgba(240,106,147,0.14)', glassActive: 'rgba(240,106,147,0.22)',
      navActive: '#3b1e2e', navHover: 'rgba(240,106,147,0.12)', sidebarFill: '#231219',
      bubble: '#2f1a26', bubbleHi: '#402233', input: '#2f1a26', mask: '#0d0509', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  scrim: { light: 'rgba(253,245,248,0.18)', dark: 'rgba(31,16,25,0.42)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, second: PARTICLE_SPARK, count: 16, duration: 16 },
}
