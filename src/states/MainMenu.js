export default class extends Phaser.State {
  init () {
    this.music = null
    this.playButton = null
  }

  preload () {
    game.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml')

    this.game.load.audio('intro',['/assets/audio/intro.mp3'])
  }

  create () {
    this.introSound = this.game.add.audio('intro')
    this.introSound.play()

    let starsmenu = this.game.add.sprite(130, 100, 'starsmenu')
    starsmenu.scale.x = 5
    starsmenu.scale.y = 5

    let logo = this.game.add.sprite(250, 170, 'logo')
    logo.scale.x = 1.6
    logo.scale.y = 1.5

    this.startText = game.add.bitmapText(this.game.width / 2 - 310, this.game.height / 2 + 120, 'carrier_command','Press  ENTER  to\n\n start playing',34)
    this.startText.inputEnabled = true
    this.startText.input.enableDrag()
    //this.startText = this.game.add.text(this.game.width / 2 - 180, this.game.height / 2 + 120, 'Press  ENTER  to\n start playing', textstyle)

    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.clown = this.game.add.sprite(100, 680, 'clown')
    this.clown.scale.x = 3
    this.clown.scale.y = 3

    this.game.physics.enable(this.clown, Phaser.Physics.ARCADE)
    this.clown.body.setSize(0, 0, 0, 0)

    this.clown.body.velocity.x = 100
    this.clown.animations.add('run', Phaser.Animation.generateFrameNames('clown', 0, 2, '', 4), 10 /*fps */, true)
    this.clown.animations.play('run', 8, true)

    this.enterPressed = false
  }

  update () {
    if(!this.enterPressed && this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
      this.enterPressed = true

      this.introSound.stop()

      this.blinkedTimes = -1
      this.timerBlinker = setInterval(function(_this) {
        _this.blinkedTimes++
        if(_this.blinkedTimes > 10) {
          clearInterval(_this.timerBlinker)
          _this.game.state.start('Game2')
        }
        _this.startText.visible = !_this.startText.visible
      }, 30, this)
    }
  }
}
