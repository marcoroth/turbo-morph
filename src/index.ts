import { morph as morphdom, initialize } from "./plugins/morphdom"

export default {
  initialize,
  morph: morphdom,
  morphdom
}

export {
  initialize,
  morphdom as morph,
  morphdom
}
