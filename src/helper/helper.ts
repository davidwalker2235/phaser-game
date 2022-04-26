export const turnPlayerLeft = (scene) => {
    scene.player.setVelocityX(-160);
    scene.player.anims.play('left', true);
}

export const turnPlayerRight = (scene) => {
    scene.player.setVelocityX(160);
    scene.player.anims.play('right', true);
}

export const playerQuiet = (scene) => {
    scene.player.setVelocityX(0);
    scene.player.anims.play('turn');
}

export const collectStar = (player, star, scene) => {
    star.disableBody(true, true);

    scene.score += 10;
    scene.scoreText.setText(`Score: ${scene.score}`);

    if (scene.stars.countActive(true) === 0) {
        scene.stars.children.iterate(function(star) {
            star.enableBody(true, star.x, 0, true, true);
        });

        let x =
            player.x < 400
                ? Phaser.Math.Between(400, 800)
                : Phaser.Math.Between(0, 400);

        let bomb = scene.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}

export const hitBomb = (scene) => {
    scene.add.image(400, 200, 'gameOver');
    scene.add.image(400, 450, 'pressF5');
    scene.physics.pause();
    scene.scene.gameOver = true;
}