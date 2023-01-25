import express from 'express';
import productsRoutes from './routes/products.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(indexRoutes)
app.use(productsRoutes)

app.listen(3000);
console.log('Server running on port 3000');