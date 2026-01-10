














var SoModule_AvatarBlendMode = (function (_super) {
    __extends(SoModule_AvatarBlendMode, _super);
    function SoModule_AvatarBlendMode(installCB) {
        var _this_2 = _super.call(this, installCB) || this;
        _this_2.refresh();
        return _this_2;
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