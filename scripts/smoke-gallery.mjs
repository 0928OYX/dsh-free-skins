/**
 * Local smoke test for the skin-gallery client bundle (no build, no GUI).
 *
 * Loads the bundle in jsdom, executes its factory against the real react /
 * react-dom modules, mounts apply() on a mock cordis context, then renders
 * the settings-section component with react-dom/server to surface any
 * runtime error before the bundle ever reaches the real boot graph.
 *
 * Usage: node scripts/smoke-gallery.mjs
 */
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const profileModules = createRequire('C:/Users/28974/.dsh/profiles/desktop/node_modules/react/package.json')
const React = profileModules('react')
const jsxRuntime = profileModules('react/jsx-runtime')
const { renderToString } = profileModules('react-dom/server')
const { JSDOM } = require('C:/Users/28974/Desktop/deepseek-harness-master/node_modules/jsdom/lib/api.js')

const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
  url: 'http://127.0.0.1:57045/',
  pretendToBeVisual: true,
})
const { window } = dom
globalThis.window = window
globalThis.document = window.document
globalThis.MutationObserver = window.MutationObserver

let registered = null
window.__ModuleLoader__ = {
  load: (spec) => {
    registered = spec
  },
}
window.__DSH_BOOT__ = {
  entries: [
    { id: '@dsh-external/dsh-client-ui-skin-maid-atelier' },
    { id: '@linxin666/dsh-client-ui-skin-center' },
  ],
}
window.__DSH_MODULES__ = {
  invalidate() {},
  import: async () => ({ apply: () => {} }),
}

const bundle = readFileSync('C:/Users/28974/Desktop/dsh-deep-whale/skin-gallery/lib/client.js', 'utf8')
window.eval(bundle)
if (registered === null) throw new Error('bundle did not register on __ModuleLoader__')
console.log(`registered id: ${registered.id}`)

const exported = registered.factory((specifier) => {
  if (specifier === 'react') return React
  if (specifier === 'react/jsx-runtime') return jsxRuntime
  throw new Error(`unexpected require: ${specifier}`)
})
console.log(`exports: ${Object.keys(exported)}`)

let sectionRegistration = null
const ctx = {
  effect(callback) {
    callback()
    return () => {}
  },
  locale: {
    register(ns, dicts) {
      console.log(`locale.register ${ns}: ${Object.keys(dicts)}`)
    },
    bind(ns) {
      return (key) => `[${ns}:${key}]`
    },
  },
  slots: {
    inject(name, callback) {
      console.log(`slots.inject ${name}`)
      sectionRegistration = callback()
    },
    register(options, component) {
      return { options, component }
    },
  },
}
exported.apply(ctx)
if (sectionRegistration === null) throw new Error('settings.section was not registered')
console.log(`section: id=${sectionRegistration.options.id} order=${sectionRegistration.options.order} label=${sectionRegistration.options.label()}`)
console.log(`section inject keys: ${Object.keys(sectionRegistration.options.inject())}`)

const { component, options } = sectionRegistration
const injected = options.inject()
const t = (key) => `[${key}]`
const html = renderToString(React.createElement(component, { ...injected, t }))
console.log(`render length: ${html.length}`)
console.log(`has cards: ${(html.match(/sgCard/g) ?? []).length} (expected 18 = 9 cards x 2 class mentions)`)
if (!html.includes('sgBgCard')) throw new Error('chat background card is missing')
if (!html.includes('sgBgRange')) throw new Error('skin opacity slider missing')
if (!html.includes('[proTitle]')) throw new Error('backup/update card missing')

// Render again with a custom chat background active (image + crop controls).
const fakeBg = {
	image: 'data:image/png;base64,AAAA',
	opacity: 60,
	onChange: null,
};
const htmlBg = renderToString(React.createElement(component, { controller: injected.controller, bgController: fakeBg, t }));
if (!htmlBg.includes('[cropBtn]')) throw new Error('crop button missing')
console.log(`chat bg controls: slider=${htmlBg.includes('sgBgRange')} cropBtn=${htmlBg.includes('[cropBtn]')}`)

// Simulate a second registration guard: style tag injection must be idempotent.
window.eval(bundle)
console.log(`style tags: ${window.document.querySelectorAll('style[data-plugin="@dsh-external/dsh-client-ui-skin-gallery"]').length}`)

console.log('SMOKE OK')
