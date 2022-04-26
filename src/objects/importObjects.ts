const importObjects = (scene) => {
    scene.load.image('sky', '/assets/sky.png');
    scene.load.image('ground', '/assets/platform.png');
    scene.load.image('star', '/assets/star.png');
    scene.load.image('bomb', '/assets/bomb.png');
    scene.load.image('gameOver', '/assets/gameOver.png');
    scene.load.image('pressF5', '/assets/pressF5.png');
    scene.load.spritesheet('dude', '/assets/gamer.png', {
        frameWidth: 45,
        frameHeight: 62
    });
}

export default importObjects;
