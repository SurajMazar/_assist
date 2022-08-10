const { exitWithErrorMessage } = require("./logger");
const fs = require('fs')

/**
 * Read file contents
 * @param {*} String filename 
 */
function readFile(filename){
    try{
        const contents = fs.readFileSync(`${process.cwd()}/${filename}`)
        return contents
    }catch{
        exitWithErrorMessage(`${filename} doesn't exists !`)
    }
}

/**
 * 
 * @param {*} filename 
 * @param {*} string 
 */
exports.fileContains = function(filename,string){
    const contents = readFile(filename)
    return contents.match(string)
}