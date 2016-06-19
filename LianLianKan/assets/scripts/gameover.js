cc.Class({
    extends: cc.Component,

    properties: {
        btn:{
            default:null,
            type:cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        
        var thebtn=cc.instantiate(this.btn);
        this.node.addChild(thebtn);
        thebtn.setPosition(cc.p(0,0));
         thebtn.on(cc.Node.EventType.TOUCH_END,function(event){
             cc.director.loadScene('game');
         });
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
