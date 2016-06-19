cc.Class({
    extends: cc.Component,

    properties: {
        imagePrefab:{
            default:null,
            type:cc.Prefab
        },
        
        spriteframeList:{
            default:[],
            type:[cc.SpriteFrame]
        },
        
        imageList:{
            default:[],
            type:[cc.node]
        },
        
        y0SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y1SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y2SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y3SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y4SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y5SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y6SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        y7SpriteFrame:{
            default:null,
            type:cc.SpriteFrame
        },
        
        display:{
            default:null,
            type:cc.Label
        },
        
         ErrorAudio:{
            default:null,
            url:cc.AudioClip
        },
        
        SuccessAudio:{
            default:null,
            url:cc.AudioClip
        },
        
        state:11,
        
        mcount:100,
        // mX:100,
        // mY:100,
        
       line:4, //行数
       row:4,  
       total:8,
       
       duration:10,
       
    },

    initimageList:function(){
 
         this.imageList[0].getComponent(cc.Sprite).spriteFrame=this.y0SpriteFrame;
         this.imageList[0].getComponent('pic').num=0;
         this.imageList[1].getComponent(cc.Sprite).spriteFrame=this.y2SpriteFrame;
         this.imageList[1].getComponent('pic').num=2;
         this.imageList[2].getComponent(cc.Sprite).spriteFrame=this.y2SpriteFrame;
         this.imageList[2].getComponent('pic').num=2;
         this.imageList[3].getComponent(cc.Sprite).spriteFrame=this.y5SpriteFrame;
         this.imageList[3].getComponent('pic').num=5;
         this.imageList[4].getComponent(cc.Sprite).spriteFrame=this.y3SpriteFrame;
         this.imageList[4].getComponent('pic').num=3;
         this.imageList[5].getComponent(cc.Sprite).spriteFrame=this.y0SpriteFrame;
         this.imageList[5].getComponent('pic').num=0;
         this.imageList[6].getComponent(cc.Sprite).spriteFrame=this.y3SpriteFrame;
         this.imageList[6].getComponent('pic').num=3;
         this.imageList[7].getComponent(cc.Sprite).spriteFrame=this.y4SpriteFrame;
         this.imageList[7].getComponent('pic').num=4;
         this.imageList[8].getComponent(cc.Sprite).spriteFrame=this.y5SpriteFrame;
         this.imageList[8].getComponent('pic').num=5;
         this.imageList[9].getComponent(cc.Sprite).spriteFrame=this.y7SpriteFrame;
         this.imageList[9].getComponent('pic').num=7;
         this.imageList[10].getComponent(cc.Sprite).spriteFrame=this.y6SpriteFrame;
         this.imageList[10].getComponent('pic').num=6;
         this.imageList[11].getComponent(cc.Sprite).spriteFrame=this.y1SpriteFrame;
         this.imageList[11].getComponent('pic').num=1;
         this.imageList[12].getComponent(cc.Sprite).spriteFrame=this.y7SpriteFrame;
         this.imageList[12].getComponent('pic').num=7;
         this.imageList[13].getComponent(cc.Sprite).spriteFrame=this.y4SpriteFrame;
         this.imageList[13].getComponent('pic').num=4;
         this.imageList[14].getComponent(cc.Sprite).spriteFrame=this.y6SpriteFrame;
         this.imageList[14].getComponent('pic').num=6;
         this.imageList[15].getComponent(cc.Sprite).spriteFrame=this.y1SpriteFrame;
         this.imageList[15].getComponent('pic').num=1;
    },

    // use this for initialization
    onLoad: function () {
        // var p_arrary=[[2,2,2],[2,2,2]];
        //  self.display.string=self.p_arrary[0][1];
        this.state=11;
        this.initMap();
        this.timer=0;
        this.duration=10;
        var self=this;
        this.count=1;
    
    },
    
    
    initMap:function(){
        var self=this;
        var t_arrary=[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
        for(var y = 0;y<4;y++){
            for(var x = 0;x < 4;x++){
                
                var newNode = cc.instantiate(this.imagePrefab);//复制Chess预制资源
                this.node.addChild(newNode);
                newNode.setPosition(cc.p(160*x-400,120*y-160));//根据棋盘和棋子大小计算使每个棋子节点位于指定位置
               
                
                newNode.getComponent('pic').mcount=x+4*y;
                newNode.getComponent('pic').pointX=x;
                newNode.getComponent('pic').pointY=y;
                newNode.getComponent('pic').isempty=false;
                
                newNode.on(cc.Node.EventType.TOUCH_END,function(event){               //给每个精灵添加监听
                  
                //   self.display.string =      //用于Label显示
                 
                 if(self.mcount==this.getComponent('pic').mcount){
                    self.mcount=100;
                    self.state=11;
                     cc.audioEngine.playEffect(self.ErrorAudio,false);
                 }
                       else if(self.state==11&&self.mcount==100){
                        //this.getComponent(cc.Sprite).spriteFrame = self.y4SpriteFrame;
                        self.state=this.getComponent('pic').num;
                        self.mcount=this.getComponent('pic').mcount;
                      
                    
                    }else if(self.state==this.getComponent('pic').num){
                        // this.getComponent(cc.Sprite).spriteFrame=self.y0SpriteFrame;
                     
                        if(self.isLinked(this.getComponent('pic').mcount,t_arrary)){
                           self.total-=1;
                            this.getComponent(cc.Sprite).spriteFrame=null;
                            self.imageList[self.mcount].getComponent(cc.Sprite).spriteFrame=null;
                             
                            this.getComponent('pic').isempty=true;
                            self.imageList[self.mcount].getComponent('pic').isempty=true;
                            self.mcount=100;
                            self.state=11;
                            //cc.audioEngine.playEffect(self.SuccessAudio,false);
                            
                           
                            
                            //update();
                            
                            
                            // self.t_arrary[3-self.imageList[self.mcount].getComponent('pic').pointY][self.imageList[self.mcount].getComponent('pic').pointX]=0;
                            // self.t_arrary[3-this.getComponent('pic').pointY][this.getComponent('pic').pointX]=0;
                            // self.t_arrary[0][0]=0;
                            
                        }else{
                            //错误提示  不能连通
                            cc.audioEngine.playEffect(self.ErrorAudio,false);
                             self.mcount=100;
                             self.state=11;
                        }
                        self.mcount=100;
                        self.state=11;
                        
                    }else {
                        //错误提示 不是同一张图片
                        cc.audioEngine.playEffect(self.ErrorAudio,false);
                        self.state=11;
                        self.mcount=100;
                    }
                });
                
                
                this.imageList.push(newNode);
      
            }
         }
         
         this.initimageList();
    },
    
    isLinked:function(seccount,t_arrary){
        var x1=this.imageList[this.mcount].getComponent('pic').pointX;
        var y1=this.imageList[this.mcount].getComponent('pic').pointY;
        var x2=this.imageList[seccount].getComponent('pic').pointX;
        var y2=this.imageList[seccount].getComponent('pic').pointY;
        //return this.isBeside(x1,x2,y1,y2);
        if(this.isBeside(x1,x2,y1,y2,t_arrary))
        return true;
        else if(this.isLine(x1,x2,y1,y2,t_arrary))
        return true;
        else if(this.isOnedir(x1,x2,y1,y2,t_arrary))
        return true;
        else
        return false;
       // return this.isBeside(x1,x2,y1,y2,t_arrary)||this.isLine(x1,x2,y1,y2,t_arrary)||this.isOnedir(x1,x2,y1,y2,t_arrary);
         //return this.isBeside(x1,x2,y1,y2)||this.isLine(x1,x2,y1,y2)||this.isOnedir(x1,x2,y1,y2)||this.isTwodir(x1,x2,y1,y2);
    },
    
    isBeside:function(x1,x2,y1,y2,t_arrary){
        if(Math.abs(x1-x2)==1&&y1==y2)
        return true;
        else if(Math.abs(y1-y2)==1&&x1==x2)
        return true;
        else
        return false;
    },
    
    isLine:function(x1,x2,y1,y2,t_arrary){
        var self=this;
        
        if(self.isBeside(x1, x2, y1, y2, t_arrary))   
        return true;
        if(x1==x2){
            var Ymin=Math.min(y1,y2);
            var Ymax=Math.max(y1,y2);
            for(Ymin+1;Ymin<Ymax;Ymin++){
               // if(t_arrary[3-Ymin][x1]!=0)
                if(self.imageList[Ymin*4+x1].getComponent('pic').isempty==false)
                return false;
            }
            return true;
        }
        if(y1==y2){
             var Xmin=Math.min(x1,x2)+1;
             var Xmax=Math.max(x1,x2);
            for(Xmin;Xmin<Xmax;Xmin++){
               // if(t_arrary[3-y1][Xmin]!=0)
               if(self.imageList[y1*4+Xmin].getComponent('pic').isempty==false)
                return false;
            }
            return true;
        }
        return false;
    },
    
    isOnedir:function(x1,x2,y1,y2,t_arrary){
   
        var self=this;
        
        var i=0;
      
       
        for(i;i<4;i++){
       
          
            if(i!=x1&&self.imageList[y1*4+i].getComponent('pic').isempty==true){
                //self.display.string=t_arrary[i][y1];
                 // return true;
                if(self.isLine(i,x2,y1,y2,t_arrary)&&self.isLine(x1, i, y1, y1, t_arrary))
                 if(self.isLine(i,x2,y1,y2,t_arrary))
                return true;
                }
              
            if(i!=y1&&self.imageList[4*i+x1].getComponent('pic').isempty==true){
                if(self.isLine(x1,x2,i,y2,t_arrary)&&self.isLine(x1, x1, y1, i, t_arrary))
                return true;
            }
        }
       
        return false;
    },
    
   

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
      // this.gameOver();
       
       if(this.timer>this.count){
           this.display.string=this.duration-this.count;
           this.count+=1;
           cc.audioEngine.playEffect(this.SuccessAudio,false);
       }
      
       
      if(this.total==0){
          gamePass();
      }
        if(this.timer>this.duration){
            this.gameOver();
            return;
        }
        this.timer+=dt;
    },
    
    gameOver:function(){
        
        cc.director.loadScene('gameover');
    },
    
    gamePass:function(){
        cc.director.loadScene('gamepass');
    },
    
    
    
    
    


});
