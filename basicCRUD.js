const { default: axios } = require("axios");
const spAuth = require("./sp-auth");
const $REST = require("gd-sprest");

// setup key and config
var clientId = "client_id";
var clientSecret = "client secret";
var url = "your_sharepoint_url";
var listname = "your_list_name";

clientId = "045a0ccc-9d8e-4605-a39f-0aa5da0212a5";
clientSecret = "+AVOfOnjrmcKLAkKxtL1ls3UGFlaMQzE9+h3R+Zigpg=";
url = "https://apiwatdev.sharepoint.com/sites/Demo";
listname = "listname";

module.exports.getItems = async () => {
  spAuth(clientId, clientSecret, url).then((headers) => {
    const query = $REST.List(listname).Items().getInfo();
    axios
      .get(`${url}${query.url}`, {
        headers: { ...query.headers, ...headers },
      })
      .then((res) => {
        console.log(res.data.d);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

/**
 *
 * @param {object} data
 * @param {string} data.Title
 * @param {string} data.fristname
 * @param {string} data.lastname
 */
module.exports.createItem = async (data) => {
  spAuth(clientId, clientSecret, url).then((headers) => {
    const query = $REST.List(listname).Items().add(data).getInfo();

    axios
      .post(`${url}${query.url}`, query.data, {
        headers: { ...query.headers, ...headers },
      })
      .then((res) => {
        console.log(res.data.d);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

/**
 * @param {number} id
 * @param {object} data
 * @param {string} data.Title
 * @param {string} data.fristname
 * @param {string} data.lastname
 */
module.exports.updateItem = async (id, data) => {
  spAuth(clientId, clientSecret, url).then((headers) => {
    const query = $REST.List(listname).getItemById(id).update(data).getInfo();
    console.log(query);
    axios
      .post(`${url}${query.url}`, query.data, {
        headers: { ...query.headers, ...headers },
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

/**
 * @param {number} id
 */

module.exports.deleteItem = async (id) => {
    spAuth(clientId, clientSecret, url).then((headers) => {
        const query = $REST.List(listname).getItemById(id).delete().getInfo();
        console.log(query);
        axios
          .post(`${url}${query.url}`, query.data, {
            headers: { ...query.headers, ...headers },
          })
          .then((res) => {
            console.log(res.data.d);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
};
