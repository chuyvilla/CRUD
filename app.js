//modulos terceros
const express =require("express")  
const port =3000
const initializeApp = require('./initialize') 
//rutas
initializeApp()

const rutaPelicula = require("./ROUTES/pelicula_routes")
const app = express()
app.use(express.json())

app.use("/api", rutaPelicula)


app.listen(port, () => { 
    console.log("servidor ejecutado" , port)})