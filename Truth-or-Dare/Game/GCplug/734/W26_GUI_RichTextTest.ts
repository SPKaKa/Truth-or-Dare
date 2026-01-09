/**
 * Created by woziji00226 on 2023-05-15 14:43:14.
 */
class W26_GUI_RichTextTest extends GUI_15005 {
    constructor() {
        super();

        var richlabel = new W26_RichTextLabel();
        richlabel.text = "你好"
        this.addChild(richlabel);

        this.删除富文本.on(EventObject.CLICK, this, () => {
            //this.rich.removeSelf();
            this.rich.dispose();
            this.rich = null;
        });

        this.添加文本.on(EventObject.CLICK, this, () => {
            
            if (this.rich == null) {
                //@ts-ignore
                this.rich = new W26_RichTextLabel();
                this.rich.width = this.output.width;
                this.rich.height = this.output.height;
                this.output.addChild(this.rich);
            }
            //@ts-ignore
            (this.rich as W26_RichTextLabel).pushText(this.input.text);
            
            //this.rich.text += this.input.text;
        });

        this.字体大小.on(EventObject.CHANGE, this, () => {
            this.rich.fontSize = this.字体大小.selected ? 30 : 24;
        })

        this.水平间距.on(EventObject.CHANGE, this, () => {
            this.rich.letterSpacing = this.水平间距.selected ? 6 : 0;
        })

        this.垂直间距.on(EventObject.CHANGE, this, () => {
            this.rich.leading = this.垂直间距.selected ? 6 : 0;
        })


        this.阴影.on(EventObject.CHANGE, this, () => {
            this.rich.shadowEnabled = this.阴影.selected;
        })

        this.描边.on(EventObject.CHANGE, this, () => {
            this.rich.stroke = this.描边.selected ? 3 : 0;
        })

        this.斜体.on(EventObject.CHANGE, this, () => {
            this.rich.italic = this.斜体.selected;
        })

        this.粗体.on(EventObject.CHANGE, this, () => {
            this.rich.bold = this.粗体.selected;
        })

        this.自动换行.on(EventObject.CHANGE, this, () => {
            this.rich.wordWrap = this.自动换行.selected;
        })

        this.超出隐藏.on(EventObject.CHANGE, this, () => {
            this.rich.overflow = this.超出隐藏.selected ? 1 : 0;
        })

        this.垂直对齐.on(EventObject.CHANGE, this, () => {
            var index = this.垂直对齐.selectedIndex;
            this.rich.valign = index;
            trace(index);
        })

        this.行垂直对齐.on(EventObject.CHANGE, this, () => {
            var index = this.行垂直对齐.selectedIndex;
            //@ts-ignore
            this.rich.valign2 = index;
            
            trace(index);
        })

        this.水平对齐.on(EventObject.CHANGE, this, () => {
            var index = this.水平对齐.selectedIndex;
            this.rich.align = index;
            trace(index);
        })



        this.确定.on(EventObject.CLICK, this, () => {
            if (this.rich == null) {
                //debugger
                //@ts-ignore
                this.rich = new W26_RichTextLabel();
                this.rich.width = this.output.width;
                this.rich.height = this.output.height;
                this.output.addChild(this.rich);
            }
            this.rich.text = this.input.text;
            //trace(this.input.text);
        });

        this.input.on(EventObject.KEY_PRESS, this, (e: EventObject) => {
            if (e.keyCode == 13) {
                //this.rich.text = this.input.text;
            }
        })

    }
}