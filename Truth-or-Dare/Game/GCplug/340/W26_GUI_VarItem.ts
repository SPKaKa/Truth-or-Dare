/**
 * Created by woziji00226 on 2021-12-27 14:12:23.
 */
class W26_GUI_VarItem extends GUI_15002 {
    /**
     * 构造函数
     */
    varType: number;
    updateCallback: Callback;
    updateCallback2: Callback;
    canChange: boolean;
    index2: number;
    debug: boolean;
    globalVar: boolean;
    mode: number;
    monitor: boolean;


    constructor() {
        super();
        this.canChange = true;
        this.numberInput.on(EventObject.MOUSE_DOWN, this, () => {
            this.numberInput.select();
        })
        this.strInput.on(EventObject.MOUSE_DOWN, this, () => {
            this.strInput.select();
        })
        this.numberInput.on(EventObject.ENTER, this, this.onNumberInput);
        this.switchInput.on(EventObject.CHANGE, this, this.onChange);
        this.strInput.on(EventObject.ENTER, this, this.onStrInput);

        this.numberInput.on(EventObject.BLUR, this, () => {
            //var index = parseInt(this.index.text);
            if (this.globalVar) {
                var value = ClientWorld.variable.getVariable(this.index2);
            }
            else {
                var value = Game.player.variable.getVariable(this.index2);
            }
            this.setShowValue(value);
            this.canChange = true;
            this.numberInput.italic = false;
        });
        this.strInput.on(EventObject.BLUR, this, () => {
            if (this.globalVar) {
                var value = ClientWorld.variable.getString(this.index2);
            }
            else {
                var value = Game.player.variable.getString(this.index2);
            }

            this.setShowValue(value);
            this.canChange = true;
            this.strInput.italic = false;
        });
        this.numberInput.on(EventObject.FOCUS, this, () => {
            this.canChange = false;
            this.numberInput.italic = true;
        });
        this.strInput.on(EventObject.FOCUS, this, () => {
            this.canChange = false;
            this.strInput.italic = true;
        });

        this.changeType.on(EventObject.CHANGE, this, (c: boolean = true) => {
            W26_varMonitor.setMode(this.index2, this.changeType.selectedIndex);

            if (W26_varMonitor.getMode(this.index2) == 1 || W26_varMonitor.getMode(this.index2) == 2) {//数组
                this.strInput.visible = false;
                //this.numberInput.visible = false;
                this.numberInput.mouseEnabled = false;
                this.switchInput.visible = false;
                this.button.visible = true;
            }
            else {
                this.button.visible = false;
                this.strInput.visible = false;
                this.numberInput.mouseEnabled = true;
                //this.numberInput.visible = false;
                this.switchInput.visible = false;
                if (this.varType == 0) {
                    this.numberInput.visible = true;
                }
                else if (this.varType == 1) {
                    this.switchInput.visible = true;
                }
                else if (this.varType == 2) {
                    this.strInput.visible = true;
                }
            }
            if (!c) return;
            if (this.monitor && W26_varMonitor.UI) {
                if (W26_varMonitor.UI.UITabBox.selectedIndex == 0 && W26_varMonitor.getArrayPluginV() == 0) {
                    for (var i = 0; i < W26_varMonitor.UI.numberPanel.varList.items.length; i++) {
                        var mui = W26_varMonitor.UI.numberPanel.varList.getItemUI(i) as W26_GUI_VarItem;
                        if (mui.index2 == this.index2) {
                            mui.changeType._selectedIndex = this.changeType.selectedIndex;
                            mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                            mui.changeType.event(EventObject.CHANGE, [false]);
                            return;
                        }
                    }
                }
                else if (W26_varMonitor.UI.UITabBox.selectedIndex == 2 && W26_varMonitor.getPluginsV()) {
                    for (var i = 0; i < W26_varMonitor.UI.stringPanel.varList.items.length; i++) {
                        var mui = W26_varMonitor.UI.stringPanel.varList.getItemUI(i) as W26_GUI_VarItem;
                        if (mui.index2 == this.index2) {
                            mui.changeType._selectedIndex = this.changeType.selectedIndex;
                            mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                            mui.changeType.event(EventObject.CHANGE, [false]);
                            return;
                        }
                    }
                }
            }
            else if (W26_varMonitor.UIsimple) {
                for (var i = 0; i < W26_varMonitor.UIsimple.varList.items.length; i++) {
                    var mui = W26_varMonitor.UIsimple.varList.getItemUI(i) as W26_GUI_VarItem;
                    if (mui.index2 == this.index2) {
                        mui.changeType._selectedIndex = this.changeType.selectedIndex;
                        mui.changeType._tf.text = mui.changeType._itemLabelArr[mui.changeType._selectedIndex];
                        mui.changeType.event(EventObject.CHANGE, [false]);
                        return;
                    }
                }
            }

        });

        this.button.on(EventObject.CLICK, this, () => {
            if (this.changeType.selectedIndex == 1) {
                if (W26_varMonitor.checkArrayPlugin()) {
                    try {
                        var arr = W26_VisualArray.getArrayByVarId(this.index2);
                        if (arr == null) return;
                        if (W26_varMonitor.getArrayPluginV() == 0) {
                            W26_GUI_ArrayPanel.arrayPanel.changeArrayShow(Game.player.variable.getVariable(this.index2));
                        }
                        else if (W26_varMonitor.getArrayPluginV() == 4.0) {
                            W26_GUI_ArrayPanel.arrayPanel.changeArrayShow(Game.player.variable.getString(this.index2));
                        }
                    }
                    catch {

                    }
                }
            }
            else if (this.changeType.selectedIndex == 2) {
                if (W26_varMonitor.checkStructPlugin()) {
                    try {
                        var arr = W26_Struct.getStructByVarID(this.index2);
                        if (arr == null) return;
                        if (W26_varMonitor.getStructPluginV() == 2.0) {
                            W26_GUI_StructShow.arrayShow.changeArrayShow(Game.player.variable.getString(this.index2));
                        }
                    }
                    catch {

                    }
                }
            }
        });

        this.updateCallback = Callback.New((typeID: number, varID: number, value: number | string) => {
            if (this.canChange) {
                //var index = parseInt(this.index.text);
                this.setShowValue(value);
                //W26_varMonitor.addRecord(typeID, this.globalVar, varID, value);
                if (this.checkTrace(this.globalVar) && WorldData.W26_isTrace && this.debug && this.monitor) {
                    trace(this.index.text, this.varName.text, this.getShowValue());
                    trace("[", W26_varMonitor.getRecord(typeID, this.globalVar, varID), "]");
                }
            }
        }, this);


        this.traceSelect.on(EventObject.CHANGE, this, this.onChanegTrace, [this.globalVar]);

        this.once(GameSprite.ON_DISPOSE, this, () => {
            this.numberInput.offAll();
            this.switchInput.offAll();
            this.strInput.offAll();
            // var index = parseInt(this.index.text);
            if (this.globalVar) {
                ClientWorld.removeListenerVariable(this.varType, this.index2, this.updateCallback);
            }
            else {
                Game.player.removeListenerPlayerVariable(this.varType, this.index2, this.updateCallback);
            }
        })

        this.once(EventObject.LOADED, this, () => {
            //if (this.varType == 1) this.kuang.visible = false;
        });
    }

    firstUpdate(typeID: number, varID: number, value: number | string) {
        if (this.canChange) {
            //var index = parseInt(this.index.text);
            this.setShowValue(value);
            //W26_varMonitor.addRecord(typeID, this.globalVar, varID, value);
            if (this.checkTrace(this.globalVar) && WorldData.W26_isTrace && this.debug && this.monitor) {
                trace(this.index.text, this.varName.text, this.getShowValue());
                trace("[", W26_varMonitor.getRecord(typeID, this.globalVar, varID), "]");
            }
        }
    }


    init(varType: number, globalVar: boolean, debug = false) {
        this.varType = varType;
        this.debug = debug;
        this.globalVar = globalVar;
        this.index2 = parseInt(this.index.text);
        //this.changeType.setSelectedForce(mode);
        if (this.globalVar) {
            ClientWorld.addListenerVariable(this.varType, this.index2, this.updateCallback);
            var value: number | string;
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
                        //W26_varMonitor.setMode(this.index2, 0);
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
                        //W26_varMonitor.setMode(this.index2, 0);
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

    }



    onNumberInput() {
        //var index = parseInt(this.index.text);
        if (this.globalVar) {
            ClientWorld.variable.setVariable(this.index2, Number(this.numberInput.text));
            trace("设置二周目数值变量", this.index2, "为", this.numberInput.text);
            //trace(ClientWorld.variable.getVariable(this.index2));
        }
        else {
            Game.player.variable.setVariable(this.index2, Number(this.numberInput.text));
            trace("设置数值变量", this.index2, "为", this.numberInput.text);
        }
        this.canChange = true;
        this.numberInput.focus = false;
        this.numberInput.italic = false;
    }

    onStrInput() {
        //var index = parseInt(this.index.text);
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
    }

    onChange() {
        //var index = parseInt(this.index.text);
        if (this.globalVar) {
            ClientWorld.variable.setSwitch(this.index2, this.switchInput.selected ? 1 : 0);
            trace("设置二周目开关变量", this.index2, "为", this.switchInput.selected);
        }
        else {
            Game.player.variable.setSwitch(this.index2, this.switchInput.selected ? 1 : 0);
            trace("设置开关变量", this.index2, "为", this.switchInput.selected);
        }
    }

    onChanegTrace(globalVar: boolean) {
        //debugger;
        //var index = parseInt(this.index.text);
        if (this.traceSelect.selected) {
            W26_varMonitor.addMonitorVar(this.varType, this.globalVar, this.index2);
            if (this.checkTrace(this.globalVar) && WorldData.W26_isTrace && this.debug && this.monitor) {
                trace("[", W26_varMonitor.getRecord(this.varType, this.globalVar, this.index2), "]");
            }
        }
        else {
            W26_varMonitor.removeMonitorVar(this.varType, this.globalVar, this.index2);
        }

    }

    checkTraceSeleted(globalVar: boolean) {
        var g: Dictionary = W26_varMonitor.monitorVar.get(this.varType);
        if (g == null) return;
        var d = g.get(globalVar);
        if (d == null) return;
        this.traceSelect.setSelectedForce((d.indexOf(this.index2) != -1));
    }

    checkTrace(globalVar: boolean): boolean {
        var g: Dictionary = W26_varMonitor.monitorVar.get(this.varType);
        if (g == null) return false;
        var d = g.get(globalVar);
        if (d == null) return;
        return d.indexOf(this.index2) != -1;
    }

    getShowValue() {
        if (this.varType == 0) {
            return this.numberInput.text;
        }
        else if (this.varType == 2) {
            return this.strInput.text;
        }
        else if (this.varType == 1) {
            return this.switchInput.selected ? "true" : "false";
        }
    }

    private setShowValue(value: number | string) {
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
                //g.numberInput.text = "null";
            }
            else {
                g.switchInput.setSelectedForce(value == 0 ? false : true);
            }
        }

    }
}