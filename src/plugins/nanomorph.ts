// @ts-ignore
import nanomorph from "nanomorph"
// import nanohtml from "nanohtml"

import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  // const _childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach((_element: Element) => {
    nanomorph()
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
