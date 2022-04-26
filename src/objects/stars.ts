import 'phaser';

const createStars = (scene) => {
    scene.stars = scene.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: {
            x: 12,
            y: 0,
            stepX: 70
        }
    });

    // add bounce property to the stars
    scene.stars.children.iterate(star =>
        star.setBounceY(Phaser.Math.FloatBetween(0.1, 0.2))
    );
}

export default createStars;