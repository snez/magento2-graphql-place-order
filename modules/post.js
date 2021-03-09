const fetch = require("sync-fetch");

module.exports = function(query, callback)
{
    var response = fetch(process.env.BASE_URL + '/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: query})
    }).json();

    console.log('Response:', response, "\n");

    return response.data;
};
