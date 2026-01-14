const { isOwner } = require('../lib/utils');

module.exports = {
  command: 'owner',
  ownerOnly: true,
  handler: async (sock, msg, text, isGroup, isOwner) => {
    const from = msg.key.remoteJid;
    await sock.sendMessage(from, { text: 'Owner: Aya Es-samlaly (+212728254498)' });
  }
};

// يمكنك إضافة .ping, .alive هنا بنفس الطريقة
