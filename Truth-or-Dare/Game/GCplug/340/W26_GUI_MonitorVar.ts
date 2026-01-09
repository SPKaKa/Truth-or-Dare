/**
 * Created by woziji00226 on 2021-12-27 16:46:26.
 */
class W26_GUI_MonitorVar extends GUI_15004 {
    /**
     * 构造函数
     */
    constructor() {
        super();
        this.varList.on(UIList.ITEM_CREATE, this, this.onItemCreate);
        this.rect.on(EventObject.MOUSE_MOVE, this, () => {
            if (UIList.focus != this.varList) UIList.focus = this.varList;
        })
        this.frame.on(EventObject.MOUSE_DOWN, this, () => {
            this.window.startDrag();
            stage.once(EventObject.MOUSE_UP, this, () => {
                this.window.stopDrag();
            })
        });
    }


    updateMonitorVar() {

    }

    clearAllMonitorVar() {
        this.varList.items = [];
    }

    creatorMonitorVar(varType: number, globalVar: boolean, index: number) {
        var varData = new ListItem_15002();
        varData.index = index.toString().padStart(4, "0") + "-";
        varData.varName = W26_varMonitor.getVarName(varType, globalVar, index);
        //varData.numberInput = varType.toString();
        varData.traceSelect;
        //varData.strInput = globalVar ? "true" : "false";
        varData.data = [1, globalVar, varType]
        var arr = this.varList.items;
        arr.push(varData);
        this.varList.items = arr;
    }

    removeMonitorVar(varType: number, globalVar: boolean, index: number) {
        var index2 = -1;
        for (var i = 0; i < this.varList.items.length; i++) {
            var ui: W26_GUI_VarItem = this.varList.getItemUI(i) as W26_GUI_VarItem;
            if (ui.varType == varType && index == parseInt(ui.index.text) && ui.globalVar == globalVar) {
                index2 = i;
            }
        }
        if (index2 == -1) return;
        var arr = this.varList.items;
        arr.splice(index2, 1);
        this.varList.items = arr;
    }

    onItemCreate(ui: W26_GUI_VarItem, data: ListItem_15002, index: number) {
        ui.init(data.data[2], data.data[1], true);
        ui.traceSelect.setSelectedForce(true);
        ui.monitor = true;
    }
}

