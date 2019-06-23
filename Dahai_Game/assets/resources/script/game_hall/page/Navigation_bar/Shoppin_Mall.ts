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
// 商城页面入口
@ccclass
export default class NewClass extends cc.Component {
    // 页面关闭开关
    @property
    window_view: boolean = true;
    // vip充值视图开关
    @property
    Vip_view: boolean = false;
    // 支付宝视图开关
    @property
    zfb_view: boolean = false;
    // 微信视图开关
    @property
    wx_view: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        const self = this;
        // vip充值视图开关
        let Judgment_switch = 0;
        // 支付宝视图开关
        let Judgment_switch_1 = 0;
        // 微信视图开关
        let Judgment_switch_2 = 0;
        cc.log("商城页面引入成功");
        // --------------------------------支付方式列表------------------------------
        // VIP充值
        let Vip_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("VIP_Button");
        Vip_Button.on(cc.Node.EventType.TOUCH_START, function () {
            Judgment_switch++;
            if (Judgment_switch == 1) {
                self.Vip_view = true;
            };
            if (Judgment_switch > 1) {
                Judgment_switch = 0;
                self.Vip_view = false;
            };
        }, true);
        // 支付宝
        let zfb_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("zfb_Button");
        zfb_Button.on(cc.Node.EventType.TOUCH_START, function () {
            Judgment_switch_1++;
            if (Judgment_switch_1 == 1) {
                self.zfb_view = true;
            };
            if (Judgment_switch_1 > 1) {
                Judgment_switch_1 = 0;
                self.zfb_view = false;
            };
        }, true);
        // 微信支付
        let wx_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("wx_Button");
        wx_Button.on(cc.Node.EventType.TOUCH_START, function () {
            Judgment_switch_2++;
            if (Judgment_switch_2 == 1) {
                self.wx_view = true;
            };
            if (Judgment_switch_2 > 1) {
                Judgment_switch_2 = 0;
                self.wx_view = false;
            };
        }, true);
        // 支付宝扫码
        let zfbs_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("zfbs_Button");
        // 微信扫码
        let yl_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("yl_Button");
        // 道具商城
        let Prop_store = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("Prop_store");
        // 关闭按钮
        let shut = this.node.getChildByName("Recharge_bg").getChildByName("shut");
        shut.on(cc.Node.EventType.TOUCH_START, function () {
            self.node.active = false;
        }, this);
    }

    update(dt) {
        // 时刻判断商城支付视图状态：VIP充值、支付宝、微信支付、支付宝扫码、微信扫码、道具商城、商场页面关闭按钮
        if (this.Vip_view == true) {
            const vip_functional_domain = this.node.getChildByName("Recharge_bg").getChildByName("vip_functional_domain");
            vip_functional_domain.active = true;
        };
        if (this.zfb_view == true) {
            const zfb_functional_domain = this.node.getChildByName("Recharge_bg").getChildByName("zfb_functional_domain");
            zfb_functional_domain.active = true;
        };
        if (this.wx_view == true) {
            const wx_functional_domain = this.node.getChildByName("Recharge_bg").getChildByName("wx_functional_domain");
            wx_functional_domain.active = true;
        };
    }


}
