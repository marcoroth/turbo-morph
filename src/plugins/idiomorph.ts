// @ts-ignore
import Idiomorph from "idiomorph"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  // const _childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach((_element: Element) => {
    Idiomorph.morph()
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
