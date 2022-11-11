import Alpine from "alpinejs"
// @ts-ignore
import alpinemorph from "@alpinejs/morph"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}

if (!window.Alpine) {
  window.Alpine = Alpine
}

// @ts-ignore
if (!window.Alpine.morph) {
  window.Alpine.plugin(alpinemorph)
}

export function morph(this: StreamElement) {
  console.log("alpine")
  const childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach(element => {
    const options = {
      updating (_element: Element, _toElement: Element, childrenOnlyFn: Function, _skip: Boolean) {
        if (childrenOnly) {
          childrenOnlyFn()
        }

        // shouldMorph(operation)
      },

      updated (_element: Element, _toElement: Element) {
        // didMorph(operation)
      },

      removing (_element: Element, _skip: Boolean) {},
      removed (_element: Element) {},

      adding (_element: Element, _skip: Boolean) {},
      added (_element: Element) {}
    }

    const newHtml = childrenOnly ? this.templateContent : this.templateElement.innerHTML

    // @ts-ignore
    window.Alpine.morph(element, newHtml, options)
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
