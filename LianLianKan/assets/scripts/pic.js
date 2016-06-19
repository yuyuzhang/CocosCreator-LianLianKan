cc.Class({
    extends: cc.Component,

    properties: {
        num:10,       //图片编号
        mcount:100, //在数组中的位置
        pointX:100,
        pointY:100,   //纵坐标
        isempty:{
            default:false,
            type:Boolean,
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
