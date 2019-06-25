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
        const self_capital = this.node.getChildByName("dt_balance").getChildByName("user_capital").getComponent(cc.Label);
        
        const limit_money1 = this.node.getChildByName("dt_dk1").getChildByName("dt_textbg1").getChildByName("limit_money").getComponent(cc.Label);
        const limit_score1 = this.node.getChildByName("dt_dk1").getChildByName("dt_textbg2").getChildByName("limit_score").getComponent(cc.Label);
        const limit_money2 = this.node.getChildByName("dt_dk2").getChildByName("dt_textbg1").getChildByName("limit_money").getComponent(cc.Label);
        const limit_score2 = this.node.getChildByName("dt_dk2").getChildByName("dt_textbg2").getChildByName("limit_score").getComponent(cc.Label);
        const limit_money3 = this.node.getChildByName("dt_dk3").getChildByName("dt_textbg1").getChildByName("limit_money").getComponent(cc.Label);
        const limit_score3 = this.node.getChildByName("dt_dk3").getChildByName("dt_textbg2").getChildByName("limit_score").getComponent(cc.Label);
        const limit_money4 = this.node.getChildByName("dt_dk4").getChildByName("dt_textbg1").getChildByName("limit_money").getComponent(cc.Label);
        const limit_score4 = this.node.getChildByName("dt_dk4").getChildByName("dt_textbg2").getChildByName("limit_score").getComponent(cc.Label);

        cc.director.preloadScene("main",function(){
            cc.log("游戏大厅-预加载成功");
        },);
    }

    start () {
        const back = this.node.getChildByName("dt_back");
        back.on(cc.Node.EventType.TOUCH_END,function(){
            cc.director.loadScene("main");
        });
        const recharge = this.node.getChildByName("dt_balance").getChildByName("dt_recharge")
        recharge.on(cc.Node.EventType.TOUCH_END,function(){

        });
        const level_dj = this.node.getChildByName("dt_dk1");
        level_dj.on(cc.Node.EventType.TOUCH_END,function(){

        });
        const level_zj = this.node.getChildByName("dt_dk2");
        level_zj.on(cc.Node.EventType.TOUCH_END,function(){

        });
        const level_gj = this.node.getChildByName("dt_dk3");
        level_gj.on(cc.Node.EventType.TOUCH_END,function(){

        });
        const level_th = this.node.getChildByName("dt_dk4");
        level_th.on(cc.Node.EventType.TOUCH_END,function(){

        });

        const quick_start = this.node.getChildByName("dt_ksks");
        quick_start.on(cc.Node.EventType.TOUCH_END,function(){

        });

        const statement = this.node.getChildByName("dt_statement");
        statement.on(cc.Node.EventType.TOUCH_END,function(){

        });

    }

    // update (dt) {}
}
