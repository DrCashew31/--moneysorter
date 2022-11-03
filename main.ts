TM1650.on()
let money_2 = 0
let money_1 = 0
let money_left = 2
basic.forever(function () {
    if (ModuleWorld_Digital.IR(ModuleWorld_Digital.mwDigitalNum.P12P13, ModuleWorld_Digital.enObstacle.Obstacle)) {
        money_1 += 1
        basic.pause(500)
    }
})
basic.forever(function () {
    if (money_1 == 1) {
        money_left += -1
    } else if (money_1 == 2) {
        money_left += -1
    }
})
basic.forever(function () {
    TM1650.digit(money_left, 1)
})
