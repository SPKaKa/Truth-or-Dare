(function (CustomCondition) {
    function f10(trigger, p) {
        if (p.type === 0)
            return Orzi_Tools.Language.getIsDev();
        else if (p.type === 1) {
            return Orzi_Tools.Language.instance.local === GameData.getModuleData(Orzi_Tools.Language.PLUGIN_MODULE_TYPE_OrziLanguage, p.judgeLanguage).name;
        }
        return true;
    }
    CustomCondition.f10 = f10;
})(CustomCondition || (CustomCondition = {}));
//# sourceMappingURL=Judge.js.map