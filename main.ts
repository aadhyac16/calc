input.onButtonPressed(Button.A, function () {
    basic.showNumber(a + b)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(a * b)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(a - b)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(a / b)
})
let b = 0
let a = 0
a = 6
b = 2
