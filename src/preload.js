const { clipboard } = require('electron')
const interpreter = require('./interpreter/interpreter')

window.evaluateCode = function (code) {
    return interpreter.evaluateCode(code)
}

window.getClipboard = function () {
    return clipboard.readText()
}