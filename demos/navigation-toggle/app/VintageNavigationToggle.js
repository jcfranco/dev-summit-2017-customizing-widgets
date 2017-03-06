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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/NavigationToggle", "dojo/i18n!esri/widgets/NavigationToggle/nls/NavigationToggle"], function (require, exports, __extends, __decorate, decorators_1, widget_1, NavigationToggle, i18n) {
    "use strict";
    var CSS = {
        base: "esri-vintage-navigation-toggle esri-widget",
        shipWheel: "esri-vintage-navigation-toggle__ship-wheel",
        // reusing navigation toggle button classes
        button: "esri-navigation-toggle__button esri-widget-button",
        // icons
        rotationIcon: "esri-icon-rotate",
        panIcon: "esri-icon-pan",
        // common
        disabled: "esri-disabled"
    };
    var VintageNavigationToggle = (function (_super) {
        __extends(VintageNavigationToggle, _super);
        function VintageNavigationToggle() {
            return _super.apply(this, arguments) || this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        VintageNavigationToggle.prototype.render = function () {
            var state = this.viewModel.state;
            var disabled = state === "disabled";
            var tabIndex = disabled ? -1 : 0;
            var iconClasses = (_a = {},
                _a[CSS.panIcon] = this.viewModel.navigationMode === "pan",
                _a[CSS.rotationIcon] = this.viewModel.navigationMode === "rotate",
                _a);
            return (widget_1.jsxFactory.createElement("div", { bind: this, class: CSS.base, onclick: this._toggle, onkeydown: this._toggle, role: "button", tabIndex: tabIndex, title: i18n.toggle },
                this._getShipWheelIcon(),
                widget_1.jsxFactory.createElement("div", { class: CSS.button },
                    widget_1.jsxFactory.createElement("span", { classes: iconClasses }))));
            var _a;
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        VintageNavigationToggle.prototype._getShipWheelIcon = function () {
            // optimized with https://jakearchibald.github.io/svgomg/
            // icon created by Juan Pablo Bravo from the Noun Project
            return (widget_1.jsxFactory.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", class: CSS.shipWheel },
                widget_1.jsxFactory.createElement("path", { d: "M94.82 47.89c-2.687.9-5.353.92-6.27.895v-1.153h-1.644v-.763H84.23c-.647-7.16-3.48-13.68-7.835-18.89l1.89-1.89-.54-.54 1.163-1.16-.816-.82c.632-.67 2.53-2.54 5.07-3.8 2.75-1.37 3.593-3.73 2.18-5.15-1.41-1.41-3.77-.57-5.14 2.18-1.266 2.54-3.137 4.44-3.804 5.07l-.815-.82-1.16 1.16-.54-.54-1.89 1.89c-5.218-4.35-11.743-7.17-18.898-7.81v-2.67h-.76v-1.64H51.18c-.025-.92-.006-3.59.896-6.27.976-2.92-.098-5.18-2.094-5.18-1.997 0-3.07 2.26-2.093 5.18.9 2.68.92 5.35.89 6.27h-1.15v1.64h-.77v2.67c-7.16.65-13.68 3.48-18.89 7.84l-1.89-1.89-.54.54-1.16-1.16-.82.81c-.67-.633-2.54-2.53-3.81-5.07-1.37-2.75-3.73-3.595-5.14-2.18-1.41 1.41-.57 3.77 2.18 5.14 2.54 1.263 4.44 3.133 5.07 3.8l-.82.816 1.16 1.16-.54.54 1.9 1.9c-4.35 5.213-7.178 11.74-7.818 18.893h-2.67v.76h-1.64v1.15c-.918.024-3.585.004-6.274-.896-2.91-.976-5.174.1-5.174 2.094 0 2 2.262 3.07 5.18 2.095 2.685-.9 5.352-.92 6.27-.89v1.16h1.64v.76h2.68c.645 7.16 3.48 13.68 7.83 18.89l-1.89 1.89.538.54-1.16 1.167.814.813c-.63.668-2.53 2.54-5.07 3.804-2.75 1.37-3.59 3.73-2.18 5.14 1.41 1.413 3.77.57 5.14-2.18 1.263-2.54 3.134-4.44 3.8-5.07l.818.815 1.16-1.16.54.54 1.9-1.884c5.214 4.345 11.74 7.17 18.894 7.81v2.674h.76v1.642h1.155c.025.92.005 3.586-.898 6.275-.97 2.91.1 5.18 2.1 5.18s3.07-2.27 2.1-5.18c-.9-2.69-.92-5.36-.89-6.277h1.15v-1.65h.76v-2.68c7.16-.645 13.68-3.48 18.89-7.83l1.89 1.89.54-.54 1.16 1.16.817-.82c.67.63 2.54 2.53 3.81 5.07 1.37 2.75 3.73 3.59 5.15 2.18 1.41-1.42.57-3.77-2.18-5.15-2.54-1.265-4.436-3.136-5.07-3.8l.817-.82-1.16-1.16.54-.54-1.89-1.89c4.35-5.217 7.176-11.74 7.815-18.896h2.68v-.76h1.64v-1.15c.92-.03 3.585-.01 6.27.89 2.91.976 5.18-.097 5.18-2.093 0-2-2.27-3.07-5.18-2.09zm-75.613 2.96c-.466 0-.846-.378-.846-.847s.38-.848.85-.848.85.38.85.848-.38.846-.85.846zm51.968-23.22c.33-.33.867-.33 1.197 0 .33.33.33.867 0 1.198-.33.33-.867.33-1.197 0-.332-.33-.33-.868 0-1.2zm-2.506 6.513l.45.46 1.41-1.41c3.22 3.934 5.33 8.792 5.87 14.134h-1.99v.65h-2.12v.984c-.73.03-2.81.01-4.91-.76-1.78-.65-3.24-.23-3.8.8v-1.02h-2.13c-.31-1.72-.98-3.31-1.95-4.68l1.51-1.5-.72-.71c1.12.33 2.44-.4 3.24-2.12.95-2.05 2.41-3.53 2.92-4l.693.7 1.502-1.5zM59.68 50c0 .467-.378.847-.847.847-.468 0-.848-.38-.848-.847 0-.47.38-.847.848-.847.47 0 .847.378.847.847zm-7.91-17.387c-.77-2.1-.786-4.18-.766-4.903h.984v-2.123h.65v-1.995c5.343.525 10.203 2.63 14.14 5.85l-1.406 1.406.46.46-1.502 1.5.696.695c-.48.51-1.957 1.975-4.007 2.927-1.72.798-2.45 2.125-2.13 3.243l-.72-.716-1.51 1.508c-1.38-.965-2.97-1.632-4.69-1.93v-2.128h-1.01c1.02-.562 1.44-2.018.79-3.794zm-8.616 23.034c.33-.33.866-.33 1.198 0 .33.33.33.87 0 1.2-.332.33-.867.33-1.198 0-.332-.33-.332-.868 0-1.2zm0-12.495c.33-.33.866-.33 1.198 0 .33.33.33.867 0 1.2-.33.33-.867.33-1.198 0-.332-.332-.332-.868 0-1.2zM43.77 50c0-3.44 2.79-6.232 6.23-6.232s6.232 2.79 6.232 6.232-2.79 6.23-6.232 6.23-6.23-2.79-6.23-6.23zm11.88 5.648c.33-.33.866-.33 1.197 0 .33.33.33.868 0 1.198-.33.33-.867.33-1.198 0-.34-.33-.34-.867 0-1.198zm1.198-11.296c-.33.33-.867.33-1.198 0-.33-.332-.33-.868 0-1.2.332-.33.867-.33 1.198 0 .33.332.33.868 0 1.2zM50 18.362c.467 0 .847.38.847.848 0 .467-.38.847-.847.847s-.847-.38-.847-.847c0-.47.38-.847.847-.847zm0 21.955c.467 0 .847.38.847.847 0 .468-.38.848-.847.848s-.847-.38-.847-.848c0-.467.38-.847.847-.847zm-2.673-16.724v1.993h.65v2.123h.984c.03.72.01 2.8-.76 4.9-.65 1.77-.22 3.23.8 3.79h-1.02v2.13c-1.72.3-3.31.97-4.68 1.94l-1.5-1.51-.71.71c.32-1.12-.41-2.45-2.12-3.25-2.05-.95-3.53-2.42-4.01-2.93l.69-.697-1.5-1.5.46-.46-1.41-1.41c3.94-3.224 8.8-5.336 14.14-5.87zM42.012 50c0 .467-.38.847-.848.847-.467 0-.847-.38-.847-.847 0-.47.38-.847.847-.847.468 0 .848.378.848.847zM27.628 27.63c.33-.33.867-.33 1.198 0 .33.33.33.867 0 1.197-.33.332-.868.332-1.198 0-.332-.33-.332-.867 0-1.198zm1.812 5.59l1.407 1.408.46-.46 1.5 1.5.695-.694c.51.48 1.975 1.958 2.927 4.007.79 1.72 2.12 2.45 3.24 2.13l-.72.72 1.51 1.51c-.96 1.38-1.63 2.97-1.93 4.69H36.4v1.01c-.56-1.02-2.015-1.44-3.792-.79-2.1.77-4.18.79-4.903.77v-.98h-2.123v-.65H23.59c.527-5.34 2.63-10.2 5.85-14.14zm-.614 39.154c-.332.332-.868.332-1.198 0-.332-.33-.332-.866 0-1.197.33-.33.866-.33 1.196 0 .332.33.332.866.002 1.197zm2.505-6.518l-.45-.46-1.41 1.41c-3.22-3.935-5.33-8.792-5.86-14.133h1.99v-.65h2.12v-.984c.73-.03 2.81-.01 4.91.76 1.78.65 3.24.23 3.8-.8v1.01h2.14c.31 1.72.98 3.3 1.95 4.68L39 58.19l.714.71c-1.115-.327-2.442.404-3.24 2.12-.954 2.05-2.42 3.526-2.93 4.006l-.696-.693-1.5 1.5zm16.9 1.532c.77 2.1.79 4.18.77 4.9h-.98v2.124h-.65v1.996c-5.34-.526-10.2-2.63-14.14-5.85l1.41-1.405-.46-.46 1.5-1.5-.69-.696c.48-.51 1.96-1.976 4.01-2.928 1.72-.8 2.45-2.13 2.12-3.25l.72.71 1.51-1.51c1.37.96 2.96 1.63 4.69 1.92v2.13h1.02c-1.02.56-1.44 2.02-.79 3.79zM50 81.643c-.467 0-.847-.38-.847-.85 0-.466.38-.845.847-.845s.847.38.847.846c0 .47-.38.85-.847.85zm0-21.96c-.467 0-.847-.38-.847-.847 0-.47.38-.848.847-.848s.847.38.847.848c0 .466-.38.847-.847.847zm2.674 16.722v-1.993h-.65V72.29h-.984c-.02-.723-.004-2.803.764-4.902.65-1.778.23-3.233-.792-3.795h1.013v-2.135c1.72-.302 3.308-.977 4.68-1.943l1.503 1.503.717-.716c-.325 1.118.406 2.445 2.12 3.243 2.05.95 3.527 2.415 4.007 2.927l-.694.695 1.502 1.5-.46.46 1.41 1.41c-3.936 3.225-8.794 5.336-14.136 5.868zm19.698-4.03c-.33.33-.866.33-1.197 0-.33-.332-.33-.867 0-1.198.33-.33.867-.33 1.197 0 .333.33.33.866 0 1.197zm-1.81-5.597l-1.408-1.406-.46.46-1.5-1.503-.696.69c-.51-.48-1.975-1.96-2.928-4.01-.798-1.72-2.124-2.45-3.242-2.12l.716-.72-1.507-1.51c.964-1.38 1.632-2.97 1.93-4.69h2.13v-1.01c.56 1.02 2.014 1.44 3.792.79 2.1-.77 4.18-.79 4.9-.77v.98h2.12v.65h1.99c-.53 5.34-2.64 10.2-5.85 14.14zm10.23-15.93c-.467 0-.847-.376-.847-.845s.38-.848.847-.848c.468 0 .848.38.848.848s-.38.846-.848.846z" })));
        };
        VintageNavigationToggle.prototype._toggle = function () {
            this.toggle();
        };
        return VintageNavigationToggle;
    }(decorators_1.declared(NavigationToggle)));
    __decorate([
        widget_1.accessibleHandler()
    ], VintageNavigationToggle.prototype, "_toggle", null);
    VintageNavigationToggle = __decorate([
        decorators_1.subclass("esri.widgets.NavigationToggle")
    ], VintageNavigationToggle);
    return VintageNavigationToggle;
});
//# sourceMappingURL=VintageNavigationToggle.js.map