const express = require("express")
const router = express.Router()
//controlador
const controladorpelicula = require("../CONTROLLERS/pelicula_controllers")
//acciones
router.get("/pelicula/:id", controladorpelicula.get)  
router.get("/pelicula", controladorpelicula.list)
router.post("/pelicula",controladorpelicula.create)
router.put("/pelicula/:id", controladorpelicula.update)
router.delete("/pelicula/:id", controladorpelicula.destroy)
module.exports = router