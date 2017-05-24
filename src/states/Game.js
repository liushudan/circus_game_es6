/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js')
    this.game.load.image('background', './assets/images/stage01.png')

    this.game.load.spritesheet('clown', './assets/images/circus-charlie-sheet.gif',16,24,10)

    var botData={'frames': [
      {
      'filename': 'clown0000',
      'frame': {'x':164,'y':5,'w':16,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':16,'h':24}
      },
      {
      'filename': 'clown0001',
      'frame': {'x':185,'y':5,'w':16,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':16,'h':24}
      },
      {
      'filename': 'clown0002',
      'frame': {'x':205,'y':5,'w':16,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':16,'h':24}
      },
      {
      'filename': 'clownJump0003',
      'frame': {'x':226,'y':5,'w':16,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':16,'h':24}
      },
      {
      'filename': 'clownStand0000',
      'frame': {'x':164,'y':58,'w':15,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':15,'h':24}
      },
      {
      'filename': 'clownStandJump0000',
      'frame': {'x':182,'y':58,'w':15,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':15,'h':24}
      },
      {
      'filename': 'clownburn0000',
      'frame': {'x':164,'y':32,'w':15,'h':24},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
      'sourceSize': {'w':16,'h':24}
      },
      {
      'filename': 'lion0002',
      'frame': {'x':164,'y':87,'w':33,'h':16},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':33,'h':16},
      'sourceSize': {'w':33,'h':16}
      },
      {
      'filename': 'lion0001',
      'frame': {'x':200,'y':87,'w':33,'h':16},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':33,'h':16},
      'sourceSize': {'w':33,'h':16}
      },
      {
      'filename': 'lion0000',
      'frame': {'x':234,'y':87,'w':33,'h':16},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':33,'h':16},
      'sourceSize': {'w':33,'h':16}
      },
      {
      'filename': 'lionburn0000',
      'frame': {'x':272,'y':87,'w':33,'h':16},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':33,'h':16},
      'sourceSize': {'w':33,'h':16}
      },
      {
      'filename': 'firepot0000',
      'frame': {'x':221,'y':194,'w':24,'h':31},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':24,'h':31},
      'sourceSize': {'w':24,'h':31}
      },
      {
      'filename': 'firepot0001',
      'frame': {'x':195,'y':194,'w':24,'h':31},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':24,'h':31},
      'sourceSize': {'w':24,'h':31}
      },
      {
      'filename': 'firecirclel0000',
      'frame': {'x':136,'y':145,'w':12,'h':80},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':12,'h':80},
      'sourceSize': {'w':12,'h':80}

      },
      {
      'filename': 'firecirclel0001',
      'frame': {'x':165,'y':145,'w':12,'h':80},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':12,'h':80},
      'sourceSize': {'w':12,'h':80}
      },
      {
      'filename': 'firecircler0000',
      'frame': {'x':148,'y':145,'w':12,'h':80},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':12,'h':80},
      'sourceSize': {'w':12,'h':80}
      },
      {
      'filename': 'firecircler0001',
      'frame': {'x':177,'y':145,'w':12,'h':80},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':12,'h':80},
      'sourceSize': {'w':12,'h':80}
      },
      {'filename': 'endLevel1',
      'frame': {'x':129,'y':243,'w':37,'h':22},
      'rotated': false,
      'trimmed': true,
      'spriteSourceSize': {'x':0,'y':0,'w':37,'h':22},
      'sourceSize': {'w':37,'h':18}
      }
    ]}

    this.game.load.atlas('clown', './assets/images/circus-charlie-sheet.gif', null, botData)
  }

  createMeters () {
    var graphics = this.add.graphics(0, 0)
    var x
    for(var i=10;i>=0;i--) {
      x = (10-i)*780
      
      this.add.text(x+15, 690, (i*10)+' m', {
        font : '46px "arcadeclasic"',
        fill : '#fff',
        align : 'center'
      })

      graphics.lineStyle(2, 0x000000, 1)
      graphics.beginFill(0x000000, 1)
      graphics.drawRect(x, 690, 130, 50)
      graphics.lineStyle(5, 0xd42700, 1)
      graphics.drawRect(x+5, 695, 120, 40)
    }
  }

  create () {
    this.ground = game.add.sprite(80/2-40,428/2,'background')

    this.createPlayer()
    this.createMeters()
  }

  createPlayer () {
    this.lion = this.game.add.sprite(85, 630, 'clown','lion0000')
    this.game.physics.enable(this.lion, Phaser.Physics.ARCADE)

    this.lion.body.setSize(90, 50, -5, 0)

    this.clown = this.game.add.sprite(7, -22, 'clown','clownStand0000')
    this.game.physics.enable(this.clown,Phaser.Physics.ARCADE,true)
    this.lion.addChild(this.clown)

    this.lion.scale.x =3
    this.lion.scale.y =3

    this.lion.animations.add('runLion', Phaser.Animation.generateFrameNames('lion', 0, 2, '', 4), 3 /*fps */, true)
    this.lion.animations.add('idleLion', Phaser.Animation.generateFrameNames('lion', 0, 0, '', 4), 1 /*fps */, true)

    this.clown.isRunning=false
    this.lion.body.collideWorldBounds=true
  }

  update () {
    this.ready = true
  }

  render () {
    if (__DEV__) {
      //this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
