














var W26_GUI_VarMonitor = (function (_super) {
    __extends(W26_GUI_VarMonitor, _super);
    function W26_GUI_VarMonitor() {
        var _this_2 = _super.call(this) || this;
        _this_2.loadAllVar();
        _this_2.UITabBox.on(EventObject.CHANGE, _this_2, _this_2.changeTabPage);
        _this_2.changeTabPage();
        _this_2.currentPoint = new Point();
        _this_2.currentScale = new Point();
        _this_2.frame.on(EventObject.MOUSE_DOWN, _this_2, function () {
            _this_2.window.startDrag();
            stage.once(EventObject.MOUSE_UP, _this_2, function () {
                _this_2.window.stopDrag();
            });
        });
        return _this_2;
    }
    W26_GUI_VarMonitor.prototype.onScaleMouseMove = function () {
        var sx = stage.mouseX - this.currentPoint.x;
        var sy = stage.mouseY - this.currentPoint.y;
    };
    W26_GUI_VarMonitor.prototype.changeTabPage = function () {
        if (this.UITabBox.selectedIndex == 0) {
            UIList.focus = this.numberPanel.varList;
        }
        else if (this.UITabBox.selectedIndex == 1) {
            UIList.focus = this.switchPanel.varList;
        }
        else if (this.UITabBox.selectedIndex == 2) {
            UIList.focus = this.stringPanel.varList;
        }
        else if (this.UITabBox.selectedIndex == 3) {
            UIList.focus = this.numberPanel2.varList;
        }
        else if (this.UITabBox.selectedIndex == 4) {
            UIList.focus = this.switchPanel2.varList;
        }
        else if (this.UITabBox.selectedIndex == 5) {
            UIList.focus = this.stringPanel2.varList;
        }
    };
    W26_GUI_VarMonitor.prototype.updateTraceState = function () {
        this.numberPanel.updateVarList();
        this.switchPanel.updateVarList();
        this.stringPanel.updateVarList();
        this.numberPanel2.updateVarList();
        this.switchPanel2.updateVarList();
        this.stringPanel2.updateVarList();
    };
    W26_GUI_VarMonitor.prototype.loadAllVar = function () {
        this.numberPanel.varType = 0;
        this.numberPanel.globalVar = false;
        this.numberPanel.loadVarDatas(W26_varMonitor.variableString);
        this.switchPanel.varType = 1;
        this.switchPanel.globalVar = false;
        this.switchPanel.loadVarDatas(W26_varMonitor.switchString);
        this.stringPanel.varType = 2;
        this.stringPanel.globalVar = false;
        this.stringPanel.loadVarDatas(W26_varMonitor.stringString);
        this.numberPanel2.varType = 0;
        this.numberPanel2.globalVar = true;
        this.numberPanel2.loadVarDatas(W26_varMonitor.variableString2);
        this.switchPanel2.varType = 1;
        this.switchPanel2.globalVar = true;
        this.switchPanel2.loadVarDatas(W26_varMonitor.switchString2);
        this.stringPanel2.varType = 2;
        this.stringPanel2.globalVar = true;
        this.stringPanel2.loadVarDatas(W26_varMonitor.stringString2);
    };
    return W26_GUI_VarMonitor;
}(GUI_15001));
//# sourceMappingURL=W26_GUI_VarMonitor.js.map