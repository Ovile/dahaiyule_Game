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

    // onLoad () {}

    start() {
        ////////////节点///////////

        // 头像框
        let button_01 = this.node.getChildByName("Recharge_bg").getChildByName("Prop_store").getChildByName("Navigation").getChildByName("button_01");
        // 靓号
        let button_02 = this.node.getChildByName("Recharge_bg").getChildByName("Prop_store").getChildByName("Navigation").getChildByName("button_02");
        // 牌背
        let button_03 = this.node.getChildByName("Recharge_bg").getChildByName("Prop_store").getChildByName("Navigation").getChildByName("button_03");
        // 关闭按钮
        let shut = this.node.getChildByName("Recharge_bg").getChildByName("shut");

        // --------------------------------支付方式------------------------------
        // VIP充值
        let Vip_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("VIP_Button");
        // 支付宝
        let zfb_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("zfb_Button");
        // 微信支付
        let wx_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("wx_Button");
        // 支付宝扫码
        let zfbs_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("zfbs_Button");
        // 微信扫码
        let yl_Button = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("view").getChildByName("content").getChildByName("yl_Button");
        // 道具商城
        let Prop_store = this.node.getChildByName("Recharge_bg").getChildByName("Function_List").getChildByName("Prop_store");

        // vip按钮
        Vip_Button.on(cc.Node.EventType.TOUCH_START, this.Vip_Button, true);
        // 支付宝
        zfb_Button.on(cc.Node.EventType.TOUCH_START, this.zfb_Button, true);
        // 微信
        wx_Button.on(cc.Node.EventType.TOUCH_START, this.wx_Button, true);
        // 微信扫码
        zfbs_Button.on(cc.Node.EventType.TOUCH_START, this.zfbs_Button, true);
        // 银联
        yl_Button.on(cc.Node.EventType.TOUCH_START, this.yl_Button, true);
        // 道具商店
        Prop_store.on(cc.Node.EventType.TOUCH_START, this.Prop_store, true);
        // 关闭页面
        shut.on(cc.Node.EventType.TOUCH_START, this.shut, true);
        // 功能区-头像框、靓号、牌背
        button_01.on(cc.Node.EventType.TOUCH_START, this.button_01, true);
        button_02.on(cc.Node.EventType.TOUCH_START, this.button_02, true);
        button_03.on(cc.Node.EventType.TOUCH_START, this.button_03, true);
        
    }

    // update (dt) {}

    // --------------------------------------------自定义方法-----------------------------------------------
    // vip按钮、支付宝、微信、微信扫码、银联、道具商城
    Vip_Button() {
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        vip_functional_domain.active = true;
        zfb_functional_domain.active = false;
        wx_functional_domain.active = false;
        zfbs_functional_domain.active = false;
        yl_functional_domain.active = false;
        Prop_store.active = false;
        // 复位-动画
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        const move_action = cc.moveTo(0.01, -325, 38);
        const scale_action = cc.scaleTo(0.01, 1, 1);
        const spawn = cc.spawn(move_action, scale_action);
        Head_Box_01.runAction(spawn);
        let Head_Box_02 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_02");
        const move_action_1 = cc.moveTo(0.01, -165, 38);
        const scale_action_1 = cc.scaleTo(0.01, 1, 1);
        const spawn_1 = cc.spawn(move_action_1, scale_action_1);
        Head_Box_02.runAction(spawn_1);
        let Head_Box_03 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_03");
        const move_action_2 = cc.moveTo(0.01, -5, 38);
        const scale_action_2 = cc.scaleTo(0.01, 1, 1);
        const spawn_2 = cc.spawn(move_action_2, scale_action_2);
        Head_Box_03.runAction(spawn_2);
        let Head_Box_04 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_04");
        const move_action_3 = cc.moveTo(0.01, 115, 38);
        const scale_action_3 = cc.scaleTo(0.01, 1, 1);
        const spawn_3 = cc.spawn(move_action_3, scale_action_3);
        Head_Box_04.runAction(spawn_3);
        let Head_Box_05 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_05");
        const move_action_4 = cc.moveTo(0.01, 315, 38);
        const scale_action_4 = cc.scaleTo(0.01, 1, 1);
        const spawn_4 = cc.spawn(move_action_4, scale_action_4);
        Head_Box_05.runAction(spawn_4);
        let Head_Box_06 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_06");
        const move_action_5 = cc.moveTo(0.01, -325, -167);
        const scale_action_5 = cc.scaleTo(0.01, 1, 1);
        const spawn_5 = cc.spawn(move_action_5, scale_action_5);
        Head_Box_06.runAction(spawn_5);
        let Head_Box_07 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_07");
        const move_action_6 = cc.moveTo(0.01, -165, -167);
        const scale_action_6 = cc.scaleTo(0.01, 1, 1);
        const spawn_6 = cc.spawn(move_action_6, scale_action_6);
        Head_Box_07.runAction(spawn_6);
        let Head_Box_08 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_08");
        const move_action_7 = cc.moveTo(0.01, -5, -167);
        const scale_action_7 = cc.scaleTo(0.01, 1, 1);
        const spawn_7 = cc.spawn(move_action_7, scale_action_7);
        Head_Box_08.runAction(spawn_7);
        let Head_Box_09 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_09");
        const move_action_8 = cc.moveTo(0.01, 115, -167);
        const scale_action_8 = cc.scaleTo(0.01, 1, 1);
        const spawn_8 = cc.spawn(move_action_8, scale_action_8);
        Head_Box_09.runAction(spawn_8);
        let Head_Box_10 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_10");
        const move_action_9 = cc.moveTo(0.01, 315, -167);
        const scale_action_9 = cc.scaleTo(0.01, 1, 1);
        const spawn_9 = cc.spawn(move_action_9, scale_action_9);
        Head_Box_10.runAction(spawn_9);

    };
    zfb_Button() {
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        vip_functional_domain.active = false;
        zfb_functional_domain.active = true;
        wx_functional_domain.active = false;
        zfbs_functional_domain.active = false;
        yl_functional_domain.active = false;
        Prop_store.active = false;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        Head_Box_01.x = -325;
        Head_Box_01.y = 55;
    };
    wx_Button() {
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        vip_functional_domain.active = false;
        zfb_functional_domain.active = false;
        wx_functional_domain.active = true;
        zfbs_functional_domain.active = false;
        yl_functional_domain.active = false;
        Prop_store.active = false;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        Head_Box_01.x = -325;
        Head_Box_01.y = 55;
    };
    zfbs_Button() {
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        vip_functional_domain.active = false;
        zfb_functional_domain.active = false;
        wx_functional_domain.active = false;
        zfbs_functional_domain.active = true;
        yl_functional_domain.active = false;
        Prop_store.active = false;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        Head_Box_01.x = -325;
        Head_Box_01.y = 55;
    };
    // 关闭按钮
    shut() {
        let Recharge = cc.find("Canvas/bg/Page/Recharge");
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        vip_functional_domain.active = false;
        zfb_functional_domain.active = false;
        wx_functional_domain.active = false;
        zfbs_functional_domain.active = false;
        yl_functional_domain.active = false;
        Prop_store.active = false;
        Recharge.active = false;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        Head_Box_01.x = -325;
        Head_Box_01.y = 55;
    };
    yl_Button() {
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        vip_functional_domain.active = false;
        zfb_functional_domain.active = false;
        wx_functional_domain.active = false;
        zfbs_functional_domain.active = false;
        yl_functional_domain.active = true;
        Prop_store.active = false;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        const move_action = cc.moveTo(0.3, -325, 38);
        const scale_action = cc.scaleTo(0.5, 1, 1);
        const spawn = cc.spawn(move_action, scale_action);
    };

    Prop_store() {
        // 道具商城-按钮 位移动画
        let vip_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/vip_functional_domain");
        let zfb_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfb_functional_domain");
        let wx_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/wx_functional_domain");
        let zfbs_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/zfbs_functional_domain");
        let yl_functional_domain = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/yl_functional_domain");
        let Prop_store = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store");
        let Goods_shelves = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves");
        let Number_selection = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Number_selection");
        let Card_Skin = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Card_Skin");
        let button_01_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/on");
        let button_01_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/off");
        let button_02_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/on");
        let button_02_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/off");
        let button_03_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/on");
        let button_03_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/off");
        button_03_on.active = false;
        button_03_off.active = true;
        button_02_on.active = false;
        button_02_off.active = true;
        button_01_on.active = true;
        button_01_off.active = false;

        vip_functional_domain.active = false;
        zfb_functional_domain.active = false;
        wx_functional_domain.active = false;
        zfbs_functional_domain.active = false;
        yl_functional_domain.active = false;
        Prop_store.active = true;

        Goods_shelves.active = true;
        Number_selection.active = false;
        Card_Skin.active = false;

        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        let Head_Box_02 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_02");
        let Head_Box_03 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_03");
        let Head_Box_04 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_04");
        let Head_Box_05 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_05");
        let Head_Box_06 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_06");
        let Head_Box_07 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_07");
        let Head_Box_08 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_08");
        let Head_Box_09 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_09");
        let Head_Box_10 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_10");
        // 移动
        const move_action = cc.moveTo(0.1, -325, 126);
        const scale_action = cc.scaleTo(0.2, 0.7, 0.7);
        const spawn = cc.spawn(move_action, scale_action);
        Head_Box_01.runAction(spawn);
        const move_action_1 = cc.moveTo(0.15, -165, 126);
        const scale_action_1 = cc.scaleTo(0.25, 0.7, 0.7);
        const spawn_1 = cc.spawn(move_action_1, scale_action_1);
        Head_Box_02.runAction(spawn_1);
        const move_action_2 = cc.moveTo(0.2, -5, 126);
        const scale_action_2 = cc.scaleTo(0.3, 0.7, 0.7);
        const spawn_2 = cc.spawn(move_action_2, scale_action_2);
        Head_Box_03.runAction(spawn_2);
        const move_action_3 = cc.moveTo(0.25, 155, 126);
        const scale_action_3 = cc.scaleTo(0.35, 0.7, 0.7);
        const spawn_3 = cc.spawn(move_action_3, scale_action_3);
        Head_Box_04.runAction(spawn_3);
        const move_action_4 = cc.moveTo(0.3, 315, 126);
        const scale_action_4 = cc.scaleTo(0.4, 0.7, 0.7);
        const spawn_4 = cc.spawn(move_action_4, scale_action_4);
        Head_Box_05.runAction(spawn_4);
        const move_action_5 = cc.moveTo(0.35, -325, -70);
        const scale_action_5 = cc.scaleTo(0.45, 0.7, 0.7);
        const spawn_5 = cc.spawn(move_action_5, scale_action_5);
        Head_Box_06.runAction(spawn_5);
        const move_action_6 = cc.moveTo(0.4, -165, -70);
        const scale_action_6 = cc.scaleTo(0.5, 0.7, 0.7);
        const spawn_6 = cc.spawn(move_action_6, scale_action_6);
        Head_Box_07.runAction(spawn_6);
        const move_action_7 = cc.moveTo(0.45, -5, -70);
        const scale_action_7 = cc.scaleTo(0.55, 0.7, 0.7);
        const spawn_7 = cc.spawn(move_action_7, scale_action_7);
        Head_Box_08.runAction(spawn_7);
        const move_action_8 = cc.moveTo(0.5, 155, -70);
        const scale_action_8 = cc.scaleTo(0.6, 0.7, 0.7);
        const spawn_8 = cc.spawn(move_action_8, scale_action_8);
        Head_Box_09.runAction(spawn_8);
        const move_action_9 = cc.moveTo(0.55, 315, -70);
        const scale_action_9 = cc.scaleTo(0.65, 0.7, 0.7);
        const spawn_9 = cc.spawn(move_action_9, scale_action_9);
        Head_Box_10.runAction(spawn_9);

    };
    // ---------------------------------------商城/功能区-选项按钮-----------------------------------------------------
    button_01() {
        let button_01_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/on");
        let button_01_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/off");
        let button_02_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/on");
        let button_02_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/off");
        let button_03_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/on");
        let button_03_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/off");
        button_03_on.active = false;
        button_03_off.active = true;
        button_02_on.active = false;
        button_02_off.active = true;
        button_01_on.active = true;
        button_01_off.active = false;

        let Goods_shelves = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves");
        let Number_selection = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Number_selection");
        let Card_Skin = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Card_Skin");
        Goods_shelves.active = true;
        Number_selection.active = false;
        Card_Skin.active = false;

        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        // 移动
        const move_action = cc.moveTo(0.5, -325, 126);
        const scale_action = cc.scaleTo(0.7, 0.9, 0.9);
        const spawn = cc.spawn(move_action, scale_action);
        Head_Box_01.runAction(spawn);
    };
    button_02() {
        let button_01_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/on");
        let button_01_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/off");
        let button_02_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/on");
        let button_02_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/off");
        let button_03_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/on");
        let button_03_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/off");
        button_03_on.active = false;
        button_03_off.active = true;
        button_02_on.active = true;
        button_02_off.active = false;
        button_01_on.active = false;
        button_01_off.active = true;
        let Goods_shelves = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves");
        let Number_selection = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Number_selection");
        let Card_Skin = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Card_Skin");
        Goods_shelves.active = false;
        Number_selection.active = true;
        Card_Skin.active = false;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        Head_Box_01.x = -325;
        Head_Box_01.y = 55;
    }
    button_03() {
        let button_01_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/on");
        let button_01_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_01/off");
        let button_02_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/on");
        let button_02_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_02/off");
        let button_03_on = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/on");
        let button_03_off = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Navigation/button_03/off");
        button_03_on.active = true;
        button_03_off.active = false;
        button_02_on.active = false;
        button_02_off.active = true;
        button_01_on.active = false;
        button_01_off.active = true;
        let Goods_shelves = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves");
        let Number_selection = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Number_selection");
        let Card_Skin = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Card_Skin");
        Goods_shelves.active = false;
        Number_selection.active = false;
        Card_Skin.active = true;
        // 复位
        let Head_Box_01 = cc.find("Canvas/bg/Page/Recharge/Recharge_bg/Prop_store/Goods_shelves/Head_Box_01");
        Head_Box_01.x = -325;
        Head_Box_01.y = 55;
    };

}
