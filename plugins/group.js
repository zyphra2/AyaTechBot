module.exports = {
  command: 'kick',
  ownerOnly: true,
  handler: async (sock, msg, text, isGroup, isOwner) => {
    if (!isGroup) return sock.sendMessage(msg.key.remoteJid, { text: 'This is for groups only.' });
    const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention a user.' });
    await sock.groupParticipantsUpdate(msg.key.remoteJid, mentioned, 'remove');
    await sock.sendMessage(msg.key.remoteJid, { text: 'User kicked.' });
  }
};

// أضف .add, .promote, .demote, .mute بنفس الطريقة باستخدام sock.groupParticipantsUpdate
