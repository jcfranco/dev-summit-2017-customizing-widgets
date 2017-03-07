/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {
  declared,
  subclass
} from "esri/core/accessorSupport/decorators";

import SearchViewModel = require("esri/widgets/Search/SearchViewModel");
import VoiceInput = require("./VoiceInput");

interface VoiceSearchViewModel extends SearchViewModel, VoiceInput {
  // multi-inheritance
};

@subclass("esri.demos.VoiceSearchViewModel")
class VoiceSearchViewModel extends declared(SearchViewModel, VoiceInput) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  commands
  //----------------------------------

  commands = {

    "search for *searchTerm": (searchTerm: string): void => {
      this.searchTerm = searchTerm;
      this.search();
    }

  };

}

export = VoiceSearchViewModel;
