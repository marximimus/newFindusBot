module.exports = async (message) => {
    ef.models.send({
        object: message,
        message: `Cześć! Jestem ***${ef.user.username}***,
        Wpisz **${ef.prefix}help** aby uzyskać pomoc!`,
        thumbnail: ef.user.displayAvatarURL,
        color: ef.colors.aqua
    })
}