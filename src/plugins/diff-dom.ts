// @ts-ignore
import { DiffDOM } from "diff-dom"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  // const _childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach((_element: Element) => {
    DiffDOM()
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
