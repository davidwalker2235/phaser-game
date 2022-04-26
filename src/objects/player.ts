const createPlayer = (scene) => {
    scene.player = scene.physics.add.sprite(100, 450, 'dude');

    // add bounce property to the player
    scene.player.setBounce(0.2);

    // keep player inside the scene
    scene.player.setCollideWorldBounds(true);

    // set animations
    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn',
        frames: [
            {
                key: 'dude',
                frame: 4
            }
        ],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });

    // // set cursor keys
    scene.cursors = scene.input.keyboard.createCursorKeys();
}

export default createPlayer;