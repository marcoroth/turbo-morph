import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'

import { version } from './package.json'
const banner = `/*\n * TurboMorph ${version}\n */`

export default [
  {
    input: 'src/index.ts',
    external: [
      '@hotwired/turbo',
      'morphdom'
    ],
    output: [
      {
        name: 'TurboMorph',
        file: 'dist/turbo-morph.umd.js',
        format: 'umd',
        banner,
        globals: {
          '@hotwired/turbo': 'Turbo',
          'morphdom': 'morphdom'
        }
      },
      {
        file: 'dist/turbo-morph.js',
        format: 'es',
        banner
      }
    ],
    plugins: [
      resolve(),
      typescript(),
      filesize()
    ],
    watch: {
      include: 'src/**'
    }
  }
]
