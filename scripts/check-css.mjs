// Ad-hoc CSS extraction check for generated skin bundles.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const base = fileURLToPath(new URL('../skins/', import.meta.url))
for (const id of ['sakura-miko', 'stella-witch', 'azure-blade', 'scarlet-noir', 'mint-catgirl', 'gold-alchemist', 'shorekeeper']) {
  const source = readFileSync(base + id + '/lib/client.js', 'utf8')
  const match = /const CSS = "((?:[^"\\]|\\.)*)"/.exec(source)
  if (match === null) {
    console.log(id + ': CSS NOT FOUND')
    continue
  }
  const css = match[1]
  const lightCount = (css.match(/--dsw-alias-/g) ?? []).length
  const keyframes = /@keyframes [a-z-]+-fall/.test(css)
  console.log(id + ': css=' + css.length + ' aliases=' + lightCount + ' keyframes=' + keyframes)
}
