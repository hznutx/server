const RandomTest = require('../Models/randomtest') // Adjust the file path and import name if needed

exports.getAllMenu = async (req, res) => {
  try {
    const getAll = await RandomTest.find({}).exec()
    res.send(getAll)
  } catch (error) {
    console.log(error)
    res.status(500).send('server error')
  }
}

exports.getRandomMenu = async (req, res) => {
  try {
    const ids = req.params.ids.split(',') // Assuming IDs are passed as comma-separated values in the URL
    const getRandomResult = await RandomTest.find({ id: { $in: ids } }).exec()
    //change param api model for find here
    res.send(getRandomResult)
  } catch (error) {
    console.log(error)
    res.status(500).send('server error')
  }
}

exports.createMenu = async (req, res) => {
  try {
    console.log(req.body)
    const created = await RandomTest.create(req.body) //change param api model for save here
    res.send(created)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
}

exports.updateMenu = async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = await RandomTest.findOneAndUpdate({ id: id }, req.body, { new: true }).exec() //change param api model for save here
    res.send(updatedData)
  } catch (error) {
    console.log(error)
    res.status(500).send('server error')
  }
}

exports.deleteMenu = async (req, res) => {
  try {
    const id = req.params.id
    const deletedById = await RandomTest.findOneAndDelete({ id: id }).exec() //change param api model for save here
    res.send(deletedById)
  } catch (error) {
    console.log(error)
    res.status(500).send('server error')
  }
}
