import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

import Accessor = require("esri/core/Accessor");

import annyang = require("annyang");

import VoiceCommands = annyang.VoiceCommands;

@subclass("esri.demos.VoiceInput")
class VoiceInput extends declared(Accessor) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  initialize() {
    annyang.addCommands(this.commands);

    if (!annyang.isListening()) {
      annyang.start();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  commands
  //----------------------------------

  @property()
  commands: VoiceCommands;

}

export = VoiceInput;
