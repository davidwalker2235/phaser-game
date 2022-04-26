import 'phaser';

class ObjectIndex extends Phaser.Scene {
    public player: Phaser.Physics.Arcade.Sprite;
    public background: Phaser.GameObjects.Image;
    public platforms: Phaser.Physics.Arcade.StaticGroup;
    public cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    public stars/*: Phaser.Physics.Arcade.Group*/;
    public score: number = 0;
    public scoreText: Phaser.GameObjects.Text;
    public bombs: Phaser.Physics.Arcade.Group;
}

export default ObjectIndex