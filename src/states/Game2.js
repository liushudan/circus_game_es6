import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.game.load.image('background', './assets/images/stage02.png')
    this.game.load.image('heart', './assets/images/heart.png')

    this.game.load.audio('level_2', ['assets/audio/level2-3.mp3'])
    this.game.load.audio('failure', ['assets/audio/failure.mp3'])
    this.game.load.audio('jump',['/assets/audio/jump.mp3'])
  }

  createMeters () {
      let graphics = this.game.add.graphics(0, 0)
      let x

      for(let i=10;i>=0;i--) {
          x =( 10-i)*705;
          this.add.text(x+10, 690, (i*10)+' m', {
              font : '46px "arcadeclasic"',
              fill : '#fff',
              align : 'left'
          })

          graphics.lineStyle(2, 0x000000, 1)
          graphics.beginFill(0x000000, 1)
          graphics.drawRect(x, 690, 130, 50)
          graphics.lineStyle(5, 0xd42700, 1)
          graphics.drawRect(x+5, 695, 120, 40)
      }
  }

  createPlayer () {
      this.player = this.add.sprite(85, 348, 'clown','walkBalance0')
      this.physics.enable(this.player, Phaser.Physics.ARCADE)

      this.player.scale.x = 3
      this.player.scale.y = 3

      this.physics.enable(this.player, Phaser.Physics.ARCADE,true)

      //this.player.body.setSize(15, 24, 0, 0)
      this.player.body.setSize(15, 20, 0, 0)

      this.player.animations.add('walkBalance', Phaser.Animation.generateFrameNames('walkBalance', 0, 2, '', 0), 3 /*fps */, true)

      //this.player.isRunning = false
      this.player.body.collideWorldBounds = true
  }

  _monkyOut (m) {
      this.monkeys.remove(m)
  }

  _addMonkey (){
      if(this.monkeys.total>3){
          return;
      }

      var createMonky=function(x){
          if(!x){
              x=this.player.x +950+this.rnd.integerInRange(-400,200);
              var xLast=(this.monkeys.length>0) ? this.monkeys.getAt(this.monkeys.length-1).x : false;
              x=(xLast && (x-xLast)<500) ? xLast+500 : x;
          }


          var monkey=this.monkeys.create(x, 372, 'clown','monkey0');
          monkey.scale.x=3;
          monkey.scale.y=3;
          monkey.body.velocity.x=-90;
          monkey.animations.add('monkey', Phaser.Animation.generateFrameNames('monkey', 0, 2, '', 0), 3 /*fps */, true);
          monkey.animations.play('monkey',6);
          monkey.checkWorldBounds = true;
          monkey.events.onOutOfBounds.add(this._monkyOut, this);
          monkey.body.setSize(16, 16, 0, 0);
          monkey.body.gravity.y=400;
          return monkey;
      };

      var difficulty=this.rnd.integerInRange(1,100);
      var nMonkeys=(difficulty>40)? this.rnd.integerInRange(1,4) : 1;

      var distance=50;

      var jumpTime=this.rnd.integerInRange(200,700);

      for(var i=0;i<nMonkeys;i++){
          difficulty=100;
          if(i>1){
              distance=100*i;
              jumpTime=this.rnd.integerInRange(1000,2000);
          }

          var x=(i>0) ? this.monkeys.getAt(this.monkeys.length-1).x+distance : null;
          var _monkey=createMonky.call(this,x);

          _monkey.jumpTime=(difficulty>70)? jumpTime:false;
          _monkey.lastJump=this.time.lastTime;
      }
  }

  createObstacles () {
      this.monkeys = this.add.group()
      this.monkeys.enableBody = true
      this.monkeys.physicsBodyType = Phaser.Physics.ARCADE

      this.game.time.events.loop(Phaser.Timer.SECOND, this._addMonkey, this)
  }

  create () {
    this.dead = false
    this.music = this.add.audio('level_2')
    this.music.play()

    this.cursors = this.game.input.keyboard.createCursorKeys()

    this.world.setBounds(0, -20 ,1024*8, 725)
    this.background = this.game.add.tileSprite(0, 200, 1024*8, 552, 'background')

    this.createMeters()
    this.createPlayer()
    this.createObstacles()

    // this.endStage = this.game.add.sprite(1024*8-300, 620, 'clown','endLevel1')
    // this.physics.enable(this.endStage, Phaser.Physics.ARCADE)
    //
    // this.endStage.scale.x = 3
    // this.endStage.scale.y = 3
    //
    // this.endStage.body.immovable = true
    // this.endStage.body.collideWorldBounds = true

    this.floor = this.game.add.sprite(0, 417)
    this.endStage = this.game.add.sprite(1024*8-300, 620, 'clown','endLevel1')
    this.physics.enable(this.floor, Phaser.Physics.ARCADE)
    this.physics.enable(this.endStage, Phaser.Physics.ARCADE)
    this.endStage.scale.x=3
    this.endStage.scale.y=3
    this.endStage.body.immovable = true

    this.endStage.body.collideWorldBounds = true

    this.floor.body.immovable = true
    this.floor.body.collideWorldBounds = true
    this.floor.body.width = this.game.world.width
  }

  triggerGameover () {
      let that = this
      this.music.stop()
      this.failureSound = this.add.audio('failure')
      this.failureSound.play()

      setTimeout(function() {
          that.player.animations.stop()
          that.player.frameName = 'clownburn0000'

          that.player.body.gravity.y = 0
          that.player.body.speed = 0
          that.player.body.velocity.y = 0
          that.player.body.velocity.x = 0

          that.monkeys.setAll('body.velocity.x',0)
          that.monkeys.setAll('body.gravity.y',0)
          that.monkeys.setAll('body.velocity.y',0)
          that.monkeys.callAll('animations.stop', 'animations')

      }, 1)

      setTimeout(function() {
          that.game.state.start('Game2')
          that.failureSound.stop()
      }, 3100)

      this.dead = true
  }

  update () {
    if(this.dead) {
        return
    }

    this.game.physics.arcade.collide(this.player, this.monkeys, this.triggerGameover, null, this)

    this.monkeys.forEach(function(m) {
        if(m.jumpTime && m.body.y < 370 && ((m.lastJump-this.time.lastTime) < m.jumpTime)) {
            m.body.velocity.y = -500
        }
    }, this)

      this.game.physics.arcade.collide(this.endStage, this.player)
      this.game.physics.arcade.collide(this.floor, this.player)
      this.game.physics.arcade.collide(this.floor, this.monkeys)

      this.player.body.gravity.y = 800

      let isJumping = !this.player.body.touching.down

      this.game.camera.x = this.player.x-120

      if(isJumping){
          this.player.frameName = 'jumpBalance'
      }

      if (this.cursors.up.isDown && !isJumping){
          this.player.body.velocity.y = -480
      }

      if(isJumping){
          return
      }

      if (this.cursors.right.isDown) {
          //this.player.isRunning = true

          this.player.body.velocity.x = 150
          this.player.animations.play('walkBalance', 10, true)
      }else if (this.cursors.left.isDown) {
          //this.player.isRunning = true

          this.player.body.velocity.x = -130
          this.player.animations.play('walkBalance', 5, true)
      }else{
          this.player.body.velocity.x = 0

          //this.player.isRunning = false
          this.player.animations.stop()
          this.player.frameName = 'walkBalance2'
      }
  }

  render (){
      if(__DEV__){
          this.game.debug.bodyInfo(this.player, 32, 80)

          this.game.debug.body(this.player)

          //this.game.debug.body(this.monkeys)
          this.monkeys.forEach(function (e) {
              this.game.debug.body(e)
          }, this)
      }
  }
}
