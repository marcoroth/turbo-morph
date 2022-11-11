// @ts-ignore
import nanomorph from "nanomorph"

// @ts-ignore
import nanohtml from "nanohtml"

import { StreamElement, TurboStreamActions } from "@hotwired/turbo"

export function morph(this: StreamElement) {
  console.log("nanomorph")

  // childrenOnly attribute doesn't work yet
  // const childrenOnly = this.hasAttribute("children-only")
  // const newHtml = childrenOnly ? this.templateContent.children[0] : nanohtml`${this.templateElement.innerHTML}`

  // let html = nanohtml`${this.templateElement.innerHTML.trim()}`
  // let html = childrenOnly ? nanohtml`${this.templateContent.children[0].innerHTML}` : nanohtml`${this.templateElement.innerHTML.trim()}`

  const html = nanohtml`${this.templateContent.children[0]}`

  this.targetElements.forEach((element: Element) => {
    nanomorph(element, html)
  })
}

export function initialize(streamActions: TurboStreamActions) {
  streamActions.morph = morph
}
