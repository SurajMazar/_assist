
/**
 * SUCCESS LOG
 * @param {*} message 
 */
exports.successLog = function(message){
    console.log('\x1b[32m',message)
}

/**
 * WARNING LOG
 * @param {*} message 
 */
 exports.warningLog = function(message){
    console.log('\x1b[33m',message)
}

/**
 * ERROR LOG
 * @param {*} message 
 */
 exports.errorLog = function(message){
    console.log('\x1b[31m',message)
}

