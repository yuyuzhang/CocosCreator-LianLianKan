cc.Class({
    extends: cc.Component,

    properties: {
        pic:0
    },

    // use this for initialization
    
    getpicname:function(){
      return this.pic  ;
    },
    
    
    onLoad: function () {
        this.setinputcontrol();
    },
    
    setinputcontrol:function(){
       this.node.on("touchstart",function(){
           console.log("touchstart");
       })
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
