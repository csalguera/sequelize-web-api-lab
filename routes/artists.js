const router = require('express').Router()
const artistsCtrl = require('../controllers/artists.js')

router.post('/', artistsCtrl.create)
router.get('/', artistsCtrl.index)
router.put('/:id', artistsCtrl.update)

module.exports = router