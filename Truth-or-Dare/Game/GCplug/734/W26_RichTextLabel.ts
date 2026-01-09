
/**
 * Created by woziji00226 on 2023-05-14 16:21:12.
 * 测试版
 */

/*
tag与参数说明
  
参数注意事项
  参数使用 , 号隔开每个参数
  参数可以使用变量 $+数字 使用字符串变量。@+数字 使用数值变量 。例如 字符串变量1=red , [color = $1] 此时转换为[color = red]

基本参数  
    i 斜体           无参数
    b 粗体           无参数
    u 下划线         无参数
    smooth 平滑      无参数
    valign 垂直对齐  [0-垂直对齐类型(0-居上,1-居中,2-居下)] 例如 [valign=0],[valign=1],[valign=2]
    align 水平对齐   [0-水平对齐类型(0-居左,1-居中,2-居右)](暂无实现仅仅占位) 例如 [align=0],[align=1],[align=2]
    color 字体颜色   [0-颜色(可使用预设颜色，也可以使用rgb(r.g.b),最好使用#16进制颜色)] 例如 [color=red] , [color=100.100.100],[color=#FFFFFF]
    size 字体大小    [0-字体大小(最好不要设置太大的)] 例如 [size=30],[size=60]
    font 字体        [0-字体(如果客户端没有字体文件就不会起作用，最好把字体文件导入GC)] 例如 [font=宋体],[font=黑体]
    stroke 描边      [0-描边颜色(和字体颜色同理),1-描边大小] 例如 [stroke=red,3] ,[stroke=60.60.60,3]
    bgColor 背景颜色 [0-颜色(和字体颜色同理)] 例如 [bgColor=red] , [bgColor=100.100.100],[bgColor=#FFFFFF]
  
媒体
    img 图片         [0-url(图片相对路径),1-宽,2-高] 例如 [img=xxxx.png,32,32] (如果不规定宽高，则会使用字体大小作为宽高)
    ani 动画         [0-动画id(动画在数据库中的id),1-宽,2-高,3-X缩放,4-Y缩放] 例如 [ani=1,32,32,1,1]
  
事件
    e_click 点击事件 [0-事件id(在事件库中的id),...后面的参数将加入输入值0...] 例如 [e_click=1,2,3,4] 此时1是id。2，3，4分别是 输入值0 输入值1 输入值2
 
动画
    fade 闪烁动画    [0-速度] 例如 [fade=30]
    shake 震动动画   [0-力度,1-时间(秒)] 例如 [shake 40,5] 
    a_fade 闪烁动画  [0-速度] 例如 [a_fade=30]
 */

/*
关于程序相关
创建一个 富文本对象
var richLabel = new W26_RichTextLabel();
富文本对象与UIstring对象属性相似
richLabel.text = "asdasdasd" 富文本赋值

富文本有一些特殊的特性
richLabel.pushText("asdasdsada") 添加文本 该方式不会影响前面已经添加的文本，故性能比再次赋值好
由于富文本每次赋值 text 都会经过解析 然后构建富文本所以性能不太行，当给text赋值相同的文本时，则不会生效(减少消耗)

richLabel.valign2 = 0 文本垂直模式 可以对每个小文本进行垂直的调整
richLabel.align2 = 0 文本水平模式 可以对每个小文本进行水平的调整(暂时未开发)

*/

class W26_BBCodeColor {
    static colorMap = {
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
}
















/**
 * Created by woziji00226 on 2023-05-14 11:33:32.
 */
type W26_BBCodeInfo = { tag: string, [key: string]: any };

type W26_BBCodeStyleType = { text: string, style: W26_BBCodeInfo, textIndex: number };

type W26_ParsedBBCode = {
    bbCodeStyle: W26_BBCodeStyleType[];
    text: string;
};

class W26_BBcodeSpecial {
    static KEY_SYMBOL_NEXTLINE = String.fromCharCode(3);
}

class W26_BBcodeTag {
    static _reg: RegExp;
    static Tag = "tag"
    static N = "n";
    static B = "b";
    static I = "i";
    static U = "u";
    static D = "d";
    static Cover = "cover"
    static Note = "note";
    static Valign = "valign";
    static Align = "align";
    static Color = "color";
    static Size = "size";
    static Font = "font";
    static Stroke = "stroke";
    static Smooth = "smooth";
    static BgColor = "bgColor";
    static Img = "img";
    static Ani = "ani";
    static E_Click = "e_click";
    static Fade = "fade";
    static Shake = "shake";
    static A_Fade = "a_fade";
    static A_Float = "a_float";
    static Reverse = "reverse";
    static Mosaic = "mosaic";

    static get Reg() {
        if (this._reg == null) {
            this._reg = new RegExp(`^\s*(${W26_BBcodeTag.getAll()})\s*(?:=\s*([^ ]*)\s*)?$`, `gi`);
        }
        return this._reg;
    }

    static init() {

    }

    /**
     * 获得所有字符串
     * @return [string] 
     */
    static getAll(): string {
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
    }

}
class W26_BBcodeParse {
    /*
    static _bbCodeTagReg =
        /^\s*(n|b|i|u|valign|align|color|size|font|stroke|smooth|bgColor|img|ani|e_click|fade|shake|a_fade|a_float)\s*(?:=\s*([^ ]*)\s*)?$/gi;
    
    */

    constructor() {

    }

    /**
     * 解析BBcode
     * @param text 
     * @return [W26_ParsedBBCode] 
     */
    public static parser(bbCodeText: string): W26_ParsedBBCode {
        var result = { bbCodeStyle: [], text: "" };//结果
        var tagStack = [];//标签栈
        var infoStack: Array<W26_BBCodeInfo> = [];//样式栈
        var firstIndex = 0;//开始索引
        //bbCodeText.replace('\n','[n][/n]')
        var len = bbCodeText.length;//长度
        var startIdx = 0;//标签开头

        var maxF = 10000;//最大10000次循环
        var f = 0;

        while (firstIndex < len) {
            if (f >= maxF) {
                break;
            }
            //debugger
            var startIdx = bbCodeText.indexOf("[", firstIndex);
            if (startIdx < 0) {//找不到标签，不是bbcode格式的文本
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
                    //并没有找到]
                }
                else if (bbCodeText.charAt(startIdx + 1) == "/") {//找到[/b]
                    //debugger
                    var bbCodeTag = bbCodeText.substring(startIdx + 1, tagEnd).trim();
                    //var noEndTag = bbCodeTag.replace("/", "");
                    var endTag = bbCodeTag.replace("/", "").trim();
                    //this.getBBCodeTag(bbCodeTag.trim().replace("/", ""));
                    if (tagStack.length > 0) {
                        //debugger;
                        /*
                        if (endTag != "") {
                            if (tagStack[tagStack.length - 1] == endTag) {

                            }
                            else {
                                console.error("提示：文本没有找到合适的结束标签： " + tagStack[tagStack.length - 1]);
                            }
                        }
                        */

                        if (endTag != "") {
                            if (tagStack[tagStack.length - 1] == endTag) {

                            }
                            else {
                                console.error("提示：文本没有找到合适的 " + tagStack[tagStack.length - 1] + " 结束标签： " + endTag);
                            }
                        }

                        if (tagStack[tagStack.length - 1] == "") {
                            //标签为空说明前面没有有效标签
                            this.addBBCodeText(bbCodeText.substring(startIdx, tagEnd + 1), infoStack, result);
                        }

                        infoStack.pop();
                        tagStack.pop();
                    }
                    else {
                        //trace("wu")
                        this.addBBCodeText(bbCodeText.substring(startIdx, tagEnd + 1), infoStack, result);
                    }
                    firstIndex = tagEnd + 1;
                }
                else {//找到的是[b]
                    //debugger
                    var bbCodeTag = bbCodeText.substring(startIdx + 1, tagEnd).trim();
                    var tagInfo = this.addBBCodeTag(bbCodeTag, infoStack, tagStack);
                    if (tagInfo.tag.trim() == "") {
                        //没查到
                        //无效标签删除掉后解析
                        infoStack.pop();
                        tagStack.pop();
                        tagEnd = startIdx;//只跳过[ 以免[]内部还有标签解析错
                        this.addBBCodeText(bbCodeText.substring(startIdx, tagEnd + 1), infoStack, result);
                    }
                    firstIndex = tagEnd + 1;
                }
            }
            f++;
        }
        return result;
    }



    private static getBBCodeTag(bbCodeTag: string): string {
        //debugger
        var f = this.bbCodeTag2Style(bbCodeTag);
        if (f == null) return "";
        return f.tag;
    }

    /**
     * 添加BBCode标签到解析结果中
     * @param bbCodeTag 要添加的BBCode标签
     * @param result 解析结果对象
     * @returns tagInfo 标签信息
     */
    private static addBBCodeTag(bbCodeTag: string, infoStack: Array<W26_BBCodeInfo>, tagStack: Array<string>): W26_BBCodeInfo {
        let s = this;
        let info = s.bbCodeTag2Style(bbCodeTag);
        infoStack.push(info);
        tagStack.push(info.tag);
        return info;
    }

    /**
     * 检查是否是文字动画
     * @param infoStack 
     * @return [boolean] 
     */
    private static checkTextAnimation(infoStack: W26_BBCodeInfo[]): boolean {
        for (var i = 0; i < infoStack.length; i++) {
            var info = infoStack[i];
            if (info["a_fade"] != null) return true;
            if (info["a_float"] != null) return true;
        }
        return false;
    }


    private static addBBcodeText2(value: string, infoStack: W26_BBCodeInfo[], result: W26_ParsedBBCode, textIndex: number = 0) {
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
    }

    /**
    * 添加部分解析结果到结果中
    * @param value 要添加的纯文本
    * @param result 解析结果对象
    */
    private static addBBCodeText(value: string, infoStack: W26_BBCodeInfo[], result: W26_ParsedBBCode) {
        result.text += value;
        //debugger;
        var valueArray = this.getRN(value);
        //trace(valueArray)
        var fullText = valueArray.join('');
        //trace(fullText);
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
    }


    private static getRN(value: string) {
        const regex = /\r?\n|\r|\\n|\\r|\\r?\\n/;
        return value.split(regex);
    }

    /**
     * 向样式里加入信息
     * @param styleType 
     * @param info 
     */
    private static stylePushInfo(styleType: W26_BBCodeStyleType, info: W26_BBCodeInfo) {
        if (styleType.style == null) {
            styleType.style = info;
        }
        else {
            var tags = info.tag.split(",")
            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i];
                if (tag == "") continue;
                var v = info[tag];//值
                if (styleType.style[tag] == null) {
                    styleType.style[tag] = v;
                }

            }

        }
    }

    /**
    * 将BBCode标签转换为自定义属性
    * @param bbCodeTag 要转换的BBCode标签
    * @param result 解析结果对象
    * @returns tagInfo 标签信息
    */
    private static bbCodeTag2Style(bbCodeTag: string): W26_BBCodeInfo {
        //debugger
        var tagArray = bbCodeTag.split("&");
        //debugger
        let info = { tag: "" };
        for (var j = 0; j < tagArray.length; j++) {
            var btag = tagArray[j]
            btag = btag.trim();
            //let s = this;
            //trace(W26_BBcodeTag.Reg.source)
            if (btag.match(W26_BBcodeTag.Reg)) { // 支持的标签
                info.tag += btag.split("=")[0].trim();
                if (btag == "i" || btag == "u" || btag == "b" || btag == "soomth" || btag == "d" || btag == "tag") {
                    this.addBBCodeStyleAttr(info, btag, true);
                } else {
                    //debugger
                    let parts = btag.split("=");
                    if (parts.length < 2) {
                    }
                    else {
                        let prop = parts[0];
                        let value = parts[1].replace(/['"]/g, "");
                        this.addBBCodeStyleAttr(info, prop.trim(), value.trim());
                    }
                }
            }
            if (j != tagArray.length - 1) {
                info.tag += ",";
            }
        }
        //trace(info.tag)
        return info;
    }


    /**
    * 添加样式属性到BBCode标签信息中
    * @param info 标签信息对象
    * @param prop 样式属性名
    * @param value 样式属性值
    */
    private static addBBCodeStyleAttr(info: W26_BBCodeInfo, prop: string, value: any) {
        //trace(prop, value)
        //debugger;
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

    }



    private static handleValue(value2: string): Array<string | number> {
        function containsNonNumericCharacters(str) {
            return /\D/.test(str);
        }
        function handleParam(value2: string, param: Array<string>) {
            var stringArray = value2.split(",");
            for (var i = 0; i < stringArray.length; i++) {
                var value = stringArray[i].trim();
                if (value[0] == "$") {//从字符串变量中查找值
                    var n = value.substring(1);
                    var num = parseInt(n);
                    if (num != NaN) {
                        value = Game.player.variable.getString(num);
                    }
                    //param.push(value);

                }
                else if (value[0] == "@") {
                    var n = value.substring(1);
                    var num = parseInt(n);
                    if (num != NaN) {
                        value = Game.player.variable.getVariable(num).toString();
                    }
                    //param.push(value);
                }

                if (value.indexOf(",") != -1) {
                    handleParam(value, param);
                }
                else {
                    param.push(value);
                }


            }
        }
        var param: Array<string> = [];
        handleParam(value2, param);
        var param2: Array<string | number> = []

        for (var i = 0; i < param.length; i++) {
            //非数字
            if (containsNonNumericCharacters(param[i])) {
                param2[i] = param[i];
            }
            else {
                var p: string | number = parseFloat(param[i]);
                if (isNaN(p)) {
                    param2[i] = param[i];
                }
                else {
                    param2[i] = p;
                }
            }
        }

        return param2 == null ? [] : param2;
    }

    /**
     * 处理垂直对齐
     * @param value 
     * @return [Array] 0-对齐模式(0 1 2)
     */
    private static _handleValign(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 0;
        }
        return result;
    }

    /**
     * 处理闪烁
     * @param value 
     * @return [Array] 0-speed
     */
    private static _handleFade(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = 0;
        }
        return result;
    }

    /**
     * 处理震动
     * @param value 
     * @return [Array] 0-power,1-time
     */
    private static _handleShake(value: string): Array<string | number> {
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
    }

    private static _handleE_Click(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = null;
        }
        return result;
    }

    /**
     * 处理动画
     * @param value 
     * @return [Array] 0-id 1-w 2-h 3-sx 4-sy
     */
    private static _handleAnimation(value: string): Array<string | number> {
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
    }


    /**
     * 处理图片
     * @param value 
     * @return [Array] 0-url 1-w 2-h
     */
    private static _handleImage(value: string): Array<string | number> {
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
    }

    private static _sToColor(color: string): string {
        function rgbToHex(red, green, blue) {
            const hex = `#${Number(red).toString(16).padStart(2, "0")}${Number(green).toString(16).padStart(2, "0")}${Number(blue).toString(16).padStart(2, "0")}`;
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
    }

    private static _handleStroke(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = "#000000";
        }
        else {
            result[0] = this._sToColor(result[0])
        }
        if (result[1] == null) {
            result[1] = 0;
        }
        return result;
    }

    private static _handleFont(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = Config.DEFAULT_FONT;
        }

        return result;
    }

    private static _handleFontSize(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = null;
        }

        return result;
    }

    private static _handleFontColor(value: string): Array<string | number> {
        //debugger
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        if (result[0] == null) {
            result[0] = "#000000";
        }
        else {
            result[0] = this._sToColor(result[0])
        }
        //trace(result[0])
        return result;
    }


    private static _handleReverse(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        //占位
        if (result[0] == null) {
            result[0] = 1;
        }
        return result;
    }

    /**
     * 处理注解
     * @param value2 
     * @return [Array] 
     */
    private static _handleNote(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        //文本
        if (result[0] == null) {
            result[0] = "";
        }
        //大小
        if (result[1] == null) {
            result[1] = "";
        }
        //颜色
        if (result[2] == null) {
            result[2] = "";
        }
        //字体
        if (result[3] == null) {
            result[3] = "";
        }

        return result;
    }

    //处理覆盖
    public static _handleCover(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        //颜色
        if (result[0] == null) {
            result[0] = "#000000";
        }
        else {
            result[0] = this._sToColor(result[0])
        }
        return result;
    }

    public static _handleMosaic(value: string): Array<string | number> {
        var param = this.handleValue(value);
        var result = [];
        for (var i = 0; i < param.length; i++) {
            result.push(param[i]);
        }
        //power
        if (result[0] == null) {
            result[0] = 0.1;
        }

        return result;
    }
    /*
    private static handeValign(value: string) {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                return Game.player.variable.getVariable(num);
            }
        }
        return parseFloat(value);
    }

    private static handleFloat(value: string) {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                return Game.player.variable.getVariable(num);
            }
        }
        return parseFloat(value);
    }

    private static handleFade(value: string) {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                return Game.player.variable.getVariable(num);
            }
        }
        return parseFloat(value);
    }

    private static handleE_Click(value: string) {
        var result = { id: null, param: [] };
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                value = Game.player.variable.getString(num);
            }
        }

        var va = value.split(",");
        result.id = va[0];
        for (var i = 1; i < va.length; i++) {
            result.param.push(va[i]);
        }
        return result;
    }

    private static handleAnimation(value: string): any {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                value = Game.player.variable.getString(num);
            }
        }
        var va = value.split(",");
        var id = Number(va[0]);
        var w = 0;
        var h = 0;
        var sx = 1;
        var sy = 1;
        if (va.length == 5) {
            w = Number(va[1]);
            h = Number(va[2]);
            sx = Number(va[3]);
            sy = Number(va[4]);
        }

        return { id: id, w: w, h: h, sx: sx, sy: sy };
    }

    private static handleImage(value: string): any {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                value = Game.player.variable.getString(num);
            }
        }
        var va = value.split(",");
        var url = va[0];
        var w = 0;
        var h = 0;
        if (va.length == 3) {
            w = Number(va[1]);
            h = Number(va[2]);
        }
        return { url: url, w: w, h: h };
    }

    private static strokeValue(value: string): any {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                value = Game.player.variable.getString(num);
            }
        }
        var va = value.split(",");
        if (va.length == 2) {
            //color,size
            var va = value.split(',');
            return { color: va[0].trim(), size: va[1].trim() };
        }
        return null;

    }

    private static handleFontValue(value: string) {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                value = Game.player.variable.getString(num);
            }
        }
        return value;
    }

    private static handleSizeValue(value: string) {
        if (value.indexOf('$') != -1) {//从字符串变量中查找值
            var n = value.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                return Game.player.variable.getVariable(num);
            }
        }
        return parseInt(value);
    }

    private static handleColorValue(color: string) {
        function rgbToHex(red, green, blue) {
            const hex = `#${Number(red).toString(16).padStart(2, "0")}${Number(green).toString(16).padStart(2, "0")}${Number(blue).toString(16).padStart(2, "0")}`;
            return hex;
        }

        if (color.indexOf('$') != -1) {//从字符串变量中查找值
            var n = color.substring(1);
            var num = parseInt(n);
            if (num != NaN) {
                color = Game.player.variable.getString(num);
            }
        }

        var colorRGB = color.split(",");
        if (colorRGB.length == 3) {
            return rgbToHex(colorRGB[0], colorRGB[1], colorRGB[2]);
        }
        else if (W26_BBCodeColor.colorMap[color] != null) {
            return W26_BBCodeColor.colorMap[color];
        }

        return color;

    }
    */

}

class W26_BBcode {
    static BBcodeParse = W26_BBcodeParse;
}


















class W26_RichTextWidthEval {
    private static dict: Dictionary = new Dictionary();

    static getTextWidth(words: string, font: string, size: number) {
        var key = "text";
        var textUi = this.dict.get(key) as UIString;
        if (textUi == null) {
            var uiString = new UIString();
            this.dict.set(key, uiString);
            textUi = uiString;
        }
        textUi.font = font;
        textUi.fontSize = size;
        textUi.text = words;
        return textUi.textWidth;
    }
}









/**
 * Created by woziji00226 on 2023-05-15 08:59:11.
 * 富文本label继承原版UIString 先替代UIString 后期出了自定义控件再分离出来
 * 要做动画效果，材质之类的，以及对话功能，不好重写Text一方面也考虑GC后期会改动底层
 */
class W26_RichPool {
    pool: Array<W26_RichText>;
    index: number;
    parent: W26_RichTextLabel;
    cls;
    constructor(cls, parent) {
        this.pool = [];
        this.cls = cls;
        this.parent = parent;
    }

    /**
     * 得到下一个
     */
    getNext() {
        if (this.pool[this.index] == null) {
            this.pool[this.index] = new this.cls();
            //@ts-ignore
            this.parent._root.addChild(this.pool[this.index]);
            //trace("创建")
        }
        this.pool[this.index].visible = true;
        var obj = this.pool[this.index];
        this.index++;
        return obj;
    }

    /**
     * 返回上一个
     */
    reLast() {
        this.index--;
        this.pool[this.index].init();
        this.pool[this.index].clearMaterials();
        this.pool[this.index].visible = false;
    }

    relase(element: W26_RichText) {
        var index = this.pool.indexOf(element);
        if (index != -1) {
            this.pool[index].init();
            this.pool[index].clearMaterials();
            this.pool[index].visible = false;
        }
    }

    restart() {
        this.index = 0;
        //debugger;
        for (var i = 0; i < this.pool.length; i++) {
            var p = this.pool[i];
            p.init();
            p.clearMaterials();
            p.visible = false;
        }
    }

    dipose() {
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
    }
}



















/*
class W26_RichImage extends UIBitmap {
    style: W26_BBCodeStyleType;
    e_click: {
        event_id: number;
        param: any[];
    }
    cx: number = 0;
    cy: number = 0;

    text: string;

    richTexts: Array<W26_RichText | W26_RichImage> = [];

    constructor() {
        super();

        this.initE_Click();
        this.on(EventObject.MOUSE_OUT, this, this.onOut);
        this.on(EventObject.MOUSE_OVER, this, this.onOver);
        this.on(EventObject.CLICK, this, this.onClick);
    }

    init() {
        this.image = null;
        this.width = 0;
        this.height = 0;
        this.mouseEnabled = false;
        this.style = null;
        this.richTexts.length = 0;
    }

    initE_Click() {
        if (this.e_click == null) {
            this.e_click = {} as any;
        }
        this.e_click.event_id = 0;

        if (this.e_click.param == null) {
            this.e_click.param = [];
        }
        this.e_click.param.length = 0;
    }

    onOver() {

    }

    onOverOnce() {

    }

    onClick() {
        if (this.e_click.event_id <= 0) return;
        GameCommand.startCommonCommand(this.e_click.event_id, this.e_click.param, null);
    }

    onOut() {

    }

    onOutOnce() {

    }


    fade(speed: number) {
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE)
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE);
        var speedParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_FADE}_speed`;
        var param = {};
        param[speedParam] = speed;
        this.setMaterialValueFast(param);
    }
}
*/

class W26_RichTextAnimation {
    public _type: string;
}

class W26_RichText extends UIString {
    static allShaderAnis = ["shake", "fade", "a_fade", "reverse", "mosaic"];

    /*
    static TextAnimationType = {
        none: 0,
        float: 1
    }*/

    private style: W26_BBCodeStyleType;
    private background: UIBitmap;
    private front: UIBitmap;
    private noteUiString: UIString;
    private oriX: number = 0;
    private oriY: number = 0;
    private icon: UIBitmap;
    private animation: GCAnimation;
    private richTexts: Array<W26_RichText> = [];
    private _deleteLine: boolean;
    private _backgroundColor: string;
    private _cover: string;
    private _richTextAnimations: W26_RichTextAnimation[];

    private noteParam: {
        text: string,
        size: number,
        color: string,
        font: string
    }


    //事件参数
    private e_click: {
        oldColor: string;
        oldUnderline: boolean;
        event_id: number;
        param: any[];
        text: string;
    };
    //文字动画参数\
    /*
    textAnimationParam: {
        animationType: number,
        speed: number,
        textIndex: number
    };
    */
    //着色器临时参数
    private shaderTempParam: {
        shake: {
            time: number
            power: number
            oriPower: number
        },
        fade: {
            speed: number
        }
        a_fade: {
            speed: number
            textIndex: number
        },
        mosaic: {
            power: number
        }
    };

    private _valign2: number;
    private _align2: number;

    constructor() {
        super();
        /**
         * 初始化
         */
        this.onInit();

        /**
         * 与事件相关
         */
        this.on(EventObject.MOUSE_OUT, this, this.onOut);
        this.on(EventObject.MOUSE_OVER, this, this.onOver);
        this.on(EventObject.CLICK, this, this.onClick);

        /**
         * 销毁时，把相关的图片 动画 背景 以及材质之类的全部销毁或者归为空值
         */
        this.once(GameSprite.ON_DISPOSE, this, () => {
            this.icon.dispose();
            this.animation.dispose();
            this.background.dispose();
            this.front.dispose();
            this.noteUiString.dispose();
            this.richTexts.length = 0;
            this.style = null;
            this.disposeUpdate();
            this.offAll();
            this.removeMaterialAll()
        })

        /**
         * 当文字改变时，对于图片和动画的处理方式
         */
        this.on(EventObject.CHANGE, this, () => {
            if (this.isImageOrAni()) {
                if (this.text == "") {
                    this.icon.visible = false;
                    this.animation.visible = false;
                    this.animation.stop();
                }
                else {
                    this.icon.visible = true;
                    this.animation.visible = true;
                    this.animation.gotoAndPlay();
                }
            }
            this.refleshDraw();
        });

        /**
         * 如果是材质动画
         */
        this.on(EventObject.CHANGE, this, () => {
            this.shaderReflesh();
        })
    }


    public shaderReflesh() {
        if (!this.hasShaderAni()) return;
        if (this.text == "") {
            //trace("删除")
            this.removeMaterialAll();
        }
        else if (this.text != "") {
            var shaderAnis = this.getShaderAnis();
            for (var i = 0; i < shaderAnis.length; i++) {
                //trace(shaderAnis)
                var shader = shaderAnis[i];
                if (shader == "shake" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE) == null) {
                    this.shake(this.shaderTempParam.shake.oriPower, this.shaderTempParam.shake.time);
                }
                else if (shader == "fade" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE) == null) {
                    this.fade(this.shaderTempParam.fade.speed);
                }
                else if (shader == "a_fade" && this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE2) == null) {
                    //trace(this.shaderTempParam.a_fade.speed, this.shaderTempParam.a_fade.textIndex)
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


    }

    set valign2(value: number) {
        this._valign2 = value;
    }

    get valign2() {
        return this._valign2;
    }

    set align2(value: number) {
        this._align2 = value;
    }

    get align2() {
        return this._align2;
    }

    set Style(value) {
        this.style = value;
    }

    get Style() {
        return this.style;
    }

    get Animation() {
        return this.animation;
    }

    get Icon() {
        return this.icon;
    }

    get OriX() {
        return this.oriX;
    }

    get OriY() {
        return this.oriY;
    }

    set OriX(value) {
        this.oriX = value;
    }

    set OriY(value) {
        this.oriY = value;
    }

    get E_Click() {
        return this.e_click;
    }

    set Cover(value: string) {
        this._cover = value;
    }

    get NoteParam() {
        return this.noteParam;
    }

    set NoteText(value: string) {
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
    }

    //重置文本重跑
    restoreText() {
        if (this.style != null && this.style.text != null) {
            this.text = this.style.text
        }
    }

    //当初始化发生时
    onInit() {
        this.initE_Click();
        this.initNoteParam();
        this.iniBg();
        this.initFg();
        this.initIcon();
        this.initAni();
        this.initNoteUiString();
        this.init();
        //this.textAnimationParam = { animationType: W26_RichText.TextAnimationType.none, speed: 0, textIndex: 0 };
        this.shaderTempParam = {
            shake: { oriPower: 0, time: 0, power: 0 },
            fade: { speed: 0 },
            a_fade: { speed: 0, textIndex: 0 },
            mosaic: { power: 0 }
        };
    }

    //初始化图片
    initIcon() {
        this.icon = new UIBitmap();
        this.addChildAt(this.icon, 1);
    }

    //初始化动画
    initAni() {
        this.animation = new GCAnimation();
        this.addChildAt(this.animation, 1);
        this.animation.loop = true;
        this.animation.silentMode = true;
        this.animation.stop();
        this.animation.id = 0;
    }

    //初始化注释
    initNoteUiString() {
        this.noteUiString = new UIString();
        this.addChild(this.noteUiString);
    }

    //按键事件
    initE_Click() {
        if (this.e_click == null) {
            this.e_click = {} as any;
        }
        this.e_click.event_id = 0;
        this.e_click.oldColor = null;
        this.e_click.oldUnderline = null;
        if (this.e_click.param == null) {
            this.e_click.param = [];
        }
        this.e_click.param.length = 0;
        this.e_click.text = null;
    }

    initNoteParam() {
        if (this.noteParam == null) {
            this.noteParam = { text: "", size: 0, color: "", font: "" } as any;
        }
        this.noteParam.text = "";
        this.noteParam.size = 0;
        this.noteParam.color = "";
        this.noteParam.font = "";
    }

    clearCover() {
        this._cover = null;
    }

    //初始化背景
    iniBg() {
        this.background = new UIBitmap();
        this.addChildAt(this.background, 0);
    }

    //初始化前景
    initFg() {
        this.front = new UIBitmap();
        this.addChild(this.front);
    }

    //初始化
    init() {
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
            this.icon.image = null;;
        }
        if (this.animation) {
            this.animation.visible = false;
            this.animation.stop();
            //debugger
            // this.ani.id = 0;
        }
        this.removeMaterialAll();//移除材质

        //this.textAnimationParam.animationType = W26_RichText.TextAnimationType.none;
        this.disposeUpdate();


    }

    //清理所有材质
    removeMaterialAll() {
        this.clearMaterials();
        if (this.icon) {
            this.icon.clearMaterials();
        }
        if (this.animation) {
            this.animation.clearMaterials();
        }
    }

    //刷新背景width
    refreshBgWh() {
        this.background.width = this.width;
        this.background.height = this.height;
    }

    //清理背景
    clearBgColor() {
        var g = this.background.graphics;
        g.clear();
    }

    //清理前景
    clearFg() {
        var g = this.front.graphics;
        g.clear();
    }

    get underLine() {
        //@ts-ignore
        return this._tf.underline
    }

    set underLine(value) {
        //@ts-ignore
        this._tf.underline = value;
    }

    //删除线
    set deleteLine(value) {
        this._deleteLine = value;
    }

    //背景颜色
    set backgroundColor(value) {
        this._backgroundColor = value;
    }

    //刷新绘制，主要有一些需要额外绘制的
    public refleshDraw() {
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
            var deleteColor = "FFFFFF"
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



    }

    //判断是媒体
    isImageOrAni(): boolean {
        if (this.style != null) {
            if (this.style.style != null) {
                return (this.style.style["img"] != null || this.style.style["ani"] != null);
            }
        }
        return false;
    }

    //判断是材质动画
    public hasShaderAni(): boolean {
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
    }

    //获取材质动画
    private getShaderAnis(): Array<string> {
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
    }

    onOverOnce() {
        //debugger
        if (this.e_click.oldColor == null) {
            this.e_click.oldColor = this.color;
            this.color = W26_BBCodeColor.colorMap.blue;
        }
        if (this.e_click.oldUnderline == null) {
            this.e_click.oldUnderline = this.underLine;
            this.underLine = true;
        }
    }

    onOver() {
        if (this.e_click.oldColor == null) {
            this.e_click.oldColor = this.color;
            this.color = W26_BBCodeColor.colorMap.blue;
        }
        if (this.e_click.oldUnderline == null) {
            this.e_click.oldUnderline = this.underLine;
            this.underLine = true;
        }
        //trace(this.richTexts)
        for (var i = 0; i < this.richTexts.length; i++) {
            this.richTexts[i].onOverOnce();
        }
    }

    onClick() {
        if (this.e_click.event_id <= 0) return;
        GameCommand.startCommonCommand(this.e_click.event_id, this.e_click.param, null);
    }

    onOut() {
        //debugger
        if (this.e_click.oldColor != null)
            this.color = this.e_click.oldColor;
        this.e_click.oldColor = null;
        if (this.e_click.oldUnderline != null)
            this.underLine = this.e_click.oldUnderline;
        this.e_click.oldUnderline = null;
        for (var i = 0; i < this.richTexts.length; i++) {
            this.richTexts[i].onOutOnce();
        }
    }

    onOutOnce() {
        //debugger
        if (this.e_click.oldColor != null)
            this.color = this.e_click.oldColor;
        this.e_click.oldColor = null;
        if (this.e_click.oldUnderline != null)
            this.underLine = this.e_click.oldUnderline;
        this.e_click.oldUnderline = null;
    }

    startUpdate() {
        os.remove_ENTERFRAME(this.update, this);
        os.add_ENTERFRAME(this.update, this);
    }

    disposeUpdate() {
        os.remove_ENTERFRAME(this.update, this);
    }

    update() {
        /*
        var time = Game.frameCount * 0.01;
        if (this.textAnimationParam.animationType == W26_RichText.TextAnimationType.none) {
            //this.x = this.oriX;
            //this.y = this.oriY;
        }
        else if (this.textAnimationParam.animationType == W26_RichText.TextAnimationType.float) {
            //this.y = this.oriY + Math.sin(time) * 10;
        }
        */
        var time = Game.frameCount * 0.01;


    }

    fade(speed: number) {
        this.shaderTempParam.fade.speed = speed;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE)
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE);
        var speedParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_FADE}_speed`;
        var param = {};
        param[speedParam] = speed;
        this.setMaterialValueFast(param);
    }

    shake(power: number, time: number) {
        this.shaderTempParam.shake.time = time;
        this.shaderTempParam.shake.power = power;
        this.shaderTempParam.shake.oriPower = power;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE)
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE);
        //this.shaderTempParam.shake.power = 30;
        var tween = Tween.to(this.shaderTempParam.shake, { "power": 0 }, time * 1000, Ease.cubicOut, Callback.New(() => {
            this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE);
        }, this))
        tween.update = Callback.New((tween: Tween) => {
            if (!this.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE)) {
                tween.clear();
            }
            var param = {};
            var speedParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE}_frequency`;
            param[speedParam] = this.shaderTempParam.shake.power;
            this.setMaterialValueFast(param);
        }, this, [tween])
    }

    a_fade(speed: number, textIndex: number) {
        this.shaderTempParam.a_fade.speed = speed;
        this.shaderTempParam.a_fade.textIndex = textIndex;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE2)
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_FADE2);
        var speedParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_FADE2}_speed`;
        var startTimeParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_FADE2}_startTime`;
        var param = {};
        param[speedParam] = speed;
        param[startTimeParam] = textIndex * 100;
        this.setMaterialValueFast(param);
    }

    reverse() {
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE)
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE);
        var param = {};
        this.setMaterialValueFast(param);
    }

    mosaic(power: number) {
        this.shaderTempParam.mosaic.power = power;
        this.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC)
        this.addMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC);
        var powerParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC}_power`;
        var wParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC}_w`;
        var hParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC}_h`;
        var param = {};
        param[powerParam] = power;
        param[wParam] = this.width;
        param[hParam] = this.height;
        this.setMaterialValueFast(param);
    }

    refleshMosaic() {
        var powerParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC}_power`;
        var wParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC}_w`;
        var hParam = `mu${W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC}_h`;
        var param = {};
        param[powerParam] = this.shaderTempParam.mosaic.power;
        param[wParam] = this.width;
        param[hParam] = this.height;
        this.setMaterialValueFast(param);
    }

    a_float(speed: number, textIndex: number) {

    }
}





























class W26_RichTextLabel extends UIBase {
    static PLUGIN_MATERIAL_RICH: number = 19;
    static PLUGIN_MATERIAL_FADE: number = 20;
    static PLUGIN_MATERIAL_FADE2: number = 21;
    static PLUGIN_MATERIAL_SHAKE: number = 22;
    static PLUGIN_MATERIAL_REVERSE: number = 23;
    static PLUGIN_MATERIAL_MOSAIC: number = 25;

    static Shaders = [
        W26_RichTextLabel.PLUGIN_MATERIAL_RICH,
        W26_RichTextLabel.PLUGIN_MATERIAL_FADE,
        W26_RichTextLabel.PLUGIN_MATERIAL_FADE2,
        W26_RichTextLabel.PLUGIN_MATERIAL_SHAKE,
        W26_RichTextLabel.PLUGIN_MATERIAL_REVERSE,
        W26_RichTextLabel.PLUGIN_MATERIAL_MOSAIC
    ];

    static LOAD_COMPLETED = "LOAD_COMPLETED";
    static EVENT_SET_TEXT_COMPLETED = "EVENT_SET_TEXT_COMPLETED";
    //static checkUiString = new UIString();

    static quick: boolean = false;
    private _bbCodeText: string;
    private _bbCodeParsed: W26_ParsedBBCode;
    //@ts-ignore
    private _texts: W26_RichPool;
    private _root: UIRoot;
    private _rootPaddingTop: number;

    public splitText: boolean = false;//此选项开启后，文字会分割成一个个，请不要调用

    public _onVarChange: Callback;

    public _lastVarID: number;//上个绑定的变量

    public _fontSize: number;//字体大小

    public _wordWrap: boolean;//自动换行

    public _color: string;//颜色

    public _font: string;//字体

    public _leading: number;//行间距

    public _smooth: boolean;//平滑

    public _letterspacing: number;//字间距

    public _align: number;//水平对齐

    public _align2: number;//文字的水平对齐

    public _valign: number;//垂直对齐

    public _valign2: number;//文字的垂直对齐

    public _overflow: number;//超过隐藏

    public _strokeColor: string;//

    public _stroke: number;//

    public _text: string;

    public _italic: boolean;
    public _bold: boolean;

    public _shadowEnabled: boolean;
    public _shadowColor: string;
    public _shadowDx: number;
    public _shadowDy: number;

    public onChangeFragEvent: string;

    private tempData: {
        x: number,
        y: number,
        currentLineWidth: number,
        currentLineHeight: number,
        maxTextWidth: number,
        maxTextHeight: number,
        lines: Array<Array<W26_RichText>>,
        lastText: W26_RichText
    };


    private f;//用于检测递归

    constructor() {
        super();
        //@ts-ignore
        this._font = Config.DEFAULT_FONT;
        this._fontSize = 24;
        this.width = 200;
        this.height = 30;
        this._color = W26_BBCodeColor.colorMap.white;
        this._wordWrap = true;
        this._leading = 0;
        this._letterspacing = 0;
        this._smooth = false;
        this._align = 0;
        this._valign = 0;
        this.tempData = { lines: [] } as any;

        this._texts = new W26_RichPool(W26_RichText, this);

        this._rootPaddingTop = 2;
        this._root = new UIRoot();
        this._root.enabledLimitView = false;
        this._root.scrollShowType = 0;
        this.addChildAt(this._root, 0);
        this._root.width = this.width;
        this._root.height = this.height;
        this._root.x = 0;
        this._root.y = -this._rootPaddingTop;

        this.on(GameSprite.ON_DISPOSE, this, () => {
            this._resetInitTempData();
            this._texts.dipose();
            this._texts = null;
            this._root.removeSelf();
            this._root.dispose();
            this._root = null;
        });

        this._onVarChange = Callback.New(this.onVarChange, this);


        this.once(EventObject.LOADED, this, () => {

        });

        this.on(EventObject.RESIZE, this, () => {
            //trace(2)
            this._root.width = this.width + this._rootPaddingTop;
            this._root.height = this.height;

            if (this._wordWrap) {
                this._handleText();
            }

        })


        this.overflow = 0;


    }

    linkVar(id: number) {
        if (this._lastVarID != 0) {
            Game.player.removeListenerPlayerVariable(2, this._lastVarID, this._onVarChange);
            Game.player.addListenerPlayerVariable(2, id, this._onVarChange, false, true);
            this._lastVarID = id;
        }
    }

    onVarChange(typeID: number, varID: number, value: string) {
        this.set_text(value);
    }

    get textWidth(): number {
        var temp = this.tempData;
        if (temp == null) return 0;
        var lines = temp.lines;
        if (lines == null) return 0;
        if (lines[0] == null) return 0;

        var firstLine = lines[0];
        var lastIndex = firstLine.length - 1;
        var lastText = firstLine[lastIndex];
        return lastText.x + lastText.width + this._letterspacing;

    }

    get textHeight(): number {
        var temp = this.tempData;
        if (temp == null) return 0;
        var lines = temp.lines;
        if (lines == null) return 0;
        var maxHeight = 0;
        if (lines[lines.length - 1] == null) return;

        var lastLine = lines[lines.length - 1];
        for (var i = 0; i < lastLine.length; i++) {
            var h = lastLine[i].y + lastLine[i].height;
            if (h > maxHeight) {
                maxHeight = h;
            }
        }

        return maxHeight + this._leading;
    }

    get valign2() {
        return this._valign2;
    }

    set valign2(value: number) {
        this._valign2 = value
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
    }

    get italic() {
        return this._italic;
    }

    set italic(value: boolean) {
        this._italic = value;
        this.startHandleTextFast();
    }

    get bold() {
        return this._bold;
    }

    set bold(value: boolean) {
        this._bold = value;
        this.startHandleTextFast();
    }

    get shadowEnabled() {
        return this._shadowEnabled;
    }

    set shadowEnabled(value: boolean) {
        this._shadowEnabled = value;
        this.startHandleTextFast();
    }

    get shadowColor() {
        return this._shadowColor;
    }

    set shadowColor(value: string) {
        this._shadowColor = value;
        this.startHandleTextFast();
    }

    get shadowDx() {
        return this._shadowDx;
    }

    set shadowDx(value: number) {
        this._shadowDx = value;
        this.startHandleTextFast();
    }

    get shadowDy() {
        return this._shadowDy;
    }

    set shadowDy(value: number) {
        this._shadowDy = value;
        this.startHandleTextFast();
    }

    get stroke() {
        return this._stroke;
    }

    set stroke(v: number) {
        this._stroke = v;
        this.startHandleTextFast();
    }

    get strokeColor() {
        return this._strokeColor;
    }

    set strokeColor(color: string) {
        this._strokeColor = color;
        this.startHandleTextFast();
    }

    get overflow() {
        return this._overflow;
    }

    set overflow(v: number) {
        //trace(1)
        this._overflow = v;
        this._root.enabledLimitView = this._overflow == 1;
        //this.startHandleTextFast();
        //trace(this._root.enabledLimitView)
    }

    get align() {
        return this._align;
    }

    set align(align: number) {
        this._align = align;
        this.handleAlign();//处理对齐
    }

    get valign() {
        return this._valign;
    }

    set valign(valign: number) {
        this._valign = valign;
        this.handleAlign();//处理对齐
    }

    get letterSpacing() {
        return this._letterspacing;
    }

    set letterSpacing(letterspacing: number) {
        this._letterspacing = letterspacing;
        this._handleText();
    }

    get smooth() {
        return this._smooth;
    }

    set smooth(smooth: boolean) {
        this._smooth = smooth;
        this.startHandleTextFast();
    }

    get leading() {
        return this._leading;
    }

    set leading(leading: number) {
        this._leading = leading;
        this._handleText();
    }

    get font() {
        return this._font;
    }

    set font(font: string) {
        this._font = font;
        this._handleText();
    }

    get color() {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
        this.startHandleTextFast();
    }

    get wordWrap() {
        return this._wordWrap;
    }

    set wordWrap(f: boolean) {
        this._wordWrap = f;
        //trace(this._wordWrap)
        //debugger
        this._handleText();
    }

    get fontSize() {
        return this._fontSize;
    }

    set fontSize(size: number) {
        this._fontSize = size;
        this._handleText();
    }

    get text() {
        return this._getNoBbCodeStyleText();

    }

    set text(v: string) {
        if (this.isDisposed)
            return;

        this.set_text(v);
    }

    public set_text_force(v: string) {
        if (v == this._bbCodeText && v.indexOf("$") == -1) {
            this._handleText();
        }
        else {
            this.set_text(v);
        }
    }

    private set_text(v: string) {
        //debugger;
        if (v == this._bbCodeText) {
            if (v.indexOf("$") == -1) {
                return;
            }
        }
        this._bbCodeText = v;
        this._bbCodeParsed = W26_BBcode.BBcodeParse.parser(v);
        //debugger;
        this._handleText();
        if (this._text != this._getNoBbCodeStyleText()) {
            if (this.onChangeFragEvent != null && this.onChangeFragEvent.trim() != "") {
                CommandPage.startTriggerFragmentEvent(this.onChangeFragEvent, Game.player.sceneObject, Game.player.sceneObject);
            }
            this._text = this._getNoBbCodeStyleText();
        }
        this.event(W26_RichTextLabel.EVENT_SET_TEXT_COMPLETED);
    }

    /**
     * 在末尾添加文本，比较节省性能，推荐使用
     * @param v 
     */
    public pushText(v: string) {
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
        this.handleRichText(parsed.bbCodeStyle)
    }

    /**
     * 处理文本，但是排版大小并不会改变
     */
    private startHandleTextFast() {
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
    }

    /**
     * 开始处理文字
     */
    private _handleText() {
        //trace(this._bbCodeParsed);
        this._texts.restart();
        this._resetInitTempData();
        var infoes = this._getBbCodeStyles();
        this.handleRichText(infoes);
    }

    public restoreRichText() {
        var richTexts = this.getAllRichElement();
        for (var i = 0; i < richTexts.length; i++) {
            var richText = richTexts[i];
            richText.restoreText();
        }
    }

    /**
     * 处理富文本文字
     * @param infoes 
     */
    private handleRichText(infoes: W26_BBCodeStyleType[]) {
        //debugger;
        if (infoes == null) return;
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
        //debugger
        this.handleAlign();//处理对齐

        this.refleshTextDraw();
    }

    private refleshTextDraw() {
        var lines = this.tempData.lines;
        for (var i = 0; i < lines.length; i++) {
            for (var j = 0; j < lines[i].length; j++) {
                var textUi = lines[i][j];
                textUi.refleshDraw();
            }
        }
    }

    /**
     * 加载所有动画
     * @param func 
     */
    private preLoadAnimations(func: Function) {
        func.call(this);
    }

    /**
     * 加载完所有图片
     */
    private preLoadAllImages(func: Function) {
        var images: Array<string> = [];
        var infoes = this._getBbCodeStyles();
        if (infoes == null) {
            func.call(this);
        }
        for (var i = 0; i < infoes.length; i++) {
            var url = this.getImageUrl(infoes[i]);
            if (url == null || url.trim() == "") continue;
            images.push(url);
        }
        if (images.length > 0) {
            AssetManager.loadImages(images, Callback.New(() => {
                func.call(this);
            }, this), false, false);
        }
        else {
            func.call(this);
        }
    }

    /**
     * 把当前控件加入当前行
     */
    private pushLine(ui: W26_RichText) {
        var lines = this.tempData.lines;
        var line = lines[lines.length - 1];
        line.push(ui);
        this.tempData.lastText = ui;
    }

    private popLine2(): W26_RichText {
        var lines = this.tempData.lines;
        for (var i = lines.length - 1; i >= 0; i--) {
            var line = lines[i];
            for (var j = line.length - 1; j >= 0; j--) {
                if (line[j] != null) {
                    var uiString = line[j]
                    line.splice(j, 1);
                    return uiString;
                }
            }
        }
        return null;
    }

    private popLine(): W26_RichText {
        var uistring = this.popLine2();
        if (uistring != null) {
            this.tempData.lastText = this.getLastText2();
        }
        return uistring;
    }


    /**
     * 每行Y对齐
     */
    private handleLineYAlign() {
        var lines = this.tempData.lines;
        var maxTextHeight = 0;
        var startY = 0;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            maxTextHeight = 0;
            //maxSpaceHeight = 0;
            //maxNoteHeight = 0;
            for (var j = 0; j < line.length; j++) {
                var uiString = line[j];
                this.refreshWH(uiString);
                /*
                if (uiString.NoteParam.size + uiString.height > maxNoteHeight) {
                    maxSpaceHeight = uiString.NoteParam.size;
                    maxNoteHeight = uiString.NoteParam.size + uiString.height;
                }
                */
                if (uiString.height > maxTextHeight) {
                    maxTextHeight = uiString.height;
                    this.refreshLineY(i, startY, maxTextHeight);
                }
                else {
                    this.evalY(uiString, maxTextHeight, startY, uiString.valign2);
                }
            }

            //增加注解高度
            var maxSpaceHeight = 0;
            var temp = 0;
            //var maxNoteHeight = 0;
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
            //------

            startY = startY + maxTextHeight + this._leading + maxSpaceHeight;
        }


        /*
        //如果此字超出 则刷新所有y值
        if (uiString.height > temp.maxTextHeight) {
            temp.maxTextHeight = uiString.height;
            this.refreshCurrentLineY(result.valign);
        }
        else {
            uiString.y = this.evalY(uiString, temp.maxTextHeight, temp.y, result.valign);
        }
        */
    }

    /**
     * 处理对齐 对每一行进行处理
     */
    private handleAlign() {
        //this.handleLineYAlign();

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
                if (this._align == 0) {//居左

                }
                else if (this._align == 1) {//居中
                    resize_x = surplusWdith / 2
                }
                else if (this._align == 2) {//居右
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
            //trace(surplusHeight, this.height, sumHeight)
            var resize_y = 0;
            if (this._valign == 0) {//居左

            }
            else if (this._valign == 1) {//居中
                resize_y = surplusHeight / 2;
            }
            else if (this._valign == 2) {//居右
                resize_y = surplusHeight;
            }
            for (var i = 0; i < lines.length; i++) {
                line = lines[i]
                for (var j = 0; j < line.length; j++) {
                    var ui = line[j];
                    ui.y = ui.OriY + resize_y;
                }
            }
        }
    }

    /**
     * 下一行
     */
    private _toNextLine() {
        //debugger
        var temp = this.tempData;
        if (temp.maxTextHeight == 0) {
            temp.maxTextHeight = this._fontSize;
        }
        temp.currentLineHeight = temp.currentLineHeight + temp.maxTextHeight + this._leading;//当前行的最大高度
        temp.currentLineWidth = 0;//归0
        temp.maxTextHeight = 0;
        temp.maxTextWidth = 0;
        temp.y = temp.currentLineHeight;
        temp.x = temp.currentLineWidth;
        //debugger
        //temp.lastText = this.getLastText() as W26_RichText;

        temp.lines.push([]);

    }

    private flattenLinesArray() {
        var arr = this.tempData.lines;
        const flattenedArray = arr.reduce((acc, cur) => [...acc, ...cur], []);
        return flattenedArray;
    }

    private getLastText() {
        var array = this.tempData.lines;
        if (array == null) return undefined;
        if (array.length === 0 || array[array.length - 1].length === 0) {
            // 如果传入的数组为空，或者最后一个子数组也为空，则返回 undefined。
            return undefined;
        }

        // 返回最后一个子数组的最后一个元素。
        return array[array.length - 1][array[array.length - 1].length - 1];
    }

    private getLastText2() {
        var gg = this.getAllRichElement();
        if (gg == null) return null;
        if (gg.length == 0) return null;
        return gg[gg.length - 1];
    }


    private getLastText3() {
        var lines = this.tempData.lines;
        for (var i = lines.length - 1; i >= 0; i--) {
            var line = lines[i];
            for (var j = line.length - 1; j >= 0; j--) {
                if (line[j] != null) {
                    var uiString = line[j]
                    //line.splice(j, 1);
                    return uiString;
                }
            }
        }
        return;
    }

    private getNextText(): W26_RichText {
        var text = this._texts.getNext() as W26_RichText;
        this._resetInitText(text);
        return text;
    }
    /*
        private getNextImage(): W26_RichImage {
            var image = this._images.getNext() as W26_RichImage;
            this._resetInitImage(image);
            return image;
        }
    */
    public getLines(): Array<Array<W26_RichText>> {
        return this.tempData.lines;
    }

    public getLine(index: number): Array<W26_RichText> {
        if (this.tempData.lines == null) {
            return [];
        }
        if (index >= this.tempData.lines.length || index < 0) {
            return [];
        }

        return this.tempData.lines[index];
    }


    getAllRichElement(): Array<W26_RichText> {
        var t = [];
        var lines = this.getLines();
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            for (var j = 0; j < line.length; j++) {
                t.push(line[j]);

            }
        }
        return t;
    }

    /*
        private _resetInitImage(image: W26_RichImage) {
            image.init();
        }
    */
    /**
     * text初始化
     * @param text 
     */
    private _resetInitText(text: W26_RichText) {
        text.init();
        text.text = "";
        //text.visible = false;
        text.fontSize = this._fontSize;
        text.italic = this._italic;
        text.bold = this.bold;
        text.wordWrap = false;
        text.color = this._color;
        text.font = this._font;
        text.smooth = this._smooth;
        text.letterSpacing = this._letterspacing
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
    }

    /**
     * 初始化，但是不改变重要信息
     * @param text 
     */
    private _resetInitTextFast(text: W26_RichText) {
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
    }

    /**
     * 重置临时数据
     */
    private _resetInitTempData() {
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
    }


    private ignoreKeysymbols(text: string): string {
        return text.replace(/[\u0001-\u0009]/g, '');
    }

    private refreshWH(uiString: W26_RichText) {
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


    }

    /**
     * 判断是否是图片
     * @param info 
     * @return [boolean] 
     */
    private isImage(info: W26_BBCodeStyleType): boolean {
        if (info.style == null) return false;
        var propertys = Object.keys(info.style);
        return propertys.indexOf("img") != -1;
    }

    private getImageUrl(info: W26_BBCodeStyleType): string {
        if (this.isImage(info)) {
            return info.style.img.url;
        }
        return null;
    }

    private isHexColor(str) {
        // 判断字符串长度是否符合要求
        if (str.length !== 7 || str[0] !== '#') {
            return false;
        }

        // 判断字符串中的字符是否都是合法的16进制数字或字母
        for (let i = 1; i < 7; i++) {
            const c = str[i];
            if (!/^[0-9a-fA-F]$/.test(c)) {
                return false;
            }
        }

        // 字符串符合要求，则返回true
        return true;
    }


    private handleInfo(element: UIBase, info: W26_BBCodeStyleType): {
        bgColor: string,
        imagePass: boolean,
        valign: number,
        align: number
    } {
        var uiString: W26_RichText;
        var bgColor: string = null;

        var result = { bgColor: bgColor, imagePass: true, valign: 2, align: 0 };
        if (info.style == null) {
            return result;
        }

        uiString = element as W26_RichText;

        var style = info.style;
        var propertys = Object.keys(style);
        //var args = info.args
        for (var i = 0; i < propertys.length; i++) {
            //debugger;
            var property = propertys[i];
            var value: Array<string | number> = style[property];
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
                //debugger;
                uiString.deleteLine = true;
            }
            else if (property == W26_BBcodeTag.Cover) {
                uiString.Cover = value[0] as string;
            }
            else if (property == W26_BBcodeTag.Note) {
                uiString.NoteParam.text = value[0] as string;
                if (isNaN(value[1] as number)) {
                    uiString.NoteParam.size = 0;
                }
                else {
                    uiString.NoteParam.size = value[1] as number;
                }
                uiString.NoteParam.color = value[2] as string;
                uiString.NoteParam.font = value[3] as string;

                uiString.NoteText = uiString.NoteParam.text;
            }
            else if (property == W26_BBcodeTag.Font) {
                uiString.font = value[0] as string;
            }
            else if (property == W26_BBcodeTag.Size) {

                if (value[0] == null || isNaN(value[0] as number)) {
                    value[0] = this._fontSize;
                }
                else {

                }
                uiString.fontSize = value[0] as number;
            }
            else if (property == W26_BBcodeTag.Color) {
                if (!this.isHexColor(value[0])) {
                    value[0] = this._color;
                }
                uiString.color = value[0] as string;
            }
            else if (property == W26_BBcodeTag.BgColor) {
                uiString.backgroundColor = value[0];
                //result.bgColor = value[0] as string;
            }
            else if (property == W26_BBcodeTag.Stroke) {
                if (!this.isHexColor(value[0])) {
                    value[0] = this._strokeColor;
                }
                if (isNaN(value[1] as number)) {
                    value[1] = this._stroke;
                }

                uiString.stroke = value[1] as number;
                uiString.strokeColor = value[0] as string;

            }
            else if (property == W26_BBcodeTag.E_Click) {
                if (value[0] != null) {
                    uiString.mouseEnabled = true;
                    uiString.E_Click.event_id = value[0] as number;
                    uiString.E_Click.param.length = 0;
                    for (var kk = 1; kk < value.length; kk++) {
                        uiString.E_Click.param.push(value[kk]);
                    }
                }
            }
            else if (property == W26_BBcodeTag.Img) {
                if (value[0] != null) {
                    uiString.Icon.image = value[0] as string;
                    if (value[1] == 0 && value[2] == 0) {
                        value[1] = this._fontSize;
                        value[2] = this._fontSize;
                    }
                    if (this._wordWrap) {

                    }
                    uiString.Icon.width = value[1] as number;
                    uiString.Icon.height = value[2] as number;
                    uiString.Icon.visible = true;
                }
            }
            else if (property == W26_BBcodeTag.Ani) {
                if (value[0] != null && !isNaN(value[0] as number)) {

                    uiString.Animation.id = value[0] as number;
                    if (value[1] == 0 && value[2] == 0) {
                        value[1] = this._fontSize;
                        value[2] = this._fontSize;
                    }
                    uiString.Animation.gotoAndPlay();
                    uiString.Animation.width = value[1] as number;
                    uiString.Animation.height = value[2] as number;
                    uiString.Animation.scaleX = value[3] as number;
                    uiString.Animation.scaleY = value[4] as number;
                    uiString.Animation.visible = true;
                }
            }
            else if (property == W26_BBcodeTag.Fade) {
                value[0] = Math.max(0.1, value[0] as number)
                uiString.fade(value[0])
            }
            else if (property == W26_BBcodeTag.Shake) {
                value[0] = Math.max(0.1, value[0] as number)
                value[1] = Math.max(0.1, value[1] as number)
                uiString.shake(value[0], value[1]);
            }
            else if (property == W26_BBcodeTag.A_Fade) {
                //debugger;
                value[0] = Math.max(0.1, value[0] as number)
                uiString.a_fade(value[0], info.textIndex);
            }
            else if (property == W26_BBcodeTag.Reverse) {
                uiString.reverse();
            }
            else if (property == W26_BBcodeTag.Mosaic) {
                uiString.mosaic(value[0] as number);
            }
            else if (property == W26_BBcodeTag.Valign) {
                //debugger
                if (!isNaN(value[0] as number)) {
                    uiString.valign2 = value[0] as number;
                }
            }
            else if (property == W26_BBcodeTag.Align) {
                if (!isNaN(value[0] as number)) {
                    uiString.align2 = value[0] as number;
                }
            }

            /*
            if (property == "tag") {
 
            }
            else if (property == "font") {
                uiString.font = value;
            }
            else if (property == "size") {
                //大于0小于100
                if (isNaN(value)) {
                    value = this._fontSize;
                }
                if (this._wordWrap) {
                    //value = Math.min(Math.max(value, 0), this.width - 50);
                }
                uiString.fontSize = value;
            }
            else if (property == "color") {
                if (!this.isHexColor(value)) {
                    value = this._color;
                }
                uiString.color = value;
            }
            else if (property == "bgColor") {
                result.bgColor = value;
            }
            else if (property == "b") {
                uiString.bold = true;
            }
            else if (property == "u") {
                //@ts-ignore
                uiString.underLine = true;
            }
            else if (property == "smooth") {
                uiString.smooth = true;
            }
            else if (property == "i") {
                uiString.italic = true;
            }
            else if (property == "stroke") {
                if (value != null) {
                    if (isNaN(value.size)) {
                        value.size = this._stroke;
                    }
                    if (!this.isHexColor(value.color)) {
                        value.color = this._strokeColor;
                    }
                    uiString.stroke = value.size;
                    uiString.strokeColor = value.color;
                }
            }
            else if (property == "e_click") {
                uiString.mouseEnabled = true;
                uiString.e_click.event_id = value.id;
                uiString.e_click.param = value.param;
            }
 
            else if (property == "img") {
                uiString.icon.image = value.url;
                if (value.w == 0 && value.h == 0) {
                    value.w = this._fontSize;
                    value.h = this._fontSize;
                }
                if (this._wordWrap) {
 
                }
                uiString.icon.width = value.w;
                uiString.icon.height = value.h;
                uiString.icon.visible = true;
            }
            else if (property == "ani") {
                if (value.id == NaN) value.id = 0;
                uiString.animation.id = value.id;
                if (value.w == 0 && value.h == 0) {
                    value.w = this._fontSize;
                    value.h = this._fontSize;
                }
                uiString.animation.gotoAndPlay();
                uiString.animation.width = value.w;
                uiString.animation.height = value.h;
                uiString.animation.scaleX = value.sx;
                uiString.animation.scaleY = value.sy;
                uiString.animation.visible = true;
            }
            else if (property == "fade") {
                value = Math.max(0.1, value)
                uiString.fade(value)
            }
            else if (property == "shake") {
                value = Math.max(0.1, value)
                uiString.shake(value)
            }
            else if (property == "a_fade") {
                value = Math.max(0.1, value)
                uiString.a_fade(value, info.textIndex);
            }
            else if (property == "a_float") {
                value = Math.max(0.1, value);
                uiString.a_float(value, info.textIndex);
            }
            else if (property == "valign") {
                //debugger
                if (!isNaN(value)) {
                    uiString.valign2 = value;
                }
            }
            else if (property == "align") {
                if (!isNaN(value)) {
                    uiString.align2 = value;
                }
            }
            */
        }

        return result;

    }

    private checkSameEvent(t1: W26_RichText, t2: W26_RichText): boolean {

        if (t1.Style == null) return false;
        if (t2.Style == null) return false;

        if (t1.Style.style == null) return false;
        if (t2.Style.style == null) return false;

        if (t1.Style.style["e_click"] == null) return false;
        if (t2.Style.style["e_click"] == null) return false;

        var prama1: string[] = t1.Style.style["e_click"];
        var prama2: string[] = t2.Style.style["e_click"];

        for (var i = 0; i < prama1.length; i++) {
            if (prama1[i] != prama2[i]) return false;
        }
        return true;
    }

    private addRichTextSameLine(_lastText, uiString) {
        if (_lastText != null) {
            if (_lastText.richTexts.length > 0) {
                for (const t of _lastText.richTexts) {
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
            //temp.lastText = null
        }
    }

    private handleToNextLine(uiString: W26_RichText, nextText: string, info: W26_BBCodeStyleType) {
        this.refreshWH(uiString);
        this._toNextLine();
        var nextInfo = { text: nextText, style: info.style, textIndex: info.textIndex };
        this._handleStyle(nextInfo);
    }


    private handleToNextLineOfImage(uiString: W26_RichText, nextText: string, info: W26_BBCodeStyleType) {
        //debugger
        var lines = this.tempData.lines;
        this._texts.relase(uiString);
        this._toNextLine();
        var nextInfo = { text: nextText, style: info.style, textIndex: info.textIndex };
        this._handleStyle(nextInfo);

    }


    private _handleStyleIn(info: W26_BBCodeStyleType): boolean {
        //debugger
        //trace(this._fontSize, this.width, this._wordWrap)
        if (this.f > 10 && (this._fontSize > this.width) && this._wordWrap) {

            //console.log("失败，有可能是富文本自动换行，而富文本Width Height过小导致的")
            //return false;
        }
        this.f++;
        function isImageF(uiString: W26_RichText): boolean {
            return uiString.isImageOrAni();
        }
        var bgColor: string = null;
        var isImage: boolean = false;
        var temp = this.tempData;
        var _lastText = this.tempData.lastText;
        //this.getLastText2();
        if (info.text == W26_BBcodeSpecial.KEY_SYMBOL_NEXTLINE) {//回车符
            this._toNextLine();
            return true;
        }

        var uiString: W26_RichText;
        uiString = this.getNextText();
        uiString.Style = info;
        isImage = isImageF(uiString);

        var result = this.handleInfo(uiString, info);

        bgColor = result.bgColor;


        //使用文字
        if (isImage) {
            ///debugger
        }
        else {
            uiString.text = info.text;
        }
        //debugger
        this.refreshWH(uiString);
        uiString.x = temp.x;

        temp.maxTextWidth = Math.max(uiString.width, temp.maxTextWidth);
        temp.x += uiString.width + this._letterspacing;

        //debugger
        if (!isImage) {//文字直接添加
            this.pushLine(uiString);
            if (_lastText != null) {
                this.addRichTextSameLine(_lastText, uiString);
            }
        }
        else if (isImage && !this._wordWrap) {//图片时 非自动换行直接添加
            this.pushLine(uiString);
            if (_lastText != null) {
                this.addRichTextSameLine(_lastText, uiString);
            }
        }
        else if (isImage && this._wordWrap && !this.isImageWrap(uiString)) {//图片时 自动换行 但是失败
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
            if (this.isImageWrap(uiString)) {//换行
                this.handleToNextLineOfImage(uiString, nextText, info)
            }
        }



        //-
        if (bgColor != null) {
            //uiString.drawBgColor(bgColor);
        }


        uiString.OriX = uiString.x;
        uiString.OriY = uiString.y;

        //temp.lastText = uiString;

        return true;
    }

    /**
     * 处理 返回处理成功还是失败，失败则退回
     * @param uistring 
     * @param info 
     * @return [boolean] 
     */
    private _handleStyle(info: W26_BBCodeStyleType): boolean {
        //debugger;
        if (!this.splitText) {
            return this._handleStyleIn(info);
        }
        else {
            //debugger;
            for (var i = 0; i < info.text.length; i++) {
                var t = info.text[i];
                var flag = this._handleStyleIn({ text: t, style: info.style, textIndex: info.textIndex });
                if (flag == false) {
                    return false;
                }
            }
            return true;
        }
    }

    private handleWordWrapImage(uiImage: UIBitmap): boolean {
        var startX = uiImage.x;
        var width = uiImage.width + startX;
        if (width > this.width) {
            return true;
        }
        return false;
    }

    /**
     * 刷新当前行的元素的y值
     */
    /*
    private refreshCurrentLineY(valign: number) {
        var line = this.tempData.lines[this.tempData.lines.length - 1];
        var startY = this.tempData.y;
        var maxHeight = this.tempData.maxTextHeight;
        for (var i = 0; i < line.length; i++) {
            line[i].y = this.evalY(line[i], maxHeight, startY, valign);
            line[i].oriX = line[i].x;
            line[i].oriY = line[i].y;
        }
    }
    */

    /**
     * 刷新指定行Y
     * @param lineIndex 
     * @param startY 
     * @param maxHeight 
     */
    private refreshLineY(lineIndex: number, startY: number, maxHeight: number) {
        var line = this.tempData.lines[lineIndex];
        for (var i = 0; i < line.length; i++) {
            var uiString = line[i];
            this.evalY(uiString, maxHeight, startY, uiString.valign2);
        }

    }

    private evalY(element: W26_RichText, maxHeight: number, startY: number, valign: number) {
        var y = 0;
        if (valign == 0) {//居上
            y = startY;
        }
        else if (valign == 1) {//居中
            y = ((maxHeight - element.height) / 2) + startY;
        }
        else if (valign == 2) {//居下
            y = (maxHeight - element.height) + startY;
        }
        else {
            y = startY;
        }
        element.y = y;
        element.OriY = element.y;

        //return y;
    }


    private getTextWidth(uistring: UIString, text: string): number {
        var oriText = uistring.text;
        uistring.text = this.ignoreKeysymbols(text);
        var textWidth = uistring.textWidth;
        if (textWidth == 0) {
            textWidth = 0.1;
        }
        uistring.text = oriText;
        return textWidth;
    }

    private getTextHeight(uistring: UIString, text: string): number {
        var oriText = uistring.text;
        //var oriLeading = uistring.leading;
        uistring.text = this.ignoreKeysymbols(text);
        //uistring.leading = this._leading;
        var textHeight = uistring.textHeight;
        if (textHeight == 0) {
            textHeight = 0.1;
        }
        //uistring.leading = oriLeading;
        uistring.text = oriText;
        return textHeight;
    }

    /**
     * 处理下自动换行
     * @param uistring 
     * @return [string] 
     */
    private handleWordWrap(uistring: W26_RichText): string {
        var startX = uistring.x;
        var text = uistring.text;
        var width = uistring.width + startX;
        var currentWidth: number = 0;

        /*
        var minWidth = this.getTextWidth(uistring, text.substring(0, 1));//控件最小字符
        if (minWidth > this.width) {//如果此时控件最小的字符都大于整体的width 那么就返回第一个字符
            uistring.text = text.substr(0, 1);
            return text.substring(len);
        }
        */

        if (width > this.width) {
            for (var i = 0; i < text.length; i++) {
                currentWidth = this.getTextWidth(uistring, text.substring(0, i + 1));
                if (startX + currentWidth > this.width) {
                    if (i == 0 && startX == 0) {
                        i = 1;
                    }
                    var len = i;
                    uistring.text = text.substr(0, len);
                    //uistring.style.text = uistring.text;
                    //trace(uistring.text);
                    return text.substring(len);
                }
            }
        }
        return null;
    }

    private isImageWrap(uistring: W26_RichText): boolean {
        var startX = uistring.x;
        var width = uistring.width + startX;

        if (width > this.width) {
            if (startX == 0) {
                return false;
            }
            return true;
        }
        return false;
    }

    private _isNoBbCode(): boolean {
        if (this._bbCodeParsed == null) return false;
        if (this._getBbCodeStyles().length == 1 && this._getBbCodeStyles()[0].style == null) {
            return true;
        }
        return false;
    }

    private _getBbCodeStyles(): Array<W26_BBCodeStyleType> {
        if (this._bbCodeParsed == null) return null;
        return this._bbCodeParsed.bbCodeStyle;
    }

    private _getNoBbCodeStyleText(): string {
        if (this._bbCodeParsed == null) return "";
        return this._bbCodeParsed.text;
    }

    /**
     * 返回一个添加过样式的文本并且加上样式   例如颜色 style 为 color=red 例如颜色和大小 color=red & size=30 
     * @param text 
     * @param style 
     * @return [string] 
     */
    public static addText(text: string, style: string): string {
        return `[${style}]${text}[/]`;
    }

    public static addTextColor(text: string, color: string): string {
        return this.addText(text, `color=${color}`);
    }

    public static addTextTag(text: string): string {
        return this.addText(text, `tag`);
    }


    public static uiStringToRichText(item: UIString): W26_RichTextLabel {
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
    }

    public static richTextToUiString(item: W26_RichTextLabel): UIString {
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
            //richLabel.letterspacing = item.letterSpacing;
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
    }
}






















(function () {
    if (!Config.BEHAVIOR_EDIT_MODE && !Config.EDIT_MODE) {
        //界面创建的时候带有富文本材质 转换成富文本
        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(() => {
            function setRichText(item: any, ui: UIBase, force: boolean = false): UIString | W26_RichTextLabel {
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
                    //材质删除以及添加
                    item.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH)
                    var passLength = item.getMaterialPassLength();
                    for (var i = 0; i < passLength; i++) {
                        var maLength = item.getMaterialLength(i)
                        for (var j = 0; j < maLength; j++) {
                            var m = item.getMaterialAt(j, i);
                            richLabel.addMaterialAt(m, j, i);
                        }
                    }
                    //richLabel.setMaterialsByGameSprite(item, true);
                    //richLabel.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH);
                    for (var j = 0; j < item.numChildren; j++) {
                        var c = item.getChildAt(j);
                        c.removeSelf();
                        richLabel.addChildAt(c, j);
                    }
                    var parent = item.parent;
                    var index = parent.getChildIndex(item);
                    item.removeSelf();
                    item.dispose();
                    item.removeMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH)
                    parent.addChildAt(richLabel, index);
                    ui[name] = richLabel;
                    //@ts-ignore
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
                    if (item instanceof UIList) {//如果是列表的话，
                        item.on(UIList.ITEM_CREATE, this, (ui: UIRoot, data: UIListItemData, index: number) => {
                            //@ts-ignore
                            updateListItems(ui, data);
                        });
                    }
                    //处理按钮
                    else if (item instanceof UIButton && item.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH) != null) {
                        //@ts-ignore
                        item._tf = setRichText(item._tf, item, true);
                    }
                    else if (item instanceof UIComboBox && item.getMaterialByID(W26_RichTextLabel.PLUGIN_MATERIAL_RICH) != null) {
                        //@ts-ignore
                        //item._tf = setRichText(item._tf, item, true);
                    }
                }
                return item;
            }

            function updateListItems(ui: W26_RichTextLabel, data: UIListItemData) {
                var len = ui.numChildren;
                for (var i = 0; i < len; i++) {
                    var child = ui.getChildAt(i) as W26_RichTextLabel;
                    if (child instanceof W26_RichTextLabel) {
                        if (data[child.name] != undefined) {
                            child.text = data[child.name];
                        }
                    }
                    updateListItems(child, data);
                }
            }

            function checkRichTextLable(ui: UIBase, firstUI: UIBase) {
                if (ui.numChildren == 0) return;
                for (var i = 0; i < ui.numChildren; i++) {
                    var item = ui.getChildAt(i) as UIBase;
                    if (item != null) {
                        checkRichTextLable(setRichText(item, firstUI), firstUI);
                    }
                }
            }
            EventUtils.addEventListenerFunction(GameUI, GameUI.EVENT_CREATE_UI, (ui: GUI_BASE) => {
                checkRichTextLable(ui, ui);
            }, this);
        }, null));
    }
})();


class W26_GameDialog_RichText {
    static richTextLabel: W26_RichTextLabel;// = new W26_RichTextLabel();
    static defaultColor: string;
    static text: string;
    static texts: Array<string> = [];

    constructor() {

    }

    static updateDefaultColor() {
        var _this_1 = GameDialog.lastDialog;
        var color: string = _this_1["dialogData"].dialog["color"];
        //改变的
        var changeData: { atts: { dialog: [{}] } } = GameDialog["changeData"];
        if (changeData != null && changeData.atts != null && changeData.atts.dialog != null) {
            var changeDialogData = changeData.atts.dialog[0];
            if (changeDialogData["color"] != null) {
                color = changeDialogData["color"];
            }
        }
        this.defaultColor = color;
    }

    static updateStyle() {
        var _this_1 = GameDialog.lastDialog;
        var dialogData: {
            align: number,
            alpha: number,
            bold: boolean,
            color: string,
            font: string,
            fontSize: number,
            height: number,
            italic: boolean,
            leading: number,
            letterSpacing: number,
            materialData: Array<any>,
            shadowColor: string,
            shadowDx: number,
            shadowDy: number,
            shadowEnabled: boolean,
            smooth: boolean,
            stroke: number,
            strokeColor: string,
            width: number,
            wordWrap: boolean,
            x: number,
            y: number,
        } = {} as any;

        ObjectUtils.clone(_this_1["dialogData"].dialog, dialogData);


        //改变的
        var changeData: { atts: { dialog: [{}] } } = GameDialog["changeData"];
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

        //添加材质
        /*
        var materialDatas = this.richTextLabel.getAllMaterialDatas();
        for (var i = 0; i < materialDatas.length; i++) {
            var m = materialDatas[i];
            if (m != null) {
                this.richTextLabel.removeMaterial(m);
            }
        }

        for (var i = 0; i < dialogData.materialData.length; i++) {
            var m = dialogData.materialData[i];
            if (m != null) {
                this.richTextLabel.addMaterial(m);
            }
        }
        */

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
    }
}

(function () {
    /**
     * 该函数用于重写对话类。替换掉每句对话
     */
    if (!Config.BEHAVIOR_EDIT_MODE && !Config.EDIT_MODE) {

        EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, () => {


            //重写清理材质，会把富文本的动画材质给清除了,一般也没人会给文字加材质，所以这里处理比较粗糙
            //根据我的观察，原来还是有人会给文字添加材质的。所以这里得处理下
            //@ts-ignore
            GameDialog.prototype.clearTextMaterials = function () {
                for (var i_11 = 0; i_11 < this.playTextLabels.length; i_11++) {
                    var richText: W26_RichText = this.playTextLabels[i_11];
                    /*
                    var passLength = richText.getMaterialPassLength();
                    for(var i=0;i<passLength;i++){
                        var mslen = richText.getMaterialLength(i);
                        for(var j=0;j<mslen;j++){
                           var m = richText.getMaterialAt(j,i);
                           if(W26_RichText.allShaderAnis.indexOf(m.id)!=-1)
                        }
                    }*/
                    /*
                    if (richText.hasShaderAni()) {
                        //continue;
                        var passLength = richText.getMaterialPassLength();
                        for (var i = 0; i < passLength; i++) {
                            var mslen = richText.getMaterialLength(i);
                            for (var j = 0; j < mslen; j++) {
                                var m = richText.getMaterialAt(j, i);
                                if (m != null && W26_RichTextLabel.Shaders.indexOf(m.id) == -1) {
                                    richText.removeMaterialByID(m.id);
                                }
                            }
                        }
                        continue;
                    }
                    */
                    this.playTextLabels[i_11].clearMaterials();
                    //疑似有bug
                    if (richText instanceof W26_RichText) {
                        if (richText.hasShaderAni()) {
                            richText.shaderReflesh();
                        }
                    }
                }
            };
        }, this)


        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(() => {
            const keysymbols = [
                String.fromCharCode(1),
                String.fromCharCode(2),
                String.fromCharCode(3),
                String.fromCharCode(4),
                String.fromCharCode(5),
                String.fromCharCode(6),
                String.fromCharCode(7),
                String.fromCharCode(8)
            ]

            W26_GameDialog_RichText.richTextLabel = new W26_RichTextLabel();
            //W26_GameDialog_RichText.richTextLabel.wordWrap = false;
            W26_GameDialog_RichText.richTextLabel._valign = 0;

            EventUtils.addEventListener(GameDialog, GameDialog.EVENT_DIALOG_START, Callback.New((isOption: boolean, content: string, options: string[], name: string, head: string | number, expression: number, audioURL: string, speed: number) => {
                if (isOption) return;
                var _this_1 = GameDialog.lastDialog;
                //@ts-ignore
                W26_GameDialog_RichText.text = StringUtils.clearHtmlTag(GameDialog.handleText(content, "#FFFFFF", _this_1));
                W26_GameDialog_RichText.texts.length = 0;
                W26_GameDialog_RichText.texts = W26_GameDialog_RichText.text.split('\n');

                if (_this_1.nameText instanceof W26_RichTextLabel) {

                }
                else {
                    var nameText = _this_1.nameText;
                    var nameTextParent = nameText.parent;

                    //@ts-ignore
                    _this_1.nameText = W26_RichTextLabel.uiStringToRichText(_this_1.nameText);
                    nameTextParent.addChild(_this_1.nameText);

                    nameText.removeSelf();
                    nameText.dispose();

                }

            }, this));



            EventUtils.addEventListener(GameDialog, GameDialog.EVENT_AFTER_DIALOG_START, Callback.New((isOption: boolean) => {
                /**
                 * 监听对话设置内容之后，将所有label删除，然后将富文本内部的所有richtext对象代替之前的label
                 * 对颜色，换行进行处理。
                 */
                if (isOption) return;
                var _this_1 = GameDialog.lastDialog;
                var _text = ""
                var lineText = "";
                var currentLineText = "";
                var currentLine = 0;
                W26_GameDialog_RichText.updateDefaultColor();
                //@ts-ignore
                var textMaterial: boolean = _this_1.dialogTextMaterial;
                var currentColor = null;
                //debugger;
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

                    //判断颜色
                    if (playText != "") {
                        var labelColor = label.color.toUpperCase();
                        if (textMaterial) {
                            //使用材质时，会分成一个个字符，非常难处理。这里必须处理成一段一段。不然后面没法做
                            if (currentColor != labelColor) {
                                currentColor = labelColor;
                                playText = `[color=${currentColor}]` + playText
                                if (_text.length > 0) {
                                    playText = `[/]` + playText;
                                }
                            }
                        }

                        if (!textMaterial) {
                            //不使用材质时，是按照颜色一段一段来的。
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
                    label.dispose();//卸载
                }

                if (textMaterial) {
                    _text += `[/]`;
                }
                //debugger;
                _this_1.playTextLabels.length = 0;//清除所有原有label
                _this_1["dialogText"].removeChildren();//清除所有原有label

                var richTextLabel = W26_GameDialog_RichText.richTextLabel;
                W26_GameDialog_RichText.updateStyle();
                if (textMaterial) {
                    richTextLabel.splitText = true;
                }
                else {
                    richTextLabel.splitText = false;
                }
                richTextLabel.set_text_force(_text);
                //richTextLabel.text = _text;
                var richTexts = richTextLabel.getAllRichElement();
                for (var i = 0; i < richTexts.length; i++) {
                    var richText = richTexts[i];
                    //richText.restoreText();//恢复下文字
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
                    //清除材质
                    richText.clearMaterials();
                    //添加材质 （不添加！）
                    //richText.installMaterialData(ObjectUtils.depthClone(_this_1["dialogData"].dialog.materialData));
                    _this_1["dialogText"].addChild(richText);
                    _this_1.playTextLabels.push(richText);
                }
                if (_this_1["playSpeed"] == 5) {
                    _this_1["playTextIndex"] = 0;
                    _this_1["playTextLabelIndex"] = 0;
                    _this_1["playText"](false);
                }
            }, this));

        }, null));

        //重写显示选项
        EventUtils.addEventListener(ClientWorld, ClientWorld.EVENT_INITED, Callback.New(() => {
            //若不想用这个功能，以免和其他选项相关的插件冲突，解除下面//return的注释 即 return
            //return
            // @ts-ignore 隐藏下一行报错
            if (typeof W26_DialogOpt != "undefined") { return; }
            //@ts-ignore
            GameDialog.prototype.setOption = function (options, defaultIndex, cancelIndex, hideIndexs) {
                if (defaultIndex === void 0) { defaultIndex = -1; }
                if (cancelIndex === void 0) { cancelIndex = -1; }
                if (hideIndexs === void 0) { hideIndexs = []; }
                this.optionClear();
                var dialogData = this.updateOptionPostion();
                this.changeDialogData = dialogData;
                var column = dialogData.optionBox.column;
                if (!this.optionList) {
                    //@ts-ignore
                    this.optionList = new UIComponent.UIList();
                    this.optionList.overSelectMode = true;
                }
                this.hidedIndexs = hideIndexs;
                //@ts-ignore
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
                //@ts-ignore
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
                //@ts-ignore
                UIComponent.UIList.focus = this.optionList;
                var defaultIndexHide = defaultIndex < 0 || hideIndexs.indexOf(defaultIndex) >= 0;
                var cancelIndexHide = cancelIndex < 0 || hideIndexs.indexOf(cancelIndex) >= 0;
                //@ts-ignore
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
        }, this))

    }
})();




