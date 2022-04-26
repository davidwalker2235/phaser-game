import importObjects from '../objects/importObjects';
import createPlayer from '../objects/player';
import createPlatforms from '../objects/platforms';
import createBackground from '../objects/background';
import createStars from '../objects/stars';
import createScore from '../objects/score';
import createBombs from '../objects/bombs';
import { collectStar, hitBomb, playerQuiet, turnPlayerLeft, turnPlayerRight } from '../helper/helper';
import ObjectIndex from '../objects/objectIndex';

class GameScene extends ObjectIndex {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload(): void {
        importObjects(this);
    }

    create(): void {
        createBackground(this)
        createPlatforms(this)
        createPlayer(this);
        createStars(this)
        createScore(this)
        createBombs(this)

        // collide player and platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, () => hitBomb(this), null, this);

        // set overlap action between player and stars
        this.physics.add.overlap(
            this.player,
            this.stars,
            (player, stars) => collectStar(player, stars, this),
            null,
            this
        );
    }

    update(): void {
        if (this.cursors.left.isDown) {
            turnPlayerLeft(this)
        } else if (this.cursors.right.isDown) {
            turnPlayerRight(this)
        } else {
            playerQuiet(this)
        }
    }
}

export default GameScene;
