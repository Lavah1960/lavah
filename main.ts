radio.onReceivedNumber(function (receivedNumber) {
    radio.sendValue("name", 0)
})
radio.onReceivedValue(function (name, value) {
    radio.sendString("FM3")
})
