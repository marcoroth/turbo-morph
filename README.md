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

`turbo-morph` is a Morph integration for [Turbo Streams](https://turbo.hotwired.dev/reference/streams). It provides a new Turbo Stream `morph` action which uses `morphdom` under the hood by default.


Supported morph plugins:
* [`morphdom`(default)](https://github.com/patrick-steele-idem/morphdom)
* [`@alpinejs/morph`](http://alpinejs.dev/plugins/morph)
* [`nanomorph`](https://github.com/choojs/nanomorph)
* [`micromorph`](https://github.com/natemoo-re/micromorph)
* [`idiomorph`](https://github.com/bigskysoftware/idiomorph)
* [`diffhtml`](https://github.com/tbranyen/diffhtml)
* [`diff-dom`](https://github.com/fiduswriter/diffDOM)


## Installation

**Note:** Requires Turbo **7.2+**


```bash
yarn add turbo-morph
```

```diff
// application.js
import * as Turbo from '@hotwired/turbo'

// using morphdom as default
+import TurboMorph from 'turbo-morph'
+TurboMorph.initialize(Turbo.StreamActions)
```

Using a non-default morph plugin:

```diff
// application.js
import * as Turbo from '@hotwired/turbo'

+import TurboMorph from 'turbo-morph/nanomorph'
+TurboMorph.initialize(Turbo.StreamActions)
```

Using multiple morph plugins:

```diff
// application.js
import * as Turbo from '@hotwired/turbo'

// using nanomorph as default
+import { morph as morphdom } from 'turbo-morph'
+import { morph as nanomorph } from 'turbo-morph/nanomorph'
+import { morph as micromorph } from 'turbo-morph/micromorph'

 // Set the one you want as default
+Turbo.StreamActions.morph = morphdom

// And register the other ones as their own action
+Turbo.StreamActions.morphdom = morphdom
+Turbo.StreamActions.nanomorph = nanomorph
+Turbo.StreamActions.micromorph = micromorph
```


## Example using the default

```html
<turbo-stream action="morph" target="body">
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
