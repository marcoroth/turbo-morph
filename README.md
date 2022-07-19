# Turbo Morph

`turbo-morph` is a [morphdom](https://github.com/patrick-steele-idem/morphdom) integration for [Turbo Streams](https://turbo.hotwired.dev/reference/streams). It provides a new Turbo Stream `morph` action.

Note: Requires Turbo **7.2+**

## Getting Started

```bash
yarn add turbo-morph
```

```diff
// application.js
import * as Turbo from '@hotwired/turbo'

+import { registerMorph } from 'turbo-morph'
+registerMorph()
```

## Example

```html
<turbo-stream action="morph" target="body">
  <template>
    <h1>This is the new body</h1>
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
