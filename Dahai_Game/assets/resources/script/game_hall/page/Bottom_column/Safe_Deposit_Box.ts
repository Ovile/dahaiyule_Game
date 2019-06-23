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
// 保险箱页面入口（提示-绑定手机）
@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const self = this;
        cc.log("保险箱页面引用成功");
        const Tips_pop_up = this.node;
        const shut = Tips_pop_up.getChildByName("shut");
        shut.on(cc.Node.EventType.TOUCH_START,function(){
            Tips_pop_up.active = false;
        },this);
        const Mask_bg = self.node.getChildByName("Mask_bg");
        Mask_bg.on(cc.Node.EventType.TOUCH_START,function(e){
            e.stopPropagation();
        },this);

    }

    // update (dt) {}
}
