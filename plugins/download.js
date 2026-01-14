const ytdl = require('ytdl-core');

module.exports = {
  command: 'yt',
  handler: async (sock, msg, text, isGroup, isOwner) => {
    const from = msg.key.remoteJid;
    const url = text.slice(4);
    if (!ytdl.validateURL(url)) return sock.sendMessage(from, { text: 'Invalid URL.' });

    const info = await ytdl.getInfo(url);
    const stream = ytdl(url, { quality: 'highest' });
    await sock.sendMessage(from, { video: { stream }, caption: info.videoDetails.title });
  }
};

// أضف TikTok و Instagram باستخدام مكتبات مشابهة
