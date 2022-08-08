const fs = require('fs')
const path = require('path')
const { successLog, errorLog } = require('./logger')

exports.generateFile = function (pathname, content, extension, dynamic = false) {

    /**
     * TERMINAL PATH
     */
    const terminalPath = process.cwd()

    /**
     * GENERATE DYNAMIC PATH ARRAY
     */
    if(dynamic){
        pathname = generateDynamicPath(pathname)
    }

    fs.mkdirSync(path.join(terminalPath,pathname), { recursive: true })

    const filepath = `${path.join(terminalPath,pathname)}/index.${extension}`

    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(`${filepath}`, content)
        successLog(`${pathname}/index.${extension} file has been saved!`)
    } else {
        errorLog('File already exists!')
    }
}

// DYNAMIC PATH ARRAY
/**
 *
 * @param path
 * @returns {*}
 */
function generateDynamicPath(path){
    const pathArray =  path.split('/')
    pathArray[pathArray.length - 1] = `[${pathArray[pathArray.length - 1]}]`
    return pathArray.join('/')
}
