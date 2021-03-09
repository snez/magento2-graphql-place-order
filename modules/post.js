const fetch = require("sync-fetch");
const util = require("util");

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

    console.log('Response:', util.inspect(response, false, null, true), "\n");

    return response.data;
};
