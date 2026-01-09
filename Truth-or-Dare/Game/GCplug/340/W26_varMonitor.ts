/**
 * Created by woziji00226 on 2021-12-26 16:33:15.
 */
(function () {
    if (!Config.BEHAVIOR_EDIT_MODE && !Config.EDIT_MODE && !Config.RELEASE_GAME) {
        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(() => {
            if (Config.RELEASE_GAME) return;
            EventUtils.addEventListener(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED, Callback.New(() => {
                W26_varMonitor.completedLen += 1;
                if (W26_varMonitor.completedLen == 6) {
                    W26_varMonitor.start();
                    W26_varMonitor.allRecord();
                }
            }, this));

            W26_varMonitor.loadJson();

        }, this))
    }
})();

class W26_varMonitor {

    static LOAD_COMPLETED: string = "LOAD_COMPLETED";
    static completedLen: number = 0;

    static variableString: any
    static switchString: any
    static stringString: any

    static variableString2: any
    static switchString2: any
    static stringString2: any

    static UI: W26_GUI_VarMonitor;
    static UIsimple: W26_GUI_MonitorVar;

    static monitorVar: Dictionary;
    static modeType: Dictionary = new Dictionary();

    static records: Dictionary = new Dictionary();
    static records2: Dictionary = new Dictionary();

    static recordFunction = Callback.New((typeID: number, varID: number, value: number | string) => {
        W26_varMonitor.addRecord(typeID, false, varID, value);
    }, this);

    static recordFunction2 = Callback.New((typeID: number, varID: number, value: number | string) => {
        W26_varMonitor.addRecord(typeID, true, varID, value);
    }, this);

    constructor() {
    }

    static start() {
        W26_varMonitor.monitorVar = new Dictionary();
        stage.on(EventObject.KEY_DOWN, this, W26_varMonitor.onKeyDown);
    }

    static allRecord() {

        W26_varMonitor.addList(0, W26_varMonitor.variableString);
        W26_varMonitor.addList(1, W26_varMonitor.switchString);
        W26_varMonitor.addList(2, W26_varMonitor.stringString);

        W26_varMonitor.addList2(0, W26_varMonitor.variableString2);
        W26_varMonitor.addList2(1, W26_varMonitor.switchString2);
        W26_varMonitor.addList2(2, W26_varMonitor.stringString2);

    }

    static addList(varType: number, list: { list: [] }) {
        var list2: [] = list["list"];
        var index1: number;
        for (var index in list2) {
            index1 = parseInt(index);
            for (var i = 0; i < (list2[index] as []).length; i++) {
                Game.player.addListenerPlayerVariable(varType, (index1 - 1) * 1000 + i, W26_varMonitor.recordFunction, false, false);
            }
        }
    }

    static addList2(varType: number, list: { list: [] }) {
        var list2: [] = list["list"];
        var index1: number;
        for (var index in list2) {
            index1 = parseInt(index);
            for (var i = 0; i < (list2[index] as []).length; i++) {
                ClientWorld.addListenerVariable(varType, (index1 - 1) * 1000 + i, W26_varMonitor.recordFunction2);
            }
        }
    }

    static addRecord(varType: number, globalVar: boolean, index: number, data: any) {
        var r = globalVar ? W26_varMonitor.records2 : W26_varMonitor.records;
        var ds = r.get(varType);
        if (ds == null) {
            r.set(varType, []);
            ds = r.get(varType);
        }
        if (ds[index] == null) {
            ds[index] = [];
        }
        ds[index].splice(0, 0, data);
        if (ds[index].length > WorldData.W26recordCount) {
            ds[index].pop();
        }
    }

    static getRecord(varType: number, globalVar: boolean, index: number) {
        var r = globalVar ? W26_varMonitor.records2 : W26_varMonitor.records;
        var ds = r.get(varType);
        if (ds == null) return [];
        if (ds[index] == null) return [];
        return ds[index];
    }

    private static onKeyDown(e: EventObject): void {
        if (Config.RELEASE_GAME) return;
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
            //trace(WorldData.w26VarShowKey, e.keyCode);
            if ((WorldData.w26VarShowKey ? WorldData.w26VarShowKey : 120) == e.keyCode) {//F9
                if (W26_varMonitor.UI == null) {
                    W26_varMonitor.UI = new W26_GUI_VarMonitor();
                    stage.addChild(W26_varMonitor.UI);
                }
                else {
                    W26_varMonitor.UI.visible = !W26_varMonitor.UI.visible;
                }
            }
            else if ((WorldData.w26VarShowMiniKey ? WorldData.w26VarShowMiniKey : 119) == e.keyCode) {//F8
                if (W26_varMonitor.UIsimple == null) {
                    W26_varMonitor.UIsimple = new W26_GUI_MonitorVar();
                    stage.addChild(W26_varMonitor.UIsimple);
                }
                else {
                    W26_varMonitor.UIsimple.visible = !W26_varMonitor.UIsimple.visible;
                }
            }
        }
    }

    static loadJson() {
        AssetManager.loadJson("asset/json/server/variable/variable.json", Callback.New((jsonObj: any) => {
            W26_varMonitor.variableString = jsonObj;
            EventUtils.happen(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED);
        }, this));
        AssetManager.loadJson("asset/json/server/variable/string.json", Callback.New((jsonObj: any) => {
            W26_varMonitor.stringString = jsonObj;
            EventUtils.happen(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED);
        }, this));
        AssetManager.loadJson("asset/json/server/variable/switch.json", Callback.New((jsonObj: any) => {
            W26_varMonitor.switchString = jsonObj;
            EventUtils.happen(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED);
        }, this));

        AssetManager.loadJson("asset/json/variable/variable.json", Callback.New((jsonObj: any) => {
            W26_varMonitor.variableString2 = jsonObj;
            EventUtils.happen(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED);
        }, this));
        AssetManager.loadJson("asset/json/variable/string.json", Callback.New((jsonObj: any) => {
            W26_varMonitor.stringString2 = jsonObj;
            EventUtils.happen(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED);
        }, this));
        AssetManager.loadJson("asset/json/variable/switch.json", Callback.New((jsonObj: any) => {
            W26_varMonitor.switchString2 = jsonObj;
            EventUtils.happen(W26_varMonitor, W26_varMonitor.LOAD_COMPLETED);
        }, this));

    }

    static addMonitorVar(varType: number, globalVar: boolean, index: number) {
        var data: Dictionary = W26_varMonitor.monitorVar.get(varType);
        var data2: number[];
        if (data == null) {
            data = new Dictionary();
            data.set(true, []);
            data.set(false, []);
            W26_varMonitor.monitorVar.set(varType, data);
        }
        data2 = data.get(globalVar);
        //trace(data);
        if (data2.indexOf(index) != -1) {
            return;
        }
        data2.push(index);
        if (W26_varMonitor.UIsimple == null) {
            W26_varMonitor.UIsimple = new W26_GUI_MonitorVar();
            stage.addChild(W26_varMonitor.UIsimple);
        }
        W26_varMonitor.UIsimple.creatorMonitorVar(varType, globalVar, index);
    }

    static removeMonitorVar(varType: number, globalVar: boolean, index: number) {
        var data: Dictionary = W26_varMonitor.monitorVar.get(varType);
        var data2: number[];
        if (data == null) return;
        data2 = data.get(globalVar);
        if (data2 == null) return;
        var i = data2.indexOf(index);
        if (i == -1) return;
        if (W26_varMonitor.UIsimple == null) {
            W26_varMonitor.UIsimple = new W26_GUI_MonitorVar();
            stage.addChild(W26_varMonitor.UIsimple);
        }
        W26_varMonitor.UIsimple.removeMonitorVar(varType, globalVar, data2[i]);
        data2.splice(i, 1);
        W26_varMonitor.UI.updateTraceState();
    }

    static setMode(index: number, mode: number) {
        W26_varMonitor.modeType.set(index, mode);
    }

    static getMode(index: number) {
        return W26_varMonitor.modeType.get(index);
    }

    static checkArrayPlugin() {
        try {
            W26_VisualArray
            return true;
        }
        catch {
            return false;
        }
    }

    static checkStructPlugin() {
        try {
            W26_Struct
            return true;
        }
        catch {
            return false;
        }
    }

    static getStructPluginV() {
        if (this.checkStructPlugin()) {
            if (W26_Struct["version"]) {
                return W26_Struct["version"];
            }
            return 0;
        }
        return 0;
    }

    static getArrayPluginV() {
        if (this.checkArrayPlugin()) {
            if (W26_VisualArray["version"]) {
                return W26_VisualArray["version"];
            }
            return 0;
        }
        return 0;
    }

    static checkPlugins() {
        return this.checkArrayPlugin() || (this.checkStructPlugin() && this.getStructPluginV() == 2.0);
    }

    static getPluginsV() {
        return this.getStructPluginV() == 2.0 || this.getArrayPluginV() == 4.0;
    }


    static getVarName(varType: number, globalVar: boolean, index: number): string {
        var data: { "page": string, "varNames": Array<string> };
        if (globalVar) {
            if (varType == 0) {
                data = W26_varMonitor.variableString2["list"];
            }
            else if (varType == 1) {
                data = W26_varMonitor.switchString2["list"];
            }
            else if (varType == 2) {
                data = W26_varMonitor.stringString2["list"];
            }
        }
        else {
            if (varType == 0) {
                data = W26_varMonitor.variableString["list"];
            }
            else if (varType == 1) {
                data = W26_varMonitor.switchString["list"];
            }
            else if (varType == 2) {
                data = W26_varMonitor.stringString["list"];
            }
        }
        var page = Math.floor(index / 1000) + 1

        var varNames = data[page.toString()];
        if (varNames == null) return "";
        var result = varNames[(index % 1000)];
        if (result == null) return "";
        return result;
    }


}


