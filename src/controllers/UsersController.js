const AppError = require("../utils/AppError");

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("Nome é obrigatório");
    }

    return res.json({ email, password });
  }
}

module.exports = UsersController;
