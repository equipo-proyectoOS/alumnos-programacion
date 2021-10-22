const express = require('express');


//inicializaciones
const app = express();
require('dotenv').config();
require('./connection');

//middlewares- -

//conexion al server
app.set("port", process.env.PORT || 5000);



//devuelve la conexion
app.listen(app.get("port"),()=>
    console.log(`server on port ${app.get("port")}`)
);
