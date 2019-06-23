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
// 开户豪礼-绑定手机
@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const Tips_pop_up = this.node;
        const Mask_bg = Tips_pop_up.getChildByName("Mask_bg");
        const shub_button = this.node.getChildByName("shut");
        shub_button.on(cc.Node.EventType.TOUCH_START, function(){
            Tips_pop_up.active = false;
        }, true);
        Mask_bg.on(cc.Node.EventType.TOUCH_START, function(e){
            e.stopPropagation();
        }, true);
    }

    // update (dt) {}
}
