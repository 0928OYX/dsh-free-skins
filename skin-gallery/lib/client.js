window.__ModuleLoader__.load({
	id: "@dsh-external/dsh-client-ui-skin-gallery",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		const react = require("react");
		const jsx = require("react/jsx-runtime");

		//#region src/client/art.ts
		/**
		 * Card preview art: original chibi bust SVGs authored for this gallery
		 * (CC BY-NC-SA 4.0, this repository). Every preview is an inline SVG so
		 * the gallery ships no static assets.
		 */
		const ART_OFFICIAL = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="dshbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4d6bfe"/><stop offset="1" stop-color="#24306e"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#dshbg)"/>
  <path d="M48 20c-11 0-19 9-19 21 0 12 8 21 19 21s19-9 19-21c0-12-8-21-19-21z" fill="#fff" opacity="0.12"/>
  <path d="M48 26c-8 0-14.5 6.8-14.5 15.2 0 5.6 3 10.5 7.4 13.2L36 70l6-4.6 6 4.6-4.9-15.6c4.4-2.7 7.4-7.6 7.4-13.2C62.5 32.8 56 26 48 26z" fill="#fff"/>
  <circle cx="44.6" cy="40" r="2.1" fill="#4d6bfe"/><circle cx="51.4" cy="40" r="2.1" fill="#4d6bfe"/>
  <text x="48" y="82" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="13" font-weight="700" fill="#fff" letter-spacing="2">DSH</text>
</svg>`;

		const ART_SAKURA = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="skpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fde3f0"/><stop offset="1" stop-color="#dfa6e0"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#skpr)"/>
  <g fill="#ffffff" opacity="0.95">
    <circle cx="48" cy="36" r="9"/><circle cx="35" cy="48" r="9"/><circle cx="61" cy="48" r="9"/><circle cx="40" cy="61" r="9"/><circle cx="56" cy="61" r="9"/>
  </g>
  <circle cx="48" cy="48" r="6" fill="#f7a9c8"/>
  <circle cx="48" cy="74" r="2.4" fill="#d13656"/>
</svg>`;

		const ART_STELLA = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="stpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#241b4d"/><stop offset="1" stop-color="#0e0a24"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#stpr)"/>
  <path d="M48 14c-14 0-24 10-24 24 0 12 8 22 20 24-3-4-5-9-5-14 0-14 10-24 24-24-3-8-8-10-15-10z" fill="#ffd76a"/>
  <path d="M72 22l2.2 6.3 6.3 2.2-6.3 2.2-2.2 6.3-2.2-6.3-6.3-2.2 6.3-2.2z" fill="#9a8bff"/>
  <circle cx="22" cy="24" r="1.6" fill="#fff"/><circle cx="78" cy="40" r="1.3" fill="#ffd76a"/><circle cx="18" cy="60" r="1.4" fill="#9a8bff"/>
</svg>`;

		const ART_BLADE = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="azpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfe3f7"/><stop offset="1" stop-color="#5aa9e6"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#azpr)"/>
  <g stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" opacity="0.95">
    <path d="M48 16v64M24 30l48 36M24 66l48-36"/>
  </g>
  <circle cx="48" cy="48" r="4.5" fill="#fff"/>
  <circle cx="48" cy="16" r="2.6" fill="#dff1fb"/><circle cx="72" cy="48" r="2.2" fill="#dff1fb"/>
</svg>`;

		const ART_SCARLET = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="snpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a121c"/><stop offset="1" stop-color="#150a10"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#snpr)"/>
  <g fill="#c2284b"><circle cx="48" cy="40" r="15"/><circle cx="37" cy="50" r="10"/><circle cx="59" cy="50" r="10"/></g>
  <path d="M48 26c-7-8-15-4-17 2 7 2 13 6 17 11 4-5 10-9 17-11-2-6-10-10-17-2z" fill="#e8a0b0"/>
  <path d="M40 62l8-10 8 10-2.4 6h-11.2z" fill="#d4af37"/>
  <path d="M48 74l-3 6h6z" fill="#7c1f33"/>
</svg>`;

		const ART_MINT = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="mtpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c9f2e2"/><stop offset="1" stop-color="#7ee2b8"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#mtpr)"/>
  <g fill="#2bb38f"><ellipse cx="48" cy="42" rx="19" ry="26" transform="rotate(-24 48 42)"/></g>
  <path d="M48 16v30" stroke="#1d5c46" stroke-width="3" stroke-linecap="round"/>
  <circle cx="48" cy="74" r="7" fill="#e8a33d"/>
  <circle cx="48" cy="74" r="3" fill="#f7d48a"/>
</svg>`;

		const ART_GOLD = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="gdpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7dfae"/><stop offset="1" stop-color="#e0a13a"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#gdpr)"/>
  <circle cx="48" cy="48" r="22" fill="none" stroke="#8a6a2f" stroke-width="5"/>
  <g fill="#8a6a2f"><rect x="44" y="16" width="8" height="13" rx="2"/><rect x="44" y="67" width="8" height="13" rx="2"/><rect x="16" y="44" width="13" height="8" rx="2"/><rect x="67" y="44" width="13" height="8" rx="2"/></g>
  <circle cx="48" cy="48" r="9" fill="#f4c95d"/>
  <path d="M78 24l1.6 4.6 4.6 1.6-4.6 1.6-1.6 4.6-1.6-4.6-4.6-1.6 4.6-1.6z" fill="#8a6a2f"/>
</svg>`;
		const ART_SHOREKEEPER = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="skpr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfe0f7"/><stop offset="1" stop-color="#4a74d8"/></linearGradient></defs>
  <rect width="96" height="96" rx="20" fill="url(#skpr)"/>
  <path d="M48 16l11 17-11 17-11-17z" fill="#9dc4f5"/>
  <path d="M48 22l6 9-6 9-6-9z" fill="#eaf3ff"/>
  <path d="M8 62c10-11 20-11 30 0s20 11 30 0 16-11 20-6" stroke="#f4f8fe" stroke-width="3.4" fill="none" stroke-linecap="round" opacity="0.95"/>
  <path d="M8 74c10-11 20-11 30 0s20 11 30 0 16-11 20-6" stroke="#dcebff" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.7"/>
</svg>`;
		//#endregion

		//#region src/client/catalog.ts
		/**
		 * The gallery catalog: official stock look first, then the original free
		 * skins shipped by this repository. `package`/`bodyAttr` mirror each
		 * skin.json so try-on and active detection share the boot-graph truth.
		 */
		const CATALOG = [
			{
				id: "official",
				name: "DeepSeek Harness 默认",
				nameEn: "Official Default",
				author: "DeepSeek Harness",
				tagline: "还原官方默认外观，不应用任何皮肤。",
				description: "干净、克制的官方界面：品牌蓝主色，不加载任何皮肤资产。随时可一键还原。",
				accent: "#4d6bfe",
				preview: "#eef1fb",
				previewDark: "#10132a",
				art: ART_OFFICIAL,
				official: true,
				order: 1
			},
			{
				id: "sakura-miko",
				package: "@dsh-external/dsh-client-ui-skin-sakura-miko",
				bodyAttr: "data-dsh-sakura-miko",
				name: "樱歌 · 神社巫女",
				nameEn: "Sakura Miko",
				author: "0928OYX",
				tagline: "垂樱神社 · 朱红鸟居 · 花瓣飘落动画",
				description: "原创巫女角色：樱粉与朱红铺满界面，垂樱与鸟居背景，花瓣在面板间飘落。",
				accent: "#e8567d",
				preview: "#ffe9f0",
				previewDark: "#261019",
				art: ART_SAKURA,
				order: 3
			},
			{
				id: "stella-witch",
				package: "@dsh-external/dsh-client-ui-skin-stella-witch",
				bodyAttr: "data-dsh-stella-witch",
				name: "星语 · 星尘魔女",
				nameEn: "Stella Witch",
				author: "0928OYX",
				tagline: "月夜天文台 · 星尘与月牙 · 紫罗兰渐变",
				description: "原创魔法少女：深紫星夜背景、金色月牙与缓缓浮动的星尘，水晶质感按钮。",
				accent: "#7c5cff",
				preview: "#f0ecff",
				previewDark: "#140e2e",
				art: ART_STELLA,
				order: 4
			},
			{
				id: "azure-blade",
				package: "@dsh-external/dsh-client-ui-skin-azure-blade",
				bodyAttr: "data-dsh-azure-blade",
				name: "凛霜 · 苍雪剑姬",
				nameEn: "Azure Blade",
				author: "0928OYX",
				tagline: "雪原晴空 · 霜花玻璃 · 飘雪动画",
				description: "原创剑士少女：冰蓝与银白界面，雪山雪原背景，霜花点缀按钮与面板。",
				accent: "#4ea8de",
				preview: "#e8f5fc",
				previewDark: "#0c1a2b",
				art: ART_BLADE,
				order: 5
			},
			{
				id: "scarlet-noir",
				package: "@dsh-external/dsh-client-ui-skin-scarlet-noir",
				bodyAttr: "data-dsh-scarlet-noir",
				name: "绯月 · 蔷薇千金",
				nameEn: "Scarlet Noir",
				author: "0928OYX",
				tagline: "哥特蔷薇庄园 · 绯红黑金 · 烛火微光",
				description: "原创哥特千金：绯红、墨黑与描金构成界面，玫瑰与烛台背景，蕾丝边框装饰。",
				accent: "#c2284b",
				preview: "#fbeef1",
				previewDark: "#1a0c12",
				art: ART_SCARLET,
				order: 6
			},
			{
				id: "mint-catgirl",
				package: "@dsh-external/dsh-client-ui-skin-mint-catgirl",
				bodyAttr: "data-dsh-mint-catgirl",
				name: "薄荷 · 猫娘茶会",
				nameEn: "Mint Catgirl",
				author: "0928OYX",
				tagline: "奶油薄荷 · 肉垫与铃铛 · 午后茶会",
				description: "原创猫娘角色：薄荷绿与奶油白界面，花园茶会背景，猫爪肉垫与铃铛点缀按钮。",
				accent: "#2bb38f",
				preview: "#e7faf2",
				previewDark: "#0d1f18",
				art: ART_MINT,
				order: 7
			},
			{
				id: "gold-alchemist",
				package: "@dsh-external/dsh-client-ui-skin-gold-alchemist",
				bodyAttr: "data-dsh-gold-alchemist",
				name: "琥珀 · 炼金少女",
				nameEn: "Gold Alchemist",
				author: "0928OYX",
				tagline: "炼金工房 · 齿轮与药剂 · 羊皮纸琥珀",
				description: "原创炼金术士：琥珀金与青铜色界面，工房背景的齿轮与炼成阵，药水瓶点缀。",
				accent: "#d99a2b",
				preview: "#fbf3df",
				previewDark: "#1c130a",
				art: ART_GOLD,
				order: 8
			},
			{
				id: "shorekeeper",
				package: "@dsh-external/dsh-client-ui-skin-shorekeeper",
				bodyAttr: "data-dsh-shorekeeper",
				name: "守岸人",
				nameEn: "Shorekeeper",
				author: "0928OYX",
				tagline: "鸣潮壁纸 · 海雾蓝紫 · 晶光微漾",
				description: "以《鸣潮》守岸人哲风壁纸为背景：海雾蓝白与紫晶色调界面，浪纹与晶光点缀面板，左侧导航同款海岸蓝紫渐变。",
				accent: "#5f7fe0",
				preview: "#e8f2fc",
				previewDark: "#0c1830",
				art: ART_SHOREKEEPER,
				order: 9
			}
		];
		//#endregion

		//#region src/client/gallery.module.css
		const CSS = `
body[data-dsh-skin-gallery] .sgSection{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:14px;display:flex}
body[data-dsh-skin-gallery] .sgHead{flex-direction:column;gap:4px;display:flex}
body[data-dsh-skin-gallery] .sgTitle{margin:0;font-size:16px;font-weight:500;line-height:24px}
body[data-dsh-skin-gallery] .sgIntro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px;line-height:20px}
body[data-dsh-skin-gallery] .sgError{color:var(--dsw-alias-state-warn-label);margin:0;font-size:12px;line-height:18px}
body[data-dsh-skin-gallery] .sgGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;display:grid}
body[data-dsh-skin-gallery] .sgCard{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);border-radius:14px;flex-direction:column;overflow:hidden;display:flex;transition:border-color .16s,box-shadow .16s}
body[data-dsh-skin-gallery] .sgCard:hover{border-color:var(--dsw-alias-border-l3);box-shadow:var(--dsw-shadow-lv1)}
body[data-dsh-skin-gallery] .sgCard.sgActiveCard{border-color:var(--dsw-alias-state-success-primary);box-shadow:0 0 0 1px var(--dsw-alias-state-success-primary) inset}
body[data-dsh-skin-gallery] .sgPreview{height:112px;align-items:center;justify-content:center;position:relative;display:flex}
body[data-dsh-skin-gallery] .sgPreview svg{width:88px;height:88px;border-radius:14px;box-shadow:0 4px 14px #0003}
body[data-dsh-skin-gallery] .sgBody{flex-direction:column;flex:1;gap:8px;padding:10px 12px 12px;display:flex}
body[data-dsh-skin-gallery] .sgNameRow{align-items:baseline;gap:8px;display:flex}
body[data-dsh-skin-gallery] .sgName{font-size:14px;font-weight:600;line-height:20px}
body[data-dsh-skin-gallery] .sgNameEn{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}
body[data-dsh-skin-gallery] .sgTagline{color:var(--dsw-alias-label-secondary);font-size:12.5px;line-height:18px}
body[data-dsh-skin-gallery] .sgMeta{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px;margin-top:auto}
body[data-dsh-skin-gallery] .sgBadges{position:absolute;top:8px;gap:6px;display:flex}
body[data-dsh-skin-gallery] .sgBadge{backdrop-filter:blur(6px);color:#fff;border-radius:999px;padding:2px 8px;font-size:11px;font-weight:600;line-height:16px}
body[data-dsh-skin-gallery] .sgBadgeActive{background:var(--dsw-alias-state-success-primary)}
body[data-dsh-skin-gallery] .sgBadgePending{background:var(--dsw-alias-state-warn-primary)}
body[data-dsh-skin-gallery] .sgBadgeTrying{background:var(--dsw-alias-brand-primary)}
body[data-dsh-skin-gallery] .sgBadgeLeft{left:8px}
body[data-dsh-skin-gallery] .sgBadgeRight{right:8px}
body[data-dsh-skin-gallery] .sgNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}
body[data-dsh-skin-gallery] .sgPendingHint{color:var(--dsw-alias-state-warn-label);margin:0;font-size:12px;line-height:18px}
body[data-dsh-skin-gallery] .sgActions{flex-direction:column;gap:6px;display:flex}
body[data-dsh-skin-gallery] .sgBtn{box-sizing:border-box;height:32px;font:inherit;cursor:pointer;border:1px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border-radius:16px;justify-content:center;align-items:center;gap:4px;padding:0 12px;font-size:13px;line-height:20px;display:inline-flex;transition:background .14s,border-color .14s}
body[data-dsh-skin-gallery] .sgBtn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
body[data-dsh-skin-gallery] .sgBtn:disabled{cursor:default;opacity:.55}
body[data-dsh-skin-gallery] .sgBtnPrimary{color:var(--dsw-alias-label-primary-foreground);background:var(--dsw-alias-button-primary-fill);border-color:transparent}
body[data-dsh-skin-gallery] .sgBtnPrimary:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}
body[data-dsh-skin-gallery] .sgNote{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px;margin:0}
body[data-dsh-skin-gallery] .sgBgCard{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);border-radius:14px;flex-direction:column;gap:10px;padding:12px;margin-top:14px;display:flex}
body[data-dsh-skin-gallery] .sgBgHead{flex-direction:column;gap:2px;display:flex}
body[data-dsh-skin-gallery] .sgBgTitle{font-size:14px;font-weight:600;line-height:20px}
body[data-dsh-skin-gallery] .sgBgHint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px;margin:0}
body[data-dsh-skin-gallery] .sgBgRow{align-items:center;gap:8px;display:flex;flex-wrap:wrap}
body[data-dsh-skin-gallery] .sgBgLabel{color:var(--dsw-alias-label-secondary);font-size:12.5px;line-height:18px}
body[data-dsh-skin-gallery] .sgBgRange{flex:1;min-width:140px;accent-color:var(--dsw-alias-brand-primary)}
body[data-dsh-skin-gallery] .sgBgVal{color:var(--dsw-alias-label-primary);font-size:12.5px;line-height:18px;min-width:38px;text-align:right}
body[data-dsh-skin-gallery] .sgBgMsg{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}
[data-conversation-scroll]{position:relative;isolation:isolate}
[data-conversation-scroll]{position:relative;isolation:isolate}
body[data-dsh-skin-gallery] .sgCropModal{position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.55);align-items:center;justify-content:center;padding:24px;display:flex}
body[data-dsh-skin-gallery] .sgCropCard{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l3);border-radius:14px;flex-direction:column;gap:10px;padding:14px;max-width:640px;width:100%;display:flex}
body[data-dsh-skin-gallery] .sgCropBox{position:relative;display:inline-block;overflow:hidden;border-radius:10px;background:#000;align-self:center;max-width:100%}
body[data-dsh-skin-gallery] .sgCropImg{display:block;max-width:600px;max-height:360px;width:auto;height:auto}
body[data-dsh-skin-gallery] .sgCropFrame{position:absolute;border:2px solid #fff;box-shadow:0 0 0 9999px rgba(0,0,0,.5);cursor:move;touch-action:none}
body[data-dsh-skin-gallery] .sgCropHandle{position:absolute;right:-7px;bottom:-7px;width:14px;height:14px;border:2px solid #fff;background:rgba(20,40,80,.55);border-radius:3px;cursor:nwse-resize;touch-action:none}
body[data-dsh-skin-gallery] .sgCropActions{justify-content:center;gap:8px;display:flex;flex-wrap:wrap}
body[data-dsh-skin-gallery] .sgCropHint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px;text-align:center;margin:0}
`;
		//#endregion

		//#region src/client/generated/gallery.module.css.mjs
		{
			const tagId = "@dsh-external/dsh-client-ui-skin-gallery/gallery.module.css";
			if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
				const tag = document.createElement("style");
				tag.dataset.plugin = "@dsh-external/dsh-client-ui-skin-gallery";
				tag.dataset.pluginCss = tagId;
				tag.textContent = CSS;
				document.head.appendChild(tag);
			}
		}
		//#endregion

		//#region src/client/try-on.ts
		/**
		 * Try-on engine, ported from the skin-center's real-module recipe:
		 * execute the skin's prebuilt bundle through the page module loader,
		 * mount it with a mini cordis context, and retract/restore the active
		 * skin's visual writes around the session.
		 */
		const BUNDLE_ROUTE = "/api/skin-center/bundle";
		const BACKDROP_PROPS = [
			"background-image",
			"background-position",
			"background-size",
			"background-attachment",
			"background-repeat"
		];
		/** Boot entries are package names; the active gallery skin is the catalog entry present in the boot graph. */
		function bootEntryIds() {
			return window.__DSH_BOOT__?.entries?.map((entry) => entry.id) ?? [];
		}
		function activeSkinEntry() {
			const ids = new Set(bootEntryIds());
			return CATALOG.find((entry) => !entry.official && entry.package !== undefined && ids.has(entry.package)) ?? null;
		}
		function loadBundleScript(url) {
			return new Promise((resolve, reject) => {
				const el = document.createElement("script");
				el.async = true;
				el.src = url;
				el.addEventListener("load", () => { el.remove(); resolve(); }, { once: true });
				el.addEventListener("error", () => { el.remove(); reject(new Error("skin-gallery: bundle script " + url + " failed to load")); }, { once: true });
				document.head.append(el);
			});
		}
		/** A direct body child belongs to `skin` when it is marked skin chrome or carries the skin's scoping body attribute. */
		function isSkinChrome(el, skin) {
			if (el.hasAttribute("data-skin-chrome")) return true;
			return skin !== null && el.hasAttribute(skin.bodyAttr);
		}
		function miniCtx() {
			const disposers = [];
			return {
				effect(callback) {
					disposers.push(callback());
					return () => {};
				},
				get() {},
				__disposeAll() {
					for (const dispose of disposers.reverse()) dispose();
				}
			};
		}
		/**
		 * One live try-on session: owns the tried-on skin's disposer plus the
		 * captured active-skin visuals, and restores everything on exit.
		 */
		class TryOnController {
			constructor() {
				this.session = null;
				this.applied = null;
				this.epoch = 0;
				this.onChange = null;
			}
			notify() {
				if (typeof this.onChange === "function") this.onChange();
			}
			get trying() {
				return this.session?.entry ?? null;
			}
			get tryingOfficial() {
				return this.session !== null && this.session.entry === null;
			}
			/** The live-applied skin entry (patch-driven, shown without a restart), or null. */
			get appliedEntry() {
				return this.applied;
			}
			async tryOn(entry) {
				if (entry.package === activeSkinEntry()?.package && this.session === null) return;
				if (this.session !== null && this.session.kind === "applied" && this.session.entry?.id === entry.id) return;
				this.exitTryOnOnly();
				const epoch = ++this.epoch;
				const active = this.captureAndRetractActive();
				let dispose;
				try {
					dispose = await this.loadAndApply(entry);
				} catch (error) {
					if (epoch === this.epoch) this.restoreActive(active);
					throw error;
				}
				if (epoch !== this.epoch) {
					this.cleanupModule(entry);
					dispose();
					return;
				}
				this.session = { entry, dispose, active, kind: "tryon" };
				this.notify();
			}
			tryOnOfficial() {
				if (activeSkinEntry() === null && this.appliedEntry === null) return;
				this.exitTryOnOnly();
				this.epoch += 1;
				const active = this.captureAndRetractActive();
				this.session = { entry: null, dispose: () => {}, active, kind: "tryon" };
				this.notify();
			}
			/** Persistently apply a skin (the caller already wrote the patch). Shows it now, no restart. */
			async applyLive(entry) {
				if (entry.package === activeSkinEntry()?.package && this.session === null) return;
				if (this.session !== null && this.session.kind === "applied" && this.session.entry?.id === entry.id) return;
				this.exitTryOnOnly();
				if (this.session !== null && this.session.kind === "applied") this.disposeAppliedSession();
				const epoch = ++this.epoch;
				const active = this.captureAndRetractActive();
				let dispose;
				try {
					dispose = await this.loadAndApply(entry);
				} catch (error) {
					if (epoch === this.epoch) this.restoreActive(active);
					throw error;
				}
				if (epoch !== this.epoch) {
					this.cleanupModule(entry);
					dispose();
					return;
				}
				this.session = { entry, dispose, active, kind: "applied" };
				this.applied = entry;
				this.notify();
			}
			applyLiveOfficial() {
				if (this.session !== null && this.session.kind === "applied" && this.session.entry === null) return;
				this.exitTryOnOnly();
				if (this.session !== null && this.session.kind === "applied") this.disposeAppliedSession();
				this.epoch += 1;
				const active = this.captureAndRetractActive();
				this.session = { entry: null, dispose: () => {}, active, kind: "applied" };
				this.applied = null;
				this.notify();
			}
			/** End only the temporary try-on layer, leaving a live-applied base untouched. */
			exitTryOnOnly() {
				const session = this.session;
				if (session === null || session.kind !== "tryon") return;
				this.epoch += 1;
				this.session = null;
				session.dispose();
				if (session.entry !== null) this.cleanupModule(session.entry);
				this.restoreActive(session.active);
				this.notify();
			}
			/** End the live-applied skin, restoring whatever it covered (the previous boot state). */
			disposeAppliedSession() {
				const session = this.session;
				if (session === null || session.kind !== "applied") return;
				this.epoch += 1;
				this.session = null;
				session.dispose();
				if (session.entry !== null) this.cleanupModule(session.entry);
				this.restoreActive(session.active);
				this.notify();
			}
			/** The settings dialog's 退出试穿: only a temporary try-on can be exited. */
			exit() {
				this.exitTryOnOnly();
			}
			async loadAndApply(entry) {
				const modules = window.__DSH_MODULES__;
				if (modules === void 0) throw new Error("skin-gallery: window.__DSH_MODULES__ missing");
				modules.invalidate(entry.package);
				await loadBundleScript(`${BUNDLE_ROUTE}/${encodeURIComponent(entry.id)}`);
				const apply = (await modules.import(entry.package)).apply;
				if (typeof apply !== "function") throw new Error(`skin-gallery: "${entry.package}" client bundle exports no apply`);
				const ctx = miniCtx();
				try {
					apply(ctx);
				} catch (error) {
					this.cleanupModule(entry);
					document.body.removeAttribute(entry.bodyAttr);
					for (const el of [...document.body.children]) if (isSkinChrome(el, entry)) el.remove();
					throw error;
				}
				return ctx.__disposeAll;
			}
			/**
			* Drop the tried-on module record and the style tags THIS package
			* injected (matched by the data-plugin-css prefix). A bare
			* data-plugin match would also remove any page styles that
			* client-modules' claimStyles tagged with this package id during
			* materialization — deleting the app's own CSS breaks the layout.
			*/
			cleanupModule(entry) {
				window.__DSH_MODULES__?.invalidate(entry.package);
				const prefix = `${entry.package}/`;
				for (const el of document.querySelectorAll("style[data-plugin-css]")) {
					if ((el.getAttribute("data-plugin-css") ?? "").startsWith(prefix)) el.remove();
				}
			}
			captureAndRetractActive() {
				const skin = activeSkinEntry() ?? null;
				const body = document.body;
				const bodyAttr = skin === null ? null : body.getAttribute(skin.bodyAttr);
				if (skin !== null && bodyAttr !== null) body.removeAttribute(skin.bodyAttr);
				// Any live-applied skin also marks the body: capture those attrs too so
				// try-on over an applied skin restores them fully.
				const skinAttrs = [...body.attributes]
					.filter((attr) => /^data-dsh-/.test(attr.name) && attr.name !== "data-dsh-skin-gallery")
					.map((attr) => ({ name: attr.name, value: attr.value }));
				for (const attr of skinAttrs) body.removeAttribute(attr.name);
				const bodyStyle = body.getAttribute("style");
				const themeMeta = document.head.querySelector('meta[name="theme-color"]');
				const themeColor = themeMeta === null ? null : themeMeta.content;
				for (const prop of BACKDROP_PROPS) body.style.removeProperty(prop);
				const children = [...body.children];
				const chrome = new Set();
				for (const el of children) if (el.id !== "root" && isSkinChrome(el, skin)) chrome.add(el);
				const detached = [];
				for (let i = 0; i < children.length; i++) {
					const el = children[i];
					if (!chrome.has(el)) continue;
					let anchor = null;
					for (let j = i + 1; j < children.length; j++) {
						if (!chrome.has(children[j])) { anchor = children[j]; break; }
					}
					detached.push({ el, anchor, parent: null });
				}
				// Skin-owned conversation wallpaper layers live inside the chat container, not on body.
				for (const el of [...document.querySelectorAll("[data-skin-chrome='chat-bg']")]) {
					if (chrome.has(el)) continue;
					detached.push({ el, anchor: null, parent: el.parentNode, prepend: true });
				}
				for (const { el } of detached) el.remove();
				const clearObserver = new MutationObserver(() => {
					for (const prop of BACKDROP_PROPS) body.style.removeProperty(prop);
				});
				clearObserver.observe(body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
				return { skin, bodyAttr, skinAttrs, bodyStyle, themeColor, detached, clearObserver };
			}
			restoreActive(active) {
				const body = document.body;
				if (active.skin !== null && active.bodyAttr !== null) body.setAttribute(active.skin.bodyAttr, active.bodyAttr);
				for (const attr of active.skinAttrs ?? []) body.setAttribute(attr.name, attr.value);
				if (active.bodyStyle !== null) body.setAttribute("style", active.bodyStyle);
				else body.removeAttribute("style");
				if (active.themeColor !== null) {
					const meta = document.head.querySelector('meta[name="theme-color"]');
					if (meta !== null) meta.content = active.themeColor;
				}
				for (const item of active.detached) {
					if (item.prepend === true && item.parent !== null) {
						item.parent.prepend(item.el);
					} else {
						body.insertBefore(item.el, item.anchor !== null && item.anchor.parentNode === body ? item.anchor : null);
					}
				}
				active.clearObserver?.disconnect();
			}
		}
		//#endregion

		//#region src/client/chat-background.ts
		/**
		 * Custom conversation-area background: the user picks any local image as
		 * the chat backdrop (works with every skin). The image data URL persists
		 * in IndexedDB (localStorage cannot hold multi-MB art); the layer's
		 * opacity follows the shared --dsh-skin-opacity (100% = original image,
		 * 0% = invisible). The layer is injected into the stable
		 * [data-conversation-scroll] container behind the messages; skin-owned
		 * chat-bg layers hide under data-dsh-custom-chat-bg so the custom image
		 * always wins.
		 */
		const CHAT_BG_CROP_KEY = "dsh.skinGallery.chatBg.crop";
		const CHAT_BG_ASPECT_KEY = "dsh.skinGallery.chatBg.aspect";
		const CHAT_BG_IDB_NAME = "dsh-skin-gallery";
		const CHAT_BG_IDB_STORE = "chat-bg";
		const CHAT_BG_IDB_KEY = "image";
		const chatBgHostSelector = () => document.querySelector("[data-conversation-scroll]");

		function chatBgIdb() {
			try {
				return typeof indexedDB !== "undefined" ? indexedDB : null;
			} catch {
				return null;
			}
		}
		function chatBgIdbOpen() {
			return new Promise((resolve, reject) => {
				const idb = chatBgIdb();
				if (idb === null) {
					resolve(null);
					return;
				}
				const request = idb.open(CHAT_BG_IDB_NAME, 1);
				request.onupgradeneeded = () => {
					if (!request.result.objectStoreNames.contains(CHAT_BG_IDB_STORE)) {
						request.result.createObjectStore(CHAT_BG_IDB_STORE);
					}
				};
				request.onsuccess = () => resolve(request.result);
				request.onerror = () => reject(new Error("indexeddb-open"));
			});
		}
		function chatBgIdbGet() {
			return chatBgIdbOpen().then((db) => new Promise((resolve) => {
				if (db === null) {
					resolve(null);
					return;
				}
				const tx = db.transaction(CHAT_BG_IDB_STORE, "readonly");
				const request = tx.objectStore(CHAT_BG_IDB_STORE).get(CHAT_BG_IDB_KEY);
				request.onsuccess = () => resolve(typeof request.result === "string" ? request.result : null);
				request.onerror = () => resolve(null);
			}));
		}
		function chatBgIdbSet(dataUrl) {
			return chatBgIdbOpen().then((db) => new Promise((resolve) => {
				if (db === null) {
					resolve();
					return;
				}
				const tx = db.transaction(CHAT_BG_IDB_STORE, "readwrite");
				tx.objectStore(CHAT_BG_IDB_STORE).put(dataUrl, CHAT_BG_IDB_KEY);
				tx.oncomplete = () => resolve();
				tx.onerror = () => resolve();
			}));
		}
		function chatBgIdbClear() {
			return chatBgIdbOpen().then((db) => new Promise((resolve) => {
				if (db === null) {
					resolve();
					return;
				}
				const tx = db.transaction(CHAT_BG_IDB_STORE, "readwrite");
				tx.objectStore(CHAT_BG_IDB_STORE).delete(CHAT_BG_IDB_KEY);
				tx.oncomplete = () => resolve();
				tx.onerror = () => resolve();
			}));
		}
		/** Normalized crop { sx, sy, sw, sh } of the source image (0..1), or null for whole image. */
		function readChatBgCrop() {
			try {
				const raw = window.localStorage.getItem(CHAT_BG_CROP_KEY);
				if (raw === null || raw === "") return null;
				const parsed = JSON.parse(raw);
				if (typeof parsed !== "object" || parsed === null) return null;
				const sx = Number(parsed.sx);
				const sy = Number(parsed.sy);
				const sw = Number(parsed.sw);
				const sh = Number(parsed.sh);
				if (![sx, sy, sw, sh].every(Number.isFinite)) return null;
				if (sw <= 0 || sh <= 0 || sx < 0 || sy < 0 || sx + sw > 1.0001 || sy + sh > 1.0001) return null;
				return { sx, sy, sw, sh };
			} catch {
				return null;
			}
		}
		function writeChatBgCrop(crop) {
			try {
				if (crop === null) window.localStorage.removeItem(CHAT_BG_CROP_KEY);
				else window.localStorage.setItem(CHAT_BG_CROP_KEY, JSON.stringify(crop));
			} catch {
				// storage unavailable — the crop still applies for this session
			}
		}
		const SKIN_OPACITY_KEY = "dsh.skinGallery.skinOpacity";
		const SKIN_OPACITY_DEFAULT = 100;
		function readSkinOpacity() {
			try {
				const raw = window.localStorage.getItem(SKIN_OPACITY_KEY);
				if (raw === null) return SKIN_OPACITY_DEFAULT;
				const value = Number(raw);
				return Number.isFinite(value) ? Math.min(100, Math.max(0, Math.round(value))) : SKIN_OPACITY_DEFAULT;
			} catch {
				return SKIN_OPACITY_DEFAULT;
			}
		}
		function writeSkinOpacity(value) {
			try {
				window.localStorage.setItem(SKIN_OPACITY_KEY, String(Math.min(100, Math.max(0, Math.round(value)))));
			} catch {
				// storage unavailable — the slider still applies for this session
			}
		}
		/** Conversation-area aspect ratio (w/h); falls back to the last stored value, then 1.6. */
		function conversationAspect() {
			const host = chatBgHostSelector();
			if (host !== null) {
				const rect = host.getBoundingClientRect();
				if (rect.height > 0 && rect.width > 0) {
					const live = rect.width / rect.height;
					try { window.localStorage.setItem(CHAT_BG_ASPECT_KEY, String(live)); } catch { /* ignore */ }
					return live;
				}
			}
			try {
				const stored = Number(window.localStorage.getItem(CHAT_BG_ASPECT_KEY));
				if (Number.isFinite(stored) && stored > 0) return stored;
			} catch { /* ignore */ }
			return 1.6;
		}
		/** Long-side caps: the crop preview and the persisted wallpaper stay small so big downloads stay fast. */
		const CHAT_BG_PREVIEW_MAX = 1280;
		const CHAT_BG_STORE_MAX = 2560;
		/**
		 * Decode a picked image once and return a downscaled crop-preview URL and
		 * a downscaled stored/applied URL (original kept when already small).
		 * Aspect ratio is preserved, so normalized crop coordinates map 1:1.
		 */
		function chatBgPrepare(dataUrl) {
			return new Promise((resolve) => {
				const probe = new Image();
				probe.onload = () => {
					const w = probe.naturalWidth;
					const h = probe.naturalHeight;
					const long = Math.max(w, h);
					const downscale = (cap) => {
						if (long <= cap) return dataUrl;
						const scale = cap / long;
						const cw = Math.max(1, Math.round(w * scale));
						const ch = Math.max(1, Math.round(h * scale));
						try {
							const canvas = document.createElement("canvas");
							canvas.width = cw;
							canvas.height = ch;
							const context = canvas.getContext("2d");
							context.fillStyle = "#ffffff";
							context.fillRect(0, 0, cw, ch);
							context.drawImage(probe, 0, 0, cw, ch);
							return canvas.toDataURL("image/jpeg", 0.88);
						} catch {
							return dataUrl;
						}
					};
					resolve({ preview: downscale(CHAT_BG_PREVIEW_MAX), stored: downscale(CHAT_BG_STORE_MAX) });
				};
				probe.onerror = () => resolve({ preview: dataUrl, stored: dataUrl });
				probe.src = dataUrl;
			});
		}
		/**
		 * Owns the custom conversation background layer (its opacity follows the
		 * shared --dsh-skin-opacity: 100% = original image, 0% = invisible).
		 * Register once at gallery boot; dispose removes the layer.
		 */
		class ChatBgController {
			constructor() {
				this.layer = null;
				this.host = null;
				this.observer = null;
				this.resizeObserver = null;
				this.image = null;
				this.preview = null;
				this.crop = null;
				this.onChange = null;
			}
			notify() {
				if (typeof this.onChange === "function") this.onChange();
			}
			/** Set the normalized crop (or null for the whole image) and re-render the wallpaper. */
			setCrop(crop) {
				this.crop = crop;
				writeChatBgCrop(crop);
				this.applyLayerStyles();
				this.placeLayer();
				this.notify();
			}
			/** Background image/size/position: crop fills the conversation rect, no crop = whole image (contain). */
			applyLayerStyles() {
				if (this.layer === null) return;
				this.layer.style.backgroundImage = "url(" + JSON.stringify(this.image) + ")";
				this.layer.style.backgroundRepeat = "no-repeat";
				this.layer.style.opacity = "var(--dsh-skin-opacity, 1)";
				if (this.crop !== null) {
					this.layer.style.backgroundSize = (100 / this.crop.sw) + "% " + (100 / this.crop.sh) + "%";
					this.layer.style.backgroundPosition = (this.crop.sx / (1 - this.crop.sw) * 100) + "% " + (this.crop.sy / (1 - this.crop.sh) * 100) + "%";
				} else {
					this.layer.style.backgroundSize = "contain";
					this.layer.style.backgroundPosition = "center";
				}
			}
			/** Keep the fixed layer exactly over the conversation area (viewer-space rect, never scrolls). */
			placeLayer() {
				if (this.layer === null || this.host === null) return;
				const rect = this.host.getBoundingClientRect();
				this.layer.style.left = rect.left + "px";
				this.layer.style.top = rect.top + "px";
				this.layer.style.width = rect.width + "px";
				this.layer.style.height = rect.height + "px";
			}
			ensureLayer() {
				const host = chatBgHostSelector();
				if (host === null || this.image === null) return;
				if (this.layer !== null && this.host === host) {
					this.placeLayer();
					return;
				}
				this.host = host;
				const layer = document.createElement("div");
				layer.dataset.galleryChatBg = "";
				layer.setAttribute("aria-hidden", "true");
				layer.style.position = "fixed";
				layer.style.zIndex = "-1";
				layer.style.pointerEvents = "none";
				host.prepend(layer);
				this.layer = layer;
				this.applyLayerStyles();
				this.placeLayer();
				if (this.resizeObserver === null && typeof ResizeObserver !== "undefined") {
					this.resizeObserver = new ResizeObserver(() => this.placeLayer());
					this.resizeObserver.observe(host);
				}
				document.body.dataset.dshCustomChatBg = "";
			}
			startObserver() {
				if (this.observer !== null) return;
				this.observer = new MutationObserver(() => this.ensureLayer());
				this.observer.observe(document.body, { childList: true, subtree: true });
				window.addEventListener("resize", this.onResize);
			}
			onResize = () => this.placeLayer();
			async load() {
				this.crop = readChatBgCrop();
				const image = await chatBgIdbGet();
				if (typeof image === "string" && image !== "") {
					this.image = image;
					this.startObserver();
					this.ensureLayer();
				}
				this.notify();
			}
			/** Downscaled preview for the crop editor (kept separate from the stored wallpaper). */
			setPreview(url) {
				this.preview = url;
				this.notify();
			}
			/** Apply the wallpaper immediately; the IndexedDB persist runs in the background. */
			setImage(dataUrl) {
				this.image = dataUrl;
				this.startObserver();
				this.ensureLayer();
				this.notify();
				chatBgIdbSet(dataUrl).catch((error) => {
					console.warn("chat background persist failed", error);
				});
			}
			async clearImage() {
				this.image = null;
				this.crop = null;
				writeChatBgCrop(null);
				await chatBgIdbClear();
				if (this.layer !== null) {
					this.layer.remove();
					this.layer = null;
				}
				this.host = null;
				delete document.body.dataset.dshCustomChatBg;
				this.notify();
			}
			dispose() {
				this.observer?.disconnect();
				this.observer = null;
				this.resizeObserver?.disconnect();
				this.resizeObserver = null;
				window.removeEventListener("resize", this.onResize);
				if (this.layer !== null) {
					this.layer.remove();
					this.layer = null;
				}
			}
		}
		//#endregion

		//#region src/client/SkinGallerySection.tsx
		const OFFICIAL = "official";
		/** react/jsx-runtime factory shorthand: jsx(type, props) / jsxs(type, props). */
		const el = (type, props) => jsx.jsx(type, props);
		const els = (type, props) => jsx.jsxs(type, props);
		/**
		 * Crop editor: drag the aspect-locked frame to pick which part of the
		 * image becomes the conversation wallpaper; the bottom-right handle
		 * resizes the frame (aspect kept). Returns a normalized crop to the
		 * controller, or null for the whole image (contain, no distortion).
		 */
		function ChatBgCropModal(props) {
			const { image, aspect, onApply, onCancel, t } = props;
			const [natural, setNatural] = react.useState(null);
			const [sel, setSel] = react.useState(null);
			const [disp, setDisp] = react.useState(null);
			const imgRef = react.useRef(null);
			const dragRef = react.useRef(null);
			react.useEffect(() => {
				const probe = new Image();
				probe.onload = () => {
					const iw = probe.naturalWidth;
					const ih = probe.naturalHeight;
					const ratio = aspect > 0 ? aspect : 1.6;
					let w = iw;
					let h = iw / ratio;
					if (h > ih) {
						h = ih;
						w = ih * ratio;
					}
					if (w > iw) {
						w = iw;
						h = iw / ratio;
					}
					setNatural({ w: iw, h: ih });
					setSel({ x: (iw - w) / 2 / iw, y: (ih - h) / 2 / ih, sw: w / iw, sh: h / ih });
				};
				probe.src = image;
				return () => { probe.onload = null; probe.onerror = null; };
			}, [image, aspect]);
			react.useLayoutEffect(() => {
				const measure = () => {
					const imgEl = imgRef.current;
					if (imgEl === null) return;
					const rect = imgEl.getBoundingClientRect();
					if (rect.width > 0 && rect.height > 0) setDisp({ w: rect.width, h: rect.height });
				};
				measure();
				window.addEventListener("resize", measure);
				return () => window.removeEventListener("resize", measure);
			}, [natural]);
			const startDrag = (mode) => (event) => {
				if (sel === null || disp === null) return;
				event.preventDefault();
				event.stopPropagation();
				event.currentTarget.setPointerCapture(event.pointerId);
				dragRef.current = { mode, startX: event.clientX, startY: event.clientY, sel };
			};
			const onDragMove = (event) => {
				const drag = dragRef.current;
				if (drag === null || disp === null) return;
				const dx = (event.clientX - drag.startX) / disp.w;
				const dy = (event.clientY - drag.startY) / disp.h;
				if (drag.mode === "move") {
					const w = drag.sel.sw;
					const h = drag.sel.sh;
					setSel({ ...drag.sel, x: Math.min(Math.max(drag.sel.x + dx, 0), 1 - w), y: Math.min(Math.max(drag.sel.y + dy, 0), 1 - h) });
				} else {
					const ratio = drag.sel.sw / drag.sel.sh;
					let sw = Math.min(Math.max(drag.sel.sw + Math.max(dx, dy * ratio), 0.05), 1 - drag.sel.x);
					let sh = sw / ratio;
					if (sh > 1 - drag.sel.y) {
						sh = 1 - drag.sel.y;
						sw = sh * ratio;
					}
					setSel({ x: drag.sel.x, y: drag.sel.y, sw, sh });
				}
			};
			const endDrag = (event) => {
				dragRef.current = null;
				try { event.currentTarget.releasePointerCapture(event.pointerId); } catch { /* already released */ }
			};
			if (sel === null || disp === null) {
				return els("div", { className: "sgCropModal", children: [
					els("div", { className: "sgCropCard", children: [
						el("p", { className: "sgCropHint", children: t("cropLoading") }),
						els("div", { className: "sgCropBox", children: [
							el("img", { ref: imgRef, src: image, className: "sgCropImg", alt: "", draggable: "false", onLoad: () => { const imgEl = imgRef.current; if (imgEl === null) return; const rect = imgEl.getBoundingClientRect(); if (rect.width > 0 && rect.height > 0) setDisp({ w: rect.width, h: rect.height }); } })
						] }),
						els("div", { className: "sgCropActions", children: [
							el("button", { type: "button", className: "sgBtn", onClick: onCancel, children: t("cropCancel") })
						] })
					] })
				] });
			}
			const frameStyle = {
				left: (sel.x * disp.w) + "px",
				top: (sel.y * disp.h) + "px",
				width: (sel.sw * disp.w) + "px",
				height: (sel.sh * disp.h) + "px"
			};
			return els("div", { className: "sgCropModal", children: [
				els("div", { className: "sgCropCard", children: [
					el("p", { className: "sgCropHint", children: t("cropHint") }),
					els("div", { className: "sgCropBox", children: [
						el("img", { ref: imgRef, src: image, className: "sgCropImg", alt: "", draggable: "false", onLoad: () => { const imgEl = imgRef.current; if (imgEl === null) return; const rect = imgEl.getBoundingClientRect(); if (rect.width > 0 && rect.height > 0) setDisp({ w: rect.width, h: rect.height }); } }),
						el("div", {
							className: "sgCropFrame",
							style: frameStyle,
							onPointerDown: startDrag("move"),
							onPointerMove: onDragMove,
							onPointerUp: endDrag,
							children: el("div", { className: "sgCropHandle", onPointerDown: startDrag("resize"), onPointerMove: onDragMove, onPointerUp: endDrag })
						})
					] }),
					els("div", { className: "sgCropActions", children: [
						el("button", { type: "button", className: "sgBtn sgBtnPrimary", onClick: () => onApply(sel), children: t("cropApply") }),
						el("button", { type: "button", className: "sgBtn", onClick: () => onApply(null), children: t("cropFull") }),
						el("button", { type: "button", className: "sgBtn", onClick: onCancel, children: t("cropCancel") })
					] })
				] })
			] });
		}
		/** Any enabled skin bundle in the boot manifest (center/gallery excluded). */
		const SKIN_BUNDLE_URL_RE = /\/plugins\/@(?:linxin666|dsh-external)\/dsh-client-ui-skin-(?!center|gallery)[a-z0-9-]+\/client\.js/;

		function manifestHasSkin(html, target) {
			if (target === null) return !SKIN_BUNDLE_URL_RE.test(html);
			return html.includes(`/plugins/@dsh-external/dsh-client-ui-skin-${target}/client.js`);
		}

		/** Poll the host state until the config watcher reports the target, or time out. */
		function confirmActive(target) {
			return new Promise((resolve) => {
				const expected = target === OFFICIAL ? "none" : target;
				let tries = 0;
				const tick = () => {
					tries += 1;
					fetch("/api/skin-center/state").then(async (response) => {
						const payload = await response.json().catch(() => null);
						if (response.ok && payload?.ok === true && payload.active === expected) { resolve(true); return; }
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					}).catch(() => {
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					});
				};
				tick();
			});
		}

		/** Poll the served document until the boot manifest enables the target, or time out. */
		function manifestReady(target) {
			return new Promise((resolve) => {
				const expected = target === OFFICIAL ? null : target;
				let tries = 0;
				const tick = () => {
					tries += 1;
					fetch(window.location.href, { cache: "no-store" }).then(async (response) => {
						const html = await response.text().catch(() => null);
						if (html !== null && manifestHasSkin(html, expected)) { resolve(true); return; }
						// The desktop app does not hot-reload patches: a few probes
						// are enough to declare "applied, pending restart" instead of
						// leaving the user staring at a spinner.
						if (tries >= 12) resolve(false);
						else window.setTimeout(tick, 500);
					}).catch(() => {
						if (tries >= 12) resolve(false);
						else window.setTimeout(tick, 500);
					});
				};
				tick();
			});
		}

		/**
		 * The 界面皮肤 settings section: a grid of skin cards (default skin,
		 * whale-girl skin, and the original anime-girl skins) with live try-on,
		 * one-click apply, and two authoritative badges:
		 *  - 使用中: the skin actually mounted in this page (boot graph or live-applied);
		 *  - 已应用: the skin the user last applied (home patch) — live-applied
		 *    immediately, no restart needed; the patch persists it across restarts.
		 */
		function SkinGallerySection(props) {
			const controller = props.controller;
			const bg = props.bgController;
			const t = props.t ?? ((key) => key);
			const bootState = react.useMemo(() => {
				const active = activeSkinEntry();
				const other = bootEntryIds().some((id) => (
					/@(?:linxin666|dsh-external)\/dsh-client-ui-skin-/.test(id)
					&& id !== "@linxin666/dsh-client-ui-skin-center"
					&& id !== "@dsh-external/dsh-client-ui-skin-gallery"
					&& !CATALOG.some((entry) => entry.package === id)
				));
				return { activeId: active?.id ?? (other ? "other" : "official"), other };
			}, []);
			/** The skin id the host patch currently activates ("none" -> official), or null while unknown. */
			const [stateActive, setStateActive] = react.useState(null);
			const [tryingId, setTryingId] = react.useState(null);
			const [tryingOfficial, setTryingOfficial] = react.useState(false);
			const [applyingId, setApplyingId] = react.useState(null);
			const [error, setError] = react.useState(null);
			const [notice, setNotice] = react.useState(null);
			const [skinOpacity, setSkinOpacity] = react.useState(() => readSkinOpacity());
			const [bgActive, setBgActive] = react.useState((bg?.image ?? null) !== null);
			const [bgMsg, setBgMsg] = react.useState(null);
			const fileRef = react.useRef(null);
			const [cropOpen, setCropOpen] = react.useState(false);
			const [pendingImage, setPendingImage] = react.useState(null);
			const mounted = react.useRef(false);
			react.useEffect(() => {
				mounted.current = true;
				let alive = true;
				fetch("/api/skin-center/state").then(async (response) => {
					const payload = await response.json().catch(() => null);
					if (alive && response.ok && payload?.ok === true && typeof payload.active === "string") {
						setStateActive(payload.active === "none" ? "official" : payload.active);
					}
				}).catch(() => {});
				return () => {
					// The try-on session is owned by the plugin-level controller,
					// NOT this component: closing the settings dialog must keep the
					// tried-on skin live so the user can look at the whole app.
					alive = false;
					mounted.current = false;
				};
			}, [controller]);

			react.useEffect(() => {
				if (bg === undefined || bg === null) return;
				const sync = () => {
					setBgActive((bg.image ?? null) !== null);
				};
				sync();
				bg.onChange = sync;
				return () => {
					if (bg.onChange === sync) bg.onChange = null;
				};
			}, [bg]);

			const [, forceTick] = react.useReducer((x) => x + 1, 0);
			react.useEffect(() => {
				const sync = () => forceTick();
				controller.onChange = sync;
				return () => {
					if (controller.onChange === sync) controller.onChange = null;
				};
			}, [controller]);
			const effective = controller.appliedEntry?.id ?? bootState.activeId;
			const pendingId = stateActive;
			const nameOf = (id) => CATALOG.find((entry) => entry.id === id)?.name ?? id;

			const tryOn = (entry) => {
				setError(null);
				setNotice(null);
				controller.tryOn(entry).then(() => {
					if (!mounted.current) return;
					setTryingId(entry.id);
					setTryingOfficial(false);
				}).catch(() => {
					if (!mounted.current) return;
					setError(t("tryOnError"));
					setTryingId(null);
					setTryingOfficial(false);
				});
			};
			const tryOnOfficial = () => {
				setError(null);
				setNotice(null);
				try {
					controller.tryOnOfficial();
				} catch {
					setError(t("tryOnError"));
					setTryingOfficial(false);
					return;
				}
				setTryingId(null);
				setTryingOfficial(true);
			};
			const exitTryOn = () => {
				controller.exit();
				setTryingId(null);
				setTryingOfficial(false);
			};
			const applySkin = (target) => {
				setError(null);
				setNotice(null);
				setApplyingId(target);
				fetch("/api/skin-center/apply", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(target === OFFICIAL ? { official: true } : { skin: target })
				}).then(async (response) => {
					const payload = await response.json().catch(() => null);
					if (!response.ok || payload?.ok !== true) throw new Error(payload?.error ?? `HTTP ${response.status}`);
					setApplyingId(null);
					confirmActive(target).then((confirmed) => {
						if (!mounted.current) return;
						if (!confirmed) {
							setError(t("appliedUnconfirmed"));
							return;
						}
						// The patch is written: reflect it and live-apply it right away,
						// so the desktop surface switches without a restart. The patch
						// persists the choice across restarts.
						setStateActive(target);
						setNotice(t("appliedLive"));
						try {
							if (target === OFFICIAL) {
								controller.applyLiveOfficial();
							} else {
								const entry = CATALOG.find((item) => item.id === target);
								if (entry !== undefined) controller.applyLive(entry);
							}
						} catch (cause) {
							console.warn("skin-gallery: live apply failed", cause);
						}
						manifestReady(target).then((ready) => {
							if (ready && mounted.current) window.location.reload();
						});
					});
				}).catch((cause) => {
					if (!mounted.current) return;
					setApplyingId(null);
					const detail = cause instanceof Error ? cause.message : String(cause);
					setError(`${t("applyFailed")}（${detail}）`);
				});
			};

			const pickBgImage = () => { fileRef.current?.click(); };
			const onBgFile = (event) => {
				const file = event.target.files?.[0];
				event.target.value = "";
				if (file === undefined || bg === undefined || bg === null) return;
				if (!file.type.startsWith("image/")) { setBgMsg(t("bgNotImage")); return; }
				const reader = new FileReader();
				reader.onload = () => {
					// Open the crop editor right away; downscale + persist run in the background.
					setPendingImage(String(reader.result));
					setCropOpen(true);
					chatBgPrepare(String(reader.result)).then(({ preview, stored }) => {
						if (bg === undefined || bg === null) return;
						bg.setPreview(preview);
						bg.setImage(stored);
						setPendingImage(null);
						setBgMsg(t("bgSaved"));
					}).catch(() => setBgMsg(t("bgReadError")));
				};
				reader.onerror = () => setBgMsg(t("bgReadError"));
				reader.readAsDataURL(file);
			};
			const onSkinOpacity = (event) => {
				const value = Number(event.target.value);
				setSkinOpacity(value);
				writeSkinOpacity(value);
				document.body.style.setProperty("--dsh-skin-opacity", (value / 100).toFixed(2));
			};
			const clearBgImage = () => {
				if (bg === undefined || bg === null) return;
				setPendingImage(null);
				setCropOpen(false);
				bg.clearImage().then(() => setBgMsg(t("bgCleared")));
			};
			const openCrop = () => setCropOpen(true);
			const applyCrop = (crop) => {
				if (bg === undefined || bg === null) return;
				bg.setCrop(crop);
				setPendingImage(null);
				setCropOpen(false);
				setBgMsg(crop === null ? t("cropReset") : t("cropApplied"));
			};

			const cards = CATALOG.slice().sort((a, b) => a.order - b.order).map((entry) => {
				const active = entry.id === effective;
				const pending = pendingId !== null && entry.id === pendingId && pendingId !== effective;
				const trying = entry.id === tryingId || (entry.official && tryingOfficial);
				const applying = entry.id === applyingId || (entry.official && applyingId === OFFICIAL);
				const preview = entry.preview ?? "#ffffff";
				const previewDark = entry.previewDark ?? preview;
				return els("div", {
					key: entry.id,
					className: "sgCard" + (active ? " sgActiveCard" : ""),
					children: [
						els("div", {
							className: "sgPreview",
							style: { background: `linear-gradient(135deg, ${preview} 0%, ${previewDark} 100%)` },
							children: [
								els("span", {
									className: "sgBadges",
									children: [
										active && el("span", { className: "sgBadge sgBadgeActive sgBadgeLeft", children: t("active") }),
										pending && el("span", { className: "sgBadge sgBadgePending sgBadgeLeft", children: t("pending") }),
										trying && el("span", { className: "sgBadge sgBadgeTrying sgBadgeRight", children: t("trying") })
									]
								}),
								el("span", { dangerouslySetInnerHTML: { __html: entry.art } })
							]
						}),
						els("div", {
							className: "sgBody",
							children: [
								els("div", {
									className: "sgNameRow",
									children: [
										el("span", { className: "sgName", children: entry.name }),
										el("span", { className: "sgNameEn", children: entry.nameEn })
									]
								}),
								el("p", { className: "sgTagline", children: entry.tagline }),
								el("span", { className: "sgMeta", children: t("author") + entry.author }),
								els("div", {
									className: "sgActions",
									children: [
										trying
											? el("button", { type: "button", className: "sgBtn", onClick: exitTryOn, children: t("exitTryOn") })
											: el("button", {
												type: "button",
												className: "sgBtn",
												disabled: active || applying,
												onClick: () => { if (entry.official) tryOnOfficial(); else tryOn(entry); },
												children: t("tryOn")
											}),
										el("button", {
											type: "button",
											className: "sgBtn sgBtnPrimary",
											disabled: active || pending || applying,
											onClick: () => applySkin(entry.official ? OFFICIAL : entry.id),
											children: applying ? t("applying") : active ? t("active") : pending ? t("pending") : t("apply")
										})
									]
								})
							]
						})
					]
				});
			});

			return els("section", {
				className: "sgSection",
				children: [
					els("div", {
						className: "sgHead",
						children: [
							el("h2", { className: "sgTitle", children: t("title") }),
							el("p", { className: "sgIntro", children: t("intro") })
						]
					}),
					error !== null && el("p", { className: "sgError", children: error }),
					notice !== null && el("p", { className: "sgNotice", children: notice }),
					pendingId !== null && pendingId !== effective && effective !== "other"
						&& el("p", {
							className: "sgPendingHint",
							children: t("pendingHint").replace("{name}", nameOf(pendingId)).replace("{active}", nameOf(effective))
						}),
					bootState.other && el("p", { className: "sgError", children: t("otherActive") }),
					el("div", { className: "sgGrid", children: cards }),
					els("div", {
						className: "sgBgCard",
						children: [
							els("div", { className: "sgBgHead", children: [
								el("span", { className: "sgBgTitle", children: t("skinOpacityTitle") }),
								el("p", { className: "sgBgHint", children: t("skinOpacityHint") })
							]}),
							els("div", { className: "sgBgRow", children: [
								el("span", { className: "sgBgLabel", children: t("skinOpacity") }),
								el("input", { type: "range", className: "sgBgRange", min: "0", max: "100", value: skinOpacity, onChange: onSkinOpacity }),
								el("span", { className: "sgBgVal", children: skinOpacity + "%" })
							]})
						]
					}),
					els("div", {
						className: "sgBgCard",
						children: [
							els("div", { className: "sgBgHead", children: [
								el("span", { className: "sgBgTitle", children: t("chatBgTitle") }),
								el("p", { className: "sgBgHint", children: t("chatBgIntro") })
							]}),
							els("div", { className: "sgBgRow", children: [
								el("button", { type: "button", className: "sgBtn sgBgBtn", onClick: pickBgImage, children: t("chooseImage") }),
								bgActive && el("button", { type: "button", className: "sgBtn sgBgBtn", onClick: openCrop, children: t("cropBtn") }),
								bgActive && el("button", { type: "button", className: "sgBtn sgBgBtn", onClick: clearBgImage, children: t("clearBg") }),
								el("input", { ref: fileRef, type: "file", accept: "image/*", style: { display: "none" }, onChange: onBgFile })
							]}),
							bgMsg !== null && el("p", { className: "sgBgMsg", children: bgMsg })
						]
					}),
					cropOpen && bg !== undefined && bg !== null && (bg.preview !== null || pendingImage !== null || bg.image !== null)
						&& el(ChatBgCropModal, { image: (bg.preview ?? pendingImage ?? bg.image), aspect: conversationAspect(), onApply: applyCrop, onCancel: () => { setPendingImage(null); setCropOpen(false); }, t }),
					el("p", { className: "sgNote", children: t("note") })
				]
			});
		}
		//#endregion

		//#region src/client/locales.ts
		const zh = {
			title: "界面皮肤",
			intro: "选择一款皮肤：界面主题色、装饰与按钮样式都会随之改变。可先「试穿」预览（退出即完全还原）；「应用」即时生效、无需重启，配置写入后重启依然保留。",
			note: "皮肤只做呈现：只改变浏览器 DOM 与样式，不触及模型请求。第 1 项为官方默认皮肤，其余为本仓库原创免费皮肤。",
			active: "使用中",
			pending: "已应用·待重启",
			pendingHint: "已应用「{name}」，但界面尚未重载——本机桌面端需重启 DSH Desktop 后生效（当前生效：「{active}」）。",
			trying: "试穿中",
			tryOn: "试穿",
			exitTryOn: "退出试穿",
			apply: "应用",
			applying: "应用中…",
			applyFailed: "应用失败",
			appliedUnconfirmed: "已写入配置，但状态未能确认——请重启 DSH Desktop 后生效",
			appliedLive: "已应用并即时生效（无需重启，重启后依然保留）",
			appliedRestart: "已写入配置并确认——重启 DSH Desktop 后生效。",
			tryOnError: "试穿失败，详见控制台",
			otherActive: "当前生效的是旧皮肤中心启用的其他皮肤——在本栏「应用」任一皮肤或官方默认即可切换。",
			author: "作者：",
			chatBgTitle: "对话区背景",
			chatBgIntro: "选择本机任意图片作为对话区背景（任何皮肤通用，自动保存）；壁纸不透明度跟随「皮肤不透明度」：100% 为原图，50% 半透明，0% 全透明。",
			chooseImage: "选择图片…",
			clearBg: "清除背景",
			skinOpacityTitle: "皮肤不透明度",
			skinOpacityHint: "调节当前选中皮肤的整体不透明度（背景、装饰与对话区壁纸联动）：100% 为原图，50% 为半透明，0% 为全透明，每一档实时生效。",
			skinOpacity: "不透明度",
			bgNotImage: "请选择图片文件",
			bgReadError: "图片读取失败",
			bgSaved: "已设置为对话区背景（自动保存，随时可替换）",
			bgCleared: "已清除自定义背景",
			cropBtn: "框选裁剪…",
			cropHint: "拖动白色框选择画面区域，右下角可缩放（保持对话区比例）；壁纸固定不随对话滚动。",
			cropLoading: "正在处理图片…",
			cropApply: "应用",
			cropFull: "整图（不变形）",
			cropCancel: "取消",
			cropApplied: "已应用框选区域为对话区壁纸",
			cropReset: "已恢复为整图壁纸"
		};
		const en = {
			title: "Skins",
			intro: "Pick a skin: the interface theme, decorations and buttons change with it. Try one on for a live preview (fully restored on exit); Apply takes effect immediately — no restart needed, and the config persists across restarts.",
			note: "Skins are presentation-only: they change browser DOM and styles, never model requests. Item 1 is the official default; the rest are original free skins from this repository.",
			active: "Active",
			pending: "Applied · restart pending",
			pendingHint: "Applied \"{name}\", but the UI has not reloaded — this desktop build needs a DSH Desktop restart to activate it (currently active: \"{active}\").",
			trying: "Trying",
			tryOn: "Try on",
			exitTryOn: "Exit try-on",
			apply: "Apply",
			applying: "Applying…",
			applyFailed: "Apply failed",
			appliedUnconfirmed: "Written to config, but the state could not be confirmed — restart DSH Desktop for it to take effect",
			appliedLive: "Applied and live now — no restart needed (kept after restart)",
			appliedRestart: "Written and confirmed — restart DSH Desktop for it to take effect.",
			tryOnError: "Try-on failed; see the console",
			otherActive: "Another skin enabled through the legacy skin center is currently active — apply any skin here (or the official default) to switch.",
			author: "By ",
			chatBgTitle: "Chat Background",
			chatBgIntro: "Pick any local image as the conversation background (works with every skin, auto-saved); its opacity follows Skin Opacity: 100% = original image, 50% = half, 0% = invisible.",
			chooseImage: "Choose image…",
			clearBg: "Clear",
			skinOpacityTitle: "Skin Opacity",
			skinOpacityHint: "Adjust the overall opacity of the currently selected skin (backdrop, decorations and the conversation wallpaper together): 100% = original, 50% = half transparent, 0% = fully transparent — every step takes effect live.",
			skinOpacity: "Opacity",
			bgNotImage: "Please choose an image file",
			bgReadError: "Failed to read the image",
			bgSaved: "Set as conversation background (auto-saved; replace anytime)",
			bgCleared: "Custom background cleared",
			cropBtn: "Crop…",
			cropHint: "Drag the white frame to pick the region; the corner handle resizes it (conversation ratio kept). The wallpaper stays fixed while the chat scrolls.",
			cropLoading: "Loading image…",
			cropApply: "Apply",
			cropFull: "Whole image",
			cropCancel: "Cancel",
			cropApplied: "Crop applied as the conversation wallpaper",
			cropReset: "Restored to the whole image"
		};
		//#endregion

		//#region src/client/index.ts
		/** Locale namespace owned by this plugin. */
		const NS = "skinGallery";
		/** Required services: slots + locale (settings section entry). */
		const inject = ["slots", "locale"];
		/**
		 * Register the gallery dictionaries, the body scope attribute, and the
		 * 界面皮肤 settings section between 模型 (order 10) and 插件 (order 15).
		 * @param ctx - client root context.
		 */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, { zh, en }), "ui-skin-gallery: dictionaries");
			ctx.effect(() => {
				document.body.dataset.dshSkinGallery = "";
				return () => {
					delete document.body.dataset.dshSkinGallery;
				};
			}, "ui-skin-gallery: body scope");
			ctx.effect(() => {
				document.body.style.setProperty("--dsh-skin-opacity", (readSkinOpacity() / 100).toFixed(2));
				return () => document.body.style.removeProperty("--dsh-skin-opacity");
			}, "ui-skin-gallery: skin opacity");
			const controller = new TryOnController();
			const bgController = new ChatBgController();
			ctx.effect(() => {
				bgController.load();
				return () => bgController.dispose();
			}, "ui-skin-gallery: chat background");
			ctx.effect(() => {
				// The desktop host does not hot-reload the home patch, so after any
				// apply the served boot graph still lacks the chosen skin. Live-apply
				// the patch's active skin on every page load — the visual switch then
				// never needs a restart; a real restart only makes it native.
				let alive = true;
				fetch("/api/skin-center/state").then(async (response) => {
					if (!alive) return;
					const payload = await response.json().catch(() => null);
					if (!(response.ok && payload?.ok === true && typeof payload.active === "string")) return;
					const boot = activeSkinEntry();
					const target = payload.active === "none" ? null : CATALOG.find((entry) => entry.id === payload.active) ?? null;
					if ((target?.id ?? null) === (boot?.id ?? null)) return;
					try {
						if (target === null) controller.applyLiveOfficial();
						else await controller.applyLive(target);
					} catch (error) {
						console.warn("skin-gallery: applied-skin live restore failed", error);
					}
				}).catch(() => {});
				return () => {
					alive = false;
				};
			}, "ui-skin-gallery: applied skin live restore");
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "skin-gallery",
				order: 12,
				label: () => ctx.locale.bind(NS)("title"),
				locale: NS,
				inject: () => ({ controller, bgController })
			}, SkinGallerySection));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
