const Discord = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client()

function getQuotes() {
  return fetch("https://zenquotes.io/api/random")
  .then (res => {
    return res.json()
  })
  .then (data => {
    return data[0]['q'] + ' - ' + data[0]['a']
  })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return 

  if (msg.content === '$inspire') {
    getQuotes().then(quote => msg.channel.send(quote))
  }
})

client.login(process.env.TOKEN)


