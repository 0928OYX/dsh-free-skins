/**
 * Skin bundle generator for the dsh-free-skins gallery skins.
 *
 * Each skins/<id>/definition.mjs exports the skin's identity, palette and
 * SVG art. This script derives the complete distribution package from it:
 *   - skin.json / package.json / cordis.patch.yml / lib/index.js
 *   - lib/client.js — the browser bundle: token remap CSS (light + dark),
 *     backdrop art, corner ornament, particles, optional mascot badge, favicon,
 *     document title and theme-color, all retracted by the cordis effect
 *     disposer. The bundle is committed distribution output, regenerated
 *     ONLY from repository inputs (no absolute paths, no remote assets).
 *
 * Usage: node scripts/generate-skins.mjs
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url))
const SKINS_DIR = join(REPO_ROOT, 'skins')
const LICENSE_TEMPLATE = join(REPO_ROOT, 'scripts', 'CC-BY-NC-SA-4.0.txt')

/** Prefer ANSI-friendly ASCII in generated artifacts; the runtime reads UTF-8 either way. */
const emit = (text) => text.replaceAll('\u2013', '-').replaceAll('\u2014', '--').replaceAll('\u201c', '"').replaceAll('\u201d', '"')

// ---------- color helpers ----------

function hexToRgb(hex) {
  const m = /^#([0-9a-f]{6})$/i.exec(hex.trim())
  if (m === null) throw new Error(`bad hex color: ${hex}`)
  const v = Number.parseInt(m[1], 16)
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 }
}
function rgbToHex({ r, g, b }) {
  const c = (n) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, '0')
  return `#${c(r)}${c(g)}${c(b)}`
}
/** Linear RGB mix: t=0 returns a, t=1 returns b. */
function mix(a, b, t) {
  const ca = hexToRgb(a)
  const cb = hexToRgb(b)
  return rgbToHex({
    r: ca.r + (cb.r - ca.r) * t,
    g: ca.g + (cb.g - ca.g) * t,
    b: ca.b + (cb.b - ca.b) * t,
  })
}
/** 8-digit hex with an alpha channel (the dsw token format). */
function alpha(hex, a) {
  const { r, g, b } = hexToRgb(hex)
  const c = (n) => Math.round(n).toString(16).padStart(2, '0')
  return `#${c(r)}${c(g)}${c(b)}${c(Math.round(Math.min(1, Math.max(0, a)) * 255))}`
}

// ---------- token remap ----------

/** Neutral ramp anchored between canvas (light end) and ink (dark end). */
const NEUTRAL_STOPS = [
  ['00', 0], ['50', 0.02], ['60', 0.035], ['75', 0.05], ['100', 0.08], ['150', 0.14],
  ['200', 0.2], ['250', 0.28], ['300', 0.38], ['400', 0.52], ['500', 0.62], ['550', 0.68],
  ['600', 0.74], ['700', 0.82], ['800', 0.9], ['850', 0.93], ['900', 0.96], ['1000', 1],
]
/** Accent ramp: saturated center, canvas-tinted light steps, ink-tinted dark steps. */
const ACCENT_STOPS = [
  ['50', 0.07, 0], ['50p', 0.07, 0], ['75', 0.12, 0], ['100', 0.2, 0], ['200', 0.34, 0],
  ['300', 0.5, 0], ['400', 0.72, 0], ['450', 0.86, 0], ['500', 0, 1], ['600', 0, 0.6],
  ['700-delete', 0, 0.45], ['800', 0, 0.28], ['900', 0, 0.16], ['950', 0, 0.08],
]

function buildStaticsCss(p) {
  const out = []
  const neutral = []
  const bluish = []
  for (const [name, t] of NEUTRAL_STOPS) {
    const base = mix(p.canvas, p.ink, t)
    neutral.push(`--dsw-static-neutral-${name}:${base}`)
    bluish.push(`--dsw-static-neutral-bluish-${name}:${mix(base, p.accent, 0.05)}`)
  }
  const accentSet = []
  for (const [name, towardCanvas, towardInk] of ACCENT_STOPS) {
    const value = towardInk > 0 ? mix(p.ink, p.accentBright, towardInk) : mix(p.canvas, p.accentBright, towardCanvas)
    accentSet.push(`--dsw-static-deepseek-${name}:${value}`)
    accentSet.push(`--dsw-static-blue-${name}:${value}`)
  }
  out.push(...neutral, ...bluish, ...accentSet)
  return out.join(';')
}

/**
 * The alias remap: every token the GUI components consume, re-voiced into the
 * skin palette. `dark` selects the alpha tiers tuned for the dark theme.
 */
function buildAliasesCss(p, dark) {
  const borders = dark
    ? { l1: 0.14, l2: 0.22, l3: 0.34, l4: 0.5, thin: 0.18 }
    : { l1: 0.1, l2: 0.18, l3: 0.3, l4: 0.44, thin: 0.14 }
  const layers = dark
    ? { base: 0.5, l1: 0.6, l2: 0.68, l3: 0.8, overlay: 0.9 }
    : { base: 0.55, l1: 0.72, l2: 0.78, l3: 0.88, overlay: 0.94 }
  const tokens = [
    `--dsw-alias-bg-base:${alpha(p.canvas, layers.base)}`,
    `--dsw-alias-bg-layer-1:${alpha(p.canvas, layers.l1)}`,
    `--dsw-alias-bg-layer-2:${alpha(p.panel, layers.l2)}`,
    `--dsw-alias-bg-layer-3:${alpha(p.panel, layers.l3)}`,
    `--dsw-alias-bg-mask-1:${alpha(p.mask, 0.45)}`,
    `--dsw-alias-bg-mask-2:${alpha(p.mask, 0.25)}`,
    `--dsw-alias-bg-mask-3:${alpha(p.mask, 0.6)}`,
    `--dsw-alias-bg-mask-drop:${alpha(p.mask, 0.5)}`,
    `--dsw-alias-bg-mask-photo:${alpha(p.mask, 0.85)}`,
    `--dsw-alias-bg-module-platform:${alpha(p.panel, 0.85)}`,
    `--dsw-alias-bg-multi-select:${alpha(p.accent, 0.18)}`,
    `--dsw-alias-bg-overlay:${alpha(p.canvas, layers.overlay)}`,
    `--dsw-alias-bg-skeleton:${alpha(p.ink, 0.07)}`,
    `--dsw-alias-border-inverted:${alpha('#ffffff', 0.92)}`,
    `--dsw-alias-border-inverted2:${alpha('#ffffff', 0.6)}`,
    `--dsw-alias-border-l1:${alpha(p.line, borders.l1)}`,
    `--dsw-alias-border-l2:${alpha(p.line, borders.l2)}`,
    `--dsw-alias-border-l2-darkmode-thin:${alpha(p.line, borders.thin)}`,
    `--dsw-alias-border-l3:${alpha(p.line, borders.l3)}`,
    `--dsw-alias-border-l4:${alpha(p.line, borders.l4)}`,
    `--dsw-alias-brand-primary:${p.accent}`,
    `--dsw-alias-brand-primary-invert:${p.accentInk}`,
    `--dsw-alias-brand-primary-new-colorprimary-new-color:${p.accent}`,
    `--dsw-alias-brand-text:${p.accent}`,
    `--dsw-alias-button-contrast-fill:${p.ink}`,
    `--dsw-alias-button-elevated-fill:${p.panel}`,
    `--dsw-alias-button-floating-fill:${p.panel}`,
    `--dsw-alias-button-floating-hover:${mix(p.panel, p.ink, 0.06)}`,
    `--dsw-alias-button-ghost-active-border:${alpha(p.accent, 0.4)}`,
    `--dsw-alias-button-ghost-active-fill:${alpha(p.accent, 0.14)}`,
    `--dsw-alias-button-ghost-active-hover:${alpha(p.accent, 0.2)}`,
    `--dsw-alias-button-info-fill:${alpha(p.accent, 0.14)}`,
    `--dsw-alias-button-info-hover:${alpha(p.accent, 0.22)}`,
    `--dsw-alias-button-primary-dimmed:${alpha(p.accentBright, 0.4)}`,
    `--dsw-alias-button-primary-fill:${p.accentBright}`,
    `--dsw-alias-button-primary-hover:${p.accentHover}`,
    `--dsw-alias-button-tool-bar-fill:${alpha(p.ink, 0.05)}`,
    `--dsw-alias-button-tool-bar-fill-invisible:${alpha(p.ink, 0)}`,
    `--dsw-alias-button-tool-bar-hover:${p.glassHover}`,
    `--dsw-alias-interactive-bg-active:${p.glassActive}`,
    `--dsw-alias-interactive-bg-hover:${p.glassHover}`,
    `--dsw-alias-interactive-bg-hover-accent:${alpha(p.accent, 0.12)}`,
    `--dsw-alias-interactive-bg-hover-danger:${alpha(p.err, 0.12)}`,
    `--dsw-alias-interactive-bg-hover-solid:${alpha(p.ink, 0.08)}`,
    `--dsw-alias-label-caption:${p.inkFaint}`,
    `--dsw-alias-label-dimmed:${p.inkFaint}`,
    `--dsw-alias-label-primary:${p.ink}`,
    `--dsw-alias-label-primary-bluish:${p.ink}`,
    `--dsw-alias-label-primary-dimmed:${p.inkSoft}`,
    `--dsw-alias-label-primary-foreground:${p.accentInk}`,
    `--dsw-alias-label-primary-inverted:${p.canvas}`,
    `--dsw-alias-label-secondary:${p.inkSoft}`,
    `--dsw-alias-label-tertiary:${p.inkFaint}`,
    `--dsw-alias-markdown-citation:${p.accent}`,
    `--dsw-alias-markdown-code-block:${p.panel}`,
    `--dsw-alias-markdown-code-block-banner:${alpha(p.panel, 0.6)}`,
    `--dsw-alias-markdown-code-segment-selected:${alpha(p.accent, 0.18)}`,
    `--dsw-alias-markdown-code-segment-unselected:${alpha(p.ink, 0)}`,
    `--dsw-alias-markdown-inline-code:${alpha(p.accent, 0.14)}`,
    `--dsw-alias-markdown-placeholder:${p.inkFaint}`,
    `--dsw-alias-markdown-tag:${alpha(p.accent, 0.16)}`,
    `--dsw-alias-scrollbar-bg-l1:${alpha(p.line, 0.14)}`,
    `--dsw-alias-scrollbar-bg-l2:${alpha(p.line, 0.2)}`,
    `--dsw-alias-scrollbar-hover-l1:${alpha(p.line, 0.3)}`,
    `--dsw-alias-scrollbar-hover-l2:${alpha(p.line, 0.4)}`,
    `--dsw-alias-state-business-primary:${p.accent}`,
    `--dsw-alias-state-business-tertiary:${alpha(p.accent, 0.14)}`,
    `--dsw-alias-state-error-primary:${p.err}`,
    `--dsw-alias-state-error-secondary:${alpha(p.err, 0.16)}`,
    `--dsw-alias-state-success-primary:${p.ok}`,
    `--dsw-alias-state-success-secondary:${alpha(p.ok, 0.16)}`,
    `--dsw-alias-state-success-tertiary:${alpha(p.ok, 0.3)}`,
    `--dsw-alias-state-warn-label:${p.warn}`,
    `--dsw-alias-state-warn-primary:${p.warn}`,
    `--dsw-alias-state-warn-secondary:${alpha(p.warn, 0.16)}`,
    `--dsw-alias-state-warn-tertiary:${alpha(p.warn, 0.3)}`,
    `--dsw-alias-toast-bg:${p.ink}`,
    `--dsw-alias-tooltip-bg:${p.ink}`,
    `--dsw-hovercard-bg:${p.panel}`,
    `--dsw-linear-gradient-think:linear-gradient(90deg,${alpha(p.accent, 0.18)},${alpha(p.accent, 0)})`,
    `--dsw-linear-think-select:${alpha(p.accent, 0.12)}`,
    `--dsw-shadow-lv1:0 4px 16px ${alpha(p.shadow, 0.1)}`,
    `--dsw-shadow-lv2:0 8px 28px ${alpha(p.shadow, 0.14)}`,
    `--dsw-shadow-lv3:0 16px 48px ${alpha(p.shadow, 0.2)}`,
    `--dsw-shadow-lv1-blur:16px`,
    `--dsw-shadow-lv2-blur:28px`,
    `--dsw-shadow-lv3-blur:48px`,
    `--dsw-specific-bubble:${p.bubble}`,
    `--dsw-specific-bubble-highlight:${p.bubbleHi}`,
    `--dsw-specific-input-major:${p.input}`,
    `--dsw-specific-login-input:${p.input}`,
    `--dsw-specific-menu:${p.panel}`,
    `--dsw-specific-selector:${p.panel}`,
    `--dsw-specific-sidebar-fill:${p.sidebarFill}`,
    `--dsw-specific-sidebar-nav-item-active:${p.navActive}`,
    `--dsw-specific-sidebar-nav-item-active-accent:${p.accent}`,
    `--dsw-specific-sidebar-nav-item-hover:${p.navHover}`,
    `--dsw-specific-tip:${alpha(p.accent, 0.1)}`,
  ]
  return tokens.join(';')
}

// ---------- svg helpers ----------

/** Rewrite SVG ids so multiple inline instances in one page can never collide. */
function namespaceSvg(svg, prefix) {
  let out = svg.replaceAll(/id="([a-zA-Z][\w-]*)"/g, (_m, name) => `id="${prefix}_${name}"`)
  out = out.replaceAll(/url\(#([a-zA-Z][\w-]*)\)/g, (_m, name) => `url(#${prefix}_${name})`)
  out = out.replaceAll(/xlink:href="#([a-zA-Z][\w-]*)"/g, (_m, name) => `xlink:href="#${prefix}_${name}"`)
  return out
}
const svgDataUri = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`

const BACKDROP_MIME = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
}

/**
 * Resolve one art value to a browser-usable data URI. SVG strings are
 * namespaced and URI-encoded; `data:` URIs pass through untouched; a bare
 * relative path is read from the skin's own directory (binary photo assets).
 */
function resolveArt(def, value, prefix) {
  if (typeof value !== 'string') return null
  if (value.startsWith('data:')) return value
  const ext = /\.([a-z0-9]+)$/i.exec(value)?.[1]?.toLowerCase()
  if (ext !== undefined && BACKDROP_MIME[ext] !== undefined) {
    const buffer = readFileSync(join(SKINS_DIR, def.id, value))
    return `data:${BACKDROP_MIME[ext]};base64,${buffer.toString('base64')}`
  }
  return svgDataUri(namespaceSvg(value, prefix))
}

// ---------- bundle assembly ----------

function buildClientBundle(def) {
  const { id, pkg, bodyAttr, wiringId } = def
  const camel = 'dsh' + id.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')
  const scoped = (selector) => `body[${bodyAttr}] ${selector}`
  const light = def.palettes.light
  const dark = def.palettes.dark

  const css = emit(`
${scoped('')}{color:${light.ink};background-color:${light.canvas}}
${scoped('')}[data-ds-dark-theme]{color:${dark.ink};background-color:${dark.canvas}}
${scoped('')}{${buildStaticsCss(light)};${buildAliasesCss(light, false)}}
${scoped('')}[data-ds-dark-theme]{${buildStaticsCss(dark)};${buildAliasesCss(dark, true)}}
${scoped('')}[data-skin-chrome='skin-dim']{position:fixed;inset:0;z-index:-1;pointer-events:none;background:var(--dsw-static-neutral-00);opacity:calc(1 - var(--dsh-skin-opacity, 1))}
${scoped('')}{--dsh-scrollbar-thumb:${alpha(light.accent, 0.45)};--dsh-scrollbar-thumb-hover:${alpha(light.accent, 0.7)}}
${scoped('')}[data-ds-dark-theme]{--dsh-scrollbar-thumb:${alpha(dark.accent, 0.45)};--dsh-scrollbar-thumb-hover:${alpha(dark.accent, 0.7)}}
${scoped('')}::selection{background:${alpha(light.accent, 0.3)}}
${scoped('')}[class*='titlebar']{border-bottom:1px solid ${alpha(light.accent, 0.35)};background:linear-gradient(90deg,${alpha(light.accent, 0.14)},${alpha(light.accent, 0)} 60%)}
${def.mascot ? `${scoped('')}[data-skin-chrome='mascot']{position:fixed;right:16px;bottom:14px;width:104px;height:104px;pointer-events:none;z-index:3;opacity:.92;filter:drop-shadow(0 8px 18px ${alpha(light.shadow, 0.35)})}
${scoped('')}[data-skin-chrome='mascot'] svg{width:100%;height:100%;display:block}` : ''}
${scoped('')}[data-skin-chrome='corner']{position:fixed;left:10px;top:6px;width:150px;height:120px;pointer-events:none;z-index:3;opacity:calc(.9 * var(--dsh-skin-opacity, 1))}
${scoped('')}[data-skin-chrome='corner'] svg{width:100%;height:100%;display:block}
${scoped('')}[data-skin-chrome='particles']{position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:1}
${scoped('')}[data-skin-chrome='particles'] .sp{position:absolute;top:-9vh;opacity:calc(.75 * var(--dsh-skin-opacity, 1));animation:${id}-fall linear infinite;will-change:transform}
${scoped('')}[data-skin-chrome='particles'] .sp i{display:block;width:100%;height:100%;animation:${id}-sway ease-in-out infinite alternate,${id}-spin linear infinite}
${scoped('')}[data-skin-chrome='particles'] .sp svg{width:100%;height:100%;display:block}
@keyframes ${id}-fall{from{transform:translate(0,-9vh)}to{transform:translate(var(--sway-x,0px),118vh)}}
@keyframes ${id}-sway{from{transform:translateX(-10px)}to{transform:translateX(10px)}}
@keyframes ${id}-spin{from{transform:rotate(0deg)}to{transform:rotate(340deg)}}
${def.chatBg ? `
${scoped('')}[data-conversation-scroll]{position:relative;isolation:isolate}
${scoped('')}[data-dsh-custom-chat-bg] [data-skin-chrome='chat-bg']{display:none}` : ''}
${def.chromeCss ?? ''}`)

  const backdropLight = resolveArt(def, def.backdrop.light, `${id}l`)
  const backdropDark = resolveArt(def, def.backdrop.dark, `${id}d`)
  const backdropDarkIsShared = backdropDark === backdropLight
  const favicon = svgDataUri(namespaceSvg(def.favicon, `${id}f`))
  const mascot = def.mascot ? namespaceSvg(def.mascot, `${id}m`) : null
  const chatBgUri = def.chatBg ? resolveArt(def, def.chatBg.url, `${id}cb`) : null
  const chatBgIsBackdrop = chatBgUri !== null && chatBgUri === backdropLight
  const corner = namespaceSvg(def.corner, `${id}c`)
  const particle = namespaceSvg(def.particle.svg, `${id}p`)
  const particleSecond = def.particle.second === undefined
    ? null
    : namespaceSvg(def.particle.second, `${id}q`)
  const count = def.particle.count ?? 10
  const duration = def.particle.duration ?? 16
  const particleSpans = Array.from({ length: count }, (_v, i) => {
    const left = Math.round(((i * 137.5) % 100) * 100) / 100
    const delay = (i * 3.7) % duration
    const size = 9 + (i % 4) * 4
    const swayX = Math.round(((i * 53.7) % 121) - 60)
    const swayDur = (3 + (i % 3) * 1.6).toFixed(1)
    const spinDur = (6 + (i % 4) * 2.2).toFixed(1)
    const art = particleSecond !== null && i % 2 === 1 ? particleSecond : particle
    return `<span class="sp" style="left:${left}%;animation-delay:-${delay}s;animation-duration:${duration + (i % 3) * 4}s;width:${size}px;height:${size}px;--sway-x:${swayX}px"><i style="animation-delay:-${(delay * 1.3 % 9).toFixed(1)}s;animation-duration:${swayDur}s,${spinDur}s">${art}</i></span>`
  }).join('')

  return `window.__ModuleLoader__.load({
	id: ${JSON.stringify(pkg)},
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		//#region generated art (scripts/generate-skins.mjs)
		const BACKDROP_LIGHT = ${JSON.stringify(backdropLight)};
		const BACKDROP_DARK = ${backdropDarkIsShared ? 'BACKDROP_LIGHT' : JSON.stringify(backdropDark)};
		const FAVICON = ${JSON.stringify(favicon)};
		const MASCOT = ${JSON.stringify(mascot)};
		const CORNER = ${JSON.stringify(corner)};
		const SCRIM_LIGHT = ${JSON.stringify(def.scrim.light)};
		const SCRIM_DARK = ${JSON.stringify(def.scrim.dark)};
		const CHAT_BG = ${chatBgIsBackdrop ? 'BACKDROP_LIGHT' : JSON.stringify(chatBgUri)};
		//#endregion

		//#region generated css
		const CSS = ${JSON.stringify(css)};
		{
			const tagId = ${JSON.stringify(`${pkg}/skin.module.css`)};
			if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
				const tag = document.createElement("style");
				tag.dataset.plugin = ${JSON.stringify(pkg)};
				tag.dataset.pluginCss = tagId;
				tag.textContent = CSS;
				document.head.appendChild(tag);
			}
		}
		//#endregion

		//#region generated apply
		const SKIN_TITLE = ${JSON.stringify(def.title)};
		const CHROME_COLOR = ${JSON.stringify(def.chromeColor)};
		const BACKDROP_PROPS = ["background-image", "background-position", "background-size", "background-attachment", "background-repeat"];
		const BACKDROP_POSITION = ${JSON.stringify(def.backdropPosition ?? 'center top')};

		/**
		 * Apply the ${def.name} skin: body scope attribute, art backdrop (with
		 * theme-swapping scrim), corner ornament, particle layer, optional mascot badge,
		 * favicon, title and theme-color. Every write is retracted by the cordis
		 * effect disposer.
		 * @param ctx - owning context (the effect lifecycle owns retraction).
		 */
		function apply(ctx) {
			const body = document.body;
			const previous = new Map();
			for (const prop of BACKDROP_PROPS) previous.set(prop, body.style.getPropertyValue(prop));
			const previousTitle = document.title;
			const previousThemeColor = document.head.querySelector('meta[name="theme-color"]')?.content ?? "";
			const owned = [];
			const injectNode = (node) => {
				owned.push(node);
				node.dataset.skinChrome = node.dataset.skinChrome ?? "chrome";
				node.dataset.skinOwner = ${JSON.stringify(id)};
				node.setAttribute("aria-hidden", "true");
				return node;
			};

			body.dataset.${camel} = "";

			/*
			 * The theme-color meta is written ONCE per surface change — never
			 * observed. A MutationObserver on <head> content attributes ping-pongs
			 * against every other live skin's theme-color observer (the active
			 * skin's fiber keeps observing during try-on): each writer reacts to
			 * the other's write and the main thread spins forever.
			 */
			const applyThemeColor = () => {
				const meta = document.head.querySelector('meta[name="theme-color"]');
				if (meta !== null && meta.content !== CHROME_COLOR) meta.content = CHROME_COLOR;
			};

			const setBackdrop = () => {
				const dark = body.hasAttribute("data-ds-dark-theme");
				const scrim = dark ? SCRIM_DARK : SCRIM_LIGHT;
				body.style.setProperty("background-image", \`linear-gradient(\${scrim}, \${scrim}), url(\${dark ? BACKDROP_DARK : BACKDROP_LIGHT})\`);
				body.style.setProperty("background-position", BACKDROP_POSITION);
				body.style.setProperty("background-size", "cover");
				body.style.setProperty("background-attachment", "fixed");
				body.style.setProperty("background-repeat", "no-repeat");
				applyThemeColor();
			};
			setBackdrop();
			const backdropObserver = new MutationObserver(setBackdrop);
			backdropObserver.observe(body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });

			const skinDim = document.createElement("div");
			skinDim.dataset.skinChrome = "skin-dim";
			injectNode(skinDim);
			body.append(skinDim);

			const corner = document.createElement("div");
			corner.dataset.skinChrome = "corner";
			injectNode(corner);
			corner.innerHTML = CORNER;
			body.append(corner);

${def.mascot ? `			const mascot = document.createElement("div");
			mascot.dataset.skinChrome = "mascot";
			injectNode(mascot);
			mascot.innerHTML = MASCOT;
			body.append(mascot);` : ''}

			const particles = document.createElement("div");
			particles.dataset.skinChrome = "particles";
			injectNode(particles);
			particles.innerHTML = ${JSON.stringify(particleSpans)};
			body.append(particles);
${def.chatBg ? `
			let chatBg = null;
			let chatBgHost = null;
			let chatBgResizeObserver = null;
			const placeChatBg = () => {
				if (chatBg === null || chatBgHost === null) return;
				const rect = chatBgHost.getBoundingClientRect();
				chatBg.style.left = rect.left + "px";
				chatBg.style.top = rect.top + "px";
				chatBg.style.width = rect.width + "px";
				chatBg.style.height = rect.height + "px";
			};
			const ensureChatBg = () => {
				const host = document.querySelector("[data-conversation-scroll]");
				if (host === null) return;
				if (chatBg !== null && chatBgHost === host) {
					placeChatBg();
					return;
				}
				chatBgHost = host;
				chatBg = document.createElement("div");
				chatBg.dataset.skinChrome = "chat-bg";
				injectNode(chatBg);
				chatBg.style.position = "fixed";
				chatBg.style.zIndex = "-1";
				chatBg.style.pointerEvents = "none";
				chatBg.style.backgroundImage = "url(" + JSON.stringify(CHAT_BG) + ")";
				chatBg.style.backgroundRepeat = "no-repeat";
				chatBg.style.backgroundPosition = ${JSON.stringify(def.chatBg.position ?? 'center')};
				chatBg.style.backgroundSize = ${JSON.stringify(def.chatBg.size ?? 'contain')};
				chatBg.style.opacity = "var(--dsh-skin-opacity, 1)";
				host.prepend(chatBg);
				placeChatBg();
				if (chatBgResizeObserver === null && typeof ResizeObserver !== "undefined") {
					chatBgResizeObserver = new ResizeObserver(placeChatBg);
					chatBgResizeObserver.observe(host);
				}
			};
			ensureChatBg();
			const chatBgObserver = new MutationObserver(ensureChatBg);
			chatBgObserver.observe(document.body, { childList: true, subtree: true });
			window.addEventListener("resize", placeChatBg);` : ''}

			const favicon = document.createElement("link");
			favicon.rel = "icon";
			favicon.type = "image/svg+xml";
			favicon.href = FAVICON;
			injectNode(favicon);
			document.head.append(favicon);

			document.title = SKIN_TITLE;

			ctx.effect(() => () => {
				delete body.dataset.${camel};
				backdropObserver.disconnect();
${def.chatBg ? `				chatBgObserver.disconnect();
				chatBgResizeObserver?.disconnect();
				window.removeEventListener("resize", placeChatBg);` : ''}
				for (const [prop, value] of previous) body.style.setProperty(prop, value);
				const meta = document.head.querySelector('meta[name="theme-color"]');
				if (meta !== null && meta.content === CHROME_COLOR) meta.content = previousThemeColor;
				if (document.title === SKIN_TITLE) document.title = previousTitle;
				for (const node of owned) node.remove();
			}, ${JSON.stringify(`${wiringId}: skin surface`)});
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});
`
}

// ---------- per-skin outputs ----------

function buildSkin(def) {
  const dir = join(SKINS_DIR, def.id)
  const skinJson = {
    id: def.id,
    name: def.name,
    nameEn: def.nameEn,
    author: def.author,
    tagline: def.tagline,
    description: def.description,
    tags: def.tags,
    accent: def.accent,
    bodyAttr: def.bodyAttr,
    package: def.pkg,
    wiring: { id: def.wiringId, bundleWired: false },
    order: def.order,
  }
  const packageJson = {
    name: def.pkg,
    version: '0.1.0',
    description: `${def.name} (${def.nameEn}) gallery skin for the dsh web GUI`,
    type: 'module',
    main: 'lib/index.js',
    exports: {
      '.': './lib/index.js',
      './client': './lib/client.js',
      './skin.json': './skin.json',
      './package.json': './package.json',
    },
    dsh: {
      bundle: { patch: './cordis.patch.yml' },
      client: { inject: [], platform: 'web' },
    },
    license: 'CC-BY-NC-SA-4.0',
    files: ['lib', 'skin.json', 'cordis.patch.yml', 'README.md', 'LICENSE', 'NOTICE'],
  }
  const patch = `# ${def.id} skin bundle patch: inserts its dsh.client row into the web plugin roster.\n# Mutual exclusion between skins is managed by the skin-center's dsh-skin use\n# (home-layer managed rows), so this bundle only contributes the entry id.\n- insert:\n    - id: ${def.wiringId}\n      name: '${def.pkg}'\n`
  const hostEntry = `//#region src/index.ts\n/** Host loader entry for the browser-only skin plugin. */\n\n/** Provides no host-side behavior. */\nexport function apply() {}\n//#endregion\n`
  const readme = `# ${def.name} · ${def.nameEn}

${def.description}

- 起草: ${def.author}
- 产物: 由 \`scripts/generate-skins.mjs\` 从 \`definition.mjs\` 生成，请勿手动修改 \`lib/\` 与 \`skin.json\`。
- 许可: CC BY-NC-SA 4.0${def.licenseNote ? `（${def.licenseNote}）` : '（主题设计为本仓库原创，不含第三方角色形象素材）'}
`
  const notice = def.notice ?? `${def.id} (${def.name} · ${def.nameEn})\n${'='.repeat(48)}\n\nOriginal creation notice (CC BY-NC-SA 4.0)\n\n本皮肤的主题配色、场景装饰、飘落动画与界面美术均为本仓库\n（dsh-free-skins）原创，由 0928OYX 创作。\n本仓库不包含任何第三方角色形象、宠物形象或图片素材\n（主题灵感不构成版权主张）。\n\nUsage terms: CC BY-NC-SA 4.0 —— 署名 (attribution) 请标注\n「0928OYX / dsh-free-skins」；非商业性使用\n(non-commercial only)；衍生作品必须以相同方式共享 (share-alike)。\n`

  mkdirSync(join(dir, 'lib'), { recursive: true })
  writeFileSync(join(dir, 'skin.json'), `${JSON.stringify(skinJson, null, 2)}\n`)
  writeFileSync(join(dir, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
  writeFileSync(join(dir, 'cordis.patch.yml'), patch)
  writeFileSync(join(dir, 'lib', 'index.js'), hostEntry)
  writeFileSync(join(dir, 'lib', 'client.js'), buildClientBundle(def))
  writeFileSync(join(dir, 'README.md'), readme)
  writeFileSync(join(dir, 'NOTICE'), notice)
  if (existsSync(LICENSE_TEMPLATE)) copyFileSync(LICENSE_TEMPLATE, join(dir, 'LICENSE'))
}

for (const entry of readdirSync(SKINS_DIR).sort()) {
  const defPath = join(SKINS_DIR, entry, 'definition.mjs')
  if (!existsSync(defPath)) continue
  const definition = (await import(pathToFileURL(defPath).href)).default
  buildSkin(definition)
  console.log(`generated skins/${definition.id}`)
}
console.log('done')
