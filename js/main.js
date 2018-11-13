var config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,

  }
};


var game = new Phaser.Game(config);


function preload() {

  // this.load.setBaseURL('http://localhost/spaceInvaders/');

  this.load.spritesheet('background', '/backgroundSpriteSheet.png', {
    frameWidth: 2000,
    frameHeight: 1200
  }, 60);
  this.load.image('starship', './startship.png');
  this.load.image('enemyAttack', 'asset/pictures/enemyattack.png');
  this.load.audio('backgroundMusic', './backgroundMusic.mp3');
  this.load.audio('testMusic', './testMusic.mp3');
  // this.load.image('fire', '/asset/pictures/shotmagic.gif');
  this.load.image('fire', '/asset/pictures/ph3.png');
  this.load.image('fire2', '/asset/pictures/ph3.png');
}



var key;
let starship;
var bullets;
var flipFlop;
var flipFlop2;
var enemyAttack;
var bullets;
var bullets2;
var bullets3;

var MAXENEMY = 10;

function create() {
  sprite = this.add.sprite(240, 280, 'background');


  starship = this.physics.add.sprite(10, 20, 'starship');

  starship.setCollideWorldBounds(true);
  starship.scaleX = 0.2;
  starship.scaleY = 0.2;
  starship.physicsBodyType = Phaser.Physics.ARCADE;

  cursors = this.input.keyboard.createCursorKeys();
  test = this.input.keyboard.addKey('A');

  bullets3 = this.add.group();
  bullets3.enableBody = true;
  bullets3.physicsBodyType = Phaser.Physics.ARCADE;

  bullets2 = this.add.group();
  bullets2.enableBody = true;
  bullets2.physicsBodyType = Phaser.Physics.ARCADE;
  bullets = this.add.group();
 
  // bullets.createMultiple(50, 'fire');

  // this.physics.add.collider(bullets, enemyAttack);
  // this.physics.add.collider(bullets2, enemyAttack);
  // this.physics.add.collider(bullets3, enemyAttack);



  // enemyAttack.physicsBodyType = Phaser.Physics.ARCADE;

  // enemyAttack.setVelocity(-200, 0);
  // enemyAttack.setBounce(1, 1);
  // enemyAttack.scaleX = 0.6;
  // enemyAttack.scaleY = 0.6;
  // enemyAttack.setCollideWorldBounds(true);
  // enemyAttack.enableBody = true;
  // enemyAttack.angle = 270;
  // enemyAttack.body.immovable = true;


  this.enemyAttack = this.add.group();
  this.enemyAttack.enableBody = true;
  this.enemyAttack.physicsBodyType = Phaser.Physics.ARCADE;
  // this.enemyAttack.createMultiple(50, 'enemyAttack');
  this.enemyAttack.setCollideWorldBounds = true;
  this.enemyAttack.checkWorldBounds = true;
  // this.enemyAttack.anchor = 0.5;
  this.nextEnemyAt = 0;
  this.enemyDelay = 1000;
  this.enemyAttack.outOfBoundsKill = true;

}

function update() {


  if (this.nextEnemyAt < this.time.now) {
    this.nextEnemyAt = this.time.now + this.enemyDelay;
    enemyAttack = this.physics.add.image(Phaser.Math.RND.between(900, this.physics.world.bounds.width), Phaser.Math.RND.between(100, 700), 'enemyAttack');
    enemyAttack.setVelocity(-200, 0);
    enemyAttack.scaleX = 0.6;
    enemyAttack.scaleY = 0.6;
    enemyAttack.setBounce(1, 1);
    enemyAttack.enableBody = true;
    // enemyAttack.refreshBody = true;
    enemyAttack.body.immovable = true;

  }




  if (cursors.up.isDown) // if the up arrow key is down
  {
    starship.y -= 5;
  } else if (cursors.down.isDown) // if the down arrow key is down
  {
    starship.y += 5;
  }
  if (cursors.space.isDown) {
    if (!flipFlop) {
      bullets = this.physics.add.sprite(starship.x + 40, starship.y, 'fire');
      bullets.scaleX = 0.2;
      bullets.scaleY = 0.2;
      bullets.setVelocity(500, 0);
      flipFlop = true;
      console.log(bullets);
      this.physics.add.overlap(bullets, enemyAttack, destroyEnemy, null, this);
      // this.physics.add.overlap(bullets, enemyAttack, function (bullets, enemyAttack) {
      //   enemyAttack.disableBody(true, true);
      //   // bullets.destroy();
      //   // enemyAttack.destroy();
      // });
    }
  }
  if (test.isDown) {
    if (!flipFlop2) {
      bullets2 = this.physics.add.sprite(starship.x + 30, starship.y + 20, 'fire');
      bullets3 = this.physics.add.sprite(starship.x + 30, starship.y - 23, 'fire');
      bullets2.scaleX = 0.2;
      bullets2.scaleY = 0.2;
      bullets2.setVelocity(1200, 0);
      bullets3.scaleX = 0.2;
      bullets3.scaleY = 0.2;
      bullets3.setVelocity(1200, 0);
      flipFlop2 = true;
      this.physics.add.overlap(bullets2, enemyAttack, function (bullets, enemyAttack) {
        // enemyAttack.disableBody(true, true);
        enemyAttack.destroy();
      });
      this.physics.add.overlap(bullets3, enemyAttack, function (bullets, enemyAttack) {
        // enemyAttack.disableBody(true, true);
        enemyAttack.destroy();
      });
    }
  }
  if (cursors.space.isUp) {
    flipFlop = false;
  }
  if (test.isUp) {
    flipFlop2 = false;
  }
}

function destroyEnemy(){
  console.log("test");
  enemyAttack.disableBody(true, true);
}