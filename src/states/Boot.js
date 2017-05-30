import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
  }

  preload () {
    this.load.image('logo', 'assets/images/logo.png')
    this.load.image('starsmenu', 'assets/images/stars.png')

    this.game.load.spritesheet('clown', './assets/images/circus-charlie-sheet.gif',16,24,10)

    let botData = {
      'frames':
      [
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
          'filename': 'clownStandJump0000',
          'frame': {'x':182,'y':58,'w':15,'h':24},
          'rotated': false,
          'trimmed': true,
          'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
          'sourceSize': {'w':15,'h':24}
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
          'filename': 'clownburn0000',
          'frame': {'x':164,'y':32,'w':15,'h':24},
          'rotated': false,
          'trimmed': true,
          'spriteSourceSize': {'x':0,'y':0,'w':16,'h':24},
          'sourceSize': {'w':16,'h':24}
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
          'filename': 'lion0001',
          'frame': {'x':200,'y':87,'w':33,'h':16},
          'rotated': false,
          'trimmed': true,
          'spriteSourceSize': {'x':0,'y':0,'w':33,'h':16},
          'sourceSize': {'w':33,'h':16}
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
        {
          'filename': 'endLevel1',
          'frame': {'x':129,'y':243,'w':37,'h':22},
          'rotated': false,
          'trimmed': true,
          'spriteSourceSize': {'x':0,'y':0,'w':37,'h':22},
          'sourceSize': {'w':37,'h':18}
        }
    ]}

    this.game.load.atlas('clown', './assets/images/circus-charlie-sheet.gif', null, botData)
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
