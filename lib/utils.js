require('dotenv').config();

function isOwner(sender) {
  const ownerNumber = process.env.OWNER_NUMBER;
  return sender.includes(ownerNumber);
}

function formatMenu() {
  return `
*🌟 AyaTech Bot Menu 🌟*

*Owner:* Aya Es-samlaly
*Country:* Morocco
*Domain:* Programming – Bots – Cybersecurity – AI
*Tech Identity:* digitera
*Email:* ayaes-samlalytech@proton.me

*📋 Commands:*

*AI:*
- .ai <query> → Chat with AI

*Group:*
- .add <number> → Add member
- .kick <@user> → Kick member
- .promote <@user> → Promote to admin
- .demote <@user> → Demote from admin
- .mute → Mute group

*Download:*
- .yt <url> → Download YouTube video/audio
- .tiktok <url> → Download TikTok video
- .ig <url> → Download Instagram video

*Tools:*
- .broadcast <message> → Send to all chats
- .antispam → Toggle anti-spam

*Owner Only:*
- .menu → Show this menu
- .help → Help
- .ping → Ping
- .alive → Check if alive
- .owner → Owner info
  `;
}

module.exports = { isOwner, formatMenu };
