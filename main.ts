function convertCtoF (C: number) {
    return C * 1.8 + 32
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(convertCtoF(input.temperature()))
})
