import express from "express";
const app = express()

const PORT = 3000

//CONFIGURACION DE RUTAS
app.get('/', (req, res) =>{
    res.send('Bienvenidos a nuestra Cafeteria!!')
})

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
)