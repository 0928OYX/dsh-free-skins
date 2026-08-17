/**
 * Local smoke test for one generated skin bundle.
 * Usage: node scripts/smoke-skin.mjs <skin-id>
 */
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const repoRoot = fileURLToPath(new URL('..', import.meta.url))

let JSDOM
try {
  ({ JSDOM } = require('jsdom/lib/api.js'))
} catch {
  // fallback for machines that have jsdom only in a sibling harness checkout
  ({ JSDOM } = require('C:/Users/28974/Desktop/deepseek-harness-master/node_modules/jsdom/lib/api.js'))
}

const skinId = process.argv[2] ?? 'sakura-miko'
const dom = new JSDOM('<!doctype html><html><head><meta name="theme-color" content="#000000"></head><body></body></html>', {
  url: 'http://127.0.0.1:57045/',
  pretendToBeVisual: true,
})
const { window } = dom
globalThis.window = window
globalThis.document = window.document
globalThis.MutationObserver = window.MutationObserver

let registered = null
window.__ModuleLoader__ = { load: (spec) => { registered = spec } }

const bundle = readFileSync(repoRoot + `skins/${skinId}/lib/client.js`, 'utf8')
window.eval(bundle)
if (registered === null) throw new Error('bundle did not register')
console.log(`registered id: ${registered.id}`)
const exported = registered.factory(() => {
  throw new Error('skin bundles must not require anything')
})
console.log(`exports: ${Object.keys(exported)}`)

const body = window.document.body
const disposers = []
const ctx = {
  effect(callback) {
    const dispose = callback()
    disposers.push(dispose)
    return () => {}
  },
}

exported.apply(ctx)
console.log(`bodyAttr: ${body.getAttribute('data-dsh-' + skinId) !== null}`)
console.log(`backdrop set: ${body.style.getPropertyValue('background-image').slice(0, 60)}...`)
console.log(`chrome nodes: ${[...body.children].filter((el) => el.getAttribute('data-skin-chrome') !== null).map((el) => el.getAttribute('data-skin-chrome')).join(',')}`)
console.log(`particles: ${body.querySelectorAll("[data-skin-chrome='particles'] .sp").length}`)
console.log(`title: ${window.document.title}`)
console.log(`style tags: ${window.document.querySelectorAll(`style[data-plugin="@dsh-external/dsh-client-ui-skin-${skinId}"]`).length}`)

// theme flip should re-write the backdrop
body.setAttribute('data-ds-dark-theme', '')
await new Promise((resolve) => window.setTimeout(resolve, 20))
console.log(`dark backdrop: ${body.style.getPropertyValue('background-image').slice(0, 60)}...`)

// dispose must restore everything
for (const dispose of disposers) dispose()
console.log(`after dispose: attr=${body.getAttribute('data-dsh-' + skinId)} chrome=${[...body.children].filter((el) => el.getAttribute('data-skin-chrome') !== null).length} backdrop=${body.style.getPropertyValue('background-image') === '' ? 'cleared' : body.style.getPropertyValue('background-image').slice(0, 40)}`)
console.log('SMOKE OK')
