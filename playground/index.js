import * as Turbo from "@hotwired/turbo"
// import * as TurboMorph from 'turbo-morph/morphdom'
// TurboMorph.initialize(Turbo.StreamActions)

import "diffhtml"

import * as TurboMorph from 'turbo-morph/diffhtml'
TurboMorph.initialize(Turbo.StreamActions)
