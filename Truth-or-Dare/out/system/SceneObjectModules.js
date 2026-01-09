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
var SceneObjectModule = (function () {
    function SceneObjectModule(installCB) {
        installCB && installCB.runWith([this]);
    }
    SceneObjectModule.prototype.onRemoved = function () {
    };
    SceneObjectModule.prototype.refresh = function () {
    };
    SceneObjectModule.prototype.dispose = function () {
        this.so = null;
        this.name = null;
        this.isDisposed = true;
    };
    SceneObjectModule.moduleClassArr = [];
    return SceneObjectModule;
}());
var SceneObjectCommon = (function (_super) {
    __extends(SceneObjectCommon, _super);
    function SceneObjectCommon(soData, scene) {
        return _super.call(this, soData, scene) || this;
    }
    return SceneObjectCommon;
}(ClientSceneObject));
var SceneObjectModule_1 = (function (_super) {
    __extends(SceneObjectModule_1, _super);
    function SceneObjectModule_1(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_1;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[1] = SceneObjectModule_1;
var SceneObjectModule_2 = (function (_super) {
    __extends(SceneObjectModule_2, _super);
    function SceneObjectModule_2(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_2;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[2] = SceneObjectModule_2;
var SceneObjectModule_3 = (function (_super) {
    __extends(SceneObjectModule_3, _super);
    function SceneObjectModule_3(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_3;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[3] = SceneObjectModule_3;
var SceneObjectModule_4 = (function (_super) {
    __extends(SceneObjectModule_4, _super);
    function SceneObjectModule_4(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_4;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[4] = SceneObjectModule_4;
var SceneObjectModule_5 = (function (_super) {
    __extends(SceneObjectModule_5, _super);
    function SceneObjectModule_5(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_5;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[5] = SceneObjectModule_5;
var SceneObjectModule_6 = (function (_super) {
    __extends(SceneObjectModule_6, _super);
    function SceneObjectModule_6(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_6;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[6] = SceneObjectModule_6;
var SceneObjectModule_7 = (function (_super) {
    __extends(SceneObjectModule_7, _super);
    function SceneObjectModule_7(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_7;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[7] = SceneObjectModule_7;
var SceneObjectModule_8 = (function (_super) {
    __extends(SceneObjectModule_8, _super);
    function SceneObjectModule_8(installCB) {
        return _super.call(this, installCB) || this;
    }
    return SceneObjectModule_8;
}(SceneObjectModule));
SceneObjectModule.moduleClassArr[8] = SceneObjectModule_8;
//# sourceMappingURL=SceneObjectModules.js.map