/**
 * 守岸人 — Shorekeeper skin definition.
 * 鸣潮（Wuthering Waves）角色「守岸人」哲风壁纸背景皮肤：
 * 蓝白发丝、蓝白眼眸、头戴蓝白头巾、胸口晶体裂痕、蓝白连衣短裙；
 * 「守岸人」意为保守秘密者，守护离开海岸的漂泊者，整体神秘而超然。
 * The generator (scripts/generate-skins.mjs) derives the whole skin package
 * from this file. 壁纸素材来自游戏《鸣潮》（库洛游戏），个人自用。
 */

const BACKDROP_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="skl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef5fc"/><stop offset="1" stop-color="#d9e7f7"/></linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#skl)"/>
</svg>`

const BACKDROP_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="skd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1830"/><stop offset="1" stop-color="#0a1322"/></linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#skd)"/>
</svg>`

const CORNER = `<svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0 4 Q 58 12 168 58" stroke="#8fb8e8" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.9"/>
  <path d="M0 20 Q 64 26 168 74" stroke="#7fa9dc" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M0 36 Q 70 40 168 88" stroke="#6f9ad0" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.55"/>
  <g fill="#bfe0ff" opacity="0.95">
    <circle cx="46" cy="18" r="4.2"/><circle cx="64" cy="26" r="3.2"/><circle cx="82" cy="36" r="2.6"/>
    <circle cx="100" cy="46" r="2.2"/><circle cx="34" cy="34" r="3"/><circle cx="118" cy="56" r="1.9"/>
  </g>
  <g fill="#8fb8e8">
    <circle cx="56" cy="30" r="2.2"/><circle cx="74" cy="40" r="1.8"/><circle cx="92" cy="50" r="1.5"/>
  </g>
</svg>`

const PARTICLE = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M12 1.8L18.2 12 12 22.2 5.8 12z" fill="#a8c8f2"/>
  <path d="M12 4.2L16.6 12 12 19.8 7.4 12z" fill="#dcebff"/>
  <path d="M12 1.8L12 22.2" stroke="#7fa9dc" stroke-width="0.6" opacity="0.85"/>
  <path d="M5.8 12L18.2 12" stroke="#7fa9dc" stroke-width="0.6" opacity="0.85"/>
  <path d="M12 7L14.6 12 12 17 9.4 12z" fill="#f2f8ff" opacity="0.9"/>
</svg>`

const PARTICLE_SPARK = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M8 1l1.7 5.3L15 8l-5.3 1.7L8 15l-1.7-5.3L1 8l5.3-1.7z" fill="#eaf3ff" opacity="0.95"/>
  <circle cx="8" cy="8" r="1.3" fill="#9db8ef"/>
</svg>`

const FAVICON = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="skbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f74e8"/><stop offset="1" stop-color="#2a4a94"/></linearGradient></defs>
  <rect width="32" height="32" rx="8" fill="url(#skbg)"/>
  <path d="M6 22c2.4-3.2 5.2-3.2 7.6 0s5.2 3.2 7.6 0 5.2-3.2 7.6 0" stroke="#dcebff" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <circle cx="16" cy="12" r="2.6" fill="#bfe0ff"/>
  <path d="M16 7.4L17.4 12 16 16.6 14.6 12z" fill="#fff" opacity="0.85"/>
</svg>`

export default {
  id: 'shorekeeper',
  pkg: '@dsh-external/dsh-client-ui-skin-shorekeeper',
  bodyAttr: 'data-dsh-shorekeeper',
  wiringId: 'ui-skin-shorekeeper',
  name: '守岸人',
  nameEn: 'Shorekeeper',
  author: '0928OYX',
  tagline: '鸣潮 · 守岸人 · 海雾蓝紫 · 晶光微漾',
  description: '以《鸣潮》守岸人为灵感的海岸主题原创皮肤：海雾蓝白与紫晶色调铺满界面，浪纹与晶光点缀面板，冰晶缓缓飘落，左侧导航融合同款海岸蓝紫渐变，整体神秘而超然。',
  tags: ['wuwa', 'shorekeeper', 'ocean', 'seaside', 'blue', 'purple', 'crystal'],
  accent: '#5f7fe0',
  order: 9,
  chromeColor: '#274b8f',
  title: '守岸人 · DeepSeek Harness',
  palettes: {
    light: {
      canvas: '#eef5fc', panel: '#f7fbfe', ink: '#1c3355', inkSoft: '#4a6488', inkFaint: '#8098b8',
      line: '#8fb4e4', accent: '#5f7fe0', accentBright: '#4f74e8', accentHover: '#4166d4', accentInk: '#ffffff',
      glassHover: 'rgba(95,127,224,0.10)', glassActive: 'rgba(95,127,224,0.18)',
      navActive: '#dbe9fb', navHover: 'rgba(95,127,224,0.08)', sidebarFill: '#e8f2fc',
      bubble: '#ffffff', bubbleHi: '#dbe9fb', input: '#ffffff', mask: '#0e1c38', shadow: '#1c3355',
      ok: '#2e8e52', err: '#c03636', warn: '#b9772a',
    },
    dark: {
      canvas: '#0b1526', panel: '#13223c', ink: '#e6effb', inkSoft: '#b3c6e2', inkFaint: '#7e96b8',
      line: '#2f4a78', accent: '#7c9bff', accentBright: '#8aa4ff', accentHover: '#9db4ff', accentInk: '#0b1526',
      glassHover: 'rgba(124,155,255,0.14)', glassActive: 'rgba(124,155,255,0.22)',
      navActive: '#1c2f52', navHover: 'rgba(124,155,255,0.12)', sidebarFill: '#0f1c33',
      bubble: '#152540', bubbleHi: '#1e3357', input: '#152540', mask: '#040a16', shadow: '#000000',
      ok: '#3fae6b', err: '#e06a6a', warn: '#d9a054',
    },
  },
  // 页面背景为纯色渐变（工作区背景），不内置对话区壁纸；冰晶飘落动画由 particle 层提供。
  scrim: { light: 'rgba(255,255,255,0)', dark: 'rgba(0,0,0,0)' },
  backdrop: { light: BACKDROP_LIGHT, dark: BACKDROP_DARK },
  backdropPosition: 'center center',
  mascot: null,
  favicon: FAVICON,
  corner: CORNER,
  particle: { svg: PARTICLE, second: PARTICLE_SPARK, count: 10, duration: 18 },
  licenseNote: '设计灵感来源于游戏《鸣潮》（库洛游戏）的角色「守岸人」，皮肤不内置任何第三方图片素材；皮肤代码与界面设计为本仓库原创',
  notice: `shorekeeper (守岸人 · Shorekeeper)
================================================

Original creation notice (CC BY-NC-SA 4.0)

主题配色、场景装饰、冰晶飘落动画与界面设计为本仓库
（dsh-free-skins）原创，由 0928OYX 创作。

设计灵感来自游戏《鸣潮》（Wuthering Waves，库洛游戏）的角色
「守岸人」；本皮肤不内置任何第三方图片素材（角色版权归原权利方所有）。

Usage terms: CC BY-NC-SA 4.0 —— 署名 (attribution) 请标注
「0928OYX / dsh-free-skins」；非商业性使用
(non-commercial only)；衍生作品必须以相同方式共享 (share-alike)。
`,
}
