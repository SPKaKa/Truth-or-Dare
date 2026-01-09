var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SoModule_AvatarBlendMode = (function (_super) {
    __extends(SoModule_AvatarBlendMode, _super);
    function SoModule_AvatarBlendMode(installCB) {
        var _this = _super.call(this, installCB) || this;
        _this.refresh();
        return _this;
    }
    SoModule_AvatarBlendMode.prototype.onRemoved = function () {
        this.so.avatar.blendMode = null;
    };
    SoModule_AvatarBlendMode.prototype.refresh = function () {
        switch (this.blendMode) {
            case 0:
                this.so.avatar.blendMode = null;
                break;
            case 1:
                this.so.avatar.blendMode = "lighter";
                break;
            case 2:
                this.so.avatar.blendMode = "blend5-1";
                break;
            case 3:
                this.so.avatar.blendMode = "blend4-1";
                break;
            case 4:
                this.so.avatar.blendMode = "blend4-7";
                break;
            case 5:
                this.so.avatar.blendMode = "blend4-4";
                break;
        }
    };
    return SoModule_AvatarBlendMode;
}(SceneObjectModule_8));
//# sourceMappingURL=SoModule_AvatarBlendMode.js.map