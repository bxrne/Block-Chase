window.onload = function() {
//initialize game
Crafty.init(480, 320, document.getElementById('game'));
Crafty.background("green");

//setup score variable    
var score = 0;

//setup scoreText entity
var scoreText = Crafty.e('scoreText, 2D, Canvas,Text');
scoreText.attr({
    x:480 / 2, 
    y:20
});
    
//set its value to the score variable
scoreText.text(score);
scoreText.textFont({ size: '20px', weight: 'bold', family: 'Monospace'});
scoreText.textColor('#ffffff');

//setting up the hero entity    
var hero = Crafty.e('hero, 2D, Canvas');
hero.attr({
    x:215,
    y:125,
    h:25,
    w:25
});
hero.addComponent("Color");
hero.addComponent("Fourway");
hero.fourway(4);
hero.color("blue");
 hero.addComponent("Collision").bind('Moved', function(from) {
    if(this.hit('2D')) {
        
        //add 1 to score and set the scoreText entity value to score
        score++;
     scoreText.text(score);
        
        //teleport enemy away
        enemyTP();
    }
  });
    
//setup enemy entity
var enemy = Crafty.e('enemy, 2D, Canvas');
enemy.attr({
    x:455,
    y:110,
    h:25,
    w:25
});
enemy.addComponent("Color");
enemy.color("red");
enemy.addComponent("Collision").bind('Moved', function(from) {
    if(this.hit('2D')) {
       this.attr({x: from.x, y:from.y});
    }
  });

//enemy teleportation function
function enemyTP() {
enemy.x = Math.floor(Math.random()*465);
enemy.y = Math.floor(Math.random()*295);
}
//immediate teleport when game has begun
enemyTP();
};