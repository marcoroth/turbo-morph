import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

import { version } from './package.json'
const year = new Date().getFullYear()
const banner = `/*\TurboMorph ${version}\n*/`

const minify = () => {
  return terser({
    mangle: true,
    compress: true
  })
}

const plugins = [
  resolve(),
  typescript(),
  filesize(),
  // minify()
]

const esConfig = {
  format: 'es'
}

const umdConfig = {
  name: 'TurboMorph',
  format: 'umd',
  banner,
  globals: {
    '@hotwired/turbo': 'Turbo',
    'morphdom': 'morphdom',
    'alpinejs': 'Alpine',
    '@alpinejs/morph': 'Alpine.morph',
    'diff-dom': 'DiffDOM',
    'diffhtml': 'diffhtml',
    'idiomorph': 'Idiomorph',
    'nanomorph': 'nanomorph',
    'nanohtml': 'nanohtml',
  }
}

const external = [
  '@hotwired/turbo',
  'alpinejs',
  '@alpinejs/morph',
  'nanohtml'
]

const defaultPlugin = {
  input: 'src/index.ts',
  output: [
    { ...umdConfig, file: 'dist/index.umd.js' },
    { ...esConfig, file: 'dist/index.mjs' },
  ],
  plugins,
  external,
  watch: { include: 'src/index.ts' }
}

const exportConfigFor = (plugin) => {
  external.push(plugin)
  return {
    input: `src/plugins/${plugin}.ts`,
    output: [
      { ...umdConfig, file: `dist/plugins/${plugin}.umd.js` },
      { ...esConfig, file: `dist/plugins/${plugin}.mjs` }
    ],
    external,
    plugins,
    watch: { include: `src/plugins/${plugin}.ts` }
  }
}


export default [
  defaultPlugin,
  exportConfigFor('morphdom'),
  exportConfigFor('alpine'),
  exportConfigFor('nanomorph'),
  exportConfigFor('idiomorph'),
  exportConfigFor('micromorph'),
  exportConfigFor('diff-dom'),
  exportConfigFor('diffhtml'),
]
