import morphdom from "morphdom"
import { TurboStreamActions, StreamElement } from "@hotwired/turbo"

function morph(this: StreamElement) {
  const options = {
    childrenOnly: this.hasAttribute("children-only")
  }

  this.targetElements.forEach(element => {
    morphdom(element, options.childrenOnly ? this.templateContent : this.templateElement.innerHTML, options)
  })
}

const initialize = (streamActions: TurboStreamActions) => {
  streamActions.morph = morph
}

export default {
  initialize,
  morph
}

export {
  initialize,
  morph
}
