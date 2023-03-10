const { Artist, Album } = require('../models')

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
    const artists = await Artist.findAll({
      include: [{ model: Album, as: 'albums' }]
    })
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
    const artist = await Artist.findByPk(req.params.id)
    artist.destroy()
    res.status(200).json(artist)
    // const artists = await Artist.destroy(
    //   { where: { id: req.params.id } }
    // )
    // res.status(200).json(artists)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addAlbum = async (req, res) => {
  try {
    req.body.artistId = req.params.id
    const album = await Album.create(req.body)
    res.status(200).json(album)
  } catch (error) {
    res.status(500).json(error)
  }
}

const indexAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll(
      { where: { artistId: req.params.id } }
    )
    res.status(200).json(albums)
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.aId)
    album.set(req.body)
    await album.save()
    res.status(200).json(album)
    // const album = await Album.update(
    //   req.body,
    //   { where: {
    //       artistId: req.params.id,
    //       id: req.params.aId 
    //     },
    //     returning: true
    //   }
    // )
    // res.status(200).json(album)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.aId)
    album.destroy()
    res.status(200).json(album)
    // const albums = await Album.destroy(
    //   { where: {
    //       artistId: req.params.id,
    //       id: req.params.aId
    //     }
    //   }
    // )
    // res.status(200).json(albums)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteArtist,
  addAlbum,
  indexAlbums,
  updateAlbum,
  deleteAlbum,
}