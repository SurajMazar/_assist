const { isTypescript } = require("../../utils/flags.util")

/**
 * GET REACT TEST STUB
 * @param {*} name 
 * @returns 
 */
exports.getReactTestStub = function(name){
    if(isTypescript()){
       return {
            stub:reactTestStub(name),
            extension:'tsx'
       } 
    }

    return {
        stub:reactTestStub(name),
        extension:'jsx'
    } 
}


/**
 * REACT TEST STUB
 */
function reactTestStub(name){
return `
import React from 'react'
import { render } from '@testing-library/react'
import ${name} from '.'

describe('${name}',()=>{

    // Render component test
    test("${name} should render", async ()=>{

    })

})
`
}