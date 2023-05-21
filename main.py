def on_button_pressed_a():
    music.set_volume(255)
    for index in range(2):
        for index2 in range(2):
            play_sine_sound(C, 300)
            play_sine_sound(E, 300)
        play_sine_sound(G, 600)
        play_sine_sound(G, 600)
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
input.on_button_pressed(Button.A, on_button_pressed_a)

def play_sine_sound(NoteName: number, diration_ms: number):
    music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
            NoteName,
            NoteName,
            255,
            255,
            diration_ms,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.UNTIL_DONE)
A = 0
G = 0
F = 0
D = 0
C = 0
E = 0
C5 = 0
B = 0
B = 494
C5 = 523
E = 330
C = 262
Quarter = BeatFraction.QUARTER
Half = BeatFraction.HALF
Eighth = BeatFraction.EIGHTH
D = 294
F = 349
G = 392
A = 440