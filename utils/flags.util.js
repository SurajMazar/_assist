const { flags } = require("../constant/flags")
const { exitWithErrorMessage } = require("./logger")

/**
 * CHECK IF COMMANDS CONTAINS TYPESCRIPT FLAG
 * @returns
 */
 exports.isTypescript = function () {
    const flag = process.argv
    return flag.includes(flags.typescript)
}


/**
 * CHECK IF COMMAND HAS HELP FLAG
 */
 exports.helpFlag = function(){
    const flag = process.argv
    const command = process.argv[2]
    return !command || flag.includes(flags.help)
}


/**
 * GET NAME FROM FLAG
 * @returns {string|boolean}
 */
 exports.getName = function () {
    const arguments = process.argv
    const nameArgv = arguments.find((item) => item.match(flags.name))

    if (nameArgv) {
        const nameArgvArray = nameArgv.split('=')
        if (nameArgvArray[1]) {
            return nameArgvArray[1]
        }
        exitWithErrorMessage(
            "When using --name flag please specify valid seperated by '=' "
        )
    }

    return false
}

/**
 * CHECK IF COMMAND HAS TEST FLAG
 * @returns 
 */
exports.hasTestFlag =  function(){
    const arguments = process.argv
    return arguments.includes(flags.test)
}