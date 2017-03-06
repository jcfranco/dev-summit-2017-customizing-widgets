/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

import Accessor = require("esri/core/Accessor");

// speech recognition provided by: https://github.com/TalAter/annyang
import annyang = require("annyang");

import VoiceCommands = annyang.VoiceCommands;

@subclass("esri.demos.VoiceInput")
class VoiceInput extends declared(Accessor) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  commands
  //----------------------------------

  @property()
  get commands(): VoiceCommands {
    return this._get("commands");
  }
  set commands(value: VoiceCommands) {
    this._set("commands", value);

    annyang.addCommands(value);

    if (!annyang.isListening()) {
      annyang.start();
    }
  }

}

export = VoiceInput;
