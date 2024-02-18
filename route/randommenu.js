const express = require('express')
const router = express()
const { getAllMenu, getRandomMenu, updateMenu, createMenu, deleteMenu } = require('../controllers/randommenu')
router.get('/randommenu', getAllMenu)
router.get('/randommenu/:ids', getRandomMenu)
router.post('/randommenu', createMenu)
router.put('/randommenu/:id', updateMenu)
router.delete('/randommenu/:id', deleteMenu)

module.exports = router
