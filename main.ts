input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            play_sine_sound(C, 300)
            play_sine_sound(E, 300)
        }
        play_sine_sound(G, 600)
        play_sine_sound(G, 600)
    }
    play_sine_sound(C5, 300)
    play_sine_sound(B, 300)
    play_sine_sound(A, 300)
    play_sine_sound(G, 300)
    play_sine_sound(F, 600)
    play_sine_sound(A, 600)
    play_sine_sound(C, 300)
    play_sine_sound(F, 300)
    play_sine_sound(E, 300)
    play_sine_sound(D, 300)
    play_sine_sound(C, 600)
    play_sine_sound(C, 600)
})
function play_sine_sound (NoteName: number, diration_ms: number) {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    NoteName,
    NoteName,
    255,
    255,
    diration_ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
    basic.pause(diration_ms)
}
let A = 0
let G = 0
let F = 0
let D = 0
let C = 0
let E = 0
let C5 = 0
let B = 0
B = 494
C5 = 523
E = 330
C = 262
let Quarter = BeatFraction.Quarter
let Half = BeatFraction.Half
let Eighth = BeatFraction.Eighth
D = 294
F = 349
G = 392
A = 440
