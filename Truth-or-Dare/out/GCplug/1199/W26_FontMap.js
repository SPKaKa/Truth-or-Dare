var W26_FontMapData = (function () {
    function W26_FontMapData(font, sizeDt) {
        this.font = font;
        this.sizeDt = sizeDt;
    }
    return W26_FontMapData;
}());
var W26_FontMap = (function () {
    function W26_FontMap() {
        this._fontMap = {};
    }
    W26_FontMap.prototype.clear = function () {
        this._fontMap = {};
        this.reflushAllText();
    };
    W26_FontMap.prototype.setCurrentMap = function (moduleId) {
        var _this_2 = this;
        var _module = GameData.getModuleData(W26_FontMap.PLUGIN_MODULE_TYPE_FONTMAP, moduleId);
        if (_module == null) {
            console.error("切换失败,不能存在该模块 ", moduleId);
            return;
        }
        this._fontMap = {};
        _module.fontMap.forEach(function (element) {
            _this_2._fontMap[element.oriFont] = new W26_FontMapData(element.font, element.fontSizeDt);
        });
        this.reflushAllText();
    };
    W26_FontMap.prototype.reflushAllText = function () {
        var sprites = this.dfsIterative(stage);
        sprites.forEach(function (element) {
            var _tf = element["_tf"];
            if (_tf != null && _tf["text"] != null) {
                var oriText = _tf["text"];
                _tf["text"] = "";
                _tf["text"] = oriText;
            }
        });
    };
    W26_FontMap.prototype.dfsIterative = function (root) {
        var stack = [root];
        var visited = new Set();
        var result = [];
        while (stack.length > 0) {
            var node = stack.pop();
            if (node == null) {
                continue;
            }
            if (!visited.has(node)) {
                visited.add(node);
                result.push(node);
                if (node.numChildren > 0) {
                    for (var i = node.numChildren - 1; i >= 0; i--) {
                        stack.push(node.getChildAt(i));
                    }
                }
            }
        }
        return result;
    };
    W26_FontMap.prototype.getFontData = function (font) {
        return this._fontMap[font];
    };
    Object.defineProperty(W26_FontMap, "Map", {
        get: function () {
            if (this._map == null) {
                this._map = new W26_FontMap();
            }
            return this._map;
        },
        enumerable: false,
        configurable: true
    });
    W26_FontMap.PLUGIN_MODULE_TYPE_FONTMAP = 22;
    return W26_FontMap;
}());
(function (CommandExecute) {
    function customCommand_15004(commandPage, cmd, trigger, triggerPlayer, playerInput, p) {
        if (p.restoreOriFont) {
            W26_FontMap.Map.clear();
        }
        else {
            W26_FontMap.Map.setCurrentMap(p.fontMap);
        }
    }
    CommandExecute.customCommand_15004 = customCommand_15004;
})(CommandExecute || (CommandExecute = {}));
(function () {
    var _this_2 = this;
    if (!Config.BEHAVIOR_EDIT_MODE && !Config.EDIT_MODE) {
        EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, function () {
            laya.display.Text.prototype.setFontNoChange = function (value) {
                if (this._currBitmapFont) {
                    this._currBitmapFont = null;
                    this.scale(1, 1);
                }
                if (Text._bitmapFonts && Text._bitmapFonts[value]) {
                    this._currBitmapFont = Text._bitmapFonts[value];
                }
                this._getCSSStyle().fontFamily = value;
            };
            laya.display.Text.prototype.setfontSizeNoChange = function (value) {
                this._getCSSStyle().fontSize = value;
            };
            Callback.New(function () {
                var renderText = laya.display.Text.prototype.renderText;
                laya.display.Text.prototype.renderText = function (begin, visibleLineCount) {
                    var oriFont = this.font;
                    var oriFontSize = this.fontSize;
                    var fontData = W26_FontMap.Map.getFontData(this.font);
                    if (fontData != null) {
                        this.setFontNoChange(fontData.font);
                        this.setfontSizeNoChange(fontData.sizeDt + oriFontSize);
                    }
                    renderText.apply(this, arguments);
                    if (fontData != null) {
                        this.setFontNoChange(oriFont);
                        this.setfontSizeNoChange(oriFontSize);
                    }
                    fontData = null;
                };
                var _focusIn = laya.display.Input.prototype._focusIn;
                laya.display.Input.prototype._focusIn = function () {
                    var oriFont = this.font;
                    var oriFontSize = this.fontSize;
                    var fontData = W26_FontMap.Map.getFontData(this.font);
                    if (fontData != null) {
                        this.setFontNoChange(fontData.font);
                        this.setfontSizeNoChange(fontData.sizeDt + oriFontSize);
                    }
                    _focusIn.apply(this, arguments);
                    if (fontData != null) {
                        this.setFontNoChange(oriFont);
                        this.setfontSizeNoChange(oriFontSize);
                    }
                    fontData = null;
                };
            }, _this_2).delayRun(5, setTimeout);
        }, this);
    }
})();
//# sourceMappingURL=W26_FontMap.js.map