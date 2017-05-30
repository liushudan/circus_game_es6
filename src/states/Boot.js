import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
  }

  preload () {
    this.load.image('logo', 'assets/images/logo.png')
    this.load.image('starsmenu', 'assets/images/stars.png')

    this.game.load.spritesheet('clown', './assets/images/circus-charlie-sheet.gif',16,24,10)
  }

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.stage.disableVisibilityChange = true

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.game.scale.maxWidth = 1024
    this.game.scale.maxHeight = 768
    this.game.scale.pageAlignHorizontally = true
    this.game.scale.pageAlignVertically = true
    this.game.state.start('MainMenu')
  }
}
