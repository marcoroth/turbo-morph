// @ts-ignore
import micromorph from "micromorph"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

const parser = new DOMParser()

export function morph(this: StreamElement) {
  console.log("micromorph")
  const childrenOnly = this.hasAttribute("children-only")

  // TODO: check children-only attribute, it currently replaces the whole parent element with the new content
  const newHtml = childrenOnly
    ? this.templateContent
    : parser.parseFromString(this.templateElement.innerHTML, 'text/html').body.children[0]

  this.targetElements.forEach((element: Element) => {
    micromorph(element, newHtml);
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
