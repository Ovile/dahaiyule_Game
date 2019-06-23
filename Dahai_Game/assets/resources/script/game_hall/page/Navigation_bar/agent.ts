// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
// 推广页面入口
@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const self = this;
        cc.log("推广页面引用成功");
        const Extension = this.node;
        const Extension_bg = Extension.getChildByName("Extension_bg");
        const shut = Extension.getChildByName("Extension_bg").getChildByName("shut");
        shut.on(cc.Node.EventType.TOUCH_START,function(){
            Extension.active = false;
        },this);
        Extension_bg.on(cc.Node.EventType.TOUCH_START,function(e){
            e.stopPropagation();
        },this);
    }

    // update (dt) {}
}
