const { getStub } = require("../stubs")
const { isValidMakeCommand, hasFilePath, formattedCommand } = require("../utils/helper")
const { errorLog } = require("../utils/logger")
const path = require('path')
const { generateFile } = require("../utils/generateFile")

function app(){
    if(isValidMakeCommand()){

       const filepath = hasFilePath() // exists if doesnt have file path

       const fcmd = formattedCommand()

       const stubData = getStub(fcmd.command ,filepath.name)

       if(stubData){
            generateFile(path.join(stubData.defaultPath,filepath.filepath),stubData.stub,stubData.extension)
       }

    }else{
        errorLog("Invalid command")
    }
}

module.exports = app