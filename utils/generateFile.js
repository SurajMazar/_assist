const fs = require('fs')
const { successLog, errorLog } = require('./logger')

exports.generateFile = function(path,content,extension){
    fs.mkdirSync(`${__dirname}/../../${path}`,{recursive:true})
    const filepath = `${__dirname}/../../${path}/index.${extension}`;

    if(!fs.existsSync(filepath)){
        fs.writeFileSync(`${filepath}`,content)
        successLog(`${path}/index.${extension} file has been saved!`)
    }else{
        errorLog("File already exists!")
    } 
}

