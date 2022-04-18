const spauth = require("node-sp-auth");

module.exports = (clientId,clientSecret,url) => {
    return new Promise((resolve, reject) => {
      const headers = {};
      spauth
        .getAuth(url, {
          clientId,
          clientSecret,
        })
        .then((options) => {
          for (var key in options.headers) {
            headers[key] = options.headers[key];
          }
          resolve(headers);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  