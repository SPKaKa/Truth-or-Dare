var CommandExecute;
(function (CommandExecute) {
    function customCommand_15005(commandPage, cmd, trigger, triggerPlayer, playerInput, p) {
        var isKeyPressed = false;
        var key = p.anjian;
        var delay = p.shijian;
        document.addEventListener('keydown', function (event) {
            if (event.keyCode === key) {
                isKeyPressed = true;
                GameDialog.showall();
            }
        });
        document.addEventListener('keyup', function (event) {
            if (event.keyCode === key) {
                isKeyPressed = false;
            }
        });
        EventUtils.addEventListenerFunction(GameDialog, GameDialog.EVENT_DIALOG_WORD_PLAY_COMPLETE, function () {
            if (isKeyPressed) {
                setTimeout(function () {
                    GameDialog.skip();
                }, delay);
            }
        }, this);
    }
    CommandExecute.customCommand_15005 = customCommand_15005;
})(CommandExecute || (CommandExecute = {}));
//# sourceMappingURL=Aanjian.js.map