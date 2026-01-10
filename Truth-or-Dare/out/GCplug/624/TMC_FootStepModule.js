














var TMC_FootStepModule = (function (_super) {
    __extends(TMC_FootStepModule, _super);
    function TMC_FootStepModule(installCB) {
        var _this_2 = _super.call(this, installCB) || this;
        _this_2.lastSE = "";
        os.add_ENTERFRAME(_this_2.onUpdate, _this_2);
        return _this_2;
    }
    TMC_FootStepModule.prototype.onRemoved = function () {
        os.remove_ENTERFRAME(this.onUpdate, this);
    };
    TMC_FootStepModule.prototype.onChange = function (attrName) {
    };
    TMC_FootStepModule.prototype.onUpdate = function () {
        if (this.ModuleActive && this.so.isMoving) {
            var settingList = ObjectUtils.depthClone(WorldData.SEmap);
            for (var _i = 0, _c = this.OverrideSEsetting; _i < _c.length; _i++) {
                var overridSEData = _c[_i];
                for (var _d = 0, settingList_1 = settingList; _d < settingList_1.length; _d++) {
                    var seData = settingList_1[_d];
                    if (seData.MapDataIndex == overridSEData.MapDataIndex) {
                        seData.SEurl = overridSEData.SEurl;
                        break;
                    }
                }
                var newData = ObjectUtils.depthClone(overridSEData);
                settingList.push(newData);
            }
            var seURL = "";
            for (var _e = 0, settingList_2 = settingList; _e < settingList_2.length; _e++) {
                var seData = settingList_2[_e];
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