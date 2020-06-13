const { clipboard } = require('electron')
const interpreter = require('./interpreter/interpreter')

window.evaluateCode = function (code) {
    let result = utools.db.get("code")
    let data = {
        _id: "code",
        data: code
    }
    if (result) {
        data._rev = result._rev
    }
    utools.db.put(data)
    return interpreter.evaluateCode(code)
}

window.saveClipboard = function (text) {
    clipboard.writeText(text)
}