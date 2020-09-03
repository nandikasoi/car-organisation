var car1,wall1;
var speed,weight;
var zenia,wall2;
var taurus,wall3;
var cydop,wall4;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50, 200, 50, 80);
  
  wall1 = createSprite(1500, 200, 60, height/2);
  wall1.shapeColor = (80,80,80);

  speed = random(45,80);
  weight = random(1500,3000);

  zenia = createSprite(50, 200, 50, 80);
  taurus = createSprite(50, 200, 50, 80);
  cydop = createSprite(50, 200, 50, 80);

  wall2 = createSprite(1500, 200, 60, height/2);
  wall2.shapeColor = (80,80,80);

  wall3 = createSprite(1500, 200, 60, height/2);
  wall3.shapeColor = (80,80,80);

  wall4 = createSprite(1500, 200, 60, height/2);
  wall4.shapeColor = (80,80,80);
}

function draw() {
  background(black);

  car1.velocityX = speed;
  zenia.velocityX = speed;
  taurus.velocityX = speed;
  cydop.velocityX = speed;

   if(wall1.x - car1.x < (car1.width + wall1.width) / 2){
     car1.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed / 22500
     if (deformation > 180)
     {
        car1.shapeColor = (255,0,0);
     }

     if (deformation < 180 && deformation > 100 )
     {
         car1.shapeColor = (230,230,0);
     }

     if (deformation < 100)
     {
       car1.shapeColor = (0,255,0);
     }
   }
     
   if(wall2.x - zenia.x < (zenia.width + wall2.width) / 2){
    zenia.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500
    if (deformation > 180)
    {
       zenia.shapeColor = (255,0,0);
    }

    if (deformation < 180 && deformation > 100 )
    {
        zenia.shapeColor = (230,230,0);
    }

    if (deformation < 100)
    {
      zenia.shapeColor = (0,255,0);
    }
  }

  if(wall3.x - taurus.x < (taurus.width + wall3.width) / 2){
    taurus.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500
    if (deformation > 180)
    {
       taurus.shapeColor = (255,0,0);
    }

    if (deformation < 180 && deformation > 100 )
    {
        taurus.shapeColor = (230,230,0);
    }

    if (deformation < 100)
    {
         taurus.shapeColor = (0,255,0);
    }
  }

  if(wall4.x - cydop.x < (cydop.width + wall4.width) / 2){
    cydop.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500
    if (deformation > 180)
    {
       cydop.shapeColor = (255,0,0);
    }

    if (deformation < 180 && deformation > 100 )
    {
        cydop.shapeColor = (230,230,0);
    }

    if (deformation < 100)
    {
      cydop.shapeColor = (0,255,0);
    }
  }

      car1.display();
      wall1.display();
      zenia.display();
      wall2.display();
      taurus.display();
      wall3.display();
      cydop.display();
      wall4.display();

}
