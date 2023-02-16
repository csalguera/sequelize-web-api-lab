const { Artist } = require('../models')

const create = async (req, res) => {
  try {
    const artist = await Artist.create(req.body)
    res.status(200).json(artist)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const artists = await Artist.findAll()
    res.status(200).json(artists)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id)
    artist.set(req.body)
    await artist.save()
    res.status(200).json(artist)
    // const artist = await Artist.update(
    //   req.body,
    //   { where: { id: req.params.id }, returning: true }
    // )
    // res.status(200).json(artist)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteArtist = async (req, res) => {
  try {
    const artists = Artist.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(artists)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteArtist,
}