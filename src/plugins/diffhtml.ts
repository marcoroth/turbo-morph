// @ts-ignore
import { innerHTML } from 'diffhtml'
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  console.log("diffhtml")

  // TODO childrenOnly case works as expected, but morphing the root element doesn't
  const childrenOnly = this.hasAttribute("children-only")
  const newHtml = childrenOnly ? this.templateContent : this.templateElement.innerHTML

  this.targetElements.forEach((element: Element) => {
    innerHTML(element, newHtml)
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
