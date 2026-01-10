














var W26_GUI_VarItem = (function (_super) {
    __extends(W26_GUI_VarItem, _super);
    function W26_GUI_VarItem() {
        var _this_2 = _super.call(this) || this;
        _this_2.canChange = true;
        _this_2.numberInput.on(EventObject.MOUSE_DOWN, _this_2, function () {
            _this_2.numberInput.select();
        });
        _this_2.strInput.on(EventObject.MOUSE_DOWN, _this_2, function () {
            _this_2.strInput.select();
        });
        _this_2.numberInput.on(EventObject.ENTER, _this_2, _this_2.onNumberInput);
        _this_2.switchInput.on(EventObject.CHANGE, _this_2, _this_2.onChange);
        _this_2.strInput.on(EventObject.ENTER, _this_2, _this_2.onStrInput);
        _this_2.numberInput.on(EventObject.BLUR, _this_2, function () {
            if (_this_2.globalVar) {
                var value = ClientWorld.variable.getVariable(_this_2.index2);
            }
            else {
                var value = Game.player.variable.getVariable(_this_2.index2);
            }
            _this_2.setShowValue(value);
            _this_2.canChange = true;
            _this_2.numberInput.italic = false;
        });
        _this_2.strInput.on(EventObject.BLUR, _this_2, function () {
            if (_this_2.globalVar) {
                var value = ClientWorld.variable.getString(_this_2.index2);
            }
            else {
                var value = Game.player.variable.getString(_this_2.index2);
            }
            _this_2.setShowValue(value);
            _this_2.canChange = true;
            _this_2.strInput.italic = false;
        });
        _this_2.numberInput.on(EventObject.FOCUS, _this_2, function () {
            _this_2.canChange = false;
            _this_2.numberInput.italic = true;
        });
        _this_2.strInput.on(EventObject.FOCUS, _this_2, function () {
            _this_2.canChange = false;
            _this_2.strInput.italic = true;
        });
        _this_2.changeType.on(EventObject.CHANGE, _this_2, function (c) {
            if (c === void 0) { c = true; }
            W26_varMonitor.setMode(_this_2.index2, _this_2.changeType.selectedIndex);
            if (W26_varMonitor.getMode(_this_2.index2) == 1 || W26_varMonitor.getMode(_this_2.index2) == 2) {
                _this_2.strInput.visible = false;
                _this_2.numberInput.mouseEnabled = false;
                _this_2.switchInput.visible = false;
                _this_2.button.visible = true;
            }
            else {
                _this_2.button.visible = false;
                _this_2.strInput.visible = false;
                _this_2.numberInput.mouseEnabled = true;
                _this_2.switchInput.visible = false;
                if (_this_2.varType == 0) {
                    _this_2.numberInput.visible = true;
                }
                else if (_this_2.varType == 1) {
                    _this_2.switchInput.visible = true;
                }
                else if (_this_2.varType == 2) {
                    _this_2.strInput.visible = true;
                }
            }
            if (!c)
                return;
            if (_this_2.monitor && W26_varMonitor.UI) {
                if (W26_varMonitor.UI.UITabBox.selectedIndex == 0 && W26_varMonitor.getArrayPluginV() == 0) {
                    for (var i = 0; i < W26_varMonitor.UI.numberPanel.varList.items.length; i++) {
                        var mui = W26_varMonitor.UI.numberPanel.varList.getItemUI(i);
                        if (mui.index2 == _this_2.index2) {
                            mui.changeType._selectedIndex = _this_2.changeType.selectedIndex;
                            mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                            mui.changeType.event(EventObject.CHANGE, [false]);
                            return;
                        }
                    }
                }
                else if (W26_varMonitor.UI.UITabBox.selectedIndex == 2 && W26_varMonitor.getPluginsV()) {
                    for (var i = 0; i < W26_varMonitor.UI.stringPanel.varList.items.length; i++) {
                        var mui = W26_varMonitor.UI.stringPanel.varList.getItemUI(i);
                        if (mui.index2 == _this_2.index2) {
                            mui.changeType._selectedIndex = _this_2.changeType.selectedIndex;
                            mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                            mui.changeType.event(EventObject.CHANGE, [false]);
                            return;
                        }
                    }
                }
            }
            else if (W26_varMonitor.UIsimple) {
                for (var i = 0; i < W26_varMonitor.UIsimple.varList.items.length; i++) {
                    var mui = W26_varMonitor.UIsimple.varList.getItemUI(i);
                    if (mui.index2 == _this_2.index2) {
                        mui.changeType._selectedIndex = _this_2.changeType.selectedIndex;
                        mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                        mui.changeType.event(EventObject.CHANGE, [false]);
                        return;
                    }
                }
            }
        });
        _this_2.button.on(EventObject.CLICK, _this_2, function () {
            if (_this_2.changeType.selectedIndex == 1) {
                if (W26_varMonitor.checkArrayPlugin()) {
                    try {
                        var arr = W26_VisualArray.getArrayByVarId(_this_2.index2);
                        if (arr == null)
                            return;
                        if (W26_varMonitor.getArrayPluginV() == 0) {
                            W26_GUI_ArrayPanel.arrayPanel.changeArrayShow(Game.player.variable.getVariable(_this_2.index2));
                        }
                        else if (W26_varMonitor.getArrayPluginV() == 4.0) {
                            W26_GUI_ArrayPanel.arrayPanel.changeArrayShow(Game.player.variable.getString(_this_2.index2));
                        }
                    }
                    catch (_c) {
                    }
                }
            }
            else if (_this_2.changeType.selectedIndex == 2) {
                if (W26_varMonitor.checkStructPlugin()) {
                    try {
                        var arr = W26_Struct.getStructByVarID(_this_2.index2);
                        if (arr == null)
                            return;
                        if (W26_varMonitor.getStructPluginV() == 2.0) {
                            W26_GUI_StructShow.arrayShow.changeArrayShow(Game.player.variable.getString(_this_2.index2));
                        }
                    }
                    catch (_d) {
                    }
                }
            }
        });
        _this_2.updateCallback = Callback.New(function (typeID, varID, value) {
            if (_this_2.canChange) {
                _this_2.setShowValue(value);
                if (_this_2.checkTrace(_this_2.globalVar) && WorldData.W26_isTrace && _this_2.debug && _this_2.monitor) {
                    trace(_this_2.index.text, _this_2.varName.text, _this_2.getShowValue());
                    trace("[", W26_varMonitor.getRecord(typeID, _this_2.globalVar, varID), "]");
                }
            }
        }, _this_2);
        _this_2.traceSelect.on(EventObject.CHANGE, _this_2, _this_2.onChanegTrace, [_this_2.globalVar]);
        _this_2.once(GameSprite.ON_DISPOSE, _this_2, function () {
            _this_2.numberInput.offAll();
            _this_2.switchInput.offAll();
            _this_2.strInput.offAll();
            if (_this_2.globalVar) {
                ClientWorld.removeListenerVariable(_this_2.varType, _this_2.index2, _this_2.updateCallback);
            }
            else {
                Game.player.removeListenerPlayerVariable(_this_2.varType, _this_2.index2, _this_2.updateCallback);
            }
        });
        _this_2.once(EventObject.LOADED, _this_2, function () {
        });
        return _this_2;
    }
    W26_GUI_VarItem.prototype.firstUpdate = function (typeID, varID, value) {
        if (this.canChange) {
            this.setShowValue(value);
            if (this.checkTrace(this.globalVar) && WorldData.W26_isTrace && this.debug && this.monitor) {
                trace(this.index.text, this.varName.text, this.getShowValue());
                trace("[", W26_varMonitor.getRecord(typeID, this.globalVar, varID), "]");
            }
        }
    };
    W26_GUI_VarItem.prototype.init = function (varType, globalVar, debug) {
        if (debug === void 0) { debug = false; }
        this.varType = varType;
        this.debug = debug;
        this.globalVar = globalVar;
        this.index2 = parseInt(this.index.text);
        if (this.globalVar) {
            ClientWorld.addListenerVariable(this.varType, this.index2, this.updateCallback);
            var value;
            if (this.varType == 0) {
                value = ClientWorld.variable.getVariable(this.index2);
            }
            else if (this.varType == 1) {
                value = ClientWorld.variable.getSwitch(this.index2);
            }
            else if (this.varType == 2) {
                value = ClientWorld.variable.getString(this.index2);
            }
            this.firstUpdate(this.varType, this.index2, value);
        }
        else {
            Game.player.addListenerPlayerVariable(this.varType, this.index2, this.updateCallback, false, false);
            if (this.varType == 0) {
                value = Game.player.variable.getVariable(this.index2);
            }
            else if (this.varType == 1) {
                value = Game.player.variable.getSwitch(this.index2);
            }
            else if (this.varType == 2) {
                value = Game.player.variable.getString(this.index2);
            }
            this.firstUpdate(this.varType, this.index2, value);
        }
        this.checkTraceSeleted(this.globalVar);
        if (this.globalVar || !W26_varMonitor.checkPlugins()) {
            this.changeType.visible = false;
            this.changeType.selectedIndex = 0;
        }
        else if (W26_varMonitor.checkPlugins()) {
            if (!W26_varMonitor.getPluginsV()) {
                if (this.varType == 0) {
                    var mode = W26_varMonitor.getMode(this.index2);
                    if (mode == null) {
                        mode = 0;
                    }
                    this.changeType.selectedIndex = mode;
                }
                else {
                    this.changeType.visible = false;
                    this.changeType.selectedIndex = 0;
                }
            }
            if (W26_varMonitor.getPluginsV()) {
                if (this.varType == 2) {
                    var mode = W26_varMonitor.getMode(this.index2);
                    if (mode == null) {
                        mode = 0;
                    }
                    this.changeType.selectedIndex = mode;
                }
                else {
                    this.changeType.visible = false;
                    this.changeType.selectedIndex = 0;
                }
            }
        }
    };
    W26_GUI_VarItem.prototype.onNumberInput = function () {
        if (this.globalVar) {
            ClientWorld.variable.setVariable(this.index2, Number(this.numberInput.text));
            trace("设置二周目数值变量", this.index2, "为", this.numberInput.text);
        }
        else {
            Game.player.variable.setVariable(this.index2, Number(this.numberInput.text));
            trace("设置数值变量", this.index2, "为", this.numberInput.text);
        }
        this.canChange = true;
        this.numberInput.focus = false;
        this.numberInput.italic = false;
    };
    W26_GUI_VarItem.prototype.onStrInput = function () {
        if (this.globalVar) {
            ClientWorld.variable.setString(this.index2, this.strInput.text);
            trace("设置二周目字符串变量", this.index2, "为", this.strInput.text);
        }
        else {
            Game.player.variable.setString(this.index2, this.strInput.text);
            trace("设置字符串变量", this.index2, "为", this.strInput.text);
        }
        this.canChange = true;
        this.strInput.focus = false;
        this.strInput.italic = false;
    };
    W26_GUI_VarItem.prototype.onChange = function () {
        if (this.globalVar) {
            ClientWorld.variable.setSwitch(this.index2, this.switchInput.selected ? 1 : 0);
            trace("设置二周目开关变量", this.index2, "为", this.switchInput.selected);
        }
        else {
            Game.player.variable.setSwitch(this.index2, this.switchInput.selected ? 1 : 0);
            trace("设置开关变量", this.index2, "为", this.switchInput.selected);
        }
    };
    W26_GUI_VarItem.prototype.onChanegTrace = function (globalVar) {
        if (this.traceSelect.selected) {
            W26_varMonitor.addMonitorVar(this.varType, this.globalVar, this.index2);
            if (this.checkTrace(this.globalVar) && WorldData.W26_isTrace && this.debug && this.monitor) {
                trace("[", W26_varMonitor.getRecord(this.varType, this.globalVar, this.index2), "]");
            }
        }
        else {
            W26_varMonitor.removeMonitorVar(this.varType, this.globalVar, this.index2);
        }
    };
    W26_GUI_VarItem.prototype.checkTraceSeleted = function (globalVar) {
        var g = W26_varMonitor.monitorVar.get(this.varType);
        if (g == null)
            return;
        var d = g.get(globalVar);
        if (d == null)
            return;
        this.traceSelect.setSelectedForce((d.indexOf(this.index2) != -1));
    };
    W26_GUI_VarItem.prototype.checkTrace = function (globalVar) {
        var g = W26_varMonitor.monitorVar.get(this.varType);
        if (g == null)
            return false;
        var d = g.get(globalVar);
        if (d == null)
            return;
        return d.indexOf(this.index2) != -1;
    };
    W26_GUI_VarItem.prototype.getShowValue = function () {
        if (this.varType == 0) {
            return this.numberInput.text;
        }
        else if (this.varType == 2) {
            return this.strInput.text;
        }
        else if (this.varType == 1) {
            return this.switchInput.selected ? "true" : "false";
        }
    };
    W26_GUI_VarItem.prototype.setShowValue = function (value) {
        var g = this;
        g.numberInput.visible = false;
        g.strInput.visible = false;
        g.switchInput.visible = false;
        if (this.varType == 0) {
            g.numberInput.visible = true;
            if (value == null) {
                g.numberInput.text = "null";
            }
            else {
                g.numberInput.text = value.toString();
            }
        }
        else if (this.varType == 2) {
            g.strInput.visible = true;
            if (value == null) {
                g.numberInput.text = "null";
            }
            else {
                g.strInput.text = value.toString();
            }
        }
        else if (this.varType == 1) {
            g.switchInput.visible = true;
            if (value == null) {
            }
            else {
                g.switchInput.setSelectedForce(value == 0 ? false : true);
            }
        }
    };
    return W26_GUI_VarItem;
}(GUI_15002));
//# sourceMappingURL=W26_GUI_VarItem.js.map