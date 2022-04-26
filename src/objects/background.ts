const createBackground = (scene) => {
    scene.background = scene.add.image(400, 300, 'sky').setInteractive();

    let lastTime = 0;
    scene.background.on('pointerdown', () => {
        let clickDelay = scene.time.now - lastTime;
        lastTime = scene.time.now;
        if(clickDelay < 350) {
            scene.player.setVelocityY(-330);
        }
    });
}

export default createBackground;