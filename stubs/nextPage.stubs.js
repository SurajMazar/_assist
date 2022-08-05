const { isTypescript } = require('../utils/helper')

exports.NextPageStub = function (name) {
    if (isTypescript()) {
        return {
            stub: tsStub(name),
            extension: 'tsx'
        }
    }

    return {
        stub: jsStub(name),
        extension: 'jsx'
    }
}


exports.NextPageStubSSR = function (name) {
    if (isTypescript()) {
        return {
            stub: tsStubSSR(name),
            extension: 'tsx'
        }
    }

    return {
        stub: jsStubSSR(name),
        extension: 'jsx'
    }
}

function jsStub(name) {
    return `
import React from 'react'

const ${name} = () => {

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
function tsStub(name) {
    return `
import React from 'react'
import { NextPage } from 'next'

const ${name}: NextPage  = () => {
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
function tsStubSSR(name) {
    return `
import React from 'react'
import { NextPage, GetServerSideProps } from 'next'

const ${name}: NextPage  = () => {
    return (
        <></>
    )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    return {
     props:{}
    }
}

export default ${name}`
}


/**
 * REACT COMPONENT TS STUB
 * @param {*} name
 * @returns
 */
function jsStubSSR(name) {
    return `
import React from 'react'

const ${name}  = () => {
    return (
        <></>
    )
}

export const getServerSideProps = async (context) => {
    return {
     props:{}
    }
}

export default ${name}`
}
