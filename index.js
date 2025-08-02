import express from "express";
const app = express()

const PORT = 3000
//REQUERIMOS MODULOS O IMPORTAMOS
import productsRouter from './src/routes/products.router.js'

//LE DECIMOS A LA APPA QUE USE ESTOS ROUTES
app.use('/api',productsRouter)



import notFound from "./src/middlewares/not-found.js";

//CONFIGURACION DE RUTAS
app.get('/', (req, res) =>{
    res.json({'message': 'Bienvenidos a nuestra Cafeteria!!' })
})

//MIDDLEWARE

app.use( notFound)

app.listen(PORT, () =>
console.log(`http://localhost:${PORT}`)
)