














var W26_GUI_MonitorVar = (function (_super) {
    __extends(W26_GUI_MonitorVar, _super);
    function W26_GUI_MonitorVar() {
        var _this_2 = _super.call(this) || this;
        _this_2.varList.on(UIList.ITEM_CREATE, _this_2, _this_2.onItemCreate);
        _this_2.rect.on(EventObject.MOUSE_MOVE, _this_2, function () {
            if (UIList.focus != _this_2.varList)
                UIList.focus = _this_2.varList;
        });
        _this_2.frame.on(EventObject.MOUSE_DOWN, _this_2, function () {
            _this_2.window.startDrag();
            stage.once(EventObject.MOUSE_UP, _this_2, function () {
                _this_2.window.stopDrag();
            });
        });
        return _this_2;
    }
    W26_GUI_MonitorVar.prototype.updateMonitorVar = function () {
    };
    W26_GUI_MonitorVar.prototype.clearAllMonitorVar = function () {
        this.varList.items = [];
    };
    W26_GUI_MonitorVar.prototype.creatorMonitorVar = function (varType, globalVar, index) {
        var varData = new ListItem_15002();
        varData.index = index.toString().padStart(4, "0") + "-";
        varData.varName = W26_varMonitor.getVarName(varType, globalVar, index);
        varData.traceSelect;
        varData.data = [1, globalVar, varType];
        var arr = this.varList.items;
        arr.push(varData);
        this.varList.items = arr;
    };
    W26_GUI_MonitorVar.prototype.removeMonitorVar = function (varType, globalVar, index) {
        var index2 = -1;
        for (var i = 0; i < this.varList.items.length; i++) {
            var ui = this.varList.getItemUI(i);
            if (ui.varType == varType && index == parseInt(ui.index.text) && ui.globalVar == globalVar) {
                index2 = i;
            }
        }
        if (index2 == -1)
            return;
        var arr = this.varList.items;
        arr.splice(index2, 1);
        this.varList.items = arr;
    };
    W26_GUI_MonitorVar.prototype.onItemCreate = function (ui, data, index) {
        ui.init(data.data[2], data.data[1], true);
        ui.traceSelect.setSelectedForce(true);
        ui.monitor = true;
    };
    return W26_GUI_MonitorVar;
}(GUI_15004));
//# sourceMappingURL=W26_GUI_MonitorVar.js.map