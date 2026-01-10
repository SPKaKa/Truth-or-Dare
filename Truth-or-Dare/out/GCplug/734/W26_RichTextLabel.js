














var W26_BBCodeColor = (function () {
    function W26_BBCodeColor() {
    }
    W26_BBCodeColor.colorMap = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgrey: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        grey: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    return W26_BBCodeColor;
}());
var W26_BBcodeSpecial = (function () {
    function W26_BBcodeSpecial() {
    }
    W26_BBcodeSpecial.KEY_SYMBOL_NEXTLINE = String.fromCharCode(3);
    return W26_BBcodeSpecial;
}());
var W26_BBcodeTag = (function () {
    function W26_BBcodeTag() {
    }
    Object.defineProperty(W26_BBcodeTag, "Reg", {
        get: function () {
            if (this._reg == null) {
                this._reg = new RegExp("^s*(" + W26_BBcodeTag.getAll() + ")s*(?:=s*([^ ]*)s*)?$", "gi");
            }
            return this._reg;
        },
        enumerable: false,
        configurable: true
    });
    W26_BBcodeTag.init = function () {
    };
    W26_BBcodeTag.getAll = function () {
        var result = [];
        result.push(this.Tag);
        result.push(this.N);
        result.push(this.B);
        result.push(this.I);
        result.push(this.U);
        result.push(this.D);
        result.push(this.Cover);
        result.push(this.Note);
        result.push(this.Valign);
        result.push(this.Align);
        result.push(this.Color);
        result.push(this.Size);
        result.push(this.Font);
        result.push(this.Stroke);
        result.push(this.Smooth);
        result.push(this.BgColor);
        result.push(this.Img);
        result.push(this.Ani);
        result.push(this.E_Click);
        result.push(this.Fade);
        result.push(this.Shake);
        result.push(this.A_Fade);
        result.push(this.A_Float);
        result.push(this.Reverse);
        result.push(this.Mosaic);
        return result.join("|");
    };
    W26_BBcodeTag.Tag = "tag";
    W26_BBcodeTag.N = "n";
    W26_BBcodeTag.B = "b";
    W26_BBcodeTag.I = "i";
    W26_BBcodeTag.U = "u";
    W26_BBcodeTag.D = "d";
    W26_BBcodeTag.Cover = "cover";
    W26_BBcodeTag.Note = "note";
    W26_BBcodeTag.Valign = "valign";
    W26_BBcodeTag.Align = "align";
    W26_BBcodeTag.Color = "color";
    W26_BBcodeTag.Size = "size";
    W26_BBcodeTag.Font = "font";
    W26_BBcodeTag.Stroke = "stroke";
    W26_BBcodeTag.Smooth = "smooth";
    W26_BBcodeTag.BgColor = "bgColor";
    W26_BBcodeTag.Img = "img";
    W26_BBcodeTag.Ani = "ani";
    W26_BBcodeTag.E_Click = "e_click";
    W26_BBcodeTag.Fade = "fade";
    W26_BBcodeTag.Shake = "shake";
    W26_BBcodeTag.A_Fade = "a_fade";
    W26_BBcodeTag.A_Float = "a_float";
    W26_BBcodeTag.Reverse = "reverse";
    W26_BBcodeTag.Mosaic = "mosaic";
    return W26_BBcodeTag;
}());
var W26_BBcodeParse = (function () {
    function W26_BBcodeParse() {
    }
    W26_BBcodeParse.parser = function (bbCodeText) {
        var result = { bbCodeStyle: [], text: "" };
        var tagStack = [];
        var infoStack = [];
        var firstIndex = 0;
        var len = bbCodeText.length;
        var startIdx = 0;
        var maxF = 10000;
        var f = 0;
        while (firstIndex < len) {
            if (f >= maxF) {
                break;
            }
            var startIdx = bbCodeText.indexOf("[", firstIndex);
            if (startIdx < 0) {
                this.addBBCodeText(bbCodeText.substring(firstIndex), infoStack, result);
                firstIndex = len;
            }
            else {
                if (firstIndex != startIdx) {
                    this.addBBCodeText(bbCodeText.substring(firstIndex, startIdx), infoStack, result);
                }
                var tagEnd = bbCodeText.indexOf("]", startIdx);
                if (tagEnd == -1) {
                    console.error("文本没有找到结束标签： " + bbCodeText);
                    tagEnd = startIdx;
                    this.addBBCodeText(bbCodeText.substring(startIdx), infoStack, result);
                    break;
                }
                else if (bbCodeText.charAt(startIdx + 1) == "/") {
                    var bbCodeTag = bbCodeText.substring(startIdx + 1, tagEnd).trim();
                    var endTag = bbCodeTag.replace("/", "").trim();
                    if (tagStack.length > 0) {
                        if (endTag != "") {
                            if (tagStack[tagStack.length - 1] == endTag) {
                            }
                            else {
                                console.error("提示：文本没有找到合适的 " + tagStack[tagStack.length - 1] + " 结束标签： " + endTag);
                            }
                        }
                        if (tagStack[tagStack.length - 1] == "") {
                            this.addBBCodeText(bbCodeText.substring(startIdx, tagEnd + 1), infoStack, result);
                        }
                        infoStack.pop();
                        tagStack.pop();
                    }
                    else {
                        this.addBBCodeText(bbCodeText.substring(startIdx, tagEnd + 1), infoStack, result);
                    }
                    firstIndex = tagEnd + 1;
                }
                else {
                    var bbCodeTag = bbCodeText.substring(startIdx + 1, tagEnd).trim();
                    var tagInfo = this.addBBCodeTag(bbCodeTag, infoStack, tagStack);
                    if (tagInfo.tag.trim() == "") {
                        infoStack.pop();
                        tagStack.pop();
                        tagEnd = startIdx;
                        this.addBBCodeText(bbCodeText.substring(startIdx, tagEnd + 1), infoStack, result);
                    }
                    firstIndex = tagEnd + 1;
                }
            }
            f++;
        }
        return result;
    };
    W26_BBcodeParse.getBBCodeTag = function (bbCodeTag) {
        var f = this.bbCodeTag2Style(bbCodeTag);
        if (f == null)
            return "";
        return f.tag;
    };
    W26_BBcodeParse.addBBCodeTag = function (bbCodeTag, infoStack, tagStack) {
        var s = this;
        var info = s.bbCodeTag2Style(bbCodeTag);
        infoStack.push(info);
        tagStack.push(info.tag);
        return info;
    };
    W26_BBcodeParse.checkTextAnimation = function (infoStack) {
        for (var i = 0; i < infoStack.length; i++) {
            var info = infoStack[i];
            if (info["a_fade"] != null)
                return true;
            if (info["a_float"] != null)
                return true;
        }
        return false;
    };
    W26_BBcodeParse.addBBcodeText2 = function (value, infoStack, result, textIndex) {
        if (textIndex === void 0) { textIndex = 0; }
        var d = {
            text: value,
            style: null,
            textIndex: textIndex
        };
        if (infoStack.length > 0) {
            for (var i = infoStack.length - 1; i >= 0; i--) {
                var info = infoStack[i];
                this.stylePushInfo(d, info);
            }
        }
        result.bbCodeStyle.push(d);
    };
    W26_BBcodeParse.addBBCodeText = function (value, infoStack, result) {
        result.text += value;
        var valueArray = this.getRN(value);
        var fullText = valueArray.join('');
        for (var j = 0; j < valueArray.length; j++) {
            var text = valueArray[j];
            if (this.checkTextAnimation(infoStack)) {
                for (var k = 0; k < text.length; k++) {
                    this.addBBcodeText2(text[k], infoStack, result, k);
                }
            }
            else {
                this.addBBcodeText2(text, infoStack, result);
            }
            if (j != valueArray.length - 1) {
                result.bbCodeStyle.push({
                    text: W26_BBcodeSpecial.KEY_SYMBOL_NEXTLINE,
                    style: null,
                    textIndex: 0
                });
            }
        }
    };
    W26_BBcodeParse.getRN = function (value) {
        var regex = /\r?\n|\r|\\n|\\r|\\r?\\n/;
        return value.split(regex);
    };
    W26_BBcodeParse.stylePushInfo = function (styleType, info) {
        if (styleType.style == null) {
            styleType.style = info;
        }
        else {
            var tags = info.tag.split(",");
            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i];
                if (tag == "")
                    continue;
                var v = info[tag];
                if (styleType.style[tag] == null) {
                    styleType.style[tag] = v;
                }
            }
        }
    };
    W26_BBcodeParse.bbCodeTag2Style = function (bbCodeTag) {
        var tagArray = bbCodeTag.split("&");
        var info = { tag: "" };
        for (var j = 0; j < tagArray.length; j++) {
            var btag = tagArray[j];
            btag = btag.trim();
            if (btag.match(W26_BBcodeTag.Reg)) {
                info.tag += btag.split("=")[0].trim();
                if (btag == "i" || btag == "u" || btag == "b" || btag == "soomth" || btag == "d" || btag == "tag") {
                    this.addBBCodeStyleAttr(info, btag, true);
                }
                else {
                    var parts = btag.split("=");
                    if (parts.length < 2) {
                    }
                    else {
                        var prop = parts[0];
                        var value = parts[1].replace(/['"]/g, "");
                        this.addBBCodeStyleAttr(info, prop.trim(), value.trim());
                    }
                }
            }
            if (j != tagArray.length - 1) {
                info.tag += ",";
            }
        }
        return info;
    };
    W26_BBcodeParse.addBBCodeStyleAttr = function (info, prop, value) {
        if (prop === W26_BBcodeTag.Color) {
            info[W26_BBcodeTag.Color] = this._handleFontColor(value);
        }
        else if (prop === W26_BBcodeTag.Size) {
            info[W26_BBcodeTag.Size] = this._handleFontSize(value);
        }
        else if (prop === W26_BBcodeTag.Tag) {
            info[W26_BBcodeTag.Tag] = value == true;
        }
        else if (prop === W26_BBcodeTag.I || prop === "italic") {
            info[W26_BBcodeTag.I] = value == true;
        }
        else if (prop === W26_BBcodeTag.B || prop === "bold") {
            info[W26_BBcodeTag.B] = value == true;
        }
        else if (prop === W26_BBcodeTag.U) {
            info[W26_BBcodeTag.U] = value == true;
        }
        else if (prop === W26_BBcodeTag.D) {
            info[W26_BBcodeTag.D] = value == true;
        }
        else if (prop === W26_BBcodeTag.Cover) {
            info[W26_BBcodeTag.Cover] = this._handleCover(value);
        }
        else if (prop === W26_BBcodeTag.Note) {
            info[W26_BBcodeTag.Note] = this._handleNote(value);
        }
        else if (prop === W26_BBcodeTag.Font) {
            info[W26_BBcodeTag.Font] = this._handleFont(value);
        }
        else if (prop === W26_BBcodeTag.Stroke) {
            info[W26_BBcodeTag.Stroke] = this._handleStroke(value);
        }
        else if (prop === W26_BBcodeTag.Smooth) {
            info[W26_BBcodeTag.Smooth] = value == true;
        }
        else if (prop === W26_BBcodeTag.BgColor) {
            info[W26_BBcodeTag.BgColor] = this._handleFontColor(value);
        }
        else if (prop === W26_BBcodeTag.Img) {
            info[W26_BBcodeTag.Img] = this._handleImage(value);
        }
        else if (prop === W26_BBcodeTag.Ani) {
            info[W26_BBcodeTag.Ani] = this._handleAnimation(value);
        }
        else if (prop === W26_BBcodeTag.E_Click) {
            info[W26_BBcodeTag.E_Click] = this._handleE_Click(value);
        }
        else if (prop === W26_BBcodeTag.Fade) {
            info[W26_BBcodeTag.Fade] = this._handleFade(value);
        }
        else if (prop === W26_BBcodeTag.Shake) {
            info[W26_BBcodeTag.Shake] = this._handleShake(value);
        }
        else if (prop === W26_BBcodeTag.A_Fade) {
            info[W26_BBcodeTag.A_Fade] = this._handleFade(value);
        }
        else if (prop === W26_BBcodeTag.A_Float) {
            info[W26_BBcodeTag.A_Float] = this._handleFade(value);
        }
        else if (prop === W26_BBcodeTag.Reverse) {
            info[W26_BBcodeTag.Reverse] = this._handleReverse(value);
        }
        else if (prop === W26_BBcodeTag.Mosaic) {
            info[W26_BBcodeTag.Mosaic] = this._handleMosaic(value);
        }
        else if (prop === W26_BBcodeTag.Valign) {
            info[W26_BBcodeTag.Valign] = this._handleValign(value);
        }
        else if (prop === W26_BBcodeTag.Align) {
            info[W26_BBcodeTag.Align] = this._handleValign(value);
        }
        else {
            info[prop] = value;
        }
    };
    W26_BBcodeParse.handleValue = function (value2) {
        function containsNonNumericCharacters(str) {
            return /\D/.test(str);
        }
        function handleParam(value2, param) {
            var stringArray = value2.split(",");
            for (var i = 0; i < stringArray.length; i++) {
                var value = stringArray[i].trim();
                if (value[0] == "$") {
                    var n = value.substring(1);
                    var num = parseInt(n);
                    if (num != NaN) {
                        value = Game.player.variable.getString(num);
                    }
                }
                else if (value[0] == "@") {
                    var n = value.substring(1);
                    var num = parseInt(n);
                    if (num != NaN) {
                        value = Game.player.variable.getVariable(num).toString();
                    }
                }
                if (value.indexOf(",") != -1) {
                    handleParam(value, param);
                }
                else {
                    param.push(value);
                }
            }
        }
        var param = [];
        handleParam(value2, param);
        var param2 = [];
        for (var i = 0; i < param.length; i++) {
            if (containsNonNumericCharacters(param[i])) {
                param2[i] = param[i];
            }
            else {
                var p = parseFloat(param[i]);
                if (isNaN(p)) {
                    param2[i] = param[i];
                }
                else {
                    param2[i] = p;
                }
            }
        }
        return param2 == null ? [] : param2;
    };
    W26_BBcodeParse._handleValign = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 0;
        }
        return result;
    };
    W26_BBcodeParse._handleFade = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 0;
        }
        return result;
    };
    W26_BBcodeParse._handleShake = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 0;
        }
        if (result[1] == null) {
            result[1] = 0;
        }
        return result;
    };
    W26_BBcodeParse._handleE_Click = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = null;
        }
        return result;
    };
    W26_BBcodeParse._handleAnimation = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = null;
        }
        if (result[1] == null) {
            result[1] = 32;
        }
        if (result[2] == null) {
            result[2] = 32;
        }
        if (result[3] == null) {
            result[3] = 1;
        }
        if (result[4] == null) {
            result[4] = 1;
        }
        return result;
    };
    W26_BBcodeParse._handleImage = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = null;
        }
        if (result[1] == null) {
            result[1] = 0;
        }
        if (result[2] == null) {
            result[2] = 0;
        }
        return result;
    };
    W26_BBcodeParse._sToColor = function (color) {
        function rgbToHex(red, green, blue) {
            var hex = "#" + Number(red).toString(16).padStart(2, "0") + Number(green).toString(16).padStart(2, "0") + Number(blue).toString(16).padStart(2, "0");
            return hex;
        }
        if (typeof color != "string") {
            return "#000000";
        }
        if (W26_BBCodeColor.colorMap[color] != null) {
            return W26_BBCodeColor.colorMap[color];
        }
        else {
            var rgb = color.split('.');
            if (rgb.length == 3) {
                return rgbToHex(rgb[0], rgb[1], rgb[2]);
            }
        }
        return color;
    };
    W26_BBcodeParse._handleStroke = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = "#000000";
        }
        else {
            result[0] = this._sToColor(result[0]);
        }
        if (result[1] == null) {
            result[1] = 0;
        }
        return result;
    };
    W26_BBcodeParse._handleFont = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = Config.DEFAULT_FONT;
        }
        return result;
    };
    W26_BBcodeParse._handleFontSize = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = null;
        }
        return result;
    };
    W26_BBcodeParse._handleFontColor = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = "#000000";
        }
        else {
            result[0] = this._sToColor(result[0]);
        }
        return result;
    };
    W26_BBcodeParse._handleReverse = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 1;
        }
        return result;
    };
    W26_BBcodeParse._handleNote = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = "";
        }
        if (result[1] == null) {
            result[1] = "";
        }
        if (result[2] == null) {
            result[2] = "";
        }
        if (result[3] == null) {
            result[3] = "";
        }
        return result;
    };
    W26_BBcodeParse._handleCover = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = "#000000";
        }
        else {
            result[0] = this._sToColor(result[0]);
        }
        return result;
    };
    W26_BBcodeParse._handleMosaic = function (value) {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 0.1;
        }
        return result;
    };
    return W26_BBcodeParse;
}());
var W26_BBcode = (function () {
    function W26_BBcode() {
    }
    W26_BBcode.BBcodeParse = W26_BBcodeParse;
    return W26_BBcode;
}());
var W26_RichTextWidthEval = (function () {
    function W26_RichTextWidthEval() {
    }
    W26_RichTextWidthEval.getTextWidth = function (words, font, size) {
        var key = "text";
        var textUi = this.dict.get(key);
        if (textUi == null) {
            var uiString = new UIString();
            this.dict.set(key, uiString);
            textUi = uiString;
        }
        textUi.font = font;
        textUi.fontSize = size;
        textUi.text = words;
        return textUi.textWidth;
    };
    W26_RichTextWidthEval.dict = new Dictionary();
    return W26_RichTextWidthEval;
}());
var W26_RichPool = (function () {
    function W26_RichPool(cls, parent) {
        this.pool = [];
        this.cls = cls;
        this.parent = parent;
    }
    W26_RichPool.prototype.getNext = function () {
        if (this.pool[this.index] == null) {
            this.pool[this.index] = new this.cls();
            this.parent._root.addChild(this.pool[this.index]);
        }
        this.pool[this.index].visible = true;
        var obj = this.pool[this.index];
        this.index++;
        return obj;
    };
    W26_RichPool.prototype.reLast = function () {
        this.index--;
        this.pool[this.index].init();
        this.pool[this.index].clearMaterials();
        this.pool[this.index].visible = false;
    };
    W26_RichPool.prototype.relase = function (element) {
        var index = this.pool.indexOf(element);
        if (index != -1) {
            this.pool[index].init();
            this.pool[index].clearMaterials();
            this.pool[index].visible = false;
        }
    };
    W26_RichPool.prototype.restart = function () {
        this.index = 0;
        for (var i = 0; i < this.pool.length; i++) {
            var p = this.pool[i];
            p.init();
            p.clearMaterials();
            p.visible = false;
        }
    };
    W26_RichPool.prototype.dipose = function () {
        for (var i = 0; i < this.pool.length; i++) {
            var p = this.pool[i];
            p.offAll();
            p.removeSelf();
            p.dispose();
        }
        this.pool.length = 0;
        this.parent = null;
        this.pool = null;
        this.cls = null;
    };
    return W26_RichPool;
}());
var W26_RichTextAnimation = (function () {
    function W26_RichTextAnimation() {
    }
    return W26_RichTextAnimation;
}());
var W26_RichText = (function (_super) {
    __extends(W26_RichText, _super);
    function W26_RichText() {
        var _this_2 = _super.call(this) || this;
        _this_2.oriX = 0;
        _this_2.oriY = 0;
        _this_2.richTexts = [];
        _this_2.onInit();
        _this_2.on(EventObject.MOUSE_OUT, _this_2, _this_2.onOut);
        _this_2.on(EventObject.MOUSE_OVER, _this_2, _this_2.onOver);
        _this_2.on(EventObject.CLICK, _this_2, _this_2.onClick);
        _this_2.once(GameSprite.ON_DISPOSE, _this_2, function () {
            _this_2.icon.dispose();
            _this_2.animation.dispose();
            _this_2.background.dispose();
            _this_2.front.dispose();
            _this_2.noteUiString.dispose();
            _this_2.richTexts.length = 0;
            _this_2.style = null;
            _this_2.disposeUpdate();
            _this_2.offAll();
            _this_2.removeMaterialAll();
        });
        _this_2.on(EventObject.CHANGE, _this_2, function () {
            if (_this_2.isImageOrAni()) {
                if (_this_2.text == "") {
                    _this_2.icon.visible = false;
                    _this_2.animation.visible = false;
                    _this_2.animation.stop();
                }
                else {
                    _this_2.icon.visible = true;
                    _this_2.animation.visible = true;
                    _this_2.animation.gotoAndPlay();
                }
            }
            _this_2.refleshDraw();
        });
        _this_2.on(EventObject.CHANGE, _this_2, function () {
            _this_2.shaderReflesh();
        });
        return _this_2;
    }
    W26_RichText.prototype.shaderReflesh = function () {
        if (!this.hasShaderAni())
            return;
        if (this.text == "") {
            this.removeMaterialAll();
        }
        else if (this.text != "") {
            var shaderAnis = this.getShaderAnis();
            for (var i = 0; i < shaderAnis.length; i++) {
                var shader = shaderAnis[i];
                if (shader == "shake" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE) == null) {
                    this.shake(this.shaderTempParam.shake.oriPower, this.shaderTempParam.shake.time);
                }
                else if (shader == "fade" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE) == null) {
                    this.fade(this.shaderTempParam.fade.speed);
                }
                else if (shader == "a_fade" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE2) == null) {
                    this.a_fade(this.shaderTempParam.a_fade.speed, this.shaderTempParam.a_fade.textIndex);
                }
                else if (shader == "reverse" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE) == null) {
                    this.reverse();
                }
                else if (shader == "mosaic" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC) == null) {
                    this.mosaic(this.shaderTempParam.mosaic.power);
                }
            }
        }
    };
    Object.defineProperty(W26_RichText.prototype, "valign2", {
        get: function () {
            return this._valign2;
        },
        set: function (value) {
            this._valign2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "align2", {
        get: function () {
            return this._align2;
        },
        set: function (value) {
            this._align2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "Style", {
        get: function () {
            return this.style;
        },
        set: function (value) {
            this.style = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "Animation", {
        get: function () {
            return this.animation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "Icon", {
        get: function () {
            return this.icon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "OriX", {
        get: function () {
            return this.oriX;
        },
        set: function (value) {
            this.oriX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "OriY", {
        get: function () {
            return this.oriY;
        },
        set: function (value) {
            this.oriY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "E_Click", {
        get: function () {
            return this.e_click;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "Cover", {
        set: function (value) {
            this._cover = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "NoteParam", {
        get: function () {
            return this.noteParam;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "NoteText", {
        set: function (value) {
            if (this.noteParam.size == 0) {
                this.noteParam.size = this.fontSize / 2;
                if (this.noteParam.size <= 0) {
                    this.noteParam.size = 0;
                }
            }
            if (this.noteParam.color == "") {
                this.noteParam.color = this.color;
            }
            if (this.noteParam.font == "") {
                this.noteParam.font = this.font;
            }
            this.noteUiString.text = this.noteParam.text;
            this.noteUiString.fontSize = this.noteParam.size;
            this.noteUiString.color = this.noteParam.color;
        },
        enumerable: false,
        configurable: true
    });
    W26_RichText.prototype.restoreText = function () {
        if (this.style != null && this.style.text != null) {
            this.text = this.style.text;
        }
    };
    W26_RichText.prototype.onInit = function () {
        this.initE_Click();
        this.initNoteParam();
        this.iniBg();
        this.initFg();
        this.initIcon();
        this.initAni();
        this.initNoteUiString();
        this.init();
        this.shaderTempParam = {
            shake: { oriPower: 0, time: 0, power: 0 },
            fade: { speed: 0 },
            a_fade: { speed: 0, textIndex: 0 },
            mosaic: { power: 0 }
        };
    };
    W26_RichText.prototype.initIcon = function () {
        this.icon = new UIBitmap();
        this.addChildAt(this.icon, 1);
    };
    W26_RichText.prototype.initAni = function () {
        this.animation = new GCAnimation();
        this.addChildAt(this.animation, 1);
        this.animation.loop = true;
        this.animation.silentMode = true;
        this.animation.stop();
        this.animation.id = 0;
    };
    W26_RichText.prototype.initNoteUiString = function () {
        this.noteUiString = new UIString();
        this.addChild(this.noteUiString);
    };
    W26_RichText.prototype.initE_Click = function () {
        if (this.e_click == null) {
            this.e_click = {};
        }
        this.e_click.event_id = 0;
        this.e_click.oldColor = null;
        this.e_click.oldUnderline = null;
        if (this.e_click.param == null) {
            this.e_click.param = [];
        }
        this.e_click.param.length = 0;
        this.e_click.text = null;
    };
    W26_RichText.prototype.initNoteParam = function () {
        if (this.noteParam == null) {
            this.noteParam = { text: "", size: 0, color: "", font: "" };
        }
        this.noteParam.text = "";
        this.noteParam.size = 0;
        this.noteParam.color = "";
        this.noteParam.font = "";
    };
    W26_RichText.prototype.clearCover = function () {
        this._cover = null;
    };
    W26_RichText.prototype.iniBg = function () {
        this.background = new UIBitmap();
        this.addChildAt(this.background, 0);
    };
    W26_RichText.prototype.initFg = function () {
        this.front = new UIBitmap();
        this.addChild(this.front);
    };
    W26_RichText.prototype.init = function () {
        this.text = "";
        this.width = 0;
        this.height = 0;
        this.mouseEnabled = false;
        this.deleteLine = false;
        this._backgroundColor = null;
        this.clearBgColor();
        this.clearFg();
        this.clearCover();
        this.style = null;
        this.richTexts.length = 0;
        if (this.icon) {
            this.icon.visible = false;
            this.icon.image = null;
            ;
        }
        if (this.animation) {
            this.animation.visible = false;
            this.animation.stop();
        }
        this.removeMaterialAll();
        this.disposeUpdate();
    };
    W26_RichText.prototype.removeMaterialAll = function () {
        this.clearMaterials();
        if (this.icon) {
            this.icon.clearMaterials();
        }
        if (this.animation) {
            this.animation.clearMaterials();
        }
    };
    W26_RichText.prototype.refreshBgWh = function () {
        this.background.width = this.width;
        this.background.height = this.height;
    };
    W26_RichText.prototype.clearBgColor = function () {
        var g = this.background.graphics;
        g.clear();
    };
    W26_RichText.prototype.clearFg = function () {
        var g = this.front.graphics;
        g.clear();
    };
    Object.defineProperty(W26_RichText.prototype, "underLine", {
        get: function () {
            return this._tf.underline;
        },
        set: function (value) {
            this._tf.underline = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "deleteLine", {
        set: function (value) {
            this._deleteLine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichText.prototype, "backgroundColor", {
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: false,
        configurable: true
    });
    W26_RichText.prototype.refleshDraw = function () {
        this.graphics.clear();
        this.clearBgColor();
        this.clearFg();
        var width = this.text.length * (this.fontSize + this.letterSpacing) - this.letterSpacing;
        if (width <= 0) {
            width = 0;
        }
        if (this.isImageOrAni()) {
            if (this.text.length > 0) {
                width = this.width;
            }
            else {
                width = 0;
            }
        }
        if (this.noteParam.text.length > 0 && this.text.length > 0 && this.textWidth > this.width / 2) {
            if (!this.noteUiString.visible) {
                this.noteUiString.visible = true;
                var noteX = (this.width - this.noteUiString.textWidth) / 2;
                var noteY = -this.noteParam.size - 2;
                this.noteUiString.x = noteX;
                this.noteUiString.y = noteY;
                this.noteUiString.shadowColor = this.shadowColor;
                this.noteUiString.shadowDx = this.shadowDx;
                this.noteUiString.shadowDy = this.shadowDy;
                this.noteUiString.stroke = this.stroke;
                this.noteUiString.strokeColor = this.strokeColor;
            }
        }
        else {
            this.noteUiString.visible = false;
        }
        if (this._backgroundColor != null) {
            this.background.graphics.drawRect(0, 0, width, this.height, this._backgroundColor);
        }
        if (this._deleteLine) {
            var deleteColor = "FFFFFF";
            if (this.color != null && !this.isImageOrAni()) {
                deleteColor = this.color;
            }
            this.front.graphics.drawLine(0, this.height / 2, width, this.height / 2, deleteColor, 1);
        }
        if (this._cover != null) {
            this.front.graphics.drawRect(0, 0, width, this.height, this._cover);
        }
        if (this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC)) {
            this.refleshMosaic();
        }
    };
    W26_RichText.prototype.isImageOrAni = function () {
        if (this.style != null) {
            if (this.style.style != null) {
                return (this.style.style["img"] != null || this.style.style["ani"] != null);
            }
        }
        return false;
    };
    W26_RichText.prototype.hasShaderAni = function () {
        var allShaderAnis = W26_RichText.allShaderAnis;
        if (this.style != null) {
            if (this.style.style != null) {
                for (var i = 0; i < allShaderAnis.length; i++) {
                    if (this.style.style[allShaderAnis[i]] != null) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    W26_RichText.prototype.getShaderAnis = function () {
        var result = [];
        var allShaderAnis = W26_RichText.allShaderAnis;
        if (this.style != null) {
            if (this.style.style != null) {
                for (var i = 0; i < allShaderAnis.length; i++) {
                    if (this.style.style[allShaderAnis[i]] != null) {
                        result.push(allShaderAnis[i]);
                    }
                }
            }
        }
        return result;
    };
    W26_RichText.prototype.onOverOnce = function () {
        if (this.e_click.oldColor == null) {
            this.e_click.oldColor = this.color;
            this.color = W26_BBCodeColor.colorMap.blue;
        }
        if (this.e_click.oldUnderline == null) {
            this.e_click.oldUnderline = this.underLine;
            this.underLine = true;
        }
    };
    W26_RichText.prototype.onOver = function () {
        if (this.e_click.oldColor == null) {
            this.e_click.oldColor = this.color;
            this.color = W26_BBCodeColor.colorMap.blue;
        }
        if (this.e_click.oldUnderline == null) {
            this.e_click.oldUnderline = this.underLine;
            this.underLine = true;
        }
        for (var i = 0; i < this.richTexts.length; i++) {
            this.richTexts[i].onOverOnce();
        }
    };
    W26_RichText.prototype.onClick = function () {
        if (this.e_click.event_id <= 0)
            return;
        GameCommand.startCommonCommand(this.e_click.event_id, this.e_click.param, null);
    };
    W26_RichText.prototype.onOut = function () {
        if (this.e_click.oldColor != null)
            this.color = this.e_click.oldColor;
        this.e_click.oldColor = null;
        if (this.e_click.oldUnderline != null)
            this.underLine = this.e_click.oldUnderline;
        this.e_click.oldUnderline = null;
        for (var i = 0; i < this.richTexts.length; i++) {
            this.richTexts[i].onOutOnce();
        }
    };
    W26_RichText.prototype.onOutOnce = function () {
        if (this.e_click.oldColor != null)
            this.color = this.e_click.oldColor;
        this.e_click.oldColor = null;
        if (this.e_click.oldUnderline != null)
            this.underLine = this.e_click.oldUnderline;
        this.e_click.oldUnderline = null;
    };
    W26_RichText.prototype.startUpdate = function () {
        os.remove_ENTERFRAME(this.update, this);
        os.add_ENTERFRAME(this.update, this);
    };
    W26_RichText.prototype.disposeUpdate = function () {
        os.remove_ENTERFRAME(this.update, this);
    };
    W26_RichText.prototype.update = function () {
        var time = Game.frameCount * 0.01;
    };
    W26_RichText.prototype.fade = function (speed) {
        this.shaderTempParam.fade.speed = speed;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE);
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE);
        var speedParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_FADE + "_speed";
        var param = {};
        param[speedParam] = speed;
        this.setMaterialValueFast(param);
    };
    W26_RichText.prototype.shake = function (power, time) {
        var _this_2 = this;
        this.shaderTempParam.shake.time = time;
        this.shaderTempParam.shake.power = power;
        this.shaderTempParam.shake.oriPower = power;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE);
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE);
        var tween = Tween.to(this.shaderTempParam.shake, { "power": 0 }, time * 1000, Ease.cubicOut, Callback.New(function () {
            _this_2.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE);
        }, this));
        tween.update = Callback.New(function (tween) {
            if (!_this_2.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE)) {
                tween.clear();
            }
            var param = {};
            var speedParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE + "_frequency";
            param[speedParam] = _this_2.shaderTempParam.shake.power;
            _this_2.setMaterialValueFast(param);
        }, this, [tween]);
    };
    W26_RichText.prototype.a_fade = function (speed, textIndex) {
        this.shaderTempParam.a_fade.speed = speed;
        this.shaderTempParam.a_fade.textIndex = textIndex;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE2);
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE2);
        var speedParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_FADE2 + "_speed";
        var startTimeParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_FADE2 + "_startTime";
        var param = {};
        param[speedParam] = speed;
        param[startTimeParam] = textIndex * 100;
        this.setMaterialValueFast(param);
    };
    W26_RichText.prototype.reverse = function () {
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE);
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE);
        var param = {};
        this.setMaterialValueFast(param);
    };
    W26_RichText.prototype.mosaic = function (power) {
        this.shaderTempParam.mosaic.power = power;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC);
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC);
        var powerParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC + "_power";
        var wParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC + "_w";
        var hParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC + "_h";
        var param = {};
        param[powerParam] = power;
        param[wParam] = this.width;
        param[hParam] = this.height;
        this.setMaterialValueFast(param);
    };
    W26_RichText.prototype.refleshMosaic = function () {
        var powerParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC + "_power";
        var wParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC + "_w";
        var hParam = "mu" + W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC + "_h";
        var param = {};
        param[powerParam] = this.shaderTempParam.mosaic.power;
        param[wParam] = this.width;
        param[hParam] = this.height;
        this.setMaterialValueFast(param);
    };
    W26_RichText.prototype.a_float = function (speed, textIndex) {
    };
    W26_RichText.allShaderAnis = ["shake", "fade", "a_fade", "reverse", "mosaic"];
    return W26_RichText;
}(UIString));
var W26_RichTextLabel = (function (_super) {
    __extends(W26_RichTextLabel, _super);
    function W26_RichTextLabel() {
        var _this_2 = _super.call(this) || this;
        _this_2.splitText = false;
        _this_2._font = Config.DEFAULT_FONT;
        _this_2._fontSize = 24;
        _this_2.width = 200;
        _this_2.height = 30;
        _this_2._color = W26_BBCodeColor.colorMap.white;
        _this_2._wordWrap = true;
        _this_2._leading = 0;
        _this_2._letterspacing = 0;
        _this_2._smooth = false;
        _this_2._align = 0;
        _this_2._valign = 0;
        _this_2.tempData = { lines: [] };
        _this_2._texts = new W26_RichPool(W26_RichText, _this_2);
        _this_2._rootPaddingTop = 2;
        _this_2._root = new UIRoot();
        _this_2._root.enabledLimitView = false;
        _this_2._root.scrollShowType = 0;
        _this_2.addChildAt(_this_2._root, 0);
        _this_2._root.width = _this_2.width;
        _this_2._root.height = _this_2.height;
        _this_2._root.x = 0;
        _this_2._root.y = -_this_2._rootPaddingTop;
        _this_2.on(GameSprite.ON_DISPOSE, _this_2, function () {
            _this_2._resetInitTempData();
            _this_2._texts.dipose();
            _this_2._texts = null;
            _this_2._root.removeSelf();
            _this_2._root.dispose();
            _this_2._root = null;
        });
        _this_2._onVarChange = Callback.New(_this_2.onVarChange, _this_2);
        _this_2.once(EventObject.LOADED, _this_2, function () {
        });
        _this_2.on(EventObject.RESIZE, _this_2, function () {
            _this_2._root.width = _this_2.width + _this_2._rootPaddingTop;
            _this_2._root.height = _this_2.height;
            if (_this_2._wordWrap) {
                _this_2._handleText();
            }
        });
        _this_2.overflow = 0;
        return _this_2;
    }
    W26_RichTextLabel.prototype.linkVar = function (id) {
        if (this._lastVarID != 0) {
            Game.player.removeListenerPlayerVariable(2, this._lastVarID, this._onVarChange);
            Game.player.addListenerPlayerVariable(2, id, this._onVarChange, false, true);
            this._lastVarID = id;
        }
    };
    W26_RichTextLabel.prototype.onVarChange = function (typeID, varID, value) {
        this.set_text(value);
    };
    Object.defineProperty(W26_RichTextLabel.prototype, "textWidth", {
        get: function () {
            var temp = this.tempData;
            if (temp == null)
                return 0;
            var lines = temp.lines;
            if (lines == null)
                return 0;
            if (lines[0] == null)
                return 0;
            var firstLine = lines[0];
            var lastIndex = firstLine.length - 1;
            var lastText = firstLine[lastIndex];
            return lastText.x + lastText.width + this._letterspacing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "textHeight", {
        get: function () {
            var temp = this.tempData;
            if (temp == null)
                return 0;
            var lines = temp.lines;
            if (lines == null)
                return 0;
            var maxHeight = 0;
            if (lines[lines.length - 1] == null)
                return;
            var lastLine = lines[lines.length - 1];
            for (var i = 0; i < lastLine.length; i++) {
                var h = lastLine[i].y + lastLine[i].height;
                if (h > maxHeight) {
                    maxHeight = h;
                }
            }
            return maxHeight + this._leading;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "valign2", {
        get: function () {
            return this._valign2;
        },
        set: function (value) {
            this._valign2 = value;
            var temp = this.tempData;
            var lines = temp.lines;
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                for (var j = 0; j < line.length; j++) {
                    line[j].valign2 = this._valign2;
                }
            }
            this.handleLineYAlign();
            this.handleAlign();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "italic", {
        get: function () {
            return this._italic;
        },
        set: function (value) {
            this._italic = value;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "bold", {
        get: function () {
            return this._bold;
        },
        set: function (value) {
            this._bold = value;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "shadowEnabled", {
        get: function () {
            return this._shadowEnabled;
        },
        set: function (value) {
            this._shadowEnabled = value;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "shadowColor", {
        get: function () {
            return this._shadowColor;
        },
        set: function (value) {
            this._shadowColor = value;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "shadowDx", {
        get: function () {
            return this._shadowDx;
        },
        set: function (value) {
            this._shadowDx = value;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "shadowDy", {
        get: function () {
            return this._shadowDy;
        },
        set: function (value) {
            this._shadowDy = value;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (v) {
            this._stroke = v;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (color) {
            this._strokeColor = color;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "overflow", {
        get: function () {
            return this._overflow;
        },
        set: function (v) {
            this._overflow = v;
            this._root.enabledLimitView = this._overflow == 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (align) {
            this._align = align;
            this.handleAlign();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "valign", {
        get: function () {
            return this._valign;
        },
        set: function (valign) {
            this._valign = valign;
            this.handleAlign();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "letterSpacing", {
        get: function () {
            return this._letterspacing;
        },
        set: function (letterspacing) {
            this._letterspacing = letterspacing;
            this._handleText();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "smooth", {
        get: function () {
            return this._smooth;
        },
        set: function (smooth) {
            this._smooth = smooth;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "leading", {
        get: function () {
            return this._leading;
        },
        set: function (leading) {
            this._leading = leading;
            this._handleText();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (font) {
            this._font = font;
            this._handleText();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.startHandleTextFast();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "wordWrap", {
        get: function () {
            return this._wordWrap;
        },
        set: function (f) {
            this._wordWrap = f;
            this._handleText();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (size) {
            this._fontSize = size;
            this._handleText();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(W26_RichTextLabel.prototype, "text", {
        get: function () {
            return this._getNoBbCodeStyleText();
        },
        set: function (v) {
            if (this.isDisposed)
                return;
            this.set_text(v);
        },
        enumerable: false,
        configurable: true
    });
    W26_RichTextLabel.prototype.set_text_force = function (v) {
        if (v == this._bbCodeText && v.indexOf("$") == -1) {
            this._handleText();
        }
        else {
            this.set_text(v);
        }
    };
    W26_RichTextLabel.prototype.set_text = function (v) {
        if (v == this._bbCodeText) {
            if (v.indexOf("$") == -1) {
                return;
            }
        }
        this._bbCodeText = v;
        this._bbCodeParsed = W26_BBcode.BBcodeParse.parser(v);
        this._handleText();
        if (this._text != this._getNoBbCodeStyleText()) {
            if (this.onChangeFragEvent != null && this.onChangeFragEvent.trim() != "") {
                CommandPage.startTriggerFragmentEvent(this.onChangeFragEvent, Game.player.sceneObject, Game.player.sceneObject);
            }
            this._text = this._getNoBbCodeStyleText();
        }
        this.event(W26_RichTextLabel.EVENT_SET_TEXT_COMPLETED);
    };
    W26_RichTextLabel.prototype.pushText = function (v) {
        if (this._bbCodeParsed == null) {
            this.text = v;
            return;
        }
        if (this.isDisposed)
            return;
        this._bbCodeText += v;
        var parsed = W26_BBcode.BBcodeParse.parser(v);
        this._bbCodeParsed.text += parsed.text;
        for (var i = 0; i < parsed.bbCodeStyle.length; i++) {
            this._bbCodeParsed.bbCodeStyle.push(parsed.bbCodeStyle[i]);
        }
        this.handleRichText(parsed.bbCodeStyle);
    };
    W26_RichTextLabel.prototype.startHandleTextFast = function () {
        var lines = this.tempData.lines;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            for (var j = 0; j < line.length; j++) {
                var ui = line[j];
                if (ui instanceof W26_RichText) {
                    this._resetInitTextFast(ui);
                }
            }
        }
    };
    W26_RichTextLabel.prototype._handleText = function () {
        this._texts.restart();
        this._resetInitTempData();
        var infoes = this._getBbCodeStyles();
        this.handleRichText(infoes);
    };
    W26_RichTextLabel.prototype.restoreRichText = function () {
        var richTexts = this.getAllRichElement();
        for (var i = 0; i < richTexts.length; i++) {
            var richText = richTexts[i];
            richText.restoreText();
        }
    };
    W26_RichTextLabel.prototype.handleRichText = function (infoes) {
        if (infoes == null)
            return;
        var len = infoes.length;
        this.f = 0;
        var result = true;
        for (var i = 0; i < len; i++) {
            this.f = 0;
            if (!this._handleStyle(infoes[i])) {
                break;
            }
        }
        this.handleLineYAlign();
        this.handleAlign();
        this.refleshTextDraw();
    };
    W26_RichTextLabel.prototype.refleshTextDraw = function () {
        var lines = this.tempData.lines;
        for (var i = 0; i < lines.length; i++) {
            for (var j = 0; j < lines[i].length; j++) {
                var textUi = lines[i][j];
                textUi.refleshDraw();
            }
        }
    };
    W26_RichTextLabel.prototype.preLoadAnimations = function (func) {
        func.call(this);
    };
    W26_RichTextLabel.prototype.preLoadAllImages = function (func) {
        var _this_2 = this;
        var images = [];
        var infoes = this._getBbCodeStyles();
        if (infoes == null) {
            func.call(this);
        }
        for (var i = 0; i < infoes.length; i++) {
            var url = this.getImageUrl(infoes[i]);
            if (url == null || url.trim() == "")
                continue;
            images.push(url);
        }
        if (images.length > 0) {
            AssetManager.loadImages(images, Callback.New(function () {
                func.call(_this_2);
            }, this), false, false);
        }
        else {
            func.call(this);
        }
    };
    W26_RichTextLabel.prototype.pushLine = function (ui) {
        var lines = this.tempData.lines;
        var line = lines[lines.length - 1];
        line.push(ui);
        this.tempData.lastText = ui;
    };
    W26_RichTextLabel.prototype.popLine2 = function () {
        var lines = this.tempData.lines;
        for (var i = lines.length - 1; i >= 0; i--) {
            var line = lines[i];
            for (var j = line.length - 1; j >= 0; j--) {
                if (line[j] != null) {
                    var uiString = line[j];
                    line.splice(j, 1);
                    return uiString;
                }
            }
        }
        return null;
    };
    W26_RichTextLabel.prototype.popLine = function () {
        var uistring = this.popLine2();
        if (uistring != null) {
            this.tempData.lastText = this.getLastText2();
        }
        return uistring;
    };
    W26_RichTextLabel.prototype.handleLineYAlign = function () {
        var lines = this.tempData.lines;
        var maxTextHeight = 0;
        var startY = 0;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            maxTextHeight = 0;
            for (var j = 0; j < line.length; j++) {
                var uiString = line[j];
                this.refreshWH(uiString);
                if (uiString.height > maxTextHeight) {
                    maxTextHeight = uiString.height;
                    this.refreshLineY(i, startY, maxTextHeight);
                }
                else {
                    this.evalY(uiString, maxTextHeight, startY, uiString.valign2);
                }
            }
            var maxSpaceHeight = 0;
            var temp = 0;
            for (var j = 0; j < line.length; j++) {
                temp = line[j].NoteParam.size - (line[j].y - startY);
                if (temp > maxSpaceHeight) {
                    maxSpaceHeight = temp;
                }
            }
            for (var j = 0; j < line.length; j++) {
                line[j].y += maxSpaceHeight;
                line[j].y += this._rootPaddingTop;
                line[j].OriY = line[j].y;
            }
            startY = startY + maxTextHeight + this._leading + maxSpaceHeight;
        }
    };
    W26_RichTextLabel.prototype.handleAlign = function () {
        var lines = this.tempData.lines;
        var sumWidth = 0;
        var sumHeight = 0;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            sumWidth = 0;
            var maxHeight = 0;
            for (var j = 0; j < line.length; j++) {
                var ui = line[j];
                sumWidth += ui.width;
                maxHeight = Math.max(ui.height, maxHeight);
            }
            sumHeight += maxHeight;
            if (sumWidth < this.width) {
                var surplusWdith = this.width - sumWidth;
                var resize_x = 0;
                if (this._align == 0) {
                }
                else if (this._align == 1) {
                    resize_x = surplusWdith / 2;
                }
                else if (this._align == 2) {
                    resize_x = surplusWdith;
                }
                for (var j = 0; j < line.length; j++) {
                    var ui = line[j];
                    ui.x = ui.OriX + resize_x;
                }
            }
        }
        if (sumHeight < this.height) {
            var surplusHeight = this.height - sumHeight;
            var resize_y = 0;
            if (this._valign == 0) {
            }
            else if (this._valign == 1) {
                resize_y = surplusHeight / 2;
            }
            else if (this._valign == 2) {
                resize_y = surplusHeight;
            }
            for (var i = 0; i < lines.length; i++) {
                line = lines[i];
                for (var j = 0; j < line.length; j++) {
                    var ui = line[j];
                    ui.y = ui.OriY + resize_y;
                }
            }
        }
    };
    W26_RichTextLabel.prototype._toNextLine = function () {
        var temp = this.tempData;
        if (temp.maxTextHeight == 0) {
            temp.maxTextHeight = this._fontSize;
        }
        temp.currentLineHeight = temp.currentLineHeight + temp.maxTextHeight + this._leading;
        temp.currentLineWidth = 0;
        temp.maxTextHeight = 0;
        temp.maxTextWidth = 0;
        temp.y = temp.currentLineHeight;
        temp.x = temp.currentLineWidth;
        temp.lines.push([]);
    };
    W26_RichTextLabel.prototype.flattenLinesArray = function () {
        var arr = this.tempData.lines;
        var flattenedArray = arr.reduce(function (acc, cur) { return __spreadArray(__spreadArray([], acc, true), cur, true); }, []);
        return flattenedArray;
    };
    W26_RichTextLabel.prototype.getLastText = function () {
        var array = this.tempData.lines;
        if (array == null)
            return undefined;
        if (array.length === 0 || array[array.length - 1].length === 0) {
            return undefined;
        }
        return array[array.length - 1][array[array.length - 1].length - 1];
    };
    W26_RichTextLabel.prototype.getLastText2 = function () {
        var gg = this.getAllRichElement();
        if (gg == null)
            return null;
        if (gg.length == 0)
            return null;
        return gg[gg.length - 1];
    };
    W26_RichTextLabel.prototype.getLastText3 = function () {
        var lines = this.tempData.lines;
        for (var i = lines.length - 1; i >= 0; i--) {
            var line = lines[i];
            for (var j = line.length - 1; j >= 0; j--) {
                if (line[j] != null) {
                    var uiString = line[j];
                    return uiString;
                }
            }
        }
        return;
    };
    W26_RichTextLabel.prototype.getNextText = function () {
        var text = this._texts.getNext();
        this._resetInitText(text);
        return text;
    };
    W26_RichTextLabel.prototype.getLines = function () {
        return this.tempData.lines;
    };
    W26_RichTextLabel.prototype.getLine = function (index) {
        if (this.tempData.lines == null) {
            return [];
        }
        if (index >= this.tempData.lines.length || index < 0) {
            return [];
        }
        return this.tempData.lines[index];
    };
    W26_RichTextLabel.prototype.getAllRichElement = function () {
        var t = [];
        var lines = this.getLines();
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            for (var j = 0; j < line.length; j++) {
                t.push(line[j]);
            }
        }
        return t;
    };
    W26_RichTextLabel.prototype._resetInitText = function (text) {
        text.init();
        text.text = "";
        text.fontSize = this._fontSize;
        text.italic = this._italic;
        text.bold = this.bold;
        text.wordWrap = false;
        text.color = this._color;
        text.font = this._font;
        text.smooth = this._smooth;
        text.letterSpacing = this._letterspacing;
        text.underLine = false;
        text.clearBgColor();
        text.width = 0;
        text.height = 0;
        text.mouseEnabled = false;
        text.initE_Click();
        text.initNoteParam();
        text.Style = null;
        text.stroke = this._stroke;
        text.strokeColor = this._strokeColor;
        text.shadowEnabled = this._shadowEnabled;
        text.shadowColor = this._shadowColor;
        text.shadowDx = this._shadowDx;
        text.shadowDy = this._shadowDy;
        text.valign2 = this._valign2;
        text.align2 = this._align2;
    };
    W26_RichTextLabel.prototype._resetInitTextFast = function (text) {
        if (text.Style.style != null) {
            if (text.Style.style["i"] == null) {
                text.italic = this._italic;
            }
            if (text.Style.style["b"] == null) {
                text.bold = this.bold;
            }
            if (text.Style.style["color"] == null) {
                text.color = this._color;
            }
            if (text.Style.style["smooth"] == null) {
                text.smooth = this._smooth;
            }
            if (text.Style.style["stroke"] == null) {
                text.stroke = this._stroke;
                text.strokeColor = this._strokeColor;
            }
            text.shadowEnabled = this._shadowEnabled;
            text.shadowColor = this._shadowColor;
            text.shadowDx = this._shadowDx;
            text.shadowDy = this._shadowDy;
        }
        else {
            text.italic = this._italic;
            text.bold = this.bold;
            text.wordWrap = false;
            text.color = this._color;
            text.smooth = this._smooth;
            text.stroke = this._stroke;
            text.strokeColor = this._strokeColor;
            text.shadowEnabled = this._shadowEnabled;
            text.shadowColor = this._shadowColor;
            text.shadowDx = this._shadowDx;
            text.shadowDy = this._shadowDy;
        }
    };
    W26_RichTextLabel.prototype._resetInitTempData = function () {
        this.tempData.x = 0;
        this.tempData.y = 0;
        this.tempData.maxTextWidth = 0;
        this.tempData.maxTextHeight = 0;
        this.tempData.currentLineWidth = 0;
        this.tempData.currentLineHeight = 0;
        for (var i = 0; i < this.tempData.lines.length; i++) {
            this.tempData.lines[i].length = 0;
        }
        this.tempData.lines.length = 0;
        this.tempData.lines.push([]);
        this.tempData.lastText = null;
    };
    W26_RichTextLabel.prototype.ignoreKeysymbols = function (text) {
        return text.replace(/[\u0001-\u0009]/g, '');
    };
    W26_RichTextLabel.prototype.refreshWH = function (uiString) {
        if (uiString.Icon.image == null && !uiString.Animation.isPlaying) {
            uiString.width = this.getTextWidth(uiString, uiString.text);
            uiString.height = this.getTextHeight(uiString, uiString.text);
        }
        else if (uiString.Icon.image != null) {
            uiString.width = uiString.Icon.width;
            uiString.height = uiString.Icon.height;
        }
        else if (uiString.Animation.isPlaying) {
            uiString.width = uiString.Animation.width;
            uiString.height = uiString.Animation.height;
        }
    };
    W26_RichTextLabel.prototype.isImage = function (info) {
        if (info.style == null)
            return false;
        var propertys = Object.keys(info.style);
        return propertys.indexOf("img") != -1;
    };
    W26_RichTextLabel.prototype.getImageUrl = function (info) {
        if (this.isImage(info)) {
            return info.style.img.url;
        }
        return null;
    };
    W26_RichTextLabel.prototype.isHexColor = function (str) {
        if (str.length !== 7 || str[0] !== '#') {
            return false;
        }
        for (var i = 1; i < 7; i++) {
            var c = str[i];
            if (!/^[0-9a-fA-F]$/.test(c)) {
                return false;
            }
        }
        return true;
    };
    W26_RichTextLabel.prototype.handleInfo = function (element, info) {
        var uiString;
        var bgColor = null;
        var result = { bgColor: bgColor, imagePass: true, valign: 2, align: 0 };
        if (info.style == null) {
            return result;
        }
        uiString = element;
        var style = info.style;
        var propertys = Object.keys(style);
        for (var i = 0; i < propertys.length; i++) {
            var property = propertys[i];
            var value = style[property];
            if (property == "tag") {
            }
            else if (property == W26_BBcodeTag.B) {
                uiString.bold = true;
            }
            else if (property == W26_BBcodeTag.U) {
                uiString.underLine = true;
            }
            else if (property == W26_BBcodeTag.I) {
                uiString.italic = true;
            }
            else if (property == W26_BBcodeTag.Smooth) {
                uiString.smooth = true;
            }
            else if (property == W26_BBcodeTag.D) {
                uiString.deleteLine = true;
            }
            else if (property == W26_BBcodeTag.Cover) {
                uiString.Cover = value[0];
            }
            else if (property == W26_BBcodeTag.Note) {
                uiString.NoteParam.text = value[0];
                if (isNaN(value[1])) {
                    uiString.NoteParam.size = 0;
                }
                else {
                    uiString.NoteParam.size = value[1];
                }
                uiString.NoteParam.color = value[2];
                uiString.NoteParam.font = value[3];
                uiString.NoteText = uiString.NoteParam.text;
            }
            else if (property == W26_BBcodeTag.Font) {
                uiString.font = value[0];
            }
            else if (property == W26_BBcodeTag.Size) {
                if (value[0] == null || isNaN(value[0])) {
                    value[0] = this._fontSize;
                }
                else {
                }
                uiString.fontSize = value[0];
            }
            else if (property == W26_BBcodeTag.Color) {
                if (!this.isHexColor(value[0])) {
                    value[0] = this._color;
                }
                uiString.color = value[0];
            }
            else if (property == W26_BBcodeTag.BgColor) {
                uiString.backgroundColor = value[0];
            }
            else if (property == W26_BBcodeTag.Stroke) {
                if (!this.isHexColor(value[0])) {
                    value[0] = this._strokeColor;
                }
                if (isNaN(value[1])) {
                    value[1] = this._stroke;
                }
                uiString.stroke = value[1];
                uiString.strokeColor = value[0];
            }
            else if (property == W26_BBcodeTag.E_Click) {
                if (value[0] != null) {
                    uiString.mouseEnabled = true;
                    uiString.E_Click.event_id = value[0];
                    uiString.E_Click.param.length = 0;
                    for (var kk = 1; kk < value.length; kk++) {
                        uiString.E_Click.param.push(value[kk]);
                    }
                }
            }
            else if (property == W26_BBcodeTag.Img) {
                if (value[0] != null) {
                    uiString.Icon.image = value[0];
                    if (value[1] == 0 && value[2] == 0) {
                        value[1] = this._fontSize;
                        value[2] = this._fontSize;
                    }
                    if (this._wordWrap) {
                    }
                    uiString.Icon.width = value[1];
                    uiString.Icon.height = value[2];
                    uiString.Icon.visible = true;
                }
            }
            else if (property == W26_BBcodeTag.Ani) {
                if (value[0] != null && !isNaN(value[0])) {
                    uiString.Animation.id = value[0];
                    if (value[1] == 0 && value[2] == 0) {
                        value[1] = this._fontSize;
                        value[2] = this._fontSize;
                    }
                    uiString.Animation.gotoAndPlay();
                    uiString.Animation.width = value[1];
                    uiString.Animation.height = value[2];
                    uiString.Animation.scaleX = value[3];
                    uiString.Animation.scaleY = value[4];
                    uiString.Animation.visible = true;
                }
            }
            else if (property == W26_BBcodeTag.Fade) {
                value[0] = Math.max(0.1, value[0]);
                uiString.fade(value[0]);
            }
            else if (property == W26_BBcodeTag.Shake) {
                value[0] = Math.max(0.1, value[0]);
                value[1] = Math.max(0.1, value[1]);
                uiString.shake(value[0], value[1]);
            }
            else if (property == W26_BBcodeTag.A_Fade) {
                value[0] = Math.max(0.1, value[0]);
                uiString.a_fade(value[0], info.textIndex);
            }
            else if (property == W26_BBcodeTag.Reverse) {
                uiString.reverse();
            }
            else if (property == W26_BBcodeTag.Mosaic) {
                uiString.mosaic(value[0]);
            }
            else if (property == W26_BBcodeTag.Valign) {
                if (!isNaN(value[0])) {
                    uiString.valign2 = value[0];
                }
            }
            else if (property == W26_BBcodeTag.Align) {
                if (!isNaN(value[0])) {
                    uiString.align2 = value[0];
                }
            }
        }
        return result;
    };
    W26_RichTextLabel.prototype.checkSameEvent = function (t1, t2) {
        if (t1.Style == null)
            return false;
        if (t2.Style == null)
            return false;
        if (t1.Style.style == null)
            return false;
        if (t2.Style.style == null)
            return false;
        if (t1.Style.style["e_click"] == null)
            return false;
        if (t2.Style.style["e_click"] == null)
            return false;
        var prama1 = t1.Style.style["e_click"];
        var prama2 = t2.Style.style["e_click"];
        for (var i = 0; i < prama1.length; i++) {
            if (prama1[i] != prama2[i])
                return false;
        }
        return true;
    };
    W26_RichTextLabel.prototype.addRichTextSameLine = function (_lastText, uiString) {
        if (_lastText != null) {
            if (_lastText.richTexts.length > 0) {
                for (var _i = 0, _c = _lastText.richTexts; _i < _c.length; _i++) {
                    var t = _c[_i];
                    if (this.checkSameEvent(t, uiString)) {
                        uiString.richTexts.push(t);
                        t.richTexts.push(uiString);
                    }
                }
            }
            if (this.checkSameEvent(_lastText, uiString)) {
                uiString.richTexts.push(_lastText);
                _lastText.richTexts.push(uiString);
            }
        }
    };
    W26_RichTextLabel.prototype.handleToNextLine = function (uiString, nextText, info) {
        this.refreshWH(uiString);
        this._toNextLine();
        var nextInfo = { text: nextText, style: info.style, textIndex: info.textIndex };
        this._handleStyle(nextInfo);
    };
    W26_RichTextLabel.prototype.handleToNextLineOfImage = function (uiString, nextText, info) {
        var lines = this.tempData.lines;
        this._texts.relase(uiString);
        this._toNextLine();
        var nextInfo = { text: nextText, style: info.style, textIndex: info.textIndex };
        this._handleStyle(nextInfo);
    };
    W26_RichTextLabel.prototype._handleStyleIn = function (info) {
        if (this.f > 10 && (this._fontSize > this.width) && this._wordWrap) {
        }
        this.f++;
        function isImageF(uiString) {
            return uiString.isImageOrAni();
        }
        var bgColor = null;
        var isImage = false;
        var temp = this.tempData;
        var _lastText = this.tempData.lastText;
        if (info.text == W26_BBcodeSpecial.KEY_SYMBOL_NEXTLINE) {
            this._toNextLine();
            return true;
        }
        var uiString;
        uiString = this.getNextText();
        uiString.Style = info;
        isImage = isImageF(uiString);
        var result = this.handleInfo(uiString, info);
        bgColor = result.bgColor;
        if (isImage) {
        }
        else {
            uiString.text = info.text;
        }
        this.refreshWH(uiString);
        uiString.x = temp.x;
        temp.maxTextWidth = Math.max(uiString.width, temp.maxTextWidth);
        temp.x += uiString.width + this._letterspacing;
        if (!isImage) {
            this.pushLine(uiString);
            if (_lastText != null) {
                this.addRichTextSameLine(_lastText, uiString);
            }
        }
        else if (isImage && !this._wordWrap) {
            this.pushLine(uiString);
            if (_lastText != null) {
                this.addRichTextSameLine(_lastText, uiString);
            }
        }
        else if (isImage && this._wordWrap && !this.isImageWrap(uiString)) {
            this.pushLine(uiString);
            if (_lastText != null) {
                this.addRichTextSameLine(_lastText, uiString);
            }
        }
        if (this._wordWrap && !isImage) {
            var nextText = this.handleWordWrap(uiString);
            if (nextText != null) {
                this.handleToNextLine(uiString, nextText, info);
            }
        }
        else if (this._wordWrap && isImage) {
            if (this.isImageWrap(uiString)) {
                this.handleToNextLineOfImage(uiString, nextText, info);
            }
        }
        if (bgColor != null) {
        }
        uiString.OriX = uiString.x;
        uiString.OriY = uiString.y;
        return true;
    };
    W26_RichTextLabel.prototype._handleStyle = function (info) {
        if (!this.splitText) {
            return this._handleStyleIn(info);
        }
        else {
            for (var i = 0; i < info.text.length; i++) {
                var t = info.text[i];
                var flag = this._handleStyleIn({ text: t, style: info.style, textIndex: info.textIndex });
                if (flag == false) {
                    return false;
                }
            }
            return true;
        }
    };
    W26_RichTextLabel.prototype.handleWordWrapImage = function (uiImage) {
        var startX = uiImage.x;
        var width = uiImage.width + startX;
        if (width > this.width) {
            return true;
        }
        return false;
    };
    W26_RichTextLabel.prototype.refreshLineY = function (lineIndex, startY, maxHeight) {
        var line = this.tempData.lines[lineIndex];
        for (var i = 0; i < line.length; i++) {
            var uiString = line[i];
            this.evalY(uiString, maxHeight, startY, uiString.valign2);
        }
    };
    W26_RichTextLabel.prototype.evalY = function (element, maxHeight, startY, valign) {
        var y = 0;
        if (valign == 0) {
            y = startY;
        }
        else if (valign == 1) {
            y = ((maxHeight - element.height) / 2) + startY;
        }
        else if (valign == 2) {
            y = (maxHeight - element.height) + startY;
        }
        else {
            y = startY;
        }
        element.y = y;
        element.OriY = element.y;
    };
    W26_RichTextLabel.prototype.getTextWidth = function (uistring, text) {
        var oriText = uistring.text;
        uistring.text = this.ignoreKeysymbols(text);
        var textWidth = uistring.textWidth;
        if (textWidth == 0) {
            textWidth = 0.1;
        }
        uistring.text = oriText;
        return textWidth;
    };
    W26_RichTextLabel.prototype.getTextHeight = function (uistring, text) {
        var oriText = uistring.text;
        uistring.text = this.ignoreKeysymbols(text);
        var textHeight = uistring.textHeight;
        if (textHeight == 0) {
            textHeight = 0.1;
        }
        uistring.text = oriText;
        return textHeight;
    };
    W26_RichTextLabel.prototype.handleWordWrap = function (uistring) {
        var startX = uistring.x;
        var text = uistring.text;
        var width = uistring.width + startX;
        var currentWidth = 0;
        if (width > this.width) {
            for (var i = 0; i < text.length; i++) {
                currentWidth = this.getTextWidth(uistring, text.substring(0, i + 1));
                if (startX + currentWidth > this.width) {
                    if (i == 0 && startX == 0) {
                        i = 1;
                    }
                    var len = i;
                    uistring.text = text.substr(0, len);
                    return text.substring(len);
                }
            }
        }
        return null;
    };
    W26_RichTextLabel.prototype.isImageWrap = function (uistring) {
        var startX = uistring.x;
        var width = uistring.width + startX;
        if (width > this.width) {
            if (startX == 0) {
                return false;
            }
            return true;
        }
        return false;
    };
    W26_RichTextLabel.prototype._isNoBbCode = function () {
        if (this._bbCodeParsed == null)
            return false;
        if (this._getBbCodeStyles().length == 1 && this._getBbCodeStyles()[0].style == null) {
            return true;
        }
        return false;
    };
    W26_RichTextLabel.prototype._getBbCodeStyles = function () {
        if (this._bbCodeParsed == null)
            return null;
        return this._bbCodeParsed.bbCodeStyle;
    };
    W26_RichTextLabel.prototype._getNoBbCodeStyleText = function () {
        if (this._bbCodeParsed == null)
            return "";
        return this._bbCodeParsed.text;
    };
    W26_RichTextLabel.addText = function (text, style) {
        return "[" + style + "]" + text + "[/]";
    };
    W26_RichTextLabel.addTextColor = function (text, color) {
        return this.addText(text, "color=" + color);
    };
    W26_RichTextLabel.addTextTag = function (text) {
        return this.addText(text, "tag");
    };
    W26_RichTextLabel.uiStringToRichText = function (item) {
        if (item instanceof UIString) {
            var name = item.name;
            var text = item.text;
            var richLabel = new W26_RichTextLabel();
            richLabel.name = name;
            richLabel._italic = item.italic;
            richLabel._bold = item.bold;
            richLabel._font = item.font;
            richLabel._strokeColor = item.strokeColor;
            richLabel._stroke = item.stroke;
            richLabel._fontSize = item.fontSize;
            richLabel._letterspacing = item.letterSpacing;
            richLabel._leading = item.leading;
            richLabel._smooth = item.smooth;
            richLabel._valign = item.valign;
            richLabel._align = item.align;
            richLabel._color = item.color;
            richLabel._wordWrap = item.wordWrap;
            richLabel._shadowEnabled = item.shadowEnabled;
            richLabel._shadowColor = item.shadowColor;
            richLabel._shadowDx = item.shadowDx;
            richLabel._shadowDy = item.shadowDy;
            richLabel.overflow = item.overflow;
            richLabel.visible = item.visible;
            richLabel.alpha = item.alpha;
            richLabel.rotation = item.rotation;
            richLabel.mouseEnabled = item.mouseEnabled;
            richLabel.width = item.width;
            richLabel.height = item.height;
            richLabel.x = item.x;
            richLabel.y = item.y;
            richLabel.text = text;
            return richLabel;
        }
        return item;
    };
    W26_RichTextLabel.richTextToUiString = function (item) {
        if (item instanceof W26_RichTextLabel) {
            var name = item.name;
            var text = item.text;
            var richLabel = new UIString();
            richLabel.name = name;
            richLabel.italic = item.italic;
            richLabel.bold = item.bold;
            richLabel.font = item.font;
            richLabel.strokeColor = item.strokeColor;
            richLabel.stroke = item.stroke;
            richLabel.fontSize = item.fontSize;
            richLabel.leading = item.leading;
            richLabel.smooth = item.smooth;
            richLabel.valign = item.valign;
            richLabel.align = item.align;
            richLabel.color = item.color;
            richLabel.wordWrap = item.wordWrap;
            richLabel.shadowEnabled = item.shadowEnabled;
            richLabel.shadowColor = item.shadowColor;
            richLabel.shadowDx = item.shadowDx;
            richLabel.shadowDy = item.shadowDy;
            richLabel.overflow = item.overflow;
            richLabel.visible = item.visible;
            richLabel.alpha = item.alpha;
            richLabel.rotation = item.rotation;
            richLabel.mouseEnabled = item.mouseEnabled;
            richLabel.width = item.width;
            richLabel.height = item.height;
            richLabel.x = item.x;
            richLabel.y = item.y;
            richLabel.text = text;
            return richLabel;
        }
        return item;
    };
    W26_RichTextLabel.PLUGIN_MATERIAL_RICH = 19;
    W26_RichTextLabel.PLUGIN_MATERIAL_FADE = 20;
    W26_RichTextLabel.PLUGIN_MATERIAL_FADE2 = 21;
    W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE = 22;
    W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE = 23;
    W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC = 25;
    W26_RichTextLabel.Shaders = [
        W26_RichTextLabel.PLUGIN_MATERIAL_RICH,
        W26_RichTextLabel.PLUGIN_MATERIAL_FADE,
        W26_RichTextLabel.PLUGIN_MATERIAL_FADE2,
        W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE,
        W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE,
        W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC
    ];
    W26_RichTextLabel.LOAD_COMPLETED = "LOAD_COMPLETED";
    W26_RichTextLabel.EVENT_SET_TEXT_COMPLETED = "EVENT_SET_TEXT_COMPLETED";
    W26_RichTextLabel.quick = false;
    return W26_RichTextLabel;
}(UIBase));
(function () {
    var _this_2 = this;
    if (!Config.BEHAVIOR_EDIT_MODE && !Config.EDIT_MODE) {
        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(function () {
            function setRichText(item, ui, force) {
                if (force === void 0) { force = false; }
                if (item instanceof UIString && (item.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH) != null || force)) {
                    var name = item.name;
                    var text = item.text;
                    var richLabel = new W26_RichTextLabel();
                    richLabel.id = item.id;
                    richLabel.name = name;
                    richLabel._italic = item.italic;
                    richLabel._bold = item.bold;
                    richLabel._font = item.font;
                    richLabel._strokeColor = item.strokeColor;
                    richLabel._stroke = item.stroke;
                    richLabel._fontSize = item.fontSize;
                    richLabel._letterspacing = item.letterSpacing;
                    richLabel._leading = item.leading;
                    richLabel._smooth = item.smooth;
                    richLabel._valign = item.valign;
                    richLabel._align = item.align;
                    richLabel._color = item.color;
                    richLabel._wordWrap = item.wordWrap;
                    richLabel._shadowEnabled = item.shadowEnabled;
                    richLabel._shadowColor = item.shadowColor;
                    richLabel._shadowDx = item.shadowDx;
                    richLabel._shadowDy = item.shadowDy;
                    richLabel.overflow = item.overflow;
                    richLabel.visible = item.visible;
                    richLabel.alpha = item.alpha;
                    richLabel.rotation = item.rotation;
                    richLabel.mouseEnabled = item.mouseEnabled;
                    richLabel.width = item.width;
                    richLabel.height = item.height;
                    richLabel.x = item.x;
                    richLabel.y = item.y;
                    richLabel.onChangeFragEvent = item.onChangeFragEvent;
                    item.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH);
                    var passLength = item.getMaterialPassLength();
                    for (var i = 0; i < passLength; i++) {
                        var maLength = item.getMaterialLength(i);
                        for (var j = 0; j < maLength; j++) {
                            var m = item.getMaterialAt(j, i);
                            richLabel.addMaterialAt(m, j, i);
                        }
                    }
                    for (var j = 0; j < item.numChildren; j++) {
                        var c = item.getChildAt(j);
                        c.removeSelf();
                        richLabel.addChildAt(c, j);
                    }
                    var parent = item.parent;
                    var index = parent.getChildIndex(item);
                    item.removeSelf();
                    item.dispose();
                    item.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH);
                    parent.addChildAt(richLabel, index);
                    ui[name] = richLabel;
                    var lastID = item._lastVarID;
                    if (lastID != 0) {
                        richLabel.linkVar(lastID);
                    }
                    else {
                        richLabel.text = text;
                    }
                    return richLabel;
                }
                else {
                    if (item instanceof UIList) {
                        item.on(UIList.ITEM_CREATE, this, function (ui, data, index) {
                            updateListItems(ui, data);
                        });
                    }
                    else if (item instanceof UIButton && item.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH) != null) {
                        item._tf = setRichText(item._tf, item, true);
                    }
                    else if (item instanceof UIComboBox && item.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH) != null) {
                    }
                }
                return item;
            }
            function updateListItems(ui, data) {
                var len = ui.numChildren;
                for (var i = 0; i < len; i++) {
                    var child = ui.getChildAt(i);
                    if (child instanceof W26_RichTextLabel) {
                        if (data[child.name] != undefined) {
                            child.text = data[child.name];
                        }
                    }
                    updateListItems(child, data);
                }
            }
            function checkRichTextLable(ui, firstUI) {
                if (ui.numChildren == 0)
                    return;
                for (var i = 0; i < ui.numChildren; i++) {
                    var item = ui.getChildAt(i);
                    if (item != null) {
                        checkRichTextLable(setRichText(item, firstUI), firstUI);
                    }
                }
            }
            EventUtils.addEventListenerFunction(GameUI, GameUI.EVENT_CREATE_UI, function (ui) {
                checkRichTextLable(ui, ui);
            }, _this_2);
        }, null));
    }
})();
var W26_GameDialog_RichText = (function () {
    function W26_GameDialog_RichText() {
    }
    W26_GameDialog_RichText.updateDefaultColor = function () {
        var _this_1 = GameDialog.lastDialog;
        var color = _this_1["dialogData"].dialog["color"];
        var changeData = GameDialog["changeData"];
        if (changeData != null && changeData.atts != null && changeData.atts.dialog != null) {
            var changeDialogData = changeData.atts.dialog[0];
            if (changeDialogData["color"] != null) {
                color = changeDialogData["color"];
            }
        }
        this.defaultColor = color;
    };
    W26_GameDialog_RichText.updateStyle = function () {
        var _this_1 = GameDialog.lastDialog;
        var dialogData = {};
        ObjectUtils.clone(_this_1["dialogData"].dialog, dialogData);
        var changeData = GameDialog["changeData"];
        if (changeData != null && changeData.atts != null && changeData.atts.dialog != null) {
            var changeDialogData = changeData.atts.dialog[0];
            var keys = Object.keys(changeDialogData);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                dialogData[key] = changeDialogData[key];
            }
        }
        this.richTextLabel._align = dialogData.align;
        this.richTextLabel.alpha = dialogData.alpha;
        this.richTextLabel._bold = dialogData.bold;
        this.richTextLabel._color = dialogData.color;
        this.richTextLabel._font = dialogData.font;
        this.richTextLabel._fontSize = dialogData.fontSize;
        this.richTextLabel.height = dialogData.height;
        this.richTextLabel.width = dialogData.width;
        this.richTextLabel._italic = dialogData.italic;
        this.richTextLabel._leading = dialogData.leading;
        this.richTextLabel._letterspacing = dialogData.letterSpacing;
        this.richTextLabel._shadowColor = dialogData.shadowColor;
        this.richTextLabel._shadowDx = dialogData.shadowDx;
        this.richTextLabel._shadowDy = dialogData.shadowDy;
        this.richTextLabel._shadowEnabled = dialogData.shadowEnabled;
        this.richTextLabel._smooth = dialogData.smooth;
        this.richTextLabel._stroke = dialogData.stroke;
        this.richTextLabel._strokeColor = dialogData.strokeColor;
        this.richTextLabel._wordWrap = dialogData.wordWrap;
        this.richTextLabel.x = dialogData.x;
        this.richTextLabel.y = dialogData.y;
    };
    W26_GameDialog_RichText.texts = [];
    return W26_GameDialog_RichText;
}());
(function () {
    var _this_2 = this;
    if (!Config.BEHAVIOR_EDIT_MODE && !Config.EDIT_MODE) {
        EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, function () {
            GameDialog.prototype.clearTextMaterials = function () {
                for (var i_11 = 0; i_11 < this.playTextLabels.length; i_11++) {
                    var richText = this.playTextLabels[i_11];
                    this.playTextLabels[i_11].clearMaterials();
                    if (richText instanceof W26_RichText) {
                        if (richText.hasShaderAni()) {
                            richText.shaderReflesh();
                        }
                    }
                }
            };
        }, this);
        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(function () {
            var keysymbols = [
                String.fromCharCode(1),
                String.fromCharCode(2),
                String.fromCharCode(3),
                String.fromCharCode(4),
                String.fromCharCode(5),
                String.fromCharCode(6),
                String.fromCharCode(7),
                String.fromCharCode(8)
            ];
            W26_GameDialog_RichText.richTextLabel = new W26_RichTextLabel();
            W26_GameDialog_RichText.richTextLabel._valign = 0;
            EventUtils.addEventListener(GameDialog, GameDialog.EVENT_DIALOG_START, Callback.New(function (isOption, content, options, name, head, expression, audioURL, speed) {
                if (isOption)
                    return;
                var _this_1 = GameDialog.lastDialog;
                W26_GameDialog_RichText.text = StringUtils.clearHtmlTag(GameDialog.handleText(content, "#FFFFFF", _this_1));
                W26_GameDialog_RichText.texts.length = 0;
                W26_GameDialog_RichText.texts = W26_GameDialog_RichText.text.split('\n');
                if (_this_1.nameText instanceof W26_RichTextLabel) {
                }
                else {
                    var nameText = _this_1.nameText;
                    var nameTextParent = nameText.parent;
                    _this_1.nameText = W26_RichTextLabel.uiStringToRichText(_this_1.nameText);
                    nameTextParent.addChild(_this_1.nameText);
                    nameText.removeSelf();
                    nameText.dispose();
                }
            }, _this_2));
            EventUtils.addEventListener(GameDialog, GameDialog.EVENT_AFTER_DIALOG_START, Callback.New(function (isOption) {
                if (isOption)
                    return;
                var _this_1 = GameDialog.lastDialog;
                var _text = "";
                var lineText = "";
                var currentLineText = "";
                var currentLine = 0;
                W26_GameDialog_RichText.updateDefaultColor();
                var textMaterial = _this_1.dialogTextMaterial;
                var currentColor = null;
                for (var i = 0; i < _this_1.playTextLabels.length; i++) {
                    var nextLine = false;
                    var label = _this_1.playTextLabels[i];
                    var playText = label["playText"];
                    lineText += playText;
                    currentLineText = W26_GameDialog_RichText.texts[currentLine];
                    if (lineText == currentLineText && currentLine != W26_GameDialog_RichText.texts.length - 1) {
                        currentLine++;
                        lineText = "";
                        nextLine = true;
                    }
                    if (playText != "") {
                        var labelColor = label.color.toUpperCase();
                        if (textMaterial) {
                            if (currentColor != labelColor) {
                                currentColor = labelColor;
                                playText = "[color=" + currentColor + "]" + playText;
                                if (_text.length > 0) {
                                    playText = "[/]" + playText;
                                }
                            }
                        }
                        if (!textMaterial) {
                            if (labelColor != W26_GameDialog_RichText.defaultColor) {
                                playText = W26_RichTextLabel.addTextColor(playText, labelColor);
                            }
                        }
                    }
                    _text += playText;
                    if (nextLine) {
                        _text += "\n";
                    }
                    label.removeSelf();
                    label.dispose();
                }
                if (textMaterial) {
                    _text += "[/]";
                }
                _this_1.playTextLabels.length = 0;
                _this_1["dialogText"].removeChildren();
                var richTextLabel = W26_GameDialog_RichText.richTextLabel;
                W26_GameDialog_RichText.updateStyle();
                if (textMaterial) {
                    richTextLabel.splitText = true;
                }
                else {
                    richTextLabel.splitText = false;
                }
                richTextLabel.set_text_force(_text);
                var richTexts = richTextLabel.getAllRichElement();
                for (var i = 0; i < richTexts.length; i++) {
                    var richText = richTexts[i];
                    if (richText.isImageOrAni()) {
                        richText["playText"] = String.fromCharCode(9);
                        richText.text = "1";
                        richText.text = "";
                    }
                    else if (richText.text == "") {
                        continue;
                    }
                    else {
                        richText["playText"] = richText.text;
                        richText.text = "";
                    }
                    richText.clearMaterials();
                    _this_1["dialogText"].addChild(richText);
                    _this_1.playTextLabels.push(richText);
                }
                if (_this_1["playSpeed"] == 5) {
                    _this_1["playTextIndex"] = 0;
                    _this_1["playTextLabelIndex"] = 0;
                    _this_1["playText"](false);
                }
            }, _this_2));
        }, null));
        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(function () {
            if (typeof W26_DialogOpt != "undefined") {
                return;
            }
            GameDialog.prototype.setOption = function (options, defaultIndex, cancelIndex, hideIndexs) {
                if (defaultIndex === void 0) {
                    defaultIndex = -1;
                }
                if (cancelIndex === void 0) {
                    cancelIndex = -1;
                }
                if (hideIndexs === void 0) {
                    hideIndexs = [];
                }
                this.optionClear();
                var dialogData = this.updateOptionPostion();
                this.changeDialogData = dialogData;
                var column = dialogData.optionBox.column;
                if (!this.optionList) {
                    this.optionList = new UIComponent.UIList();
                    this.optionList.overSelectMode = true;
                }
                this.hidedIndexs = hideIndexs;
                this.optionList.itemModelClass = GameDialogOption;
                this.optionList.itemWidth = dialogData.optionBox.width;
                this.optionList.itemHeight = dialogData.optionBox.height;
                this.optionList.spaceX = dialogData.optionBox.columnSpaceing;
                this.optionList.spaceY = dialogData.optionBox.rowSpaceing;
                this.optionList.repeatX = column;
                this.optionList.width = column * (dialogData.optionBox.width + dialogData.optionBox.columnSpaceing) + this.optionList.scrollWidth;
                this.optionList.height = Math.ceil(options.length / column) * (dialogData.optionBox.height + dialogData.optionBox.rowSpaceing) + this.optionList.scrollWidth;
                this.optionList.selectImageURL = dialogData.optionBox.selectImageURL;
                this.optionList.selectImageGrid9 = dialogData.optionBox.grid9img4;
                this.optionList.once(UIComponent.UIList.ITEM_CLICK, this, this.onClick, [{ target: null }, true]);
                var items = [];
                for (var i = 0; i < options.length; i++) {
                    var d = new UIListItemData();
                    items.push(d);
                }
                this.optionList.items = items;
                this.optionTexts = [];
                for (var i = 0; i < options.length; i++) {
                    var optionSp = this.optionList.getItemUI(i);
                    optionSp.setData(dialogData);
                    var opText = new W26_RichTextLabel();
                    ObjectUtils.clone(dialogData.option, opText);
                    opText.wordWrap = false;
                    opText.text = options[i];
                    opText.x = optionSp.x;
                    opText.y = optionSp.y;
                    this.optionText.addChild(opText);
                    this.optionTexts.push(opText);
                    optionSp.add_MOUSEDOWN(this.onOptionMouseDown, this, [i]);
                    optionSp.add_MOUSEOVER(this.onOptionMouseOver, this, [i]);
                    optionSp.add_MOUSEUP(this.onOptionMouseOut, this, [i]);
                    optionSp.add_MOUSEOUT(this.onOptionMouseOut, this, [i]);
                    if (this.dialogMaterialEnabled && this.dialogOptionTextMaterial) {
                        opText.installMaterialData(ObjectUtils.depthClone(dialogData.option.materialData));
                    }
                }
                this.optionBox.addChild(this.optionList);
                UIComponent.UIList.focus = this.optionList;
                var defaultIndexHide = defaultIndex < 0 || hideIndexs.indexOf(defaultIndex) >= 0;
                var cancelIndexHide = cancelIndex < 0 || hideIndexs.indexOf(cancelIndex) >= 0;
                if (!UIComponent.UIList.KEY_BOARD_ENABLED) {
                    stage.off(EventObject.KEY_DOWN, this, this.onKeyDow);
                    if (!cancelIndexHide)
                        stage.on(EventObject.KEY_DOWN, this, this.onKeyDow);
                }
                if (!cancelIndexHide) {
                    stage.on(EventObject.RIGHT_MOUSE_DOWN, this, this.rightDown);
                    var oldCancelIndex = cancelIndex;
                    for (var i = 0; i < this.hidedIndexs.length; i++) {
                        if (this.hidedIndexs[i] < oldCancelIndex)
                            cancelIndex -= 1;
                    }
                }
                else {
                    cancelIndex = -1;
                }
                if (!defaultIndexHide) {
                    var oldDefaultIndex = defaultIndex;
                    for (var i = 0; i < this.hidedIndexs.length; i++) {
                        if (this.hidedIndexs[i] < oldDefaultIndex)
                            defaultIndex -= 1;
                    }
                }
                else {
                    defaultIndex = 0;
                }
                this.optionList.cancelSelectedIndex = cancelIndex;
                this.optionList.selectedIndex = defaultIndex;
                EventUtils.happen(GameDialog, GameDialog.EVENT_DIALOG_WORD_PLAY_COMPLETE, [true]);
                if (this.dialogText.visible && this.nameText.visible && this.headBox.visible && this.dialogBox.visible) {
                    this.skipAni.visible = true;
                    if (dialogData.skipBox.posIndex == 0) {
                        this.skipAni.x = dialogData.skipBox.x;
                        this.skipAni.y = dialogData.skipBox.y;
                    }
                    else {
                        this.skipAni.x = this.dialogText.x + this.lastTextPosX + this.skipAniPoint.x + 6;
                        this.skipAni.y = this.dialogText.y + this.lastTextPosY + this.skipAniPoint.y;
                    }
                    this.skipAni.gotoAndPlay();
                }
                if (this.dialogMaterialEnabled && this.dialogOptionBoxTextMaterial) {
                    this.optionList.installMaterialData(ObjectUtils.depthClone(dialogData.optionBox.materialData));
                }
            };
        }, this));
    }
})();
//# sourceMappingURL=W26_RichTextLabel.js.map