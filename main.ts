sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Princess.say("This fucking delicious", 5000)
    music.powerUp.play()
    Cake.destroy()
})
let Princess: Sprite = null
let Cake: Sprite = null
Cake = sprites.create(assets.image`bigCake`, SpriteKind.Food)
Cake.setPosition(14, 58)
Princess = sprites.create(assets.image`PrincessLeft`, SpriteKind.Player)
Princess.setPosition(125, 42)
controller.moveSprite(Princess)
