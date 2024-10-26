const AppError = require("../utils/AppError");
const knex = require("../database/knex")
const { hash } = require("bcryptjs")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const emailInUse = await knex("users").where({ email }).first()

    if(emailInUse) {
      throw new AppError("Esse email já está em uso!")
    }

    const passwordHashed = await hash(password, 8)

    await knex("users").insert({
      name, 
      email,
      password: passwordHashed
    })

    return res.status(201).json(emailInUse);
  }
}

module.exports = UsersController;
