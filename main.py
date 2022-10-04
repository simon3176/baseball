def on_button_pressed_a():
    global Balls
    Balls += 1
    basic.show_number(Balls)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(Strike)
    basic.show_number(Balls)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Strike
    Strike += -1
    basic.show_number(Strike)
input.on_button_pressed(Button.B, on_button_pressed_b)

Balls = 0
Strike = 0
basic.show_icon(IconNames.SMALL_SQUARE)
Strike = 0
Balls = 0
basic.show_number(0)
Balls = input.button_is_pressed(Button.A)

def on_forever():
    pass
basic.forever(on_forever)
