const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("Welcome to my awesome app!. this is awesome. My first comeplte CI/CD is working."); 
 });

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
