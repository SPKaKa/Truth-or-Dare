/**
 * Created by woziji00226 on 2021-12-26 20:19:11.
 */

class W26_GUI_VarMonitor extends GUI_15001 {

    currentPoint: Point;
    currentScale: Point;

    /**
     * 构造函数
     */
    constructor() {
        super();
        this.loadAllVar();
        this.UITabBox.on(EventObject.CHANGE, this, this.changeTabPage);
        this.changeTabPage();
        this.currentPoint = new Point();
        this.currentScale = new Point();

        this.frame.on(EventObject.MOUSE_DOWN, this, () => {
            this.window.startDrag();
            stage.once(EventObject.MOUSE_UP, this, () => {
                this.window.stopDrag();
            })
        });
        /*
        this.sframe.on(EventObject.MOUSE_DOWN, this, () => {
            this.currentPoint.x = stage.mouseX;
            this.currentPoint.y = stage.mouseY;
            this.currentScale.x = this.window.scaleX;

            stage.on(EventObject.MOUSE_MOVE, this, this.onScaleMouseMove);


            stage.once(EventObject.MOUSE_UP, this, () => {
                stage.off(EventObject.MOUSE_MOVE, this, this.onScaleMouseMove);
                //this.window.stopDrag();
            })
        });
        */
        //UIList.focus = this.numberPanel.varList;
    }

    onScaleMouseMove() {
        var sx = stage.mouseX - this.currentPoint.x;
        var sy = stage.mouseY - this.currentPoint.y;
        //= sx / 10

    }

    changeTabPage() {
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
    }

    updateTraceState() {
        this.numberPanel.updateVarList();
        this.switchPanel.updateVarList();
        this.stringPanel.updateVarList();

        this.numberPanel2.updateVarList();
        this.switchPanel2.updateVarList();
        this.stringPanel2.updateVarList();
    }

    loadAllVar() {
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
    }
}





















