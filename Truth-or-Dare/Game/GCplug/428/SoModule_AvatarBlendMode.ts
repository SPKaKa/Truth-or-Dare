/**
 * Created by 黑暗之神KDS on 2022-05-16 11:44:17.
 */
class SoModule_AvatarBlendMode extends SceneObjectModule_8 {
    /**
     * 构造函数
     * @param installCB 用于安装模块的属性值
     */
    constructor(installCB: Callback) {
        super(installCB);
        this.refresh();
    }
    /**
     * 当移除模块时执行的函数
     */
    onRemoved(): void {
        this.so.avatar.blendMode = null;
    }
    /**
     * 刷新：通常在改变了属性需要调用此函数统一刷新效果
     */
    refresh(): void {
        switch (this.blendMode) {
            case 0:
                this.so.avatar.blendMode = null;
                break;
            case 1:
                this.so.avatar.blendMode = "lighter";
                break;
            case 2:
                this.so.avatar.blendMode = "blend5-1";
                break;
            case 3:
                this.so.avatar.blendMode = "blend4-1";
                break;
            case 4:
                this.so.avatar.blendMode = "blend4-7";
                break;
            case 5:
                this.so.avatar.blendMode = "blend4-4";
                break;
        }
    }
}