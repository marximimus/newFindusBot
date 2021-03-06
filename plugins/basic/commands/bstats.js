exports.output = async ({message, guild}) => {
    var translations = {pl: ``, en: ``, ru: ``}
    translations.pl = 
`Ping api: \`${Math.floor(ef.ping)}ms.\`
Ping bota: \`${Math.abs(Date.now() - message.createdTimestamp)}ms.\`
Wykonane komendy: \`${ef.db.cache['botinfo'][0].commandsdone}\``
    translations.en = 
`Api ping: \`${Math.floor(ef.ping)}ms.\`
Bot ping: \`${Math.abs(Date.now() - message.createdTimestamp)}ms.\`
Commands Used: \`${ef.db.cache['botinfo'][0].commandsdone}\``
    translations.ru =
`API-пинг: \`${Math.floor(ef.ping)}ms.\`
бот пинг: \`${Math.abs(Date.now() - message.createdTimestamp)}ms.\`
Используемые команды: \`${ef.db.cache['botinfo'][0].commandsdone}\``
    ef.models.send({
        object: message,
        message: `${translations[guild.settings.language]}`,
    })
}
  
exports.data = {
    triggers: ['bstats'],
    description: {en: 'Shows bot stats.', pl: 'Pokazuje statystyki bota.', ru: 'Показывает статистику ботов.'}
}