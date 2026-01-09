/**
 * Created by 我不懂代码 on 2022-11-22 14:34:39.
 */
class TMC_FootStepModule extends SceneObjectModule_7 {
    
    lastSE:string = "";
    soundChannel:SoundChannel;
    /**
     * 构造函数
     * @param installCB 用于安装模块的属性值
     */
    constructor(installCB: Callback) {
        super(installCB);
        os.add_ENTERFRAME(this.onUpdate, this)
    }

    /**
     * 当移除模块时执行的函数
     */
    onRemoved():void {
        os.remove_ENTERFRAME(this.onUpdate, this)
    }

    /**
     * 当改变当前模块属性时
     * @param attrName 模块的属性名称
     */
    onChange(attrName: string): void {

    }

    /**
     * 当前模块每帧执行的函数
     */
    onUpdate(): void {
        if (this.ModuleActive && this.so.isMoving){
            //获取所有设定的音效
            let settingList = ObjectUtils.depthClone(WorldData.SEmap)
            for(let overridSEData of this.OverrideSEsetting){
                for(let seData of settingList){
                    if(seData.MapDataIndex == overridSEData.MapDataIndex){
                        seData.SEurl = overridSEData.SEurl
                        break;
                    }
                }
                let newData = ObjectUtils.depthClone(overridSEData)
                settingList.push(newData)
            }

            
            let seURL = ""
            for(let seData of settingList){
                if (Game.currentScene.getDataGridState(seData.MapDataIndex,this.so.posGrid.x,this.so.posGrid.y) > 0){
                    seURL = seData.SEurl
                    break;
                }
            }
            if (seURL == ""){
                if (WorldData.bUseDefaultFootStep && WorldData.DefaultFootStep != ""){
                    seURL = WorldData.DefaultFootStep
                }
                if (this.bOverrideDefault && this.OverrideDefaultSE != ""){
                    seURL = this.OverrideDefaultSE
                }
                if (seURL == ""){
                    this.stopSE()
                    return;
                }
            }
            if (!this.soundChannel || this.soundChannel.isStopped){
                //直接播放
                this.soundChannel = GameAudio.playSE(seURL,1,1,this.so)
                this.lastSE = seURL
            }
            else{
                if (this.lastSE != seURL){
                    this.soundChannel.stop()
                    this.soundChannel = GameAudio.playSE(seURL,1,1,this.so)
                    this.lastSE = seURL
                }
            }
        }
        else {
            this.stopSE()
        }
    }

    stopSE(){
        //清除正在播放的声音
        //清除有点怪，先注释了，需要的自己开启来
        /**if (this.soundChannel && !this.soundChannel.isStopped){
            this.lastSE = ""
            this.soundChannel.stop()
        }*/
    }
    /**
     * 刷新：通常在改变了属性需要调用此函数统一刷新效果
     */
    refresh():void {
    }
}
