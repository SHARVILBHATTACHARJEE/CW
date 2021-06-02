var gameState=9
var hp=100
var corona1;
var cg;
var b1;
var t=false;
var t2=false;
var t3=false;
var fm=false
var sm=false
var im=false
var hm=false

function preload(){
bg=loadImage("images/home.png")
bi=loadAnimation("running images/tile000.png","running images/tile001.png","running images/tile002.png","running images/tile003.png","running images/tile004.png","running images/tile005.png","running images/tile006.png","running images/tile007.png")
  msk=loadAnimation("mask images/m1.png","mask images/m2.png","mask images/m3.png","mask images/m4.png","mask images/m5.png","mask images/m6.png","mask images/m7.png","mask images/m8.png")
  part=loadImage("si/particle.png")
  healthkit=loadImage("images/healthkit.png")
bi2=loadAnimation("running images/tile007.png")
msk2=loadAnimation("mask images/m8.png")
  si=loadAnimation("si/sb1.png","si/sb2.png","si/sb3.png","si/sb4.png","si/sb5.png","si/sb6.png","si/sb7.png","si/sb8.png")
  
  ind=loadImage("images/ind.png")
   ibg=loadAnimation("inj/ib1.png","inj/ib2.png","inj/ib3.png","inj/ib4.png","inj/ib5.png","inj/ib6.png","inj/ib7.png","inj/ib8.png")
  ibg2=loadAnimation("inj/ib8.png")
   ij3=loadAnimation("inj/ib5.png")
  si2=loadAnimation("si/sb8.png")
  si3=loadAnimation("si/sb5.png")
  m=loadImage("mask images/mask.png")
  cov=loadImage("images/co.png")
  gameover=loadImage("images/gameover.png")
  restart=loadImage("images/restart.png")
  level2=loadImage("images/lvl 2.png")
  level3=loadImage("images/lvl 3.png")
  level4=loadImage("images/download.png")
  shoot=loadImage("images/shoot.png")
  nxt=loadSound("sound/nxt.wav")
  
  collide=loadSound("sound/collide.mp3")
  walk=loadSound("sound/walk.mp3")
  gs=loadSound("sound/gameover.wav")
  spray=loadImage("images/spray.png")
  injection=loadImage("images/inj.png")
  sps=loadSound("sound/sps.mp3")
  downarrow=loadImage("images/down arrow.png")
  uparrow=loadImage("images/up arrow.png")
  rightarrow=loadImage("images/right arrow.png") 
  js=loadImage("images/js.png")
  g=loadImage("images/ga.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight); blackroad=createSprite(windowWidth/2,windowHeight/1.12,windowWidth+20,windowHeight/4)
  blackroad.shapeColor="grey"
  bg1=createSprite(windowWidth/20,blackroad.y-400,1000,380)
  
  bg1.addImage(bg)
  bg1.scale=1.1
  bg1.velocityY=10
  bg1.setCollider("rectangle",0,-10,600,300)
  bg2=createSprite(bg1.x+650,bg1.y,1000,380)
  bg2.addImage(bg)
  bg2.scale=1.1
  bg2.setCollider("rectangle",0,-10,600,300)
  bg3=createSprite(bg2.x+650,bg1.y,1000,380)
  bg3.addImage(bg)
  bg3.scale=1.1
  bg3.setCollider("rectangle",0,-10,600,300)
  bg4=createSprite(bg3.x+650,bg1.y,1000,380)
  bg4.addImage(bg)
  bg4.scale=1.1
  bg4.setCollider("rectangle",0,-10,600,300)
  
  ga=createSprite(windowWidth/1.2,windowHeight/3.8,5,5)
  ga.addImage(g)
  ga.scale=1.5
  
  go=createSprite(windowWidth/2,windowHeight/2,20,20)
  go.addImage(gameover)
  
  ra=createSprite(windowWidth/1.2,windowHeight/1.2,20,20)
  ra.addImage(rightarrow)
  ra.scale=0.8
  ua=createSprite(ra.x-50,ra.y-50,20,20)
  ua.addImage(uparrow)
  ua.scale=0.8
  da=createSprite(ra.x-50,ra.y+50,20,20)
  da.addImage(downarrow)
  da.scale=0.8
  ba=createSprite(ra.x-100,ra.y,20,20)
  ba.addImage(rightarrow)
  ba.scale=0.8
  ba.rotation=180
 
  jos=createSprite(ra.x-50,ra.y,5,5)
  jos.addImage(js)
  jos.scale=0.1
  
  sh=createSprite(windowWidth/2,ra.y,1,1)
  sh.addImage(shoot)
  sh.scale=0.3
  sh.visible=false
  
  rs=createSprite(windowWidth/2,windowHeight/1.6,20,20)
  rs.addImage(restart)
  rs.scale=0.1
  go.visible=false
  rs.visible=false
  /*level 1*/

    b1=createSprite(windowWidth/20,windowHeight/1.12,20,50)
    b1.addAnimation("walk",bi2)
    b1.scale=0.3
    b1.setCollider("rectangle",20,0,100,350)
    stopper=createSprite(windowWidth/2,windowHeight/1.73,windowWidth,20)
    stopper.visible=false
    st2=createSprite(windowWidth/2,windowHeight+5,windowWidth,10)
    
    cg=createGroup()
    cv=createGroup()
    mask=createSprite(windowWidth,windowHeight/1.14,20,20)
    mask.addImage(m)
    mask.setCollider("rectangle",10,-15,280,200)
    mask.scale=0.2
    mask.visible=false
    
    h10=createSprite(windowWidth/1.02,windowHeight/1.01,20,5)
    h20=createSprite(h10.x,h10.y-5,20,5)
    h30=createSprite(h10.x,h20.y-5,20,5)
    h40=createSprite(h10.x,h30.y-5,20,5)
    h50=createSprite(h10.x,h40.y-5,20,5)
    h60=createSprite(h10.x,h50.y-5,20,5)
    h70=createSprite(h10.x,h60.y-5,20,5)
    h80=createSprite(h10.x,h70.y-5,20,5)
    h90=createSprite(h10.x,h80.y-5,20,5)
    h100=createSprite(h10.x,h90.y-5,20,5)
   
    lvl2=createSprite(windowWidth/2,windowHeight/1.6,20,20)
    lvl2.addImage(level2)
    lvl2.scale=0.4
    lvl2.visible=false
  /*lvl1*/
  
  /*lvl2*/
  
    mb=createSprite(windowWidth/20,windowHeight/1.12,20,50)
    mb.addAnimation("mwalk",msk2)
    mb.scale=0.5
    mb.setCollider("rectangle",15,0,65,220)
    mb.visible=false
    cg2=createGroup()
    cvg=createGroup()
    jos.visible=false 
  
  
  sp=createSprite(windowWidth,windowHeight/1.14,20,20)
  sp.addImage(spray)
  sp.visible=false
  sp.scale=0.1
  sp.setCollider("rectangle",0,0,100,180)
  
  rs1=createSprite(windowWidth/2,blackroad.y-100,windowWidth,3)
  rs1.shapeColor="white"
  rs1.velocityY=10
  rs2=createSprite(windowWidth/2,windowHeight-1,windowWidth,3)
  rs2.shapeColor="white"
  
  ua.depth=rs1.depth+1
  da.depth=rs1.depth+1
  ra.depth=rs1.depth+1
  ba.depth=rs1.depth+1
  sh.depth=rs1.depth+1
 
  jos.depth=ua.depth+1
  jos.depth=da.depth+1
  jos.depth=ra.depth+1
  jos.depth=ba.depth+1
  
    lvl3=createSprite(windowWidth/2,windowHeight/1.6,20,20)
    lvl3.addImage(level3)
    lvl3.scale=0.4
    lvl3.visible=false
  
  //lvl3
   sb=createSprite(windowWidth/20,windowHeight/1.12,20,50)
   sb.addAnimation("swalk",si2)
  sb.visible=false
   inj=createSprite(windowWidth,windowHeight/1.14,20,20)
   inj.addImage(injection)
   inj.scale=0.3
   inj.setCollider("rectangle",0,0,150,100)
   inj.visible=false
   lvl4=createSprite(windowWidth/2,windowHeight/1.6,20,20)
   lvl4.addImage(level4)
   lvl4.scale=0.5
   lvl4.visible=false
  
   sb.scale=0.5
   sb.setCollider("rectangle",15,0,65,220)
   cg3=createGroup()
   cvg3=createGroup()
   p1g=createGroup()
   p2g=createGroup()
   p3g=createGroup()
  
  //LVL4
  ib=createSprite(windowWidth/20,windowHeight/1.12,20,50)
  ib.addAnimation("iwalk",ibg2)
  ib.visible=false
  ib.scale=0.5
  ib.setCollider("rectangle",15,0,65,220)
  
  cvg4=createGroup()
  i1g=createGroup()
  
  b1.depth=rs1.depth+1
  mb.depth=rs1.depth+1
  sb.depth=rs1.depth+1
  ib.depth=rs1.depth+1
  
  b1.depth=rs2.depth+1
  mb.depth=rs2.depth+1
  sb.depth=rs2.depth+1
  ib.depth=rs2.depth+1
  
}

function draw() {
  background("lightyellow");
  /*lvl 1*/
  rs1.collide(blackroad)
  bg2.y=bg1.y
  bg3.y=bg2.y
  bg4.y=bg1.y
  bg1.collide(blackroad)
  
  jos.x=ra.x-50
  jos.y=ra.y

  if(frameCount%15==0){
jos.x=mouseX
jos.y=mouseY
  }
  if(frameCount%5==0){
    ga.x=windowWidth/1.3
  }
  if(frameCount%10==0){
    ga.x=windowWidth/1.2
  }

  if(gameState==0){
    cov1()
    go.visible=false
    rs.visible=false
    
fm=true
    
    if(keyWentDown(RIGHT_ARROW)||jos.isTouching(ra)){
      bg1.velocityX=-2
      bg2.velocityX=-2
      jos.x=windowWidth/2
      jos.y=windowWidth/2
      bg3.velocityX=-2
      bg4.velocityX=-2
      b1.addAnimation("walk",bi)
      b1.changeAnimation("walk",bi)
    }
    
    for(var i=0;i<cg.length;i++){
      if(b1.isTouching(cg.get(i))){
      cg.get(i).destroy()
      collide.play()
        hp=hp-5
      }
    }
    for(var f=0;f<cv.length;f++){
      if(b1.isTouching(cv.get(f))){
      cv.get(f).destroy()
        collide.play()
        hp=hp-5
      }
    }
    if(frameCount%40===0&&bg1.velocityX<0){
    walk.play()
    }
    if(bg1.velocityX===0){
      walk.stop()
    }
    
    
    if(hp===100){
      h10.shapeColor="green"
      h20.shapeColor="green"
      h30.shapeColor="green"
      h40.shapeColor="green"
      h50.shapeColor="green"
      h60.shapeColor="green"
      h70.shapeColor="green"
      h80.shapeColor="green"
      h90.shapeColor="green"
      h100.shapeColor="green"
    }
    mask.velocityX=0
    if(hp===90||hp<90){
      h100.shapeColor="red"
    }
    if(hp===80||hp<80){
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===70||hp<70){
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===60||hp<60){
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===50||hp<50){
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===40||hp<40){
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===30||hp<30){
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===20||hp<20){
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===10||hp<10){
      h20.shapeColor="red"
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
  
    if(keyWentUp(RIGHT_ARROW)||jos.isTouching(ba)){
      b1.addAnimation("walk",bi2)
      b1.changeAnimation("walk",bi2)
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
      b1.velocityY=0
    }
    if(bg1.x<-350){
      bg1.x=bg4.x+650
    }
    if(bg2.x<-350){
      bg2.x=bg1.x+650
    }
    if(bg3.x<-350){
      bg3.x=bg2.x+650
    }
    if(bg4.x<-350){
      bg4.x=bg3.x+650
    }
    
    if(keyWentDown(DOWN_ARROW)||jos.isTouching(da)){
      b1.velocityY=2
      b1.addAnimation("walk",bi)
      b1.changeAnimation("walk",bi)
    }
    if(keyWentUp(DOWN_ARROW)){
      b1.addAnimation("walk",bi2)
      b1.changeAnimation("walk",bi2)
      b1.velocityY=0
    }
    if(keyWentDown(UP_ARROW)||jos.isTouching(ua)){
      b1.addAnimation("walk",bi)
      b1.changeAnimation("walk",bi)
      b1.velocityY=-2
    }
     if(keyWentUp(UP_ARROW)){
      b1.addAnimation("walk",bi2)
      b1.changeAnimation("walk",bi2)
      b1.velocityY=0
    }
    
    
    if(hp<=30){
      mask.velocityX=bg1.velocityX
      mask.visible=true
      ga.visible=false
      fm=false
    }
    if(hp<=0){
      gameState=1
      gs.play()
    }
  
    b1.collide(stopper)
    b1.collide(st2)
    cg.bounceOff(stopper)
    cg.bounceOff(st2)
    cv.bounceOff(stopper)
    cv.bounceOff(st2)
    
    if(b1.isTouching(mask)){
      mask.destroy()
      t=true
      gameState=3
      nxt.play()
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
      b1.visible=false
    } 
  }
  /*lvl 1*/
  
  if(gameState===3){
    lvl2.visible=true
    if(mousePressedOver(lvl2)||jos.isTouching(lvl2)){
      gameState=2
      hp=100
    }
    cg.destroyEach()
    cv.destroyEach()
  }
   if(gameState===1){
     go.visible=true
     rs.visible=true
     b1.velocityX=0
     b1.velocityY=0
     if(mousePressedOver(rs)||jos.isTouching(rs)){
       gameState=0
       hp=100
     }
     mask.x=600
     mask.visible=false
     h10.shapeColor="red"
     
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0 
      cg.destroyEach()
      cv.destroyEach()
    }
  
  //lvl2
  
  if(gameState===2){
     cov2()
    go.visible=false
    rs.visible=false
    mb.visible=true
    b1.visible=false
    lvl2.visible=false
    t=false
    ga.visible=true
    sm=true

    if(frameCount%40===0&&bg1.velocityX<0){
    walk.play()
    }
     if(bg1.velocityX===0){
      walk.stop()
    }
  
    if(hp<=30){
      sp.visible=true
      sp.velocityX=bg1.velocityX
      ga.visible=false
      sm=false
    }
    
     if(mb.isTouching(sp)){
     sp.destroy()
      t2=true
      gameState=5
      nxt.play()
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
      mb.visible=false
    }
    
  for(var a=0;a<cg2.length;a++){
      if(mb.isTouching(cg2.get(a))){
      cg2.get(a).destroy()
      collide.play()
        hp=hp-5
      }
    }
    for(var b=0;b<cvg.length;b++){
      if(mb.isTouching(cvg.get(b))){
      cvg.get(b).destroy()
        collide.play()
        hp=hp-5
      }
    }
    
    if(keyWentDown(RIGHT_ARROW)||jos.isTouching(ra)){
      bg1.velocityX=-2
      bg2.velocityX=-2
      bg3.velocityX=-2
      bg4.velocityX=-2
      mb.addAnimation("mwalk",msk)
      mb.changeAnimation("mwalk",msk)
    }
    
    cg2.bounceOff(stopper)
    cg2.bounceOff(st2)
    cvg.bounceOff(stopper)
    cvg.bounceOff(st2)
    mb.collide(stopper)
    mb.collide(st2)
    
    if(hp<=0){
    gameState=4
    gs.play()
    }
    
    if(keyWentUp(RIGHT_ARROW)||jos.isTouching(ba)){
      mb.addAnimation("mwalk",msk2)
      mb.changeAnimation("mwalk",msk2)
      mb.velocityY=0
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
    }
    
    if(bg1.x<-350){
      bg1.x=bg4.x+650
    }
    if(bg2.x<-350){
      bg2.x=bg1.x+650
    }
    if(bg3.x<-350){
      bg3.x=bg2.x+650
    }
    if(bg4.x<-350){
      bg4.x=bg3.x+650
    }
    
    if(keyWentDown(DOWN_ARROW)||jos.isTouching(da)){
      mb.velocityY=2
      mb.addAnimation("mwalk",msk)
      mb.changeAnimation("mwalk",msk)
    }
    if(keyWentUp(DOWN_ARROW)){
      mb.addAnimation("mwalk",msk2)
      mb.changeAnimation("mwalk",msk2)
      mb.velocityY=0
    }
    if(keyWentDown(UP_ARROW)||jos.isTouching(ua)){
      mb.addAnimation("mwalk",msk) 
      mb.changeAnimation("mwalk",msk)
      mb.velocityY=-2
    }
     if(keyWentUp(UP_ARROW)){
      mb.addAnimation("mwalk",msk2)
      mb.changeAnimation("mwalk",msk2)
      mb.velocityY=0
     }
    if(hp===100){
      h10.shapeColor="green"
      h20.shapeColor="green"
      h30.shapeColor="green"
      h40.shapeColor="green"
      h50.shapeColor="green"
      h60.shapeColor="green"
      h70.shapeColor="green"
      h80.shapeColor="green"
      h90.shapeColor="green"
      h100.shapeColor="green"
    }
     if(hp===90||hp<90){
      h100.shapeColor="red"
    }
    if(hp===80||hp<80){
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===70||hp<70){
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===60||hp<60){
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===50||hp<50){
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===40||hp<40){
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===30||hp<30){
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===20||hp<20){
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===10||hp<10){
      h20.shapeColor="red"
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
  }
   if(gameState===4){
     go.visible=true
     rs.visible=true
     mb.velocityY=0
     if(mousePressedOver(rs)||jos.isTouching(rs)){
       gameState=2
       hp=100
     }
     
     mb.visible=false
     
     h10.shapeColor="red"
     
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
      cg2.destroyEach()
      cvg.destroyEach()
      sp.x=600
       sp.visible=false
    }
  
  if(gameState===5){
    lvl3.visible=true
    if(mousePressedOver(lvl3)||jos.isTouching(lvl3)){
      gameState=6
      hp=100
    }
    cg2.destroyEach()
    cvg.destroyEach()
  }
  
  //LVL3
  
  if(gameState==6){
    cov3()
    sh.visible=true
    sb.visible=true
    go.visible=false
    rs.visible=false
    b1.visible=false
    lvl3.visible=false
    t2=false
    ga.visible=true
    im=true
    
    if(frameCount%40===0&&bg1.velocityX<0){
    walk.play()
    }
     if(bg1.velocityX===0){
      walk.stop()
    }
    if(keyDown("S")||jos.isTouching(sh)){
    particles()
      sb.addAnimation("swalk",si3)
      sb.changeAnimation("swalk",si3)
      sb.velocityY=0
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
    }
    if(hp<=30){
      inj.visible=true
      inj.velocityX=bg1.velocityX
      ga.visible=false
      im=false
    }
    
    
    if(sb.isTouching(inj)){
     inj.destroy()
      t3=true
      gameState=8
      nxt.play()
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
      sb.visible=false
    }
    
  for(var d=0;d<cg3.length;d++){
      if(sb.isTouching(cg3.get(d))){
      cg3.get(d).destroy()
      collide.play()
        hp=hp-5
      }
    }
    for(var c=0;c<cvg3.length;c++){
      if(sb.isTouching(cvg3.get(c))){
      cvg3.get(c).destroy()
        collide.play()
        hp=hp-5
      }
    }
     for(var e=0;e<cg3.length;e++){
      if(p1g.isTouching(cg3.get(e))){
      cg3.get(e).destroy()
      }
    }
    for(var g=0;g<cvg3.length;g++){
      if(p1g.isTouching(cvg3.get(g))){
      cvg3.get(g).destroy()
      }
    }
     for(var h=0;h<cg3.length;h++){
      if(p2g.isTouching(cg3.get(h))){
      cg3.get(h).destroy()
      }
    }
    for(var j=0;j<cvg3.length;j++){
      if(p2g.isTouching(cvg3.get(j))){
      cvg3.get(j).destroy()
      }
    }
     for(var k=0;k<cg3.length;k++){
      if(p3g.isTouching(cg3.get(k))){
      cg3.get(k).destroy()
      }
    }
    for(var l=0;l<cvg3.length;l++){
      if(p3g.isTouching(cvg3.get(l))){
      cvg3.get(l).destroy()
      }
    }
    
    if(keyWentDown(RIGHT_ARROW)||jos.isTouching(ra)){
      bg1.velocityX=-2
      bg2.velocityX=-2
      bg3.velocityX=-2
      bg4.velocityX=-2
      sb.addAnimation("swalk",si)
      sb.changeAnimation("swalk",si)
    }
    
    cg3.bounceOff(stopper)
    cg3.bounceOff(st2)
    cvg3.bounceOff(stopper)
    cvg3.bounceOff(st2)
    sb.collide(stopper)
    sb.collide(st2)
    
   if(hp<=0){
    gameState=7
    gs.play()
    }
    
    if(keyWentUp(RIGHT_ARROW)||jos.isTouching(ba)){
      sb.addAnimation("swalk",si2)
      sb.changeAnimation("swalk",si2)
      sb.velocityY=0
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
    }
    
    if(bg1.x<-350){
      bg1.x=bg4.x+650
    }
    if(bg2.x<-350){
      bg2.x=bg1.x+650
    }
    if(bg3.x<-350){
      bg3.x=bg2.x+650
    }
    if(bg4.x<-350){
      bg4.x=bg3.x+650
    }
    
    if(keyWentDown(DOWN_ARROW)||jos.isTouching(da)){
      sb.velocityY=2
      sb.addAnimation("swalk",si)
      sb.changeAnimation("swalk",si)
    }
    if(keyWentUp(DOWN_ARROW)){
     sb.addAnimation("swalk",si2)
      sb.changeAnimation("swalk",si2)
      sb.velocityY=0
    }
    if(keyWentDown(UP_ARROW)||jos.isTouching(ua)){
      sb.addAnimation("swalk",si) 
      sb.changeAnimation("swalk",si)
      sb.velocityY=-2
    }
     if(keyWentUp(UP_ARROW)){
      sb.addAnimation("swalk",si2)
      sb.changeAnimation("swalk",si2)
      sb.velocityY=0
     }
    if(hp===100){
      h10.shapeColor="green"
      h20.shapeColor="green"
      h30.shapeColor="green"
      h40.shapeColor="green"
      h50.shapeColor="green"
      h60.shapeColor="green"
      h70.shapeColor="green"
      h80.shapeColor="green"
      h90.shapeColor="green"
      h100.shapeColor="green"
    }
     if(hp===90||hp<90){
      h100.shapeColor="red"
    }
    if(hp===80||hp<80){
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===70||hp<70){
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===60||hp<60){
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===50||hp<50){
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===40||hp<40){
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===30||hp<30){
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===20||hp<20){
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===10||hp<10){
      h20.shapeColor="red"
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
  }
    if(gameState===7){
     go.visible=true
     rs.visible=true
     sb.velocityY=0
     if(mousePressedOver(rs)||jos.isTouching(rs)){
       gameState=6
       hp=100
     }
     
    inj.x=600
    inj.visible=false
      
     h10.shapeColor="red"
     
      sb.visible=false
      
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
      cg3.destroyEach()
      cvg3.destroyEach()
    }
  if(gameState===8){
    lvl4.visible=true
    if(mousePressedOver(lvl4)||jos.isTouching(lvl4)){
      gameState=9
      hp=100
    }
    cg3.destroyEach()
    cvg3.destroyEach()
  }

//LVL 4
  
  if(gameState==9){
    cov4()
    sh.visible=true
    go.visible=false
    rs.visible=false
    mb.visible=false
    b1.visible=false
    lvl4.visible=false
    sb.visible=false
    ib.visible=true
    t3=false
    ga.visible=true
    hm=true

    if(frameCount%40===0&&bg1.velocityX<0){
    walk.play()
    }
     if(bg1.velocityX===0){
      walk.stop()
    }
    
     if(keyDown("S")||jos.isTouching(sh)){
      particles2()
      ib.addAnimation("iwalk",ij3)
      ib.changeAnimation("iwalk",ij3)
      ib.velocityY=0
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
    }
    
  for(var v=0;v<cvg4.length;v++){
      if(ib.isTouching(cvg4.get(v))){
      cvg4.get(v).destroy()
      collide.play()
        hp=hp-5
      }
    }
    for(var z=0;z<cvg4.length;z++){
      if(i1g.isTouching(cvg4.get(z))){
      cvg4.get(z).destroy()
      }
    }
    
    if(keyWentDown(RIGHT_ARROW)||jos.isTouching(ra)){
      bg1.velocityX=-2
      bg2.velocityX=-2
      bg3.velocityX=-2
      bg4.velocityX=-2
      ib.addAnimation("iwalk",ibg)
      ib.changeAnimation("iwalk",ibg)
    }
    
    cvg4.bounceOff(stopper)
    cvg4.bounceOff(st2)
    ib.collide(stopper)
    ib.collide(st2)
    
    if(hp<=0){
    gameState=10
    gs.play()
    }
    
    if(keyWentUp(RIGHT_ARROW)||jos.isTouching(ba)){
      ib.addAnimation("iwalk",ibg2)
      ib.changeAnimation("iwalk",ibg2)
      ib.velocityY=0
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0
    }
    
    if(bg1.x<-350){
      bg1.x=bg4.x+650
    }
    if(bg2.x<-350){
      bg2.x=bg1.x+650
    }
    if(bg3.x<-350){
      bg3.x=bg2.x+650
    }
    if(bg4.x<-350){
      bg4.x=bg3.x+650
    }
    
    if(keyWentDown(DOWN_ARROW)||jos.isTouching(da)){
      ib.velocityY=2
      ib.addAnimation("iwalk",ibg)
      ib.changeAnimation("iwalk",ibg)
    }
    if(keyWentUp(DOWN_ARROW)){
      ib.addAnimation("iwalk",ibg2)
      ib.changeAnimation("iwalk",ibg2)
      ib.velocityY=0
    }
    if(keyWentDown(UP_ARROW)||jos.isTouching(ua)){
      ib.addAnimation("iwalk",ibg) 
      ib.changeAnimation("iwalk",ibg)
      ib.velocityY=-2
    }
     if(keyWentUp(UP_ARROW)){
      ib.addAnimation("iwalk",ibg2)
      ib.changeAnimation("iwalk",ibg2)
      ib.velocityY=0
     }
    if(hp===100){
      h10.shapeColor="green"
      h20.shapeColor="green"
      h30.shapeColor="green"
      h40.shapeColor="green"
      h50.shapeColor="green"
      h60.shapeColor="green"
      h70.shapeColor="green"
      h80.shapeColor="green"
      h90.shapeColor="green"
      h100.shapeColor="green"
    }
     if(hp===90||hp<90){
      h100.shapeColor="red"
    }
    if(hp===80||hp<80){
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===70||hp<70){
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===60||hp<60){
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===50||hp<50){
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===40||hp<40){
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===30||hp<30){
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===20||hp<20){
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
    if(hp===10||hp<10){
      h20.shapeColor="red"
      h30.shapeColor="red"
      h40.shapeColor="red"
      h50.shapeColor="red"
      h60.shapeColor="red"
      h70.shapeColor="red"
      h80.shapeColor="red"
      h90.shapeColor="red"
      h100.shapeColor="red"
    }
  }
  if(gameState===10){
     go.visible=true
     rs.visible=true
    ga.visible=false
    hm=false
     ib.velocityY=0
     if(mousePressedOver(rs)||jos.isTouching(rs)){
       gameState=9
       hp=100
     }
      
     h10.shapeColor="red"
     
      bg1.velocityX=0
      bg2.velocityX=0
      bg3.velocityX=0
      bg4.velocityX=0 
      cvg4.destroyEach()
      ib.visible=false
      inj.x=600
      inj.visible=false
    }
  drawSprites()
  if(t==true){
    textSize(20)
    fill("purple")
    text("CLICK ON LEVEL 2 TO START THE GAME",windowWidth/3.5,windowHeight/2)
  }
  if(t2==true){
    textSize(20)
    fill("purple")
    text("CLICK ON LEVEL 3 TO START THE GAME",windowWidth/3.5,windowHeight/2)
  }
  if(t3==true){
    textSize(20)
    fill("blue")
    text("CLICK ON LEVEL 4 TO START THE GAME",windowWidth/3.5,windowHeight/2)
  }
  
  if(fm==true){
    textSize(20)
    fill("red")
    text("Face Mask Ahead",ga.x-200,ga.y)
  }
  if(sm==true){
    textSize(20)
    fill("red")
    text("Sanitizer Spray Ahead",ga.x-240,ga.y)
  }
  if(im==true){
    textSize(20)
    fill("red")
    text("Injection Ahead",ga.x-200,ga.y)
  }
  if(hm==true){
    textSize(20)
    fill("red")
    text("Hospital Ahead",ga.x-200,ga.y)
  }
  
  textSize(15)
  fill("red")
  text("E",h10.x-25,windowHeight/1.01)
  text("F",h10.x-25,windowHeight/1.04)
  text("I",h10.x-25,windowHeight/1.07)
  text("L",h10.x-25,windowHeight/1.10)
}
function cov1(){
  if(frameCount%180===0){
    corona1=createSprite(windowWidth,windowHeight/1.05,20,20)
    cv1=createSprite(windowWidth,windowHeight/1.05,20,20)
    cv1.addImage(cov)
    cv1.velocityX=-4
    cv1.velocityY=random(3,-3)
    corona1.addImage(cov)
    corona1.velocityX=-4
    corona1.velocityY=random(3,-3)
    if(corona1.y<b1.y){
      b1.depth=corona1.depth+1
    }
    if(corona1.y>b1.y){
      b1.depth=corona1.depth-1
    }
    corona1.lifetime=windowWidth/4
    cv1.lifetime=windowWidth/4
    corona1.scale=0.1
    cv1.scale=0.1
    cv.add(cv1)
    cg.add(corona1)
  }
}
function cov2(){
  if(frameCount%120===0){
    corona2=createSprite(windowWidth,windowHeight/1.05,20,20)
    corona2.addImage(cov)
    corona2.velocityX=-4
    corona2.velocityY=random(3,-3)
    cv2=createSprite(windowWidth,windowHeight/1.05,20,20)
    cv2.addImage(cov)
    cv2.velocityX=-4
    cv2.velocityY=random(3,-3)
    if(corona2.y<b1.y){
      mb.depth=corona2.depth+1
    }
    if(corona2.y>b1.y){
      mb.depth=corona2.depth-1
    }
    corona2.lifetime=windowWidth/4
    cv2.lifetime=windowWidth/4
    corona2.scale=0.1
    cv2.scale=0.1
    cg2.add(corona2)
    cvg.add(cv2)
  }
}
function cov3(){
  if(frameCount%120===0){
    corona3=createSprite(windowWidth,windowHeight/1.05,20,20)
    corona3.addImage(cov)
    corona3.velocityX=-4
    corona3.velocityY=random(3,-3)
    cv3=createSprite(windowWidth,windowHeight/1.05,20,20)
    cv3.addImage(cov)
    cv3.velocityX=-4
    cv3.velocityY=random(3,-3)
    
    cb=createSprite(windowWidth,windowHeight/1.05,20,20)
    cb.addImage(cov)
    cb.velocityX=-4
    cb.velocityY=random(3,-3)
    
    if(corona3.y<sb.y){
      sb.depth=corona3.depth+1
    }
    if(corona3.y>sb.y){
      sb.depth=corona3.depth-1
    }
    corona3.lifetime=windowWidth/4
    cv3.lifetime=windowWidth/4
    cb.lifetime=windowWidth/4
    corona3.scale=0.1
    cv3.scale=0.1
    cb.scale=0.1
    cg3.add(corona3)
    cvg3.add(cv3)
    cvg3.add(cb)
  }
}
function particles(){
  if(frameCount%10==0){
    sps.play()
  par1=createSprite(sb.x+25,sb.y-10,5,5)
  par2=createSprite(sb.x+25,sb.y-10,5,5)
  par3=createSprite(sb.x+25,sb.y-10,5,5)
  par4=createSprite(sb.x+25,sb.y-10,5,5)
    
  par1.addImage(part)
  par2.addImage(part)
  par3.addImage(part)
  par4.addImage(part)
    
  par1.setCollider("circle",0,0,280)
    par2.setCollider("circle",0,0,280)
    par3.setCollider("circle",0,0,280)
    par4.setCollider("circle",0,0,280)
    
    par1.scale=0.02
    par2.scale=0.01
    par3.scale=0.02
    par4.scale=0.01
 
  par1.velocityX=3
  par2.velocityX=3
  par3.velocityX=3
  par4.velocityX=3
    
  par1.velocityY=random(0,1)
  par2.velocityY=random(0,1)
  par3.velocityY=random(0,1)
  par4.velocityY=random(0,1)
     par1.lifetime=50
     par2.lifetime=50
     par3.lifetime=50
     par4.lifetime=50
    
     p1g.add(par1)
     p1g.add(par2)
     p1g.add(par3)
     p2g.add(par4)
  }
}
function cov4(){
  if(frameCount%120===0){
    corona4=createSprite(windowWidth,windowHeight/1.05,20,20)
    corona4.addImage(cov)
    corona4.velocityX=-4
    corona4.velocityY=random(3,-3)
    cv4=createSprite(windowWidth,windowHeight/1.05,20,20)
    cv4.addImage(cov)
    cv4.velocityX=-4
    cv4.velocityY=random(3,-3)
    
    cb1=createSprite(windowWidth,windowHeight/1.05,20,20)
    cb1.addImage(cov)
    cb1.velocityX=-4
    cb1.velocityY=random(3,-3)
    cb2=createSprite(windowWidth,windowHeight/1.05,20,20)
    cb2.addImage(cov)
    cb2.velocityX=-4
    cb2.velocityY=random(3,-3)
    cb3=createSprite(windowWidth,windowHeight/1.05,20,20)
    cb3.addImage(cov)
    cb3.velocityX=-4
    cb3.velocityY=random(3,-3)
    
    if(corona4.y<ib.y){
      ib.depth=corona4.depth+1
    }
    if(corona4.y>ib.y){
      ib.depth=corona4.depth-1
    }
    corona4.lifetime=windowWidth/4
    cv4.lifetime=windowWidth/4
    cb1.lifetime=windowWidth/4
    cb2.lifetime=windowWidth/4
    cb3.lifetime=windowWidth/4
    corona4.scale=0.1
    cv4.scale=0.1
    cb1.scale=0.1
    cb2.scale=0.1
    cb3.scale=0.1
    cvg4.add(corona4)
    cvg4.add(cv4)
    cvg4.add(cb1)
    cvg4.add(cb2)
    cvg4.add(cb3)
  }
}
function particles2(){
  if(frameCount%5==0){
  pa1=createSprite(ib.x+45,ib.y-30,5,5)
  pa1.addImage(ind)
  pa1.setCollider("circle",0,0,280)
    pa1.scale=0.04
  pa1.velocityX=3
  pa1.velocityY=random(0,1)
    pa1.lifetime=50
     i1g.add(pa1)
  }
}
