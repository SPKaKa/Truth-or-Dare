














var W26_GUI_VarShow = (function (_super) {
    __extends(W26_GUI_VarShow, _super);
    function W26_GUI_VarShow() {
        var _this_2 = _super.call(this) || this;
        _this_2.varDatas = new Dictionary();
        _this_2.addPages();
        _this_2.varList.on(UIList.ITEM_CREATE, _this_2, _this_2.onItemCreate);
        _this_2.rect.on(EventObject.MOUSE_MOVE, _this_2, function () {
            if (UIList.focus != _this_2.varList)
                UIList.focus = _this_2.varList;
        });
        return _this_2;
    }
    W26_GUI_VarShow.prototype.loadVarDatas = function (list) {
        var list = list["list"];
        for (var index in list) {
            this.varDatas.set(parseInt(index) - 1, list[index]);
        }
        this.currentPage = 0;
        this.createVarList(this.currentPage);
    };
    W26_GUI_VarShow.prototype.changePage = function (index) {
        if (this.currentPage != index) {
            this.currentSelectStr.text = (index + 1).toString();
            this.currentPage = index;
            this.clearVarList();
            this.createVarList(this.currentPage);
        }
    };
    W26_GUI_VarShow.prototype.updateVarList = function () {
        var ui;
        for (var i = 0; i < this.varList.items.length; i++) {
            ui = this.varList.getItemUI(i);
            ui.checkTraceSeleted(ui.globalVar);
        }
    };
    W26_GUI_VarShow.prototype.createVarList = function (index) {
        var data = this.varDatas.get(index);
        if (data == null)
            return;
        var varData;
        var add = [];
        var index2;
        for (var i = 0; i < data.length - 1; i++) {
            varData = new ListItem_15002();
            index2 = (index * 1000) + i + 1;
            varData.index = index2.toString().padStart(4, "0") + "-";
            if (data[i + 1] == null) {
                varData.varName = "";
            }
            else {
                varData.varName = data[i + 1];
            }
            add.push(varData);
        }
        this.varList.items = add;
    };
    W26_GUI_VarShow.prototype.onItemCreate = function (ui, data, index) {
        ui.init(this.varType, this.globalVar);
    };
    W26_GUI_VarShow.prototype.clearVarList = function () {
        var index;
        for (var i = 0; i < this.varList.items.length; i++) {
            index = (this.currentPage * 1000) + i + 1;
        }
        this.varList.items = [];
    };
    W26_GUI_VarShow.prototype.addPages = function () {
        var page;
        for (var i = 0; i < this.pages.numChildren; i++) {
            page = this.pages.getChildAt(i);
            page.on(EventObject.CLICK, this, this.changePage, [i]);
        }
    };
    return W26_GUI_VarShow;
}(GUI_15003));
//# sourceMappingURL=W26_GUI_VarShow.js.map