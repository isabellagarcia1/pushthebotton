controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.say("push A")
    }
    if (randomPick == 1) {
        mySprite.say("push B")
    }
}
let randomPick = 0
let mySprite: Sprite = null
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 4 . . . 
    . . . . . 4 . . . . . . 4 . . . 
    . . . . . 4 . e . . e . 4 . . . 
    . . . . . 4 . . . . . . 4 . . . 
    . . . . . 4 . . . . . . 4 . . . 
    . . . . . 4 4 . 1 1 . 4 4 . . . 
    . . . . . . 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
