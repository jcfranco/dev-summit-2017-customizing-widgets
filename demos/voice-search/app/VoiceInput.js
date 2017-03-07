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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/core/Accessor", "annyang"], function (require, exports, __extends, __decorate, decorators_1, Accessor, annyang) {
    "use strict";
    var VoiceInput = (function (_super) {
        __extends(VoiceInput, _super);
        function VoiceInput() {
            return _super.apply(this, arguments) || this;
        }
        Object.defineProperty(VoiceInput.prototype, "commands", {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  commands
            //----------------------------------
            get: function () {
                return this._get("commands");
            },
            set: function (value) {
                this._set("commands", value);
                annyang.addCommands(value);
                if (!annyang.isListening()) {
                    annyang.start();
                }
            },
            enumerable: true,
            configurable: true
        });
        return VoiceInput;
    }(decorators_1.declared(Accessor)));
    __decorate([
        decorators_1.property()
    ], VoiceInput.prototype, "commands", null);
    VoiceInput = __decorate([
        decorators_1.subclass("esri.demos.VoiceInput")
    ], VoiceInput);
    return VoiceInput;
});
//# sourceMappingURL=VoiceInput.js.map