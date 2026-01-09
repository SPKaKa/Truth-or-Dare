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
var W26_GUI_VarItem = (function (_super) {
    __extends(W26_GUI_VarItem, _super);
    function W26_GUI_VarItem() {
        var _this = _super.call(this) || this;
        _this.canChange = true;
        _this.numberInput.on(EventObject.MOUSE_DOWN, _this, function () {
            _this.numberInput.select();
        });
        _this.strInput.on(EventObject.MOUSE_DOWN, _this, function () {
            _this.strInput.select();
        });
        _this.numberInput.on(EventObject.ENTER, _this, _this.onNumberInput);
        _this.switchInput.on(EventObject.CHANGE, _this, _this.onChange);
        _this.strInput.on(EventObject.ENTER, _this, _this.onStrInput);
        _this.numberInput.on(EventObject.BLUR, _this, function () {
            if (_this.globalVar) {
                var value = ClientWorld.variable.getVariable(_this.index2);
            }
            else {
                var value = Game.player.variable.getVariable(_this.index2);
            }
            _this.setShowValue(value);
            _this.canChange = true;
            _this.numberInput.italic = false;
        });
        _this.strInput.on(EventObject.BLUR, _this, function () {
            if (_this.globalVar) {
                var value = ClientWorld.variable.getString(_this.index2);
            }
            else {
                var value = Game.player.variable.getString(_this.index2);
            }
            _this.setShowValue(value);
            _this.canChange = true;
            _this.strInput.italic = false;
        });
        _this.numberInput.on(EventObject.FOCUS, _this, function () {
            _this.canChange = false;
            _this.numberInput.italic = true;
        });
        _this.strInput.on(EventObject.FOCUS, _this, function () {
            _this.canChange = false;
            _this.strInput.italic = true;
        });
        _this.changeType.on(EventObject.CHANGE, _this, function (c) {
            if (c === void 0) { c = true; }
            W26_varMonitor.setMode(_this.index2, _this.changeType.selectedIndex);
            if (W26_varMonitor.getMode(_this.index2) == 1 || W26_varMonitor.getMode(_this.index2) == 2) {
                _this.strInput.visible = false;
                _this.numberInput.mouseEnabled = false;
                _this.switchInput.visible = false;
                _this.button.visible = true;
            }
            else {
                _this.button.visible = false;
                _this.strInput.visible = false;
                _this.numberInput.mouseEnabled = true;
                _this.switchInput.visible = false;
                if (_this.varType == 0) {
                    _this.numberInput.visible = true;
                }
                else if (_this.varType == 1) {
                    _this.switchInput.visible = true;
                }
                else if (_this.varType == 2) {
                    _this.strInput.visible = true;
                }
            }
            if (!c)
                return;
            if (_this.monitor && W26_varMonitor.UI) {
                if (W26_varMonitor.UI.UITabBox.selectedIndex == 0 && W26_varMonitor.getArrayPluginV() == 0) {
                    for (var i = 0; i < W26_varMonitor.UI.numberPanel.varList.items.length; i++) {
                        var mui = W26_varMonitor.UI.numberPanel.varList.getItemUI(i);
                        if (mui.index2 == _this.index2) {
                            mui.changeType._selectedIndex = _this.changeType.selectedIndex;
                            mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                            mui.changeType.event(EventObject.CHANGE, [false]);
                            return;
                        }
                    }
                }
                else if (W26_varMonitor.UI.UITabBox.selectedIndex == 2 && W26_varMonitor.getPluginsV()) {
                    for (var i = 0; i < W26_varMonitor.UI.stringPanel.varList.items.length; i++) {
                        var mui = W26_varMonitor.UI.stringPanel.varList.getItemUI(i);
                        if (mui.index2 == _this.index2) {
                            mui.changeType._selectedIndex = _this.changeType.selectedIndex;
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
                    if (mui.index2 == _this.index2) {
                        mui.changeType._selectedIndex = _this.changeType.selectedIndex;
                        mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                        mui.changeType.event(EventObject.CHANGE, [false]);
                        return;
                    }
                }
            }
        });
        _this.button.on(EventObject.CLICK, _this, function () {
            if (_this.changeType.selectedIndex == 1) {
                if (W26_varMonitor.checkArrayPlugin()) {
                    try {
                        var arr = W26_VisualArray.getArrayByVarId(_this.index2);
                        if (arr == null)
                            return;
                        if (W26_varMonitor.getArrayPluginV() == 0) {
                            W26_GUI_ArrayPanel.arrayPanel.changeArrayShow(Game.player.variable.getVariable(_this.index2));
                        }
                        else if (W26_varMonitor.getArrayPluginV() == 4.0) {
                            W26_GUI_ArrayPanel.arrayPanel.changeArrayShow(Game.player.variable.getString(_this.index2));
                        }
                    }
                    catch (_a) {
                    }
                }
            }
            else if (_this.changeType.selectedIndex == 2) {
                if (W26_varMonitor.checkStructPlugin()) {
                    try {
                        var arr = W26_Struct.getStructByVarID(_this.index2);
                        if (arr == null)
                            return;
                        if (W26_varMonitor.getStructPluginV() == 2.0) {
                            W26_GUI_StructShow.arrayShow.changeArrayShow(Game.player.variable.getString(_this.index2));
                        }
                    }
                    catch (_b) {
                    }
                }
            }
        });
        _this.updateCallback = Callback.New(function (typeID, varID, value) {
            if (_this.canChange) {
                _this.setShowValue(value);
                if (_this.checkTrace(_this.globalVar) && WorldData.W26_isTrace && _this.debug && _this.monitor) {
                    trace(_this.index.text, _this.varName.text, _this.getShowValue());
                    trace("[", W26_varMonitor.getRecord(typeID, _this.globalVar, varID), "]");
                }
            }
        }, _this);
        _this.traceSelect.on(EventObject.CHANGE, _this, _this.onChanegTrace, [_this.globalVar]);
        _this.once(GameSprite.ON_DISPOSE, _this, function () {
            _this.numberInput.offAll();
            _this.switchInput.offAll();
            _this.strInput.offAll();
            if (_this.globalVar) {
                ClientWorld.removeListenerVariable(_this.varType, _this.index2, _this.updateCallback);
            }
            else {
                Game.player.removeListenerPlayerVariable(_this.varType, _this.index2, _this.updateCallback);
            }
        });
        _this.once(EventObject.LOADED, _this, function () {
        });
        return _this;
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