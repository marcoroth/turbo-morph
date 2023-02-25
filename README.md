<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.png">
    <img src="assets/hero.png" height="340px">
  </picture>
</p>

<h1 align="center">Turbo Morph</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/turbo-morph">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/turbo-morph?logo=npm&color=38C160">
  </a>

  <a href="https://www.npmjs.com/package/turbo-morph">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/turbo-morph?logo=npm&color=38C160">
  </a>
  <a href="https://bundlephobia.com/package/turbo-morph">
    <img alt="NPM Bundle Size" src="https://img.shields.io/bundlephobia/minzip/turbo-morph?label=bundle%20size&logo=npm">
  </a>
</p>

## Getting Started

`turbo-morph` is a [morphdom](https://github.com/patrick-steele-idem/morphdom) integration for [Turbo Streams](https://turbo.hotwired.dev/reference/streams). It provides a new Turbo Stream `morph` action.

**Note:** Requires Turbo **7.2+**


```bash
yarn add turbo-morph
```

```diff
// application.js
import * as Turbo from '@hotwired/turbo'

+import TurboMorph from 'turbo-morph'
+TurboMorph.initialize(Turbo.StreamActions)
```

## Example

```html
<turbo-stream action="morph" targets="body">
  <template>
    <body data-updated="true">
      <h1>This is the new body</h1>
    </body>
  </template>
</turbo-stream>
```

### `children-only` option

[`morphdom` exposes a `childrenOnly` option](https://github.com/patrick-steele-idem/morphdom#morphdomfromnode-tonode-options--node) that can be passed to a morph call.

With Turbo Streams you can apply this option by adding the `[children-only]` attribute to your `<turbo-stream>` element.

```html
<turbo-stream action="morph" target="body" children-only>
  ...
</turbo-stream>
```

## Usage with Rails

TBD


## Acknowledgments

tubro-morph is [MIT-licensed](LICENSE) open-source software from [Marco Roth](https://github.com/marcoroth).

Turbo is [MIT-licensed](https://github.com/hotwired/turbo/blob/main/MIT-LICENSE) open-source software from [Basecamp](https://basecamp.com/).

morphdom is [MIT-licensed](https://github.com/patrick-steele-idem/morphdom/blob/master/LICENSE) open-source software from [Patrick Steele-Idem](https://github.com/patrick-steele-idem)
