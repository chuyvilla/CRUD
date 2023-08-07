const peliculaManager = require("../MANAGERS/pelicula_managers")
const peliculaController = {
    get:async(req, res) => {
        try{
            const pelicula = await peliculaManager.get(req)
            if (!pelicula){
                res.status(404).send ("pelicula no encontrada")
            } else {
                res.status (200).send(pelicula)
            }
        }catch (error){
            res.status (500).send("error")
        }
    },
    list:async(req,res) => {
        try{
            const peliculaList = await peliculaManager.list()
            res.status(200).send(peliculaList)
        }catch (error){
            res.status(500).send("error")
        }
    }, 
    create: async (req, res) => {
    try{
    const peliculaCreated = await peliculaManager.create(req)
res.status(201).send("pelicula registrada corectamente")
    }catch(error){
        res.status(500).send("error")
    }
},
update:async (req,res) => {
try{
    const peliculaUpdate = await peliculaManager.update(req)
    if (!peliculaUpdate) {
        res.status(404).send("pelicula no encontrada")
    }else{
        res.status(200).send("pelicula actualizada")
    }
}catch (error) {
    res.status(500).send("error del servidor")
}
    },
    destroy:async (req,res) => {
        try{
            const peliculaDestroyed = await peliculaManager.destroy(req)
        if(!peliculaDestroyed){
            res.status(404).send ("pelicula no encontrada")
        }else{
            res.status(200).send ("pelicula eliminada correctamente")
        }
        }catch(error) {
            res.status(500).send("error del servidor")
        }
        },
    }

    module.exports = peliculaController
        


