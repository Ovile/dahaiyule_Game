// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 初始化json Ai数据

        // --- 展示自己的数据 ---
        const self_name = this.node.getChildByName("UserInformation_box").getChildByName("user_name").getComponent(cc.Label);
        const self_capital = this.node.getChildByName("UserInformation_box").getChildByName("user_capital").getComponent(cc.Label);
        const self_head = this.node.getChildByName("UserInformation_box").getChildByName("Head").getComponent(cc.Sprite);
        cc.loader.load(cc.url.raw("resources/json/game_lobby.json"), function (err, res) {
            if (err) {
                cc.log("本地json信息获取错误：" + err);
            } else {
                // 用户名
                self_name.string = res.json.user_name;
                // 金额
                self_capital.string = res.json.user_money;
                // 本地用户头像
                self_head.spriteFrame = new cc.SpriteFrame(cc.url.raw("resources/res/ui/20180411111738_20831.jpg"));
            }
        })
    };

    start() {
        cc.log("百人牛牛成功运行！");
    };

    // update (dt) {}
}
