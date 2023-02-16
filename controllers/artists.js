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

module.exports = {
  create,
  index,
}