const axios = require('axios');

async function getTitle(URI) {
  const results = await axios.get(URI);
  let title = results.data.match(/<title[^>]*>([^<]+)<\/title>/i);

  return title[0].replace(/<(?:.|\s)*?>/g, "");;
}

module.exports = getTitle;
