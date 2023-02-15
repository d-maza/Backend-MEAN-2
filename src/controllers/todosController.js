const todoModel = require ('../services/todosModel')

const todosCtrl = {};

todosCtrl.get_todos = async (req, res, next) => {
  try {
    const products = await todoModel.get_todos();
    res.json(products);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

todosCtrl.delete_todo = async (req, res) => {
  try {
    let product = await todoModel.delete_todo(req.params.id);
    res.json({
      mensaje: "🔥 Eliminado correctamente 🔥",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

todosCtrl.add_todo = async (req, res) => {
  try {
    let todo = await todoModel.add_todo(req.body);
     res.send(todo,201);
  } catch (error) {
     res.status(500).send(error.message);
  }
};

todosCtrl.get_todo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await todoModel.get_todo({ _id: id });
      res.send(todo) 
  } catch (error) {
      res.end(error.message).status(204);
  }
};

todosCtrl.edit_todo = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    await todoModel.edit_todo(id,body);
    res.status(201).json({
      mensaje: "Editado correctamente 👌🏼",
      data : body,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = todosCtrl;

