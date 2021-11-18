basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
    if (input.soundLevel() >= 125) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 120)
    }
})
