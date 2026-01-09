/**
 * Created by woziji00226 on 2021-12-26 20:59:11.
 */
class W26_GUI_VarShow extends GUI_15003 {
    /**
     * 构造函数
     */

    varDatas: Dictionary;
    currentPage: number;
    varType: number;//0 number 1 switch 2string
    updateCallback: Callback;

    drop: boolean;

    globalVar: boolean;

    constructor() {
        super();
        this.varDatas = new Dictionary();
        this.addPages();
        this.varList.on(UIList.ITEM_CREATE, this, this.onItemCreate);
        this.rect.on(EventObject.MOUSE_MOVE, this, () => {
            if (UIList.focus != this.varList) UIList.focus = this.varList;
        })

        


    }

    public loadVarDatas(list) {
        var list = list["list"];
        for (var index in list) {
            this.varDatas.set(parseInt(index) - 1, list[index]);
        }
        this.currentPage = 0;
        this.createVarList(this.currentPage);
    }

    public changePage(index: number) {
        if (this.currentPage != index) {
            this.currentSelectStr.text = (index + 1).toString()
            this.currentPage = index;
            this.clearVarList();
            this.createVarList(this.currentPage);
        }

    }

    updateVarList() {
        var ui: W26_GUI_VarItem;
        for (var i = 0; i < this.varList.items.length; i++) {
            ui = this.varList.getItemUI(i) as W26_GUI_VarItem;
            ui.checkTraceSeleted(ui.globalVar);
        }
    }

    private createVarList(index: number) {
        var data: string[] = this.varDatas.get(index);
        if (data == null) return;
        var varData: ListItem_15002;
        var add = [];
        var index2: number;

        for (var i = 0; i < data.length - 1; i++) {
            varData = new ListItem_15002();
            index2 = (index * 1000) + i + 1;
            varData.index = index2.toString().padStart(4, "0") + "-";
            if (data[i + 1] == null) { varData.varName = "" } else { varData.varName = data[i + 1]; }
            //varData.value = "";
            add.push(varData);
        }

        this.varList.items = add;
    }

    onItemCreate(ui: W26_GUI_VarItem, data: UIListItemData, index: number) {
        ui.init(this.varType, this.globalVar);
    }

    private clearVarList() {
        var index: number;
        for (var i = 0; i < this.varList.items.length; i++) {
            index = (this.currentPage * 1000) + i + 1;
        }
        this.varList.items = [];
    }

    private addPages() {
        var page: UIButton;
        for (var i = 0; i < this.pages.numChildren; i++) {
            page = this.pages.getChildAt(i) as UIButton;
            page.on(EventObject.CLICK, this, this.changePage, [i]);
        }
    }


}







