import { StreamElement } from "@hotwired/turbo/dist/types/elements/stream_element"

export type TurboStreamActions = { [action: string]: (this: StreamElement) => void }
