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
// 在线客服页面入口
@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const self = this;
        cc.log("客服页面引用成功");
        const services = this.node;
        const service_bg = services.getChildByName("service_bg");
        const shut = services.getChildByName("service_bg").getChildByName("shut");
        shut.on(cc.Node.EventType.TOUCH_START, function () {
            services.active = false;
        }, this);
        service_bg.on(cc.Node.EventType.TOUCH_START, function (e) {
            e.stopPropagation();
        }, this);
    }

    // update (dt) {}
}
