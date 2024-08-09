const AppError = require("../utils/AppError")

class DishesController {
  async create(req, res) {
    const { title, category, description, price } = req.body

    return res.json({ title, category, description, price })
  }
}

module.exports = DishesController