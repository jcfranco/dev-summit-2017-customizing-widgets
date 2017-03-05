
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, subclass, property, declared } from "esri/core/accessorSupport/decorators";

import {
  jsxFactory,
  renderable,
  accessibleHandler
} from "esri/widgets/support/widget";

import domConstruct = require("dojo/dom-construct");

//import { Axes } from "esri/widgets/interfaces";

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

import Widget = require("esri/widgets/Widget");
import CompassViewModel = require("esri/widgets/Compass/CompassViewModel");
import View = require("esri/views/View");

import * as i18n from "dojo/i18n!esri/widgets/Compass/nls/Compass";

const CSS = {
  base: "vintage-compass",
  compass: "vintage-compass__compass",
  dialContainer: "vintage-compass__dial-container",
  dial: "vintage-compass__dial"
};

interface TransformStyle {
  transform: string;
}

@subclass("esri.widgets.VintageCompass")
class VintageCompass extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  @aliasOf("viewModel.view")
  view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property({
    type: CompassViewModel
  })
  @renderable([
    "viewModel.orientation",
    "viewModel.state"
  ])
  viewModel: CompassViewModel = new CompassViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  @aliasOf("viewModel.reset")
  reset(): void { }

  render() {
    const orientation = this.viewModel.orientation;
    const state = this.viewModel.state;

    const disabled = state === "disabled",
      showNorth = state === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
      showingCompass = showNorth === "compass";

    const tabIndex = disabled ? -1 : 0;

    return (
      <div bind={this}
        class={CSS.base}
        title={i18n.reset}
        onclick={this._reset}
        onkeydown={this._reset}
        tabIndex={tabIndex}>
        <img class={CSS.compass} src="./app/images/compass.svg" />
        <div class={CSS.dialContainer} styles={this._toRotationTransform(orientation)}>
          <img class={CSS.dial} src="./app/images/compass-dial.svg" />
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _reset() {
    this.reset();
  }

  private _toRotationTransform(orientation: Axes): TransformStyle {
    return {
      transform: `rotateZ(${orientation.z}deg)`
    };
  }

}

export = VintageCompass;
