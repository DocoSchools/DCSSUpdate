const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const rssUrl = 'https://cdn.mysitemapgenerator.com/shareapi/rss/2603965225';
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch RSS feed' })
    };
  }
};
