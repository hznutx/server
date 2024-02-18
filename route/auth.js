const express = require('express')
const router = express()

router.get('/auth', (req, res) => {
  res.send('Hello get endpoint!')
})
router.get('/auth/:id', (req, res) => {
  res.send('Hello get login  endpoint!')
})
router.post('/auth', (req, res) => {
  res.send('Hello post endpoint!')
})
router.put('/auth/:id', (req, res) => {
  res.send('Hello push 1 endpoint!')
})
router.delete('/auth/:id', (req, res) => {
  res.send('Hello delete endpoint!')
})

module.exports = router
