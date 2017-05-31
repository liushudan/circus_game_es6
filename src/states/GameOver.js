export default class extends Phaser.State {
  preload() {
    game.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml')
  }

  create() {
    this.startText = game.add.bitmapText(this.game.width / 2 - 310, this.game.height / 2 - 100, 'carrier_command','Game Over \n\n ENTER to restart',34)
    this.startText.inputEnabled = true
    this.startText.input.enableDrag()

    this.enterPressed = false

    //game.input.onTap.addOnce(this.startGame, this)
  }

  update () {
    if(!this.enterPressed && this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
      this.enterPressed = true

      this.blinkedTimes = -1
      this.timerBlinker = setInterval(function(_this) {
        _this.blinkedTimes++
        if(_this.blinkedTimes > 10) {
          clearInterval(_this.timerBlinker)
          _this.game.state.start('Game')
        }
        _this.startText.visible = !_this.startText.visible
      }, 30, this)
    }
  }
}
