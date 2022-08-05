const { isTypescript } = require("../utils/helper")

exports.reactStub = function(name){

    if(isTypescript()){
        return {
            stub:tsStub(name),
            extension:'tsx'
        }
    }

    return {
        stub:jsStub(name),
        extension:'jsx'
    }
}


function jsStub(name){
    return `
import React from 'react'

const ${name} = (props) => {

    /**
     * COMPONENT PROPS
     */
    const {children} = props

    return (
        <></>
    )
}

export default ${name}`
}

/**
 * REACT COMPONENT TS STUB
 * @param {*} name
 * @returns
 */
function tsStub(name){
    return `
import React,{ PropsWithChildren } from 'react'

const ${name}: React.FC<PropsWithChildren>  = (props) => {

    /**
     * COMPONENT PROPS
     */
    const {children} = props

    return (
        <></>
    )
}

export default ${name}`
}
