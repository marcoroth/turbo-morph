import morphdom from "morphdom"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  console.log("morphdom")

  const childrenOnly = this.hasAttribute("children-only")
  const newHtml = childrenOnly ? this.templateContent : this.templateElement.innerHTML

  this.targetElements.forEach(element => {
    morphdom(element, newHtml, { childrenOnly })
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
