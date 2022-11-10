// @ts-ignore
import { innerHTML } from 'diffhtml'
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  // const _childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach((_element: Element) => {
    innerHTML()
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
