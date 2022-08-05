const { reactStub } = require('./react.stubs')
const { vueStubs } = require('./vue.stubs')
const {NextPageStub, NextPageStubSSR} = require("./nextPage.stubs");
const {makeCommands} = require("../constant/commands");

exports.getStub = function (type, name) {
    switch (type) {
        case makeCommands.lrc: // LARAVEL REACT COMPONENT
            return {
                defaultPath: 'resources/js',
                ...reactStub(name)
            }
        case makeCommands.lvc: // LARAVEL VUE COMPONENT
            return {
                defaultPath: 'resources/js',
                ...vueStubs(name)
            }
        case makeCommands.rc: //REACT COMPONENT
            return {
                defaultPath: 'src',
                ...reactStub(name)
            }
        case makeCommands.vc: // VUE COMPONENT
            return {
                defaultPath: 'src',
                ...vueStubs(name)
            }
        case makeCommands.nxc: // NEXT COMPONENT
            return {
                defaultPath: '',
                ...reactStub(name)
            }
        case makeCommands.nxp: // NEXT PAGE
            return {
                defaultPath: 'pages',
                ...NextPageStub(name)
            }
        case makeCommands.nxp_ssr: // NEXT PAGE WITH SSR
            return {
                defaultPath: 'pages',
                ...NextPageStubSSR(name)
            }
        case makeCommands.nxpd: // NEXT DYNAMIC PAGE
            return {
                defaultPath: 'pages',
                ...NextPageStub(name),
                dynamic:true
            }
        case makeCommands.nxpd_ssr: // NEXT DYNAMIC PAGE WITH SSR
            return {
                defaultPath: 'pages',
                ...NextPageStubSSR(name),
                dynamic:true
            }
        default:
            return undefined
    }
}
