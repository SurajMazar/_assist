const { getStub } = require('../stubs')
const {
    isValidMakeCommand,
    hasFilePath,
    formattedCommand,
    getName, showHelpers, helpFlag
} = require('../utils/helper')
const { errorLog } = require('../utils/logger')
const path = require('path')
const { generateFile } = require('../utils/generateFile')
const { generateCamelCase } = require('../utils/string')

function app() {

    if(helpFlag()){
        showHelpers()
    }

    if (isValidMakeCommand()) {
        const filepath = hasFilePath() // exists if doesnt have file path

        const name = getName() // get name from args

        const fcmd = formattedCommand()

        const stubData = getStub(
            fcmd.command,
            generateCamelCase(name ? name : filepath.name)
        )

        if (stubData) {
            generateFile(
                path.join(stubData.defaultPath, filepath.filepath),
                stubData.stub,
                stubData.extension,
                stubData.dynamic || false
            )
        }
    } else {
        errorLog('Invalid command')
    }
}

module.exports = app
