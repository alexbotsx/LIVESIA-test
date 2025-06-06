let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:LIVEBOT;;\nFN:LIVEBOT\nORG:LIVEBOT\nTITLE:\nitem1.TEL;waid=56945081052:56945081052\nitem1.X-ABLabel:LIVEBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:LIVEBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'LIVEBOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
