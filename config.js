const fs = require('fs')

const config = {
    owner: "-",
    botNumber: "-",
    setPair: "XZEETSHD",
    thumbUrl: "https://img1.pixhost.to/images/8676/640194975_xzetxshadow.jpg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "ShadowExe V2.0",
        packname: 'ShadowExe V2.0',
        description: "This Is Shadow Exe",
        author: 'https://xyzzmoods.panelmaster.biz.id',
        footer: "© XzeetXShadow - 2025"
    },
    newsletter: {
        name: "ShadowExe",
        id: "120363403742460170@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@xyzzmoods",
        GitHub: "https://github.com/XyzzMoods",
        Telegram: "https://t.me/XyzzMoodss",
        ChannelWA: "https://whatsapp.com/channel/0029VbAonO2GE56qy9FyUE2t"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
