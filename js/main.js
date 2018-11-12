var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
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
    frameWidth: 1200,
    frameHeight: 1200
  }, 18);
  this.load.image('starship', './startship.png');
  this.load.image('enemyAttack', './enemyattack.png');
  this.load.audio('backgroundMusic', './backgroundMusic.mp3');
  this.load.audio('testMusic', './testMusic.mp3');
  this.load.image('fire', '/asset/pictures/ph3.png');

}



var key;
let starship;
var bullets;

function create() {

  sprite = this.add.sprite(240, 280, 'background');

  starship = this.physics.add.sprite(10, 20, 'starship');
  var enemyAttack = this.physics.add.image(700, 200, 'enemyAttack');

  starship.setCollideWorldBounds(true);
  starship.scaleX = 0.2;
  starship.scaleY = 0.2;

  starship.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  starship.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
  starship.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
  key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

  cursors = this.input.keyboard.createCursorKeys();


  enemyAttack.setVelocity(200, 0);
  enemyAttack.setBounce(1, 1);
  enemyAttack.setCollideWorldBounds(true);

  bullets = this.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;

  bullets.createMultiple(50, 'fire');


}

function update() {

  if (cursors.up.isDown) // if the up arrow key is down
  {
    starship.y -= 5;
  } else if (cursors.down.isDown) // if the down arrow key is down
  {
    starship.y += 5;
  }
  if (cursors.space.isDown) {
    bullets = this.physics.add.sprite(starship.x, starship.y, 'fire');

    bullets.scaleX = 0.2;
    bullets.scaleY = 0.2;
    bullets.setVelocity(800, 0);
  }
}