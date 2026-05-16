const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();


// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// RUTAS
app.use('/api/clientes', require('./routes/clientes'));


// RUTA PRINCIPAL
app.get('/', (req, res) => {

    res.json({
        mensaje: 'API REST funcionando'
    });

});


// SERVIDOR
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor escuchando en el puerto ${PORT}`);

});