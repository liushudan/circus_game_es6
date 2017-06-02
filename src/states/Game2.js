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
      var graphics = this.game.add.graphics(0, 0)
      var x

      for(var i=10;i>=0;i--) {
          x =( 10-i)*705;
          this.add.text(x+15, 694, (i*10)+' m', {
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
      this.player = this.add.sprite(85, 800, 'clown','walkBalance0')
      this.physics.enable(this.player, Phaser.Physics.ARCADE)

      //this.player.body.setSize(15, 24, 0, 0)
      this.player.body.setSize(15, 24, 0, 0)

      this.player.scale.x = 3
      this.player.scale.y = 3

      this.game.physics.enable(this.player, Phaser.Physics.ARCADE,true)

      this.player.animations.add('walkBalance', Phaser.Animation.generateFrameNames('walkBalance', 0, 2, '', 0), 3 /*fps */, true)

      this.player.isRunning = false
      this.player.body.collideWorldBounds = true
  }

  create () {
    this.dead = false
    this.music = this.add.audio('level_2')
    this.music.play()

    this.cursors = this.game.input.keyboard.createCursorKeys()

    this.world.setBounds(0, 0 ,1024*8, 415)
    this.background = this.game.add.tileSprite(0, 200, 1024*8, 552, 'background')

    this.createMeters()
    this.createPlayer()

    this.endStage = this.game.add.sprite(1024*8-300, 620, 'clown','endLevel1')
    this.physics.enable(this.endStage, Phaser.Physics.ARCADE)

    this.endStage.scale.x = 3
    this.endStage.scale.y = 3

    this.endStage.body.immovable = true
    this.endStage.body.collideWorldBounds = true
  }

  update () {
      this.game.physics.arcade.overlap(this.endStage, this.player)

      this.player.body.gravity.y = 800

      let isJumping = this.player.body.touching.down

      this.game.camera.x = this.player.x-120

      if(isJumping){
          this.player.frameName = 'jumpBalance'
      }

      if (this.cursors.up.isDown && !isJumping){
          this.player.body.velocity.y = -480
          this.jumpSound = this.game.add.audio('jump')
          this.jumpSound.play()
      }

      if(isJumping){
          return
      }

      if (this.cursors.right.isDown) {
          this.player.isRunning = true

          this.player.body.velocity.x = 150
          this.player.animations.play('walkBalance', 10, true)
      }else if (this.cursors.left.isDown) {
          this.player.isRunning = true

          this.player.body.velocity.x = -130
          this.player.animations.play('walkBalance', 5, true)
      }else{
          this.player.body.velocity.x = 0

          this.player.isRunning = false
          this.player.animations.stop()
          this.player.frameName = 'walkBalance2'
      }
  }

  render (){
      if(__DEV__){
          this.game.debug.bodyInfo(this.player, 32, 80)

          this.game.debug.body(this.player)
          // this.monkeys.forEach(function (e) {
          //     this.game.debug.body(e)
          // }, this)
      }
  }
}
