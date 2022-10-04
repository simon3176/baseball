input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    Balls += 1
    basic.showNumber(Balls)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Balls)
    basic.showNumber(Strike)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    Strike += 1
    basic.showNumber(Strike)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Strike = 0
    Balls = 0
})
let Strike = 0
let Balls = 0
basic.showIcon(IconNames.SmallSquare)
basic.showNumber(0)
basic.forever(function () {
	
})
