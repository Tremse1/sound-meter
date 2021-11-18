basic.forever(function () {
    basic.showNumber(input.soundLevel())
    if (input.soundLevel() >= 125) {
        music.playMelody("F D F D F D F D ", 120)
    }
})
