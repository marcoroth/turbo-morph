// @ts-ignore
import Idiomorph from "idiomorph"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  console.log("idiomorph")

  const childrenOnly = this.hasAttribute("children-only")
  const newHtml = childrenOnly ? this.templateContent : this.templateElement.innerHTML

  const options: {morphStyle?: String} = {}

  if (childrenOnly) {
    options.morphStyle = 'innerHTML'
  }

  this.targetElements.forEach((element: Element) => {
    Idiomorph.morph(element, newHtml, options);
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
