import morphdom from "morphdom"

import { StreamActions } from "@hotwired/turbo"
import { TurboStreamActions } from "./types"
import { StreamElement } from "@hotwired/turbo/dist/types/elements/stream_element"


function morph(this: StreamElement) {
  const options = {
    childrenOnly: this.hasAttribute("children-only")
  }

  // @ts-ignore
  this.targetElements.forEach(element => {
    morphdom(element, options.childrenOnly ? this.templateContent : this.templateElement.innerHTML, options)
  })
}

const registerMorph = () => {
  console.warn(`"registerMorph" is deprecated, please use "intialize" instead.`)
  StreamActions.morph = morph
}

const initialize = (streamActions: TurboStreamActions) => {
  streamActions.morph = morph
}

export default {
  initialize,
  morph,
  registerMorph
}

export {
  initialize,
  morph,
  registerMorph
}
