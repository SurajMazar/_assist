const { makeCommands } = require("../constant/commands")
const { errorLog } = require("./logger")

/**
 * CHECK IF COMMANDS CONTAINS TYPESCRIPT FLAG
 * @returns 
 */
exports.isTypescript = function(){
    const flag = process.argv
    return flag.includes("--ts")
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
        errorLog('Enter file name or path')
        return process.exit(1)
    }

    const patharray = filepath.split('/') 

    return {
        filepath,
        name:patharray[patharray.length-1]
    }
}