const { makeCommands } = require("../constant/commands")
const { exitWithErrorMessage} = require("./logger")
const {flags} = require("../constant/flags");

/**
 * CHECK IF COMMANDS CONTAINS TYPESCRIPT FLAG
 * @returns
 */
exports.isTypescript = function(){
    const flag = process.argv
    return flag.includes(flags.typescript)
}

/**
 * CHECK IS COMMAND IS VALID
 */
exports.isValidMakeCommand = function(){
    const command = process.argv[2]

    if(!command){
        return false
    }

    /**
     * COMMAND PARSING
     */
    const commandArray = command.split(":")

    if(commandArray[0] === "make"){

        if(commandArray[1] && makeCommands.includes(commandArray[1])){
            return true
        }

    }

    return false
}

exports.formattedCommand = function(){
    const command = process.argv[2]

    /**
     * COMMAND PARSING
     */
    const commandArray = command.split(":")

    return {
        action:commandArray[0],
        command:commandArray[1],
    }
}


/**
 * HAS FILE PATH CHECK
 */
exports.hasFilePath = function(){
    const filepath = process.argv[3]

    if(!filepath){
        exitWithErrorMessage('Enter file name or path')
    }

    const patharray = filepath.split('/')

    return {
        filepath,
        name:patharray[patharray.length-1]
    }
}

/**
 * GET NAME FROM FLAG
 * @returns {string|boolean}
 */
exports.getName = function(){
    const arguments =  process.argv
    const nameArgv = arguments.find(item=> item.match(flags.name))

    if(nameArgv){
        const nameArgvArray = nameArgv.split("=")
        if(nameArgvArray[1]){
            return nameArgvArray[1]
        }
        exitWithErrorMessage("When using --name flag please specify valid seperated by '=' ")
    }

    return false;
}




