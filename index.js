const { default: axios } = require("axios");
const spAuth = require("./sp-auth");
const $REST = require("gd-sprest");

// setup key and config
const clientId = "client_id";
const clientSecret = "client secret";
const url = "your_sharepoint_url";
const listname = 'your_list_name'

spAuth(clientId, clientSecret, url).then((headers) => {
 
  const query = $REST.List(listname).Items().getInfo();
  axios
    .get(`${url}${query.url}`, {
      headers: { ...query.headers, ...headers},
    })
    .then((res) => {
      console.log(res.data.d);
    })
    .catch((error) => {
      console.log(error.message);
    });
});



