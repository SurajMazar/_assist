const { getStub } = require('../stubs')
const {
    isValidMakeCommand,
    hasFilePath,
    formattedCommand,
    showHelpers
} = require('../utils/helper')
const { errorLog } = require('../utils/logger')
const path = require('path')
const { generateFile, generateTestFiles } = require('../utils/generateFile')
const { generateCamelCase } = require('../utils/string')
const { helpFlag, getName, hasTestFlag } = require('../utils/flags.util')

function app() {

    if(helpFlag()){
        showHelpers()
    }

    if (isValidMakeCommand()) {
        const filepath = hasFilePath() // exists if doesnt have file path
        const name = getName() // get name from args
        const fcmd = formattedCommand() 
        
        const componentName = generateCamelCase(name ? name : filepath.name) //COMPONENT NAME

        const stubData = getStub(
            fcmd.command,
            componentName
        )

        if (stubData) {
            generateFile(
                path.join(stubData.defaultPath, filepath.filepath),
                stubData.stub,
                stubData.extension,
                stubData.dynamic || false
            )
        }

        if(hasTestFlag()){
            generateTestFiles(
                path.join(stubData.defaultPath, filepath.filepath),
                fcmd.command,
                componentName
            )
        }
    } else {
        errorLog('Invalid command')
    }
}

module.exports = app
