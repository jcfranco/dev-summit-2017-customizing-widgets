/**
 * The Compass widget indicates where north is in relation to the current view
 * {@link module:esri/views/MapView#rotation rotation}
 * or {@link module:esri/Camera#heading camera heading}. Clicking the compass
 * rotates the view to face north (heading = 0). This widget is added to a {@link module:esri/views/SceneView}
 * by default.
 *
 * ![Compass for Web Mercator and WGS84](../assets/img/apiref/widgets/compass.png)
 * ![Compass for other spatial references](../assets/img/apiref/widgets/compass-other-sr.png)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add the compass widget
 * to a 2D application via the {@link module:esri/views/MapView#ui ui} property on the view.
 * See the sample below.
 *
 * @example
 * var view = new MapView({
 *   container: "viewDiv",
 *   map: map
 * });
 *
 * var compass = new Compass({
 *   view: view
 * });
 *
 * // adds the compass to the top left corner of the MapView
 * view.ui.add(compass, "top-left");
 *
 * @module esri/widgets/Compass
 * @since 4.0
 *
 * @see [Compass.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Compass.js)
 * @see [Compass.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Compass.scss)
 * @see module:esri/widgets/Compass/CompassViewModel
 * @see [Sample - Adding the Compass widget to a MapView](../sample-code/widgets-compass-2d/index.html)
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/Camera
 */
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
        base: "esri-compass esri-widget-button esri-widget",
        text: "esri-icon-font-fallback-text",
        icon: "esri-compass__icon",
        rotationIcon: "esri-icon-dial",
        northIcon: "esri-icon-compass",
        // common
        interactive: "esri-interactive",
        disabled: "esri-disabled"
    };
    var Compass = (function (_super) {
        __extends(Compass, _super);
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        /**
         * @constructor
         * @alias module:esri/widgets/Compass
         * @extends module:esri/widgets/Widget
         * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
         *                                that may be passed into the constructor.
         */
        function Compass(params) {
            var _this = _super.call(this) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  view
            //----------------------------------
            /**
             * The view in which the Compass obtains and indicates camera
             * {@link module:esri/Camera#heading heading}, using a (SceneView) or
             * {@link module:esri/views/Mapview#rotation rotation} (MapView).
             *
             * @name view
             * @instance
             * @type {module:esri/views/MapView | module:esri/views/SceneView}
             */
            _this.view = null;
            //----------------------------------
            //  viewModel
            //----------------------------------
            /**
             * The view model for this widget. This is a class that contains all the logic
             * (properties and methods) that controls this widget's behavior. See the
             * {@link module:esri/widgets/Compass/CompassViewModel} class to access
             * all properties and methods on the widget.
             *
             * @name viewModel
             * @instance
             * @type {module:esri/widgets/Compass/CompassViewModel}
             * @autocast
             */
            _this.viewModel = new CompassViewModel();
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        /**
         * If working in a {@link module:esri/views/MapView}, sets the view's
         * {@link module:esri/views/MapView#rotation rotation} to `0`. If working in a
         * {@link module:esri/views/SceneView}, sets the camera's
         * {@link module:esri/Camera#heading heading} to `0`. This method is executed each
         * time the {@link module:esri/widgets/Compass} is clicked.
         *
         * @method
         */
        Compass.prototype.reset = function () { };
        Compass.prototype.render = function () {
            var orientation = this.viewModel.orientation;
            var state = this.viewModel.state;
            var disabled = state === "disabled", showNorth = state === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
            showingCompass = showNorth === "compass";
            var tabIndex = disabled ? -1 : 0;
            var dynamicRootClasses = (_a = {},
                _a[CSS.disabled] = disabled,
                _a[CSS.interactive] = !disabled,
                _a);
            var dynamicIconClasses = (_b = {},
                _b[CSS.northIcon] = showingCompass,
                _b[CSS.rotationIcon] = !showingCompass,
                _b);
            return (widget_1.jsxFactory.createElement("div", { bind: this, class: CSS.base, classes: dynamicRootClasses, onclick: this._reset, onkeydown: this._reset, role: "button", tabIndex: tabIndex },
                widget_1.jsxFactory.createElement("span", { "aria-hidden": "true", class: CSS.icon, classes: dynamicIconClasses, styles: this._toRotationTransform(orientation), title: i18n.reset }),
                widget_1.jsxFactory.createElement("span", { class: CSS.text }, i18n.reset)));
            var _a, _b;
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        Compass.prototype._reset = function () {
            this.reset();
        };
        Compass.prototype._toRotationTransform = function (orientation) {
            return {
                transform: "rotateZ(" + orientation.z + "deg)"
            };
        };
        return Compass;
    }(decorators_1.declared(Widget)));
    __decorate([
        decorators_1.aliasOf("viewModel.view")
    ], Compass.prototype, "view", void 0);
    __decorate([
        decorators_1.property({
            type: CompassViewModel
        }),
        widget_1.renderable([
            "viewModel.orientation",
            "viewModel.state"
        ])
    ], Compass.prototype, "viewModel", void 0);
    __decorate([
        decorators_1.aliasOf("viewModel.reset")
    ], Compass.prototype, "reset", null);
    __decorate([
        widget_1.accessibleHandler()
    ], Compass.prototype, "_reset", null);
    Compass = __decorate([
        decorators_1.subclass("esri.widgets.Compass")
    ], Compass);
    return Compass;
});
//# sourceMappingURL=VintageCompass.js.map