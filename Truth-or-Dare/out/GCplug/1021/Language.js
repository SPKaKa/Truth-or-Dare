var Orzi_Tools;
(function (Orzi_Tools) {
    var Language = (function () {
        function Language() {
            this.packages = {};
            this.isInitialSetup = false;
            if (Config.language === 1)
                this.local = 'zhTW';
            else if (Config.language === 2)
                this.local = 'en';
            else
                this.local = 'zhCN';
        }
        Language.init = function () {
            if (!this._language) {
                Language._language = new Language();
            }
            if (this.__isInit)
                return this._language;
            this.resetPackages();
            var _showDialogTemp = GameDialog.showDialog;
            var _showOptionTemp = GameDialog.showOption;
            GameDialog.showDialog = function (dialogID, head, name, speed, comicSceneObjectIndex, msg, submitCallback, audio, exp, nameColor, changeData, dialogMaterialEnabled) {
                if (name)
                    name = Language.getText(name);
                if (msg) {
                    if (Language.hasText(Language.ol2str(msg)))
                        msg = Language.getText(msg);
                    else {
                        msg = msg.replace(/<span([\s\S]*?)>([\s\S]*?)<\/span>/g, function (match, p1, p2) {
                            return "<span" + p1 + ">" + Language.getText(p2) + "</span>";
                        });
                    }
                }
                return _showDialogTemp.apply(this, arguments);
            };
            GameDialog.showOption = function (dialogID, options, isShowOptionWithLastDialog, defaultIndex, cancelIndex, hideIndexs) {
                for (var i = 0; i < options.length; i++) {
                    options[i] = Language.getText(options[i]);
                }
                return _showOptionTemp.apply(this, arguments);
            };
            this.__isInit = true;
            return this._language;
        };
        Object.defineProperty(Language, "instance", {
            get: function () {
                if (!this._language) {
                    Language._language = new Language();
                }
                return this._language;
            },
            enumerable: false,
            configurable: true
        });
        Language.prototype._getText = function (key) {
            if (this.packages && this.packages[this.local] && this.packages[this.local][key]) {
                return this.packages[this.local][key];
            }
            return key;
        };
        Language.prototype._getOriginText = function (value) {
            var _this_2 = this;
            var _loop_3 = function (p) {
                var key = Object.keys(this_1.packages[p]).find(function (c) { return _this_2.packages[p][c] === value || Language.clearSpan(_this_2.packages[p][c]) === value; });
                if (key)
                    return { value: key };
            };
            var this_1 = this;
            for (var p in this.packages) {
                var state_1 = _loop_3(p);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return value;
        };
        Language.hasText = function (key) {
            if (!key)
                return false;
            if (!Language.instance.packages[Language.instance.local])
                return false;
            return Language.instance.packages[Language.instance.local][key] !== undefined;
        };
        Language.getText = function (key) {
            if (!key)
                return '';
            return Language.instance._getText(this.ol2str(key));
        };
        Language.getOriginText = function (value) {
            if (!value)
                return '';
            if (/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]*$/.test(value))
                return value;
            return Language.instance._getOriginText(value);
        };
        Language.setLanguage = function (cl, isReload) {
            if (isReload === void 0) { isReload = false; }
            var isFristSet = !Language.instance.isInitialSetup;
            Language.instance.isInitialSetup = true;
            if (!cl) {
                if (Config.language === 1)
                    cl = 'zhTW';
                else if (Config.language === 2)
                    cl = 'en';
                else
                    cl = 'zhCN';
            }
            if (!Language.instance.packages[cl]) {
                console.error('语言包不存在或未生成！', cl);
                return;
            }
            if (Language.instance.local === cl)
                return;
            Language.instance.local = cl;
            if (os.platform === 2) {
                FileUtils.save(cl, this.path + '_local.txt', Callback.New(function () {
                    trace('orzi_language_local is saved!', cl);
                    _resetText();
                }, this), true);
            }
            else {
                LocalStorage.setItem('__orzi_language_local__', cl);
                _resetText();
            }
            function dispatchEvent() {
                EventUtils.happen(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE);
                Language.__watcher.forEach(function (v) { v(); });
            }
            function _resetText() {
                if (isFristSet) {
                    dispatchEvent();
                }
                else {
                    if (isReload) {
                        location.reload();
                        return;
                    }
                    if (WorldData.orzi_language_isReloadFont && Language.instance.fontLocal !== cl) {
                        FontLoadManager.fontFaceList = {};
                        FontLoadManager.loadFontFile(Config.FONTS ? Config.FONTS : [], Callback.New(function () {
                            dispatchEvent();
                        }), Language);
                    }
                    else {
                        dispatchEvent();
                    }
                }
            }
        };
        Language.getPackages = function () {
        };
        Language.resetPackages = function () {
            var _this_2 = this;
            Language.instance.packages = {};
            WorldData.orzi_language_packages.forEach(function (v) {
                var _b;
                var languageName = (_b = GameData.getModuleData(Orzi_Tools.Language.PLUGIN_MODULE_TYPE_OrziLanguage, v)) === null || _b === void 0 ? void 0 : _b.name;
                Language.instance.packages[languageName] = {};
                FileUtils.exists(_this_2.path + languageName + '.json', Callback.New(function (is_exit) {
                    if (is_exit) {
                        AssetManager.loadJson(_this_2.path + languageName + '.json', Callback.New(function (data) {
                            if (data)
                                Language.instance.packages[languageName] = data;
                            AssetManager.disposeJson(_this_2.path + languageName + '.json');
                            FileUtils.exists(_this_2.path + languageName + '.csv', Callback.New(function (is_exit) {
                                if (is_exit) {
                                    AssetManager.loadText(_this_2.path + languageName + '.csv', Callback.New(function (csvData) {
                                        if (csvData)
                                            Language.instance.packages[languageName] = Object.assign(Language.instance.packages[languageName] || {}, Language.getCsvJson(csvData));
                                        AssetManager.disposeText(_this_2.path + languageName + '.csv');
                                    }, _this_2));
                                }
                            }, _this_2));
                        }, _this_2));
                    }
                    else {
                        FileUtils.exists(_this_2.path + languageName + '.csv', Callback.New(function (is_exit) {
                            if (is_exit) {
                                AssetManager.loadText(_this_2.path + languageName + '.csv', Callback.New(function (csvData) {
                                    if (csvData)
                                        Language.instance.packages[languageName] = Language.getCsvJson(csvData);
                                    AssetManager.disposeText(_this_2.path + languageName + '.csv');
                                }, _this_2));
                            }
                        }, _this_2));
                    }
                }, _this_2));
            });
        };
        Language.getAllText = function (json, strs, isClearHTML) {
            var _this_2 = this;
            if (isClearHTML === void 0) { isClearHTML = false; }
            var isHasSpan = false;
            var matchVar = function (str) {
                var _a = str.replace(/([\s\S]*?)\[(\@|\$)([\s\S]*?)\]/g, function (match, _p1, _p2, _p3) {
                    strs.add(_this_2.ol2str(_p1));
                    return '';
                });
                strs.add(_this_2.ol2str(_a));
            };
            if (Array.isArray(json)) {
                if (json.length === 8 && json[0] === 4 && typeof json[1] === 'string') {
                    strs.add(this.ol2str(json[1]));
                }
                for (var i = 0; i < json.length; i++) {
                    var _isHasSpan = this.getAllText(json[i], strs, isClearHTML);
                    if (_isHasSpan) {
                        if (json[3] && typeof json[3] === 'string') {
                            strs.add(this.ol2str(json[3]));
                            if (WorldData.orzi_language_isShowStatistics) {
                                Orzi_Tools.Statistics.names[json[3]] = (Orzi_Tools.Statistics.names[json[3]] || 0) + 1;
                            }
                        }
                    }
                }
            }
            else if (typeof json === 'object') {
                if (json === null)
                    return;
                if (json === undefined)
                    return;
                for (var key in json) {
                    this.getAllText(json[key], strs, isClearHTML);
                }
            }
            else if (typeof json === 'string') {
                if (WorldData.orzi_language_isShowStatistics && this.checkHasSpan(json)) {
                    json.replace(/<span([\s\S]*?)>([\s\S]*?)<\/span>/g, function (match, p1, p2) {
                        var _a = p2.replace(/([\s\S]*?)\[(\@|\$)([\s\S]*?)\]/g, function (match, _p1, _p2, _p3) {
                            Orzi_Tools.Statistics.text += _this_2.ol2str(_p1);
                            return '';
                        });
                        Orzi_Tools.Statistics.text += _this_2.ol2str(_a);
                        return '';
                    });
                }
                if (this.checkReg(json)) {
                    if (isClearHTML && this.checkHasSpan(json)) {
                        json.replace(/<span([\s\S]*?)>([\s\S]*?)<\/span>/g, function (match, p1, p2) {
                            matchVar(p2);
                            return '';
                        });
                        isHasSpan = true;
                    }
                    else
                        matchVar(json);
                }
                if (this.checkHasSpan(json)) {
                    if (isClearHTML) {
                        json.replace(/<span([\s\S]*?)>([\s\S]*?)<\/span>/g, function (match, p1, p2) {
                            matchVar(p2);
                            return '';
                        });
                    }
                    else
                        matchVar(json);
                    isHasSpan = true;
                }
            }
            return isHasSpan;
        };
        Language.checkReg = function (str) {
            return /_ol\[\[([\s\S]*?)\]\]ol_/.test(str);
        };
        Language.ol2str = function (str) {
            var a = str.replace(/_ol\[\[([\s\S]*?)\]\]ol_/g, '$1');
            a = a.replace(/_ol\[\[/g, '');
            a = a.replace(/\]\]ol_/g, '');
            return a;
        };
        Language.checkHasSpan = function (str) {
            return /<span([\s\S]*?)<\/span>/.test(str);
        };
        Language.clearSpan = function (str) {
            return str.replace(/<span([\s\S]*?)>([\s\S]*?)<\/span>/g, function (match, p1, p2) {
                return p2;
            });
        };
        Language.backup = function () {
            var _this_2 = this;
            return new Promise(function (resolve, reject) {
                var _num = 0;
                var _date = new Date();
                var _time = [_date.getFullYear(), _date.getMonth() + 1, _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds()].join('_');
                var _backupPath = Language.path + ("backup/" + _time);
                for (var c in Language.instance.packages)
                    _num += 2;
                FileUtils.createDirectoryForce(_backupPath, Callback.New(function (success, path) {
                    var _loop_4 = function (c) {
                        FileUtils.exists(Language.path + c + '.json', Callback.New(function (is_exit) {
                            if (is_exit) {
                                FileUtils.cloneFile(Language.path + c + '.json', _backupPath + '/' + c + '.json', Callback.New(function (success, fromPath, toPath) {
                                    trace("orzi_language:" + c + ".json is backuped! Save time: " + _time);
                                    _num--;
                                    if (_num <= 0)
                                        resolve(true);
                                }, _this_2));
                            }
                            _num--;
                            if (_num <= 0)
                                resolve(true);
                        }, _this_2));
                        FileUtils.exists(Language.path + c + '.csv', Callback.New(function (is_exit) {
                            if (is_exit) {
                                FileUtils.cloneFile(Language.path + c + '.csv', _backupPath + '/' + c + '.csv', Callback.New(function (success, fromPath, toPath) {
                                    trace("orzi_language:" + c + ".csv is backuped! Save time: " + _time);
                                    _num--;
                                    if (_num <= 0)
                                        resolve(true);
                                }, _this_2));
                            }
                            _num--;
                            if (_num <= 0)
                                resolve(true);
                        }, _this_2));
                    };
                    for (var c in Language.instance.packages) {
                        _loop_4(c);
                    }
                }, _this_2));
            });
        };
        Language.save = function (_arr, type) {
            var _this_2 = this;
            if (type === void 0) { type = 0; }
            this.backup().then(function () {
                var _loop_5 = function (c) {
                    if (c === '__evIdx2')
                        return "continue";
                    var _data = Language.instance.packages[c];
                    _arr.forEach(function (v) {
                        if (!_data[v]) {
                            _data[v] = v;
                        }
                    });
                    if (type === 1) {
                        var _text = '';
                        for (var k in _data) {
                            if (k)
                                _text += _this_2.toCsvStr(k) + ',' + _this_2.toCsvStr(_data[k]) + "\n";
                        }
                        FileUtils.save(_text, Language.path + c + '.csv', Callback.New(function () {
                            trace("orzi_language:" + c + ".csv is saved!");
                        }, _this_2), false, false);
                    }
                    else {
                        FileUtils.save(_data, Language.path + c + '.json', Callback.New(function () {
                            trace("orzi_language:" + c + ".json is saved!");
                        }, _this_2), true);
                    }
                };
                for (var c in Language.instance.packages) {
                    _loop_5(c);
                }
                if (WorldData.orzi_language_isShowStatistics)
                    Orzi_Tools.Statistics.show();
            });
        };
        Language.toCsvStr = function (str) {
            if (str.indexOf('"') > -1 || str.indexOf(",") > -1 || str.indexOf("\n") > -1 || str.indexOf("\r") > -1) {
                str = "\"" + str.replace(/"/g, '""') + "\"";
            }
            return str;
        };
        Language.getCsvJson = function (csv) {
            var _data = {};
            var arr = this.getCsvStr(csv);
            for (var i = 0; i < arr.length; i++) {
                if (!arr[i][0])
                    continue;
                var _t = '';
                for (var k = 1; k < arr[i].length; k++) {
                    if (arr[i][k]) {
                        _t = arr[i][k];
                        break;
                    }
                }
                _data[arr[i][0]] = _t;
            }
            return _data;
        };
        Language.getCsvStr = function (str) {
            var _arr = [];
            if (typeof str != "string") {
                return _arr;
            }
            var tr = [];
            _arr.push(tr);
            var t = "";
            for (var i = 0; i < str.length; i++) {
                var c = str[i];
                if (c === '"') {
                    i += 1;
                    for (; i < str.length; i++) {
                        if (str[i] === '"') {
                            if (str[i + 1] == '"') {
                                t += '"';
                                i++;
                            }
                            else {
                                i++;
                                break;
                            }
                        }
                        else
                            t += str[i];
                    }
                    tr.push(t);
                    t = "";
                    for (; i < str.length; i++) {
                        if (str[i] == " ") {
                        }
                        else if (str[i] == ",") {
                            i -= 1;
                            break;
                        }
                        else if (str[i] == "\n" || str[i] == "\r") {
                            i -= 1;
                            break;
                        }
                        else {
                            console.log("Error");
                        }
                    }
                }
                else if (c === ",") {
                    tr.push(t);
                    t = "";
                }
                else if (c === "\n" || c === "\r") {
                    if (t != "") {
                        tr.push(t);
                        t = "";
                    }
                    for (; i < str.length; i++) {
                        if (str[i] === "\n" || str[i] === "\r") {
                        }
                        else {
                            i--;
                            break;
                        }
                    }
                    _arr.push(tr = []);
                }
                else {
                    t += c;
                }
            }
            if (t !== "")
                tr.push(t);
            return _arr;
        };
        Language.getAllTextAndSave = function (type, isClearHTML) {
            var _this_2 = this;
            if (type === void 0) { type = 0; }
            if (isClearHTML === void 0) { isClearHTML = false; }
            Orzi_Tools.Statistics.init();
            var _arr = new Set();
            FileUtils.getAllChildFiles('asset/json', Callback.New(function (list) {
                if (!list)
                    return;
                var _num = list.length;
                list.forEach(function (v) {
                    if (v.fileName.indexOf('.json') !== -1) {
                        AssetManager.loadJson(v.localPath, Callback.New(function (data) {
                            if (data)
                                Orzi_Tools.Language.getAllText(data, _arr, isClearHTML);
                            _num--;
                            AssetManager.disposeJson(v.localPath);
                            if (_num <= 0)
                                Orzi_Tools.Language.save(_arr, type);
                        }, _this_2));
                    }
                    else
                        _num--;
                });
                if (_num <= 0)
                    Orzi_Tools.Language.save(_arr, type);
            }, this));
        };
        Language.getIsDev = function () {
            return Config.EDIT_MODE || !Config.RELEASE_GAME;
        };
        Language.path = 'asset/orzi/languages/';
        Language.EVENT_ON_CHANGE_LANGUAGE = 'change_language';
        Language.PLUGIN_MODULE_TYPE_OrziLanguage = 21;
        Language.__watcher = [];
        Language.__isInit = false;
        return Language;
    }());
    Orzi_Tools.Language = Language;
})(Orzi_Tools || (Orzi_Tools = {}));
//# sourceMappingURL=Language.js.map