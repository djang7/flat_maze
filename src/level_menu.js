var INITIALIZED = false;

var LevelMenuLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var LMLabel = new cc.LabelTTF("Levels Menu", "Arial", 38);
        LMLabel.x = size.width / 2;
        LMLabel.y = size.height - 40;
        this.addChild(LMLabel, 5);

        LMLabel.runAction(
            cc.spawn(
                cc.tintTo(2.5,255,125,0)
            )
        );

        var menu_item_1 = cc.MenuItemImage.create(res.Start_png,res.OnStart_png,this.gotomenu, this);
        menu_item_1.setPosition(cc.p(size.width/2,(size.height/5)*3));

        var menu = cc.Menu.create(menu_item_1);
        menu.setPosition(cc.p(0,0));

        this.addChild(menu);

        return true;
    },
    gotomenu:function(){
        cc.log("gotomenu");
        var scene = new HelloWorldScene();
        cc.director.pushScene(scene);
        INITIALIZED=false;
    }
});

var LevelMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(INITIALIZED == false){
            INITIALIZED=true;
            var layer = new LevelMenuLayer();
            this.addChild(layer);
        }
    }
});