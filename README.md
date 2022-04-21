# nodejs-sharepoint-rest-api

### Setup code

---

### **sections**

- [ ] Register add-In
- [ ] Grant permission to an add-in
- [ ] Working with post man
- [ ] Authentication with nodejs (node-sp-auth)
- [ ] Enable Basic Authentification in IIS Settings
- [ ] Work with axios
- [ ] Endpoint url helper (gd-sprest)

## Register add-In 

*1.go to : https://{{your_site_url}}.sharepoint.com/sites/{{sitename}/_layouts/15/appregnew.aspx* :
![Screen Shot 2565-04-21 at 10 44 21](https://user-images.githubusercontent.com/82103342/164367817-f94ec3a9-f5a4-4296-bbec-cfca7ec71ea3.png)

*2.Enter values for the follow form fields:*

*3.Select Create on the form. The page reloads and shows a confirmation of the values that you entered:*

## Grant permission to an add-in
*1. go to : *
*2. กรอก client id แล้ว ทำการกด lookup
*3. เพิ่มสิทธิ 

## Working with *"Postman"*
> **_I attach a Postman collections dot JSON for SharePoint CRUD and Auth in postman folder_**

### Get Access Token

### Retrieve lists by Title

### Retrieve a list by Title And Id

### Retrieve a list by Title And Id With Select Fields

### Create a list

### Update a lisr by Title And Id

### Delete a lisr by Title And Id


## Authentication with node-sp-auth
> ใช้ node libery สำหรับการขอ access token

## Query url with gd-sprest
> ใช้ node libery สำหรับการเขียน request header 

## Work with axios
> ใช้ axios ในการ call api


---

*Ref*
* https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/authorization-and-authentication-of-sharepoint-add-ins
* https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service?tabs=csom
* https://piyushksingh.com/2018/12/26/register-app-in-sharepoint/
* https://www.npmjs.com/package/node-sp-auth
* https://www.npmjs.com/package/gd-sprest
* https://stackoverflow.com/questions/24535200/enable-authentication-for-iis-app-in-powershell
* https://stackoverflow.com/questions/67418291/sharepoint-online-token-type-is-not-allowed
