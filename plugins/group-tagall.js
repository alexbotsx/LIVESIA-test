let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `@𝑪𝒍𝒂𝒏𝒍𝒊𝒗𝒆.𝒇𝒇 ${pesan}`
  let teks = `✨𝑪𝑳𝑨𝑵 𝑳𝑰𝑽𝑬✨
${oi}\n\n ── 𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨\n`
  for (let mem of participants) {
  teks += `⚜️•@${mem.id.split('@')[0]}\n`}
  teks += `└@𝑪𝒍𝒂𝒏𝒍𝒊𝒗𝒆.𝒇𝒇`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|sia)$/i
  handler.admin = true
  handler.group = true
  export default handler