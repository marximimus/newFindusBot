exports.output = async ({message}) => {
    ef.models.apibadosz({
        object: message,
        endpoint: 'dadjoke',
        type: 'text',
        output: 'dadjoke'
    })
}
exports.data = {
    triggers: ['dadjoke'],
    description: `Pokazuje żatr 'taty'. (W języku angielskim)`
}
  