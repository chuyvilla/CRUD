const peliculaRepository = require('../REPOSITORY/pelicula_repository')

const peliculaManager = {
  get: async (req, res) => {

    const { id } = req.params
    return await peliculaRepository.findByPk(id)
  },


  list: async (req, res) => {

    return await peliculaRepository.findAll()
  },

  create: async (req, res) => {

    return await peliculaRepository.create({
      peliculaName: req.body.peliculaName,
      peliculaDescription: req.body.peliculaDescription,
    })
  },

  update: async (req, res) => {

    const { id } = req.params
    const pelicula = await peliculaRepository.findByPk(id)
    if (pelicula) {
      pelicula.peliculaName = req.body.peliculaName
      pelicula.peliculaDescription = req.body.peliculaDescription
      return await pelicula.save()
    }
  },

  destroy: async (req, res) => {

    const { id } = req.params
    const pelicula = await peliculaRepository.findByPk(id)
    if (pelicula) {
      return await pelicula.destroy()
    }
  },
}

module.exports = peliculaManager
