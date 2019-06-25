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
// 游戏大厅
@ccclass
export default class NewClass extends cc.Component {

    // 公告计数器
    @property
    Counter: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 用户数据
        let user_name = this.node.getChildByName("main_header").getChildByName("Game_player").getChildByName("user_name").getComponent(cc.Label);
        let Game_player = this.node.getChildByName("main_header").getChildByName("Game_player").getChildByName("user_avatar").getComponent(cc.Sprite);
        let user_ID = this.node.getChildByName("main_header").getChildByName("Game_player").getChildByName("ID").getChildByName("user_ID").getComponent(cc.Label);
        let user_money = this.node.getChildByName("main_header").getChildByName("GoldCoin").getChildByName("user_money").getComponent(cc.Label);
        // 系统公告
        let system_notice = this.node.getChildByName("system_notice").getChildByName("Mask").getChildByName("notice_content").getComponent(cc.Label);
        // 展示本地json
        cc.loader.load(cc.url.raw('resources/json/game_lobby.json'), function (err, res) {
            if (err) {
                cc.log("本地json信息获取错误：" + err);
            } else {
                // 用户名
                user_name.string = res.json.user_name;
                // 本地用户头像
                Game_player.spriteFrame = new cc.SpriteFrame(cc.url.raw("resources/res/ui/20180411111738_20831.jpg"));
                //  用户ID
                user_ID.string = res.json.user_ID;
                // 金额
                user_money.string = res.json.user_money + "元";
                // 系统公告
                system_notice.string = res.json.system_notice[0]
            }
        });

        cc.director.preloadScene("BR_niuniu",function(){
            cc.log("百人牛牛-预加载成功");
        },);
        cc.director.preloadScene("ER_majiang",function(){
            cc.log("二人麻将-预加载成功");
        },);
    }

    start() {
        var self = this;
        // 弹出开户豪礼
        this.scheduleOnce(function () {
            this.lobby_Mask();
        }, 3);
    
        // 开户豪礼-弹窗
        let Immediate_binding = this.node.getChildByName("kaihu_pop-up");
        Immediate_binding.addComponent("Immediate_binding");
        //导航栏-个人信息（设置）、vip、绑定手机、在线客服、推广
        let Personal_information = this.node.getChildByName("main_header").getChildByName("Game_player");
        const Personal_informations = this.node.getChildByName("Page").getChildByName("Personal_information");
        Personal_informations.addComponent("Personal_information");
        Personal_information.on(cc.Node.EventType.TOUCH_END, function () {
            Personal_informations.active = true;
        }, true);
        let vip = this.node.getChildByName("main_header").getChildByName("OtherFunctions").getChildByName("vip");
        const vips = this.node.getChildByName("Page").getChildByName("VIP");
        vips.addComponent("vip");
        vip.on(cc.Node.EventType.TOUCH_END, function () {
            vips.active = true;
        }, true);
        let Binding_Phone = this.node.getChildByName("main_header").getChildByName("OtherFunctions").getChildByName("BindCellPhone");
        const kaihu_pop_up = this.node.getChildByName("kaihu_pop-up");
        Binding_Phone.on(cc.Node.EventType.TOUCH_END, function () {
            kaihu_pop_up.active = true;
        }, true);
        let CustomerService = this.node.getChildByName("main_header").getChildByName("OtherFunctions").getChildByName("CustomerService");
        const CustomerServices = this.node.getChildByName("Page").getChildByName("services");
        CustomerServices.addComponent("CustomerService");
        CustomerService.on(cc.Node.EventType.TOUCH_END, function () {
            CustomerServices.active = true;
        }, true);
        let agent = this.node.getChildByName("main_header").getChildByName("OtherFunctions").getChildByName("agent");
        const agents = this.node.getChildByName("Page").getChildByName("Extension");
        agents.addComponent("agent");
        agent.on(cc.Node.EventType.TOUCH_END, function () {
            agents.active = true;
        }, true);

        // //底部栏-保险箱、提现、邮件、商城
        let Safe_Deposit_Box = this.node.getChildByName('main_footer').getChildByName("SafeDepositBox");
        const Safe_Deposit_Boxs = this.node.getChildByName("Popup").getChildByName("Tips_pop-up");
            Safe_Deposit_Boxs.addComponent("Safe_Deposit_Box");
        Safe_Deposit_Box.on(cc.Node.EventType.TOUCH_END, function () {
            Safe_Deposit_Boxs.active = true;
        }, true);
        let Cashwithdrawal = this.node.getChildByName('main_footer').getChildByName("Cashwithdrawal");
        const Cashwithdrawals = this.node.getChildByName("Popup").getChildByName("Tips_pop-up");
        Cashwithdrawals.addComponent("Safe_Deposit_Box")
        Cashwithdrawal.on(cc.Node.EventType.TOUCH_END, function () {
            Cashwithdrawals.active = true;
        }, true);  
        let mail = this.node.getChildByName('main_footer').getChildByName("mail");
        const mails = this.node.getChildByName("Page").getChildByName("mail");
        mails.addComponent("mail")
        mail.on(cc.Node.EventType.TOUCH_END, function () {
            mails.active = true;
        }, true);
        let Recharge = this.node.getChildByName('main_footer').getChildByName("ShoppingMall");
        const Recharges = this.node.getChildByName("Page").getChildByName("Recharge");
        // Recharges.addComponent("Shoppin_Mall");//商城先不做
        Recharge.on(cc.Node.EventType.TOUCH_END, function () {
            if (!Recharges.active == true) {
                Recharges.active = true;
            } else {
                cc.log("商城页面打开未成功，出现未知情况");
            }
        }, true);

        // 子游戏场景跳转
        const BR_niuniu = this.node.getChildByName("Advertising_ScrollView").getChildByName("view").getChildByName("content").getChildByName("child_game").getChildByName("game_06_brnn");
        BR_niuniu.on(cc.Node.EventType.TOUCH_END,function(){
            cc.director.loadScene("BR_niuniu");
            cc.log("进入百人牛牛游戏");
        },this);
        const ER_majiang = this.node.getChildByName("Advertising_ScrollView").getChildByName("view").getChildByName("content").getChildByName("child_game").getChildByName("game_22_ermj");
        ER_majiang.on(cc.Node.EventType.TOUCH_END,function(){
            cc.director.loadScene("ER_majiang");
            cc.log("进入二人麻将游戏");
        },this);
    }

    update(dt) {
        // 系统时间
        let myDate = this.node.getChildByName("main_header").getChildByName("time").getChildByName("myDate").getComponent(cc.Label);
        let myDates = new Date();
        let myDateHours = myDates.getHours(); //获取当前小时数(0-23)
        let myDateMinutes = myDates.getMinutes(); //获取当前分钟数(0-59)
        // 公告文字系统
        let notice_content = this.node.getChildByName("system_notice").getChildByName("Mask").getChildByName("notice_content");
        let notice_LeftBox = this.node.getChildByName("system_notice").getChildByName("Mask").getChildByName("notice_LeftBox");
        let notice_RightBox = this.node.getChildByName("system_notice").getChildByName("Mask").getChildByName("notice_RightBox");
        notice_content.anchorX = 1;
        notice_content.x -= 1;

        if (notice_content.x <= notice_LeftBox.x) {
            let Label_String = this.node.getChildByName("system_notice").getChildByName("Mask").getChildByName("notice_content").getComponent(cc.Label);
            notice_content.x = notice_RightBox.x;
            let self = this;
            this.Counter++
            // cc.log(this.Counter)
            if (this.Counter == 1) {
                cc.loader.load(cc.url.raw('resources/json/game_lobby.json'), function (err, res) {
                    if (err) {
                        cc.log("公告信息错误0：" + err);
                    } else {
                        Label_String.string = res.json.system_notice[1];
                    }
                });
            };
            if (this.Counter == 2) {
                cc.loader.load(cc.url.raw('resources/json/game_lobby.json'), function (err, res) {
                    if (err) {
                        cc.log("公告信息错误1：" + err);
                    } else {
                        Label_String.string = res.json.system_notice[2];
                    }
                });
            };
            if (this.Counter == 3) {
                cc.loader.load(cc.url.raw('resources/json/game_lobby.json'), function (err, res) {
                    if (err) {
                        cc.log("公告信息错误2：" + err);
                    } else {
                        Label_String.string = res.json.system_notice[0];
                    }
                });
            };
            if (this.Counter >= 3) {
                cc.loader.load(cc.url.raw('resources/json/game_lobby.json'), function (err, res) {
                    if (err) {
                        cc.log("公告信息错误>=3：" + err);
                    } else {
                        self.Counter = 0;
                    }
                });
            };
        };

        cc.loader.load(cc.url.raw('resources/json/game_lobby.json'), function (err, res) {
            if (err) {
                cc.log("系统时间刷新错误：" + err);
            } else {
                // 刷新系统时间
                myDate.string = myDateHours + ":" + myDateMinutes;
            }
        });
    }

    // ----------------------------- 自定义方法 ----------------------
    // 开户豪礼
    lobby_Mask() {
        let kaihu_pop_up = this.node.getChildByName("kaihu_pop-up");
        kaihu_pop_up.active = true;
    };
}
