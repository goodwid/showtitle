const axios = require('axios');
const html = require('parse5');

async function getTitle(URI) {
  const results = await axios.get(URI);
  const [title] = results.data.match(/<title[^>]*>([^<]+)<\/title>/i);
  const data = html.parseFragment(title).childNodes[0].childNodes[0].value;
  return data;
}

module.exports = getTitle;
