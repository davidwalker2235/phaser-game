const createScore = (scene) => {
    scene.scoreText = scene.add.text(16, 16, `Score: ${scene.score}`, {
        fontSize: '32px',
        fill: 'black'
    });
}

export default createScore;