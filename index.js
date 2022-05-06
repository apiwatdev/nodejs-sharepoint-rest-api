// const basicCRUD = require('./basicCRUD')

// basicCRUD.getItems().then()
// basicCRUD.createItem({Title: "1234", firstname: "Arisa", lastname: "Bolley"}).then()
// basicCRUD.updateItem(8,{Title: "1234", firstname: "Arisa", lastname: "Bolley"}).then()
// basicCRUD.deleteItem(11).then()

const spAuth = require("./sp-auth");
const { default: axios } = require("axios");
const $REST = require("gd-sprest");


update
(async () => {
      var clientId = "";
      var clientSecret = "";
      var url = "https://apiwatdev.sharepoint.com/sites/Demo";
      const header = await spAuth(clientId, clientSecret, url);
      const query = $REST
        .List("listname")
        .Items()
        .getById(14)
        .getInfo();
    
        console.log(query)
      axios
        .post(`${url}${query.url}`, query.data, {
          headers: { ...query.headers, ...header },
        })
        .then((res) => {
          console.log(res.data.d);
        })
        .catch((error) => {
          console.log(error.message);
        });
    })();

// update
// (async () => {
//       var clientId = "";
//       var clientSecret = "";
//       var url = "https://apiwatdev.sharepoint.com/sites/Demo";
//       const header = await spAuth(clientId, clientSecret, url);
//       const query = $REST
//         .List("listname")
//         .Items()
//         .getById(14)
//         .update({ Title: "888888", firstname: "Fluke", lastname: "Test1" })
//         .getInfo();
    
//         console.log(query)
//       axios
//         .post(`${url}${query.url}`, query.data, {
//           headers: { ...query.headers, ...header },
//         })
//         .then((res) => {
//           console.log(res.data.d);
//         })
//         .catch((error) => {
//           console.log(error.message);
//         });
//     })();

// create
// (async () => {
//   var clientId = "";
//   var clientSecret = "";
//   var url = "https://apiwatdev.sharepoint.com/sites/Demo";
//   const header = await spAuth(clientId, clientSecret, url);
//   const query = $REST
//     .List("listname")
//     .Items()
//     .add({ Title: "10101", firstname: "Fluke", lastname: "Test1" })
//     .getInfo();

//   axios
//     .post(`${url}${query.url}`, query.data, {
//       headers: { ...query.headers, ...header },
//     })
//     .then((res) => {
//       console.log(res.data.d);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// })();

// read
// (async ()=>{
//   var clientId = "";
//   var clientSecret = "";
//   var url = "https://apiwatdev.sharepoint.com/sites/Demo";
//   const header = await spAuth(clientId,clientSecret,url);
//   const query = $REST.List("listname").Items().getById().getInfo()

//   axios
//   .get(`${url}${query.url}`, {
//     headers: { ...query.headers, ...header },
//   })
//   .then((res) => {
//     console.log(res.data.d);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// })()
