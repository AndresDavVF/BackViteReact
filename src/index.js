const express = require('express');
const conectarBD=require('../config/db');
const cors = require('cors');


// Coniguracion Express y puerto 
const app = express();

const port = 5000;

conectarBD();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/Clientes', require('../routes/RoutesCliente'));
app.use('/api/Productos', require('../routes/RoutesProducto'));
app.use('/api/Proveedores', require('../routes/RoutesProveedor'));
// enlazamos la conexion de la DB




app.listen(port,() => console.log('Conexion Exitosa http://localhost:5000'));

app.get('/', (req,res)=>{
    res.send("Bienvenido nuestro servidor esta configurado");
});