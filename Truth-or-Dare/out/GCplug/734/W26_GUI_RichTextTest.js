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
var W26_GUI_RichTextTest = (function (_super) {
    __extends(W26_GUI_RichTextTest, _super);
    function W26_GUI_RichTextTest() {
        var _this = _super.call(this) || this;
        var richlabel = new W26_RichTextLabel();
        richlabel.text = "你好";
        _this.addChild(richlabel);
        _this.删除富文本.on(EventObject.CLICK, _this, function () {
            _this.rich.dispose();
            _this.rich = null;
        });
        _this.添加文本.on(EventObject.CLICK, _this, function () {
            if (_this.rich == null) {
                _this.rich = new W26_RichTextLabel();
                _this.rich.width = _this.output.width;
                _this.rich.height = _this.output.height;
                _this.output.addChild(_this.rich);
            }
            _this.rich.pushText(_this.input.text);
        });
        _this.字体大小.on(EventObject.CHANGE, _this, function () {
            _this.rich.fontSize = _this.字体大小.selected ? 30 : 24;
        });
        _this.水平间距.on(EventObject.CHANGE, _this, function () {
            _this.rich.letterSpacing = _this.水平间距.selected ? 6 : 0;
        });
        _this.垂直间距.on(EventObject.CHANGE, _this, function () {
            _this.rich.leading = _this.垂直间距.selected ? 6 : 0;
        });
        _this.阴影.on(EventObject.CHANGE, _this, function () {
            _this.rich.shadowEnabled = _this.阴影.selected;
        });
        _this.描边.on(EventObject.CHANGE, _this, function () {
            _this.rich.stroke = _this.描边.selected ? 3 : 0;
        });
        _this.斜体.on(EventObject.CHANGE, _this, function () {
            _this.rich.italic = _this.斜体.selected;
        });
        _this.粗体.on(EventObject.CHANGE, _this, function () {
            _this.rich.bold = _this.粗体.selected;
        });
        _this.自动换行.on(EventObject.CHANGE, _this, function () {
            _this.rich.wordWrap = _this.自动换行.selected;
        });
        _this.超出隐藏.on(EventObject.CHANGE, _this, function () {
            _this.rich.overflow = _this.超出隐藏.selected ? 1 : 0;
        });
        _this.垂直对齐.on(EventObject.CHANGE, _this, function () {
            var index = _this.垂直对齐.selectedIndex;
            _this.rich.valign = index;
            trace(index);
        });
        _this.行垂直对齐.on(EventObject.CHANGE, _this, function () {
            var index = _this.行垂直对齐.selectedIndex;
            _this.rich.valign2 = index;
            trace(index);
        });
        _this.水平对齐.on(EventObject.CHANGE, _this, function () {
            var index = _this.水平对齐.selectedIndex;
            _this.rich.align = index;
            trace(index);
        });
        _this.确定.on(EventObject.CLICK, _this, function () {
            if (_this.rich == null) {
                _this.rich = new W26_RichTextLabel();
                _this.rich.width = _this.output.width;
                _this.rich.height = _this.output.height;
                _this.output.addChild(_this.rich);
            }
            _this.rich.text = _this.input.text;
        });
        _this.input.on(EventObject.KEY_PRESS, _this, function (e) {
            if (e.keyCode == 13) {
            }
        });
        return _this;
    }
    return W26_GUI_RichTextTest;
}(GUI_15005));
//# sourceMappingURL=W26_GUI_RichTextTest.js.map