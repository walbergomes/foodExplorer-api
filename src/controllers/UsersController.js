const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const { hash } = require("bcryptjs");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userWithEmailInUse = await knex("users").where({ email }).first()
    
    if(userWithEmailInUse) {
      throw new AppError("O email que digitou já está em uso")
    }

    try {
      const passwordHashed = await hash(password, 8)
      await knex("users").insert({ name, email, password: passwordHashed });
      return res.status(201).json({ message: "Usuário criado com sucesso"})
    } catch (error) {
     return res.json(500).json({ error: "Erro ao criar usuário" }) 
    }
  }
}

module.exports = UsersController;
