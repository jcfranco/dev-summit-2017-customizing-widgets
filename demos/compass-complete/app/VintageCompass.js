/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/Widget", "esri/widgets/Compass/CompassViewModel", "dojo/i18n!esri/widgets/Compass/nls/Compass"], function (require, exports, __extends, __decorate, decorators_1, widget_1, Widget, CompassViewModel, i18n) {
    "use strict";
    var CSS = {
        base: "vintage-compass",
        compass: "vintage-compass__compass",
        dialContainer: "vintage-compass__dial-container",
        dial: "vintage-compass__dial"
    };
    var VintageCompass = (function (_super) {
        __extends(VintageCompass, _super);
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        function VintageCompass(params) {
            var _this = _super.call(this) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  view
            //----------------------------------
            _this.view = null;
            //----------------------------------
            //  viewModel
            //----------------------------------
            _this.viewModel = new CompassViewModel();
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        VintageCompass.prototype.reset = function () { };
        VintageCompass.prototype.render = function () {
            var orientation = this.viewModel.orientation;
            var state = this.viewModel.state;
            var disabled = state === "disabled", showNorth = state === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
            showingCompass = showNorth === "compass";
            var tabIndex = disabled ? -1 : 0;
            return (widget_1.jsxFactory.createElement("div", { bind: this, class: CSS.base, title: i18n.reset, onclick: this._reset, onkeydown: this._reset, tabIndex: tabIndex },
                widget_1.jsxFactory.createElement("img", { class: CSS.compass, src: "./app/images/compass.svg" }),
                widget_1.jsxFactory.createElement("div", { class: CSS.dialContainer, styles: this._toRotationTransform(orientation) },
                    widget_1.jsxFactory.createElement("img", { class: CSS.dial, src: "./app/images/compass-dial.svg" }))));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        VintageCompass.prototype._reset = function () {
            this.reset();
        };
        VintageCompass.prototype._toRotationTransform = function (orientation) {
            return {
                transform: "rotateZ(" + orientation.z + "deg)"
            };
        };
        return VintageCompass;
    }(decorators_1.declared(Widget)));
    __decorate([
        decorators_1.aliasOf("viewModel.view")
    ], VintageCompass.prototype, "view", void 0);
    __decorate([
        decorators_1.property({
            type: CompassViewModel
        }),
        widget_1.renderable([
            "viewModel.orientation",
            "viewModel.state"
        ])
    ], VintageCompass.prototype, "viewModel", void 0);
    __decorate([
        decorators_1.aliasOf("viewModel.reset")
    ], VintageCompass.prototype, "reset", null);
    __decorate([
        widget_1.accessibleHandler()
    ], VintageCompass.prototype, "_reset", null);
    VintageCompass = __decorate([
        decorators_1.subclass("esri.widgets.VintageCompass")
    ], VintageCompass);
    return VintageCompass;
});
//# sourceMappingURL=VintageCompass.js.map