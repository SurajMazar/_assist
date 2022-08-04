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
        default:
            return undefined
    }
}