const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = {
  command: 'ai',
  handler: async (sock, msg, text, isGroup, isOwner) => {
    const from = msg.key.remoteJid;
    const query = text.slice(4); // إزالة .ai
    if (!query) return sock.sendMessage(from, { text: 'Please provide a query.' });

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: query }],
      });
      await sock.sendMessage(from, { text: response.choices[0].message.content });
    } catch (error) {
      await sock.sendMessage(from, { text: 'Error with AI.' });
    }
  }
};
