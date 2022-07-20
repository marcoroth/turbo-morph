import morphdom from "morphdom"

import { StreamActions } from "@hotwired/turbo"

function morph() {
  const options = {
    // @ts-ignore
    childrenOnly: this.hasAttribute("children-only"),
    onBeforeElUpdated: () => { console.log("before"); return true },
    onElUpdated: () => { console.log("after") }
  }

  // @ts-ignore
  this.targetElements.forEach(element => {
    //  @ts-ignore
    morphdom(element, options["childrenOnly"] ? this.templateContent : this.templateElement.innerHTML, options)
  })
}

const registerMorph = () => {
  StreamActions.morph = morph
}

export {
  morph,
  registerMorph
}
