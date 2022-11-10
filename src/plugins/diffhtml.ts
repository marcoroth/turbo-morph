import diffhtml from "diffhtml"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  const _childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach((_element: Element) => {
    // TODO
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
