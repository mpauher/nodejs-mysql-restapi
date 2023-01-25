import express from 'express';

const app = express();

app.get('/employes', (req, res) => res.send('Obteniendo productos'))

app.post('/employes', (req, res) => res.send('Creando productos'))

app.put('/employes', (req, res) => res.send('Actualizando productos'))

app.delete('/employes', (req, res) => res.send('liminando productos'))



app.listen(3000);
console.log('Server running on port 3000');