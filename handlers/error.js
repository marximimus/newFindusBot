module.exports = async (message, error) => {
    const code = Math.floor(Math.random() * 1000 + 1)
    ef.models.send({
        object: message,
        message: `O nie! Jakiś błąd wkradł się do mojego kodu!
                  Muszę powiadomić developera. On napewno pomoże.
                  Tymczasem informuję, że spowodowałeś błąd o kodzie **#${code}**.
                  Przepraszam za utrudnienia!
                `,
        color: ef.colors.red
    })
    ef.roles.developers.forEach(dev => {
        ef.users.get(dev).send(`
***Error Raport:***

**[Server ID]:** \`${message.guild.id}\`,
**[User ID]:** \`${message.author.id}\`,
**[Command]:** \`${message.content}\`,

${error.stack ? `**[Error Stack]:**
\`${error.stack}\`` : `**[Error]:**
\`${error}\``}`)
    });
}