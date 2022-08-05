const { reactStub } = require("./react.stubs")
const { vueStubs } = require("./vue.stubs")

exports.getStub = function(type,name){
    switch(type){
        case "lrc":
            return {
                defaultPath:'resources/js',
                ...reactStub(name)
            }
        case "lvc":
            return {
                defaultPath:'resources/js',
                ...vueStubs(name)
            }
        case "rc":
            return {
                defaultPath:'src',
                ...reactStub(name)
            }
        case "vc":
            return {
                defaultPath:'src',
                ...vueStubs(name)
            }
        default:
            return undefined
    }
}