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
var TMC_FootStepModule = (function (_super) {
    __extends(TMC_FootStepModule, _super);
    function TMC_FootStepModule(installCB) {
        var _this = _super.call(this, installCB) || this;
        _this.lastSE = "";
        os.add_ENTERFRAME(_this.onUpdate, _this);
        return _this;
    }
    TMC_FootStepModule.prototype.onRemoved = function () {
        os.remove_ENTERFRAME(this.onUpdate, this);
    };
    TMC_FootStepModule.prototype.onChange = function (attrName) {
    };
    TMC_FootStepModule.prototype.onUpdate = function () {
        if (this.ModuleActive && this.so.isMoving) {
            var settingList = ObjectUtils.depthClone(WorldData.SEmap);
            for (var _i = 0, _a = this.OverrideSEsetting; _i < _a.length; _i++) {
                var overridSEData = _a[_i];
                for (var _b = 0, settingList_1 = settingList; _b < settingList_1.length; _b++) {
                    var seData = settingList_1[_b];
                    if (seData.MapDataIndex == overridSEData.MapDataIndex) {
                        seData.SEurl = overridSEData.SEurl;
                        break;
                    }
                }
                var newData = ObjectUtils.depthClone(overridSEData);
                settingList.push(newData);
            }
            var seURL = "";
            for (var _c = 0, settingList_2 = settingList; _c < settingList_2.length; _c++) {
                var seData = settingList_2[_c];
                if (Game.currentScene.getDataGridState(seData.MapDataIndex, this.so.posGrid.x, this.so.posGrid.y) > 0) {
                    seURL = seData.SEurl;
                    break;
                }
            }
            if (seURL == "") {
                if (WorldData.bUseDefaultFootStep && WorldData.DefaultFootStep != "") {
                    seURL = WorldData.DefaultFootStep;
                }
                if (this.bOverrideDefault && this.OverrideDefaultSE != "") {
                    seURL = this.OverrideDefaultSE;
                }
                if (seURL == "") {
                    this.stopSE();
                    return;
                }
            }
            if (!this.soundChannel || this.soundChannel.isStopped) {
                this.soundChannel = GameAudio.playSE(seURL, 1, 1, this.so);
                this.lastSE = seURL;
            }
            else {
                if (this.lastSE != seURL) {
                    this.soundChannel.stop();
                    this.soundChannel = GameAudio.playSE(seURL, 1, 1, this.so);
                    this.lastSE = seURL;
                }
            }
        }
        else {
            this.stopSE();
        }
    };
    TMC_FootStepModule.prototype.stopSE = function () {
    };
    TMC_FootStepModule.prototype.refresh = function () {
    };
    return TMC_FootStepModule;
}(SceneObjectModule_7));
//# sourceMappingURL=TMC_FootStepModule.js.map