const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class DishesController {
  async create(req, res) {
    const { title, category, description, price, ingredients } = req.body;

    const [dish_id] = await knex("dishes").insert({
      title,
      category,
      description,
      price,
    });

    const ingredientsInsert = ingredients.map((title) => {
      return {
        dish_id,
        title,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);
    return res.json();
  }
}

module.exports = DishesController;