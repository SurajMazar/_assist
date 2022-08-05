const fs = require('fs')
const { successLog, errorLog } = require('./logger')

exports.generateFile = function (path, content, extension, dynamic = false) {
    /**
     * GENERATE DYNAMIC PATH ARRAY
     */
    if(dynamic){
        path = generateDynamicPath(path)
    }

    fs.mkdirSync(`${__dirname}/../../${path}`, { recursive: true })

    const filepath = `${__dirname}/../../${path}/index.${extension}`

    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(`${filepath}`, content)
        successLog(`${path}/index.${extension} file has been saved!`)
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
