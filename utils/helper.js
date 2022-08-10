const { makeCommands } = require('../constant/commands')
const { exitWithErrorMessage, successLog} = require('./logger')
const {flags} = require("../constant/flags");


/**
 * CHECK IS COMMAND IS VALID
 */
exports.isValidMakeCommand = function () {
    const command = process.argv[2]

    if (!command) {
        process.exit(1)
    }

    /**
     * COMMAND PARSING
     */
    const commandArray = command.split(':')

    if (commandArray[0] === 'make') {
        if (commandArray[1] && Object.values(makeCommands).includes(commandArray[1])) {
            return true
        }
    }

    return false
}

exports.formattedCommand = function () {
    const command = process.argv[2]

    /**
     * COMMAND PARSING
     */
    const commandArray = command.split(':')

    return {
        action: commandArray[0],
        command: commandArray[1]
    }
}

/**
 * HAS FILE PATH CHECK
 */
exports.hasFilePath = function () {
    const filepath = process.argv[3]

    if (!filepath) {
        exitWithErrorMessage('Enter file name or path')
    }

    const patharray = filepath.split('/')

    return {
        filepath,
        name: patharray[patharray.length - 1]
    }
}



/**
 * SHOW HELPERS
 */
exports.showHelpers =  function(){
successLog(`
    Make commands:
    make:rc         - REACT COMPONENT
    make:vc         - VUE COMPONENT
    make:lrc        - LARAVEL REACT COMPONENT
    make:lvc        - LARAVEL VUE COMPONENT
    make:nxc        - NEXT COMPONENT
    make:nxp        - NEXT PAGE
    make:nxpd       - NEXT DYNAMIC PAGE
    make:nxp-ssr    - NEXT PAGE WITH SSR
    make:nxpd-ssr   - NEXT DYNAMIC PAGE WITH SSR

    Flags:
    --help          - to see the available commands
    --ts            - for typescript support
    --name={name}   - component name
`)
process.exit(1)
}
