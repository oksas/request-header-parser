 module.exports = (headers) => {
     return {
       ipaddress: headers["x-forwarded-for"],
       language: headers["accept-language"].substr(0, 5),
       software: /\((.+)\)/g.exec(headers["user-agent"])[1]
   };
 }