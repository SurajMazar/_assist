/**
 * GENERATE CAMEL CASE FROM ANY STRING
 * @param str
 * @returns {string}
 */
exports.generateCamelCase = function (str) {
    const camelCase = str.replace(/[^a-zA-Z0-9\[\]]]+(.)/g, function (match, chr) {
        return chr.toUpperCase()
    })
    return FirstCharcterToUpper(camelCase)
}

/**
 * CAPITALIZES FIRST LETTER
 * @param string
 * @returns {string}
 * @constructor
 */
function FirstCharcterToUpper(string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
}
