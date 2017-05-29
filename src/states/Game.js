/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000'
  }

  preload () {
    this.game.load.image('background', './assets/images/stage01.png')

    this.game.load.spritesheet('clown', './assets/images/circus-charlie-sheet.gif',16,24,10)

    this.load.audio('level_1', ['assets/audio/level1-4.mp3']);

    let botData = {'frames': [
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

  createMeters () {
    let graphics = this.add.graphics(0, 0)
    let x
    for(let i=10; i>=0; i--) {
      x = (10-i)*780

      this.add.text(x+15, 690, (i*10)+' m', {
        font : '46px "arcadeclasic"',
        fill : '#fff',
        align : 'right'
      })

      graphics.lineStyle(2, 0x000000, 1)
      graphics.beginFill(0x000000, 1)
      graphics.drawRect(x, 690, 130, 50)
      graphics.lineStyle(5, 0xd42700, 1)
      graphics.drawRect(x+5, 695, 120, 40)
    }
  }

  createPlayer () {
    this.lion = this.add.sprite(85, 630, 'clown','lion0000')
    this.physics.enable(this.lion, Phaser.Physics.ARCADE)

    this.lion.body.setSize(0, 50, 0, 0)

    this.clown = this.game.add.sprite(2, -22, 'clown','clownStand0000')
    this.game.physics.enable(this.clown,Phaser.Physics.ARCADE,true)
    this.lion.addChild(this.clown)

    this.lion.scale.x = 3
    this.lion.scale.y = 3

    this.lion.animations.add('runLion', Phaser.Animation.generateFrameNames('lion', 0, 2, '', 4), 3 /*fps */, true)
    this.lion.animations.add('idleLion', Phaser.Animation.generateFrameNames('lion', 0, 0, '', 4), 1 /*fps */, true)

    this.clown.isRunning = false
    this.lion.body.collideWorldBounds=true
  }

  createObstacles () {
    this.obstacles = this.add.group()
    let w = this.world.bounds.width-800

    for (let i = 1200; i < w; i+=800) {
      let firepot = this.add.sprite(i, 585, 'clown','firepot0000')
      this.physics.enable(firepot, Phaser.Physics.ARCADE)
      firepot.body.setSize(0, 48, -14, -15)

      firepot.body.x = i
      firepot.body.y = 600
      firepot.body.immovable = true
      firepot.scale.x = 3
      firepot.scale.y = 3

      this.obstacles.add(firepot)
    }

    this.obstacles.callAll('animations.add','animations','burnPot', Phaser.Animation.generateFrameNames('firepot', 0, 1, '', 4), 10, true)
    this.obstacles.callAll('animations.play','animations','burnPot')
  }

  createFireCirclesLeft () {
    let burnCircleLeft  = Phaser.Animation.generateFrameNames('firecirclel', 0, 1, '', 4)
    this.firecirclesLeft = this.add.group()
    for (let i = 800; i < this.world.bounds.width; i+=800) {
      if(i%2) {
        i-=300 + Math.floor(Math.random()*100) + 1
      }
      i++

      let fireCircleLeft = this.add.sprite(i, 335, 'clown','firecirclel0000')
      this.game.physics.enable(fireCircleLeft, Phaser.Physics.ARCADE)
      fireCircleLeft.animations.add('burnCircleLeft', burnCircleLeft, 5, true)

      this.firecirclesLeft.add(fireCircleLeft)
    }

    this.firecirclesLeft.setAll('scale.x',3)
    this.firecirclesLeft.setAll('scale.y',3)
    this.firecirclesLeft.setAll('body.velocity.x',-70)

    this.firecirclesLeft.callAll('animations.play', 'animations', 'burnCircleLeft')
  }

  createFireCirclesRight () {
    let burnCircleRigth = Phaser.Animation.generateFrameNames('firecircler', 0, 1, '', 4)
    this.firecirclesRight = this.add.group()

    this.firecirclesLeft.forEach(function(e) {
      let x = e.body.x+30
      let fireCircleRight=this.game.add.sprite(x, 335, 'clown','firecircler0000')
      this.physics.enable(fireCircleRight, Phaser.Physics.ARCADE)
      fireCircleRight.animations.add('burnCircleRigth', burnCircleRigth, 5, true)

      this.firecirclesRight.add(fireCircleRight)

    }, this)

    this.firecirclesRight.setAll('scale.x',3)
    this.firecirclesRight.setAll('scale.y',3)
    this.firecirclesRight.setAll('body.velocity.x',-70)
    this.firecirclesRight.callAll('animations.play', 'animations', 'burnCircleRigth')
  }

  createFireCirclesCollision () {
      this.fireCollisionGroup = this.add.group()
      this.firecirclesLeft.forEach(function(e) {
        let x = e.body.x+30

        let touchFire = this.game.add.sprite(x-10, 554)
        this.physics.enable(touchFire, Phaser.Physics.ARCADE)
        touchFire.body.setSize(0, 150)
        this.fireCollisionGroup.add(touchFire)
      }, this)
      this.fireCollisionGroup.setAll('body.velocity.x',-70)
  }

  create () {
    //this.gameover=false

    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.stage.disableVisibilityChange = true

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.game.scale.maxWidth = 1024
    this.game.scale.maxHeight = 768
    this.game.scale.pageAlignHorizontally = true
    this.game.scale.pageAlignVertically = true

    //this.music = this.add.audio('level_1')
    //this.music.play()

    this.cursor = this.game.input.keyboard.createCursorKeys()

    this.world.setBounds(0, 0, 1024*8, 775)
    this.background = this.game.add.tileSprite(0, 200, 1024*8, 552, 'background')

    this.createMeters()
    //this.createFireCirclesLeft()
    this.createPlayer()
    //this.createFireCirclesRight()
    this.createObstacles()
    //this.createFireCirclesCollision()

    this.floor = this.game.add.sprite(0, 678)
    this.endStage = this.game.add.sprite(1024*8-300, 620, 'clown','endLevel1')

    this.physics.enable(this.floor, Phaser.Physics.ARCADE)
    this.physics.enable(this.endStage, Phaser.Physics.ARCADE)

    this.endStage.scale.x = 3
    this.endStage.scale.y = 3
    this.endStage.body.immovable = true
    this.endStage.body.collideWorldBounds = true

    this.floor.body.immovable = true
    this.floor.body.collideWorldBounds = true
    this.floor.body.width = this.game.world.width

    // this.recicleFireCirclesWall = this.game.add.sprite(-12, 600)
    // this.physics.enable(this.recicleFireCirclesWall, Phaser.Physics.ARCADE)
    // this.recicleFireCirclesWall.body.immovable = true
    // this.recicleFireCirclesWall.body.height = 500
    // this.recicleFireCirclesWall.body.width = 2
  }

  triggerGameover () {
    let that = this
    // this.music.stop()
    // this.failureSound=this.add.audio('failure');
    // this.failureSound.play();

    setTimeout(function() {
        that.lion.animations.stop()
        that.clown.frameName = 'clownburn0000'
        that.lion.frameName = 'lionburn0000'

        that.lion.body.gravity.y = 0
        that.lion.body.speed = 0
        that.lion.body.velocity.y = 0
        that.lion.body.velocity.x = 0

        that.firecirclesRight.setAll('body.velocity.x',0)
        that.firecirclesLeft.setAll('body.velocity.x',0)
    }, 1)

    setTimeout(function() {
        that.game.state.start('Game')
        //that.failureSound.stop()
    }, 3100)

    this.gameover = true
  }

  recicleFireCircle () {
    let fLeft = this.firecirclesLeft.getFirstExists()
    let fRight = this.firecirclesRight.getFirstExists()
    let fObstable = this.fireCollisionGroup.getFirstExists()

    fLeft.body.x = this.world.width
    fRight.body.x = this.world.width+30
    fObstable.body.x = this.world.width+20
    fObstable.body.velocity.x = fLeft.body.velocity.x

    this.firecirclesLeft.remove(fLeft)
    this.firecirclesLeft.add(fLeft)
    this.firecirclesRight.remove(fRight)
    this.firecirclesRight.add(fRight)
    this.fireCollisionGroup.remove(fObstable)
    this.fireCollisionGroup.add(fObstable)
  }

  update () {
    // if (this.gameover) {
    //   return
    // }

    // if (this.lion.body.x < (this.world.width-800)) {
    //   this.game.physics.arcade.collide(this.recicleFireCirclesWall,this.fireCollisionGroup, this._recicleFireCircle,null,this);
    // }
    //
    // this.game.physics.arcade.collide(this.lion, this.fireCollisionGroup, this.triggerGameover, null, this)
    // this.game.physics.arcade.collide(this.lion, this.obstacles, this.triggerGameover, null, this)
    this.game.physics.arcade.overlap(this.endStage, this.lion)
    this.game.physics.arcade.overlap(this.floor, this.lion)

    this.lion.body.gravity.y = 700
    this.game.camera.x = this.lion.x-100

    if (this.lion.body.touching.down) {
      this.clown.frameName='clownStandJump0000'
      this.lion.frameName='lion0002'
    } else {
      this.clown.frameName='clownStand0000'
    }

    if (this.cursor.up.isDown && !this.lion.body.touching.down) {
      this.lion.body.velocity.y = -480
    }

    if (this.lion.body.touching.down) {
      return
    }

    this.inputs()
  }

  inputs () {
    if (this.cursor.right.isDown) {
      this.clown.isRunning = true

      this.lion.body.velocity.x = 200
      this.lion.animations.play('runLion', 10, true)
    } else if (this.cursor.left.isDown) {
      this.clown.isRunning = true

      this.lion.body.velocity.x = -100
      this.lion.animations.play('runLion', 6, true)
    } else {
      this.lion.body.velocity.x = 0

      this.clown.isRunning = false
      this.lion.animations.stop(0)
      this.lion.animations.play('idleLion')
    }
  }

  render () {
    if (__DEV__) {
      this.game.debug.bodyInfo(this.lion, 32, 320)

      this.game.debug.body(this.lion)
      this.game.debug.body(this.clown)
      //this.game.debug.body(this.recicleFireCirclesWall)

      this.game.debug.body(this.floor)
      this.obstacles.forEach(function (e) {
        this.game.debug.body(e)
      }, this)

      // this.fireCollisionGroup.forEach(function (e) {
      //   this.game.debug.body(e)
      // }, this)
    }
  }
}
