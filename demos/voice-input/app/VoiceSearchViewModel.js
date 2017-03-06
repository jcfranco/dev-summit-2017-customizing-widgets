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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Search/SearchViewModel", "./VoiceInput"], function (require, exports, __extends, __decorate, decorators_1, SearchViewModel, VoiceInput) {
    "use strict";
    ;
    var VoiceSearchViewModel = (function (_super) {
        __extends(VoiceSearchViewModel, _super);
        function VoiceSearchViewModel() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            var _this = _super.apply(this, arguments) || this;
            //----------------------------------
            //  commands
            //----------------------------------
            _this.commands = {
                "search for *searchTerm": function (searchTerm) {
                    _this.searchTerm = searchTerm;
                    _this.search();
                }
            };
            return _this;
        }
        return VoiceSearchViewModel;
    }(decorators_1.declared(SearchViewModel, VoiceInput)));
    VoiceSearchViewModel = __decorate([
        decorators_1.subclass("esri.demos.VoiceSearchViewModel")
    ], VoiceSearchViewModel);
    return VoiceSearchViewModel;
});
//# sourceMappingURL=VoiceSearchViewModel.js.map