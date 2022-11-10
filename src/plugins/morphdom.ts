import morphdom from "morphdom"
import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  const options = {
    childrenOnly: this.hasAttribute("children-only")
  }

  this.targetElements.forEach(element => {
    morphdom(element, options.childrenOnly ? this.templateContent : this.templateElement.innerHTML, options)
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
