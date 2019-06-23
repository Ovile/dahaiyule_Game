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
// vip特权页面
@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const self = this;
        cc.log("vip页面引用成功");
        const VIP = this.node;
        const VIP_bg = VIP.getChildByName("VIP_bg");
        const shut = VIP.getChildByName("VIP_bg").getChildByName("shut");
        shut.on(cc.Node.EventType.TOUCH_START, function () {
            VIP.active = false;
        }, this);
        VIP_bg.on(cc.Node.EventType.TOUCH_START, function (e) {
            e.stopPropagation();
        }, this);
    }

    // update (dt) {}
}
