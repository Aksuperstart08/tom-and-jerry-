
//to declare global variables

var mouse, mouseImg1, mouseAni2, mouseImg3
var bgImg, bg;
var tom, tomImg1, tomAni2, tomImg3;

//to load the images
function preload() {
    mouseImg1 = loadImage("images/mouse1.png");
    mouseAni2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png")
    tomImg1 = loadImage("images/cat1.png");
    tomAni2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3 = loadImage("images/cat4.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    
   //to create background sprite
    bg = createSprite(500,400,100,800)
    bg.addImage(bgImg);
    bg.scale = 1.1;

   //to create a sprite for the cat
    tom = createSprite(850,680,20,60);
    tom.addAnimation("sitting", tomImg1);
    tom.scale = 0.2;

    //to create a sprite for the mouse
    mouse = createSprite(150,640,20,60);
    mouse.addAnimation("sitting", mouseImg1);
    mouse.scale = 0.2;


}

function draw() {

    background(255);

    //to call function keyPressed() when left arrow is down
    if(keyDown("LEFT_ARROW")){
        keyPressed();
    }
    

    //to detect collision when tom is touching the mouse and doing changes needed
    if(tom.x - mouse.x <= tom.width/5 + mouse.width/5){

       tom.addAnimation("sitting", tomImg3);
       tom.velocityX = 0;

       mouse.addAnimation("sitting", mouseImg3);

    }

    //to make all sprites visible on canvas
    drawSprites();
}



//to create function keyPressed();
function keyPressed(){

    tom.addAnimation("sitting", tomAni2);
    mouse.addAnimation("sitting", mouseAni2);
    tom.velocityX = -3;

}
