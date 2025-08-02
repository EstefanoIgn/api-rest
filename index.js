import express from "express";
const app = express()

const PORT = 3000
//REQUERIMOS MODULOS
import notFound from "./src/middlewares/not-found.js";


//MIDDLEWARE

app.use( (req, res, next) =>{
    res.status(404).json({error: 'Not found!'})
})
app.use( notFound)



//CONFIGURACION DE RUTAS
app.get('/', (req, res) =>{
    res.json({'message': 'Bienvenidos a nuestra Cafeteria!!' })
})

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
)