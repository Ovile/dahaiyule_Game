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

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.inits();
    }

    start () {

    }

    // update (dt) {}

    inits() {
        const self = this;
        cc.loader.loadRes("./prefab/ER_majiang", cc.Prefab, function (err, res) {
            if (err) {
                cc.log("二人麻将初始化失败：" + err.message || err)
            };
            const ER_majiang = cc.instantiate(res);
            ER_majiang.addComponent("ER_main");
            self.node.addChild(ER_majiang);
        })
    }
}
