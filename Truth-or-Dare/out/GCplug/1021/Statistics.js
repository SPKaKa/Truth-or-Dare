(function (Orzi_Tools) {
    var Statistics = (function () {
        function Statistics() {
        }
        Statistics.init = function () {
            this.text = '';
            this.names = {};
            this.saveTexts = [];
        };
        Statistics.clearText = function (text) {
            return text.replace(/[\s\.\,\?\!，。、？！……「」~·：（）\(\)]/g, '');
        };
        Statistics.show = function () {
            var lines = 0;
            for (var key in this.names) {
                lines += this.names[key];
            }
            this.addShowLine('============对话数据统计============');
            this.addShowLine('当前总对话条数：', lines);
            this.addShowLine('----------------------');
            this.addShowLine('其中:');
            for (var key in this.names) {
                this.addShowLine(key + '：', this.names[key]);
            }
            this.addShowLine('----------------------');
            this.addShowLine('总对话字数：', this.text.length);
            this.addShowLine('去除符号字数：', this.clearText(this.text).length);
            this.addShowLine('============对话数据统计============');
            this.save();
        };
        Statistics.addShowLine = function () {
            var text = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                text[_i] = arguments[_i];
            }
            trace.apply(void 0, text);
            this.saveTexts.push(text.join(' '));
        };
        Statistics.save = function () {
            var _this_2 = this;
            if (os.platform === 2) {
                FileUtils.save(this.saveTexts.join('\n'), Orzi_Tools.Language.path + '_statistics.txt', Callback.New(function () {
                    trace('orzi_language_statistics is saved!');
                    _this_2.init();
                }, this), true, false);
            }
        };
        Statistics.text = '';
        Statistics.names = {};
        Statistics.saveTexts = [];
        return Statistics;
    }());
    Orzi_Tools.Statistics = Statistics;
})(Orzi_Tools || (Orzi_Tools = {}));
//# sourceMappingURL=Statistics.js.map