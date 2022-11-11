// @ts-ignore
import { DiffDOM, nodeToObj, stringToObj } from "diff-dom"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

const dd = new DiffDOM()

export function morph(this: StreamElement) {
  console.log("diff-dom")

  // const _childrenOnly = this.hasAttribute("children-only")

  this.targetElements.forEach((element: Element) => {
    // newHtml should replace the `children-only` attribute
    const newHtml = this.templateElement.innerHTML
    const diff = dd.diff(element, newHtml.trim())
    const result = dd.apply(element, diff)

    if (!result) {
      console.log("diff from DiffDOM could not be applied")
    }
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
