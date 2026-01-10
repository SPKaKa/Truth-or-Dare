














var W26_GUI_RichTextTest = (function (_super) {
    __extends(W26_GUI_RichTextTest, _super);
    function W26_GUI_RichTextTest() {
        var _this_2 = _super.call(this) || this;
        var richlabel = new W26_RichTextLabel();
        richlabel.text = "你好";
        _this_2.addChild(richlabel);
        _this_2.删除富文本.on(EventObject.CLICK, _this_2, function () {
            _this_2.rich.dispose();
            _this_2.rich = null;
        });
        _this_2.添加文本.on(EventObject.CLICK, _this_2, function () {
            if (_this_2.rich == null) {
                _this_2.rich = new W26_RichTextLabel();
                _this_2.rich.width = _this_2.output.width;
                _this_2.rich.height = _this_2.output.height;
                _this_2.output.addChild(_this_2.rich);
            }
            _this_2.rich.pushText(_this_2.input.text);
        });
        _this_2.字体大小.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.fontSize = _this_2.字体大小.selected ? 30 : 24;
        });
        _this_2.水平间距.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.letterSpacing = _this_2.水平间距.selected ? 6 : 0;
        });
        _this_2.垂直间距.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.leading = _this_2.垂直间距.selected ? 6 : 0;
        });
        _this_2.阴影.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.shadowEnabled = _this_2.阴影.selected;
        });
        _this_2.描边.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.stroke = _this_2.描边.selected ? 3 : 0;
        });
        _this_2.斜体.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.italic = _this_2.斜体.selected;
        });
        _this_2.粗体.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.bold = _this_2.粗体.selected;
        });
        _this_2.自动换行.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.wordWrap = _this_2.自动换行.selected;
        });
        _this_2.超出隐藏.on(EventObject.CHANGE, _this_2, function () {
            _this_2.rich.overflow = _this_2.超出隐藏.selected ? 1 : 0;
        });
        _this_2.垂直对齐.on(EventObject.CHANGE, _this_2, function () {
            var index = _this_2.垂直对齐.selectedIndex;
            _this_2.rich.valign = index;
            trace(index);
        });
        _this_2.行垂直对齐.on(EventObject.CHANGE, _this_2, function () {
            var index = _this_2.行垂直对齐.selectedIndex;
            _this_2.rich.valign2 = index;
            trace(index);
        });
        _this_2.水平对齐.on(EventObject.CHANGE, _this_2, function () {
            var index = _this_2.水平对齐.selectedIndex;
            _this_2.rich.align = index;
            trace(index);
        });
        _this_2.确定.on(EventObject.CLICK, _this_2, function () {
            if (_this_2.rich == null) {
                _this_2.rich = new W26_RichTextLabel();
                _this_2.rich.width = _this_2.output.width;
                _this_2.rich.height = _this_2.output.height;
                _this_2.output.addChild(_this_2.rich);
            }
            _this_2.rich.text = _this_2.input.text;
        });
        _this_2.input.on(EventObject.KEY_PRESS, _this_2, function (e) {
            if (e.keyCode == 13) {
            }
        });
        return _this_2;
    }
    return W26_GUI_RichTextTest;
}(GUI_15005));
//# sourceMappingURL=W26_GUI_RichTextTest.js.map