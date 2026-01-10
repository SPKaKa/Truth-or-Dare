(function (CommandExecute) {
    function customCommand_15001(commandPage, cmd, trigger, triggerPlayer, playerInput, p) {
        if (p.local && p.local > 0) {
            var _data = GameData.getModuleData(Orzi_Tools.Language.PLUGIN_MODULE_TYPE_OrziLanguage, p.local);
            if (!_data)
                console.error('语言包设置错误！');
            Orzi_Tools.Language.setLanguage(_data.name, WorldData.orzi_language_isChangeAsset && WorldData.orzi_language_isReload);
        }
    }
    CommandExecute.customCommand_15001 = customCommand_15001;
    function customCommand_15002(commandPage, cmd, trigger, triggerPlayer, playerInput, p) {
        if (Orzi_Tools.Language.getIsDev()) {
            if (p.type === 0)
                Orzi_Tools.Language.getAllTextAndSave(p.saveType === 1 ? 1 : 0, p.isClearHTML);
            else
                Orzi_Tools.Language.backup();
        }
    }
    CommandExecute.customCommand_15002 = customCommand_15002;
})(CommandExecute || (CommandExecute = {}));
//# sourceMappingURL=Command.js.map