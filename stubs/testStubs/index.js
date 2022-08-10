const { makeCommands } = require("../../constant/commands");
const { getReactTestStub } = require("./reactTest");

/**
 * GET TEST STUB
 * @param {*} command 
 * @param {*} name 
 * @returns 
 */
exports.getTestStubs = function(command,name){
    
    const reactCommands = [makeCommands.lrc, makeCommands.rc, makeCommands.nxc]
    
    if (reactCommands.includes(command)){
        return {
            ...getReactTestStub(name)
        }
    }

    return undefined
}