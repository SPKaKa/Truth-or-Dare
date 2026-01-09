var _this = this;
EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, function () {
    Orzi_Tools.Language.init();
    var languageName = WorldData.orzi_language_packages.map((function (v) { var _a; return (_a = GameData.getModuleData(Orzi_Tools.Language.PLUGIN_MODULE_TYPE_OrziLanguage, v)) === null || _a === void 0 ? void 0 : _a.name; }));
    trace('orzi_language is running!', languageName, Orzi_Tools.Language.instance.local);
    var _timer = setTimeout(function () {
        if (os.platform === 2) {
            AssetManager.loadText(Orzi_Tools.Language.path + '_local.txt', Callback.New(function (data) {
                if (data)
                    Orzi_Tools.Language.setLanguage(JSON.parse(data));
            }, _this));
        }
        else {
            var _local = LocalStorage.getItem('__orzi_language_local__');
            if (_local)
                Orzi_Tools.Language.setLanguage(_local);
        }
        clearTimeout(_timer);
    }, 300);
    var __orzi_text_lang_temp = Laya.Text.prototype.lang;
    Laya.Text.prototype.lang = function (text, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        __orzi_text_lang_temp.apply(this, arguments);
        if (Orzi_Tools.Language.getText(this.__orzi_language_temp__) !== Orzi_Tools.Language.getText(this._text))
            this.__orzi_language_temp__ = this._text;
        if (Orzi_Tools.Language.getText(this.__orzi_language_temp_prompt__) !== Orzi_Tools.Language.getText(this._prompt))
            this.__orzi_language_temp_prompt__ = this._prompt;
        if (!this.__orzi_language_watching__) {
            this.__orzi_language_watching__ = true;
            EventUtils.addEventListenerFunction(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE, this.__orzi_language_watch_func__, this);
        }
        if (!this.text && this.prompt) {
            this.prompt = Orzi_Tools.Language.clearSpan(Orzi_Tools.Language.getText(this.__orzi_language_temp_prompt__));
        }
        else {
            this.text = Orzi_Tools.Language.clearSpan(Orzi_Tools.Language.getText(this.__orzi_language_temp__));
        }
    };
    var __orzi_text_destroy_temp = Laya.Text.prototype.destroy;
    Laya.Text.prototype.destroy = function (destroyChild) {
        __orzi_text_destroy_temp.apply(this, arguments);
        (destroyChild === void 0) && EventUtils.removeEventListenerFunction(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE, this.__orzi_language_watch_func__, this);
    };
    Laya.Text.prototype.__orzi_language_watch_func__ = function () {
        if (!this.text && this.prompt) {
            this.prompt = Orzi_Tools.Language.getText(this.__orzi_language_temp_prompt__);
        }
        else {
            this.text = Orzi_Tools.Language.getText(this.__orzi_language_temp__);
        }
    };
    Object.defineProperty(UITabBox.prototype, "items", {
        get: function () {
            if (!this.__orzi_language_watching__) {
                this.__orzi_language_watching__ = true;
                EventUtils.addEventListenerFunction(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE, this.__orzi_language_watch_func__, this);
            }
            return this._items;
        },
        set: function (v) {
            this._items = v;
            if ((this.__orzi_language_temp__ !== this.items) && (Orzi_Tools.Language.getText(this.__orzi_language_temp__) !== Orzi_Tools.Language.getText(this.items)))
                this.__orzi_language_temp__ = this.items;
            if (this.items !== Orzi_Tools.Language.getText(this.__orzi_language_temp__))
                this.items = Orzi_Tools.Language.getText(this.__orzi_language_temp__);
            if (!this.isDisposed)
                return;
            this.refreshItems();
        },
        enumerable: false,
        configurable: true
    });
    var __orzi_UITabBox_dispose_temp = UITabBox.prototype.dispose;
    UITabBox.prototype.dispose = function () {
        if (this.__orzi_language_watching__) {
            EventUtils.removeEventListenerFunction(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE, this.__orzi_language_watch_func__, this);
        }
        __orzi_UITabBox_dispose_temp.apply(this, arguments);
    };
    UITabBox.prototype.__orzi_language_watch_func__ = function () {
        this.items = Orzi_Tools.Language.getText(this.__orzi_language_temp__);
    };
    Object.defineProperty(UIComboBox.prototype, "itemLabels", {
        get: function () {
            if (!this.__orzi_language_watching__) {
                this.__orzi_language_watching__ = true;
                EventUtils.addEventListenerFunction(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE, this.__orzi_language_watch_func__, this);
            }
            return this._itemLabels;
        },
        set: function (v) {
            if (v == null)
                return;
            this._itemLabels = v;
            if ((this.__orzi_language_temp__ !== this._itemLabels) && (Orzi_Tools.Language.getText(this.__orzi_language_temp__) !== Orzi_Tools.Language.getText(this._itemLabels)))
                this.__orzi_language_temp__ = this._itemLabels;
            if (this._itemLabels !== Orzi_Tools.Language.getText(this.__orzi_language_temp__))
                this._itemLabels = Orzi_Tools.Language.getText(this.__orzi_language_temp__);
            this._itemLabelArr = v.split(",");
            this.selectedIndex = this.selectedIndex;
        },
        enumerable: false,
        configurable: true
    });
    var __orzi_UIComboBox_dispose_temp = UIComboBox.prototype.dispose;
    UIComboBox.prototype.dispose = function () {
        if (this.__orzi_language_watching__) {
            EventUtils.removeEventListenerFunction(Orzi_Tools.Language.instance.packages, Orzi_Tools.Language.EVENT_ON_CHANGE_LANGUAGE, this.__orzi_language_watch_func__, this);
        }
        __orzi_UIComboBox_dispose_temp.apply(this, arguments);
    };
    UIComboBox.prototype.__orzi_language_watch_func__ = function () {
        this._itemLabels = Orzi_Tools.Language.getText(this.__orzi_language_temp__);
    };
    var __orzi_language_url_formatURL_old__ = Laya.URL.formatURL;
    Laya.URL.formatURL = function (url, base) {
        url = __orzi_language_url_formatURL_old__(url, base);
        if (WorldData.orzi_language_isChangeAsset && (os.platform === 2 || WorldData.orzi_language_isForceChange)) {
            var oldUrl = url;
            var arr = url.split("asset/");
            if (arr.length > 1) {
                var top = arr.shift() + 'asset/orzi/languages/asset/' + Orzi_Tools.Language.instance.local + '/';
                url = top + arr.join('asset/');
                url = decodeURIComponent(url);
                if (os.platform === 2) {
                    if (typeof mainDomain_fs !== 'undefined') {
                        if (!mainDomain_fs.existsSync(url))
                            url = oldUrl;
                    }
                }
            }
        }
        return url;
    };
    var __orzi_language_variable_margeDynamicText = Variable.margeDynamicText;
    Variable.margeDynamicText = function (texts, player, trigger) {
        var _texts = ObjectUtils.depthClone(texts);
        _texts = _texts.map(function (item) {
            if (typeof item[1] === 'string') {
                item[1] = Orzi_Tools.Language.getText(item[1]);
            }
            return item;
        });
        var _str = __orzi_language_variable_margeDynamicText(_texts, player, trigger);
        return Orzi_Tools.Language.getText(_str);
    };
}, null);
var __orzi_language_fontLoadManager_toLoadFontFile_old__ = FontLoadManager.toLoadFontFile;
FontLoadManager.toLoadFontFile = function (font) {
    var url = font.path;
    url = url.replace(/asset\/orzi\/languages\/asset\/(.*?)\/font/g, 'asset/font');
    var oldUrl = url;
    var arr = url.split("asset/");
    function loadFontFile(local) {
        Orzi_Tools.Language.instance.fontLocal = local;
        var top = arr.shift() + 'asset/orzi/languages/asset/' + local + '/';
        url = top + arr.join('asset/');
        if (os.platform === 2) {
            FileUtils.exists(url, Callback.New(function (is_exit) {
                if (!is_exit)
                    url = oldUrl;
                font.path = url;
                __orzi_language_fontLoadManager_toLoadFontFile_old__(font);
            }, this));
        }
        else {
            fetch(url)
                .then(function (res) {
                if (res.status === 200) {
                    font.path = url;
                    __orzi_language_fontLoadManager_toLoadFontFile_old__(font);
                }
                else {
                    font.path = oldUrl;
                    __orzi_language_fontLoadManager_toLoadFontFile_old__(font);
                }
            })
                .catch(function (err) {
                font.path = oldUrl;
                __orzi_language_fontLoadManager_toLoadFontFile_old__(font);
            });
        }
    }
    if (arr.length > 1) {
        var local_1 = Orzi_Tools.Language.instance.local;
        if (Orzi_Tools.Language.instance.isInitialSetup) {
            loadFontFile(local_1);
        }
        else {
            if (os.platform === 2) {
                AssetManager.loadText(Orzi_Tools.Language.path + '_local.txt', Callback.New(function (data) {
                    if (data)
                        local_1 = JSON.parse(data);
                    loadFontFile(local_1);
                }, this));
            }
            else {
                var _local = LocalStorage.getItem('__orzi_language_local__');
                if (_local)
                    local_1 = _local;
                loadFontFile(local_1);
            }
        }
    }
};
//# sourceMappingURL=Rewrite.js.map