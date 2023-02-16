const router = require('express').Router()
const artistsCtrl = require('../controllers/artists.js')

router.post('/', artistsCtrl.create)
router.post('/:id/albums', artistsCtrl.addAlbum)
router.get('/', artistsCtrl.index)
router.get('/:id/albums', artistsCtrl.indexAlbums)
router.put('/:id', artistsCtrl.update)
router.delete('/:id', artistsCtrl.delete)

module.exports = router