basic.forever(function () {
    basic.showNumber(input.soundLevel())
    if (input.soundLevel() >= 125) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 120)
    }
})
