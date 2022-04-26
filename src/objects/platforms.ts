const createPlatforms = (scene) => {
    scene.platforms = scene.physics.add.staticGroup();
    scene.platforms
        .create(400, 568, 'ground')
        .setScale(2)
        .refreshBody();
    scene.platforms.create(600, 400, 'ground');
    scene.platforms.create(50, 250, 'ground');
    scene.platforms.create(750, 220, 'ground');
}

export default createPlatforms;