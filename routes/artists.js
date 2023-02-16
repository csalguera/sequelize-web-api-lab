const router = require('express').Router()
const artistsCtrl = require('../controllers/artists.js')

router.post('/', artistsCtrl.create)

module.exports = router