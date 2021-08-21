var frontpg
var game1
var gameState=0
var player
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,
cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,
cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,
cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,
cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30,
cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36,
cardboard37,cardboard38,cardboard39,cardboard40,cardboard41,cardboard41,
cardboard41,cardboard42,cardboard43,cardboard44,cardboard45,cardboard46,
cardboard46,cardboard47,cardboard48
var cardboardGroup
var edges
var star1,star2,star3,superstar
var guard1,guard2,guard3,guard4,guard5,guard6,guard7,guard8
var guards

function preload(){

}

function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
frontpg=new Front()
game1=new Game1()

}

function draw() {
  background("yellow"); 

  frontpg.display()

  if(gameState==1){
    game1.play()
  }
  
  
  
}

