const express = require('express');
const axios = require('axios');  //61k (gzipped: 22.7k)

const app = express();
const port = 3000;

// ruta (e.g., HTML, CSS)
app.use(express.static('public'));
// obtener datos de un gato por su nombre
app.get('/gato/:name', async(req, res) => {
    const { name } = req.params;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/gato/${name}`);
        res.json(response.data);
    }   catch (error) {
        res. status(404).send('gato no encontrado');
    }
    });

    // Inicia el servidor 
    app.listen(port, () => {
        console.log(`Servidor escuchado en http://localhost:${port}`);
    });