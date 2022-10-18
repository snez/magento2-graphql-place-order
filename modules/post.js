const fetch = require("sync-fetch");
const util = require("util");

module.exports = function(query, sessionId, callback)
{
    var response = fetch(process.env.BASE_URL + '/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + sessionId
      },
      body: JSON.stringify({query: query})
    });

    try
    {
      response = response.json();
    }
    catch (e)
    {
      console.waring(e.message);
      return null;
    }

    console.log('Response:', util.inspect(response, false, null, true), "\n");

    return response.data;
};
