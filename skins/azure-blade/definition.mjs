/**
 * 凛霜 · 苍雪剑姬 — azure blade skin definition.
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. Original character, CC BY-NC-SA 4.0.
 */

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf6fd"/><stop offset="1" stop-color="#b9def5"/></linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.24" r="0.5"><stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#sun)"/>
  <path d="M0 560 L 240 380 L 420 520 L 620 300 L 820 520 L 1060 350 L 1260 500 L 1480 400 L 1600 470 V900 H0 Z" fill="#dceefb"/>
  <path d="M0 640 L 300 460 L 520 610 L 780 420 L 1010 610 L 1290 470 L 1600 600 V900 H0 Z" fill="#b8d9f0"/>
  <path d="M0 760 L 360 620 L 700 760 L 1100 640 L 1600 760 V900 H0 Z" fill="#eef7fd"/>
  <g fill="#ffffff" opacity="0.9">
    <path d="M300 150l2.4 6.4 6.6 2.6-6.6 2.6L300 168l-2.4-6.4-6.6-2.6 6.6-2.6z"/>
    <path d="M560 100l2 5.4 5.6 2.2-5.6 2.2-2 5.4-2-5.4-5.6-2.2 5.6-2.2z"/>
    <path d="M820 200l2.6 7 7.2 2.8-7.2 2.8-2.6 7-2.6-7-7.2-2.8 7.2-2.8z"/>
    <path d="M1050 130l2 5.4 5.6 2.2-5.6 2.2-2 5.4-2-5.4-5.6-2.2 5.6-2.2z"/>
    <path d="M1280 260l2.4 6.4 6.6 2.6-6.6 2.6-2.4 6.4-2.4-6.4-6.6-2.6 6.6-2.6z"/>
    <path d="M680 300l1.8 4.8 5 2-5 2-1.8 4.8-1.8-4.8-5-2 5-2z"/>
    <path d="M440 340l1.8 4.8 5 2-5 2-1.8 4.8-1.8-4.8-5-2 5-2z"/>
  </g>
    <rect width="1600" height="900" fill="#1d4f7d" opacity="0.05"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1626"/><stop offset="1" stop-color="#14293f"/></linearGradient>
    <radialGradient id="moon" cx="0.74" cy="0.2" r="0.3"><stop offset="0" stop-color="#dff1fb" stop-opacity="0.9"/><stop offset="0.4" stop-color="#dff1fb" stop-opacity="0.2"/><stop offset="1" stop-color="#dff1fb" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#moon)"/>
  <circle cx="1184" cy="180" r="44" fill="#e8f4fb"/>
  <path d="M160 340c60 90 100 60 140 100 40 40 70 110 120 140-20 30-60 50-100 50-60 0-120-20-160-60 0-80 0-160 0-230z" fill="#1f8a6e" opacity="0.35"/>
  <path d="M320 420c80 100 140 70 180 110 40 40 60 130 130 160-30 40-80 60-130 60-70 0-130-20-180-70 0-90 0-180 0-260z" fill="#3f8ec2" opacity="0.3"/>
  <path d="M0 560 L 240 380 L 420 520 L 620 300 L 820 520 L 1060 350 L 1260 500 L 1480 400 L 1600 470 V900 H0 Z" fill="#0d2035"/>
  <path d="M0 640 L 300 460 L 520 610 L 780 420 L 1010 610 L 1290 470 L 1600 600 V900 H0 Z" fill="#0a192a"/>
  <path d="M0 760 L 360 620 L 700 760 L 1100 640 L 1600 760 V900 H0 Z" fill="#06101c"/>
  <g fill="#cfe8f8" opacity="0.8">
    <path d="M300 150l2.4 6.4 6.6 2.6-6.6 2.6L300 168l-2.4-6.4-6.6-2.6 6.6-2.6z"/>
    <path d="M560 100l2 5.4 5.6 2.2-5.6 2.2-2 5.4-2-5.4-5.6-2.2 5.6-2.2z"/>
    <path d="M820 200l2.6 7 7.2 2.8-7.2 2.8-2.6 7-2.6-7-7.2-2.8 7.2-2.8z"/>
    <path d="M1050 130l2 5.4 5.6 2.2-5.6 2.2-2 5.4-2-5.4-5.6-2.2 5.6-2.2z"/>
    <path d="M1280 260l2.4 6.4 6.6 2.6-6.6 2.6-2.4 6.4-2.4-6.4-6.6-2.6 6.6-2.6z"/>
    <path d="M680 300l1.8 4.8 5 2-5 2-1.8 4.8-1.8-4.8-5-2 5-2z"/>
    <path d="M440 340l1.8 4.8 5 2-5 2-1.8 4.8-1.8-4.8-5-2 5-2z"/>
  </g>
    <rect width="1600" height="900" fill="#04090f" opacity="0.3"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M28 26l7 18 18 8-18 8-7 18-7-18-18-8 18-8z" fill="#4ea8de"/>
  <path d="M76 10l5 13 13 6-13 6-5 13-5-13-13-6 13-6z" fill="#8fd0f2"/>
  <path d="M120 34l4 10 10 5-10 5-4 10-4-10-10-5 10-5z" fill="#e8f4fb"/>
  <circle cx="56" cy="76" r="4" fill="#4ea8de"/>
  <circle cx="96" cy="96" r="3" fill="#8fd0f2"/>
  <circle cx="136" cy="66" r="2.6" fill="#e8f4fb"/>
</svg>`

const PARTICLE = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 2l2.2 5.8 5.8 2.2-5.8 2.2L10 18l-2.2-5.8L2 10l5.8-2.2z" fill="#eaf6fd"/>
  <circle cx="10" cy="10" r="1.6" fill="#4ea8de" opacity="0.7"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#1d4f7d"/>
  <path d="M16 5l2.6 7 7 2.6-7 2.6L16 24l-2.6-6.8-7-2.6 7-2.6z" fill="#bfe3f7"/>
</svg>`

export default {
  id: 'azure-blade',
  pkg: '@dsh-external/dsh-client-ui-skin-azure-blade',
  bodyAttr: 'data-dsh-azure-blade',
  wiringId: 'ui-skin-azure-blade',
  name: '凛霜 · 苍雪剑姬',
  nameEn: 'Azure Blade',
  author: '0928OYX',
  tagline: '雪原晴空 · 霜花玻璃 · 飘雪动画',
  description: '原创剑士少女皮肤：冰蓝与银白界面，雪山雪原背景与飘雪动画，霜花点缀角标，玻璃质感的按钮与面板。',
  tags: ['anime', 'blade', 'snow', 'ice', 'mountains', 'frost'],
  accent: '#4ea8de',
  order: 5,
  chromeColor: '#0d2035',
  title: '凛霜 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#f0f7fc', panel: '#ffffff', ink: '#1d3550', inkSoft: '#4a6a88', inkFaint: '#7d99b4',
      line: '#4ea8de', accent: '#4ea8de', accentBright: '#38a3e8', accentHover: '#2f94d8', accentInk: '#ffffff',
      glassHover: 'rgba(56,163,232,0.10)', glassActive: 'rgba(56,163,232,0.18)',
      navActive: '#dff0fb', navHover: 'rgba(56,163,232,0.08)', sidebarFill: '#f2f9fe',
      bubble: '#ffffff', bubbleHi: '#dff0fb', input: '#ffffff', mask: '#0c1c2c', shadow: '#0d3553',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#0e1a26', panel: '#152435', ink: '#e2eef9', inkSoft: '#a9c3d9', inkFaint: '#7599b8',
      line: '#2c5a80', accent: '#5fb7ee', accentBright: '#5fb7ee', accentHover: '#74c2f2', accentInk: '#0e1a26',
      glassHover: 'rgba(95,183,238,0.14)', glassActive: 'rgba(95,183,238,0.22)',
      navActive: '#1d3347', navHover: 'rgba(95,183,238,0.12)', sidebarFill: '#101d2a',
      bubble: '#1b2c3d', bubbleHi: '#223950', input: '#1b2c3d', mask: '#060b12', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  scrim: { light: 'rgba(240,247,252,0.16)', dark: 'rgba(14,26,38,0.42)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, count: 12, duration: 22 },

}
