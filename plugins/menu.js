const { formatMenu } = require('../lib/utils');

module.exports = {
  command: 'menu',
  handler: async (sock, msg, text, isGroup, isOwner) => {
    const from = msg.key.remoteJid;
    await sock.sendMessage(from, { text: formatMenu() });
  }
};
