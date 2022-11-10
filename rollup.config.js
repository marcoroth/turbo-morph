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
    'morphdom': 'morphdom'
  }
}


export default [
  {
    input: 'src/index.ts',
    external: [
      '@hotwired/turbo',
      'morphdom'
    ],
    output: [
      { ...umdConfig, file: 'dist/index.umd.js' },
      { ...esConfig, file: 'dist/index.js' }
    ],
    plugins,
    watch: {
      include: 'src/index.ts'
    }
  },
  {
    input: 'src/plugins/alpine.ts',
    external: [
      '@hotwired/turbo',
      'alpinejs',
      '@alpinejs/morph',
    ],
    output: [
      { ...umdConfig, file: 'dist/alpine.umd.js', globals: { ...umdConfig.globals, 'alpinejs': 'Alpine' } },
      { ...esConfig, file: 'dist/alpine.js' }
    ],
    plugins,
    watch: {
      include: 'src/plugins/alpine.ts'
    }
  },
]
