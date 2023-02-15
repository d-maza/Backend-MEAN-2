const { Router } = require("express");
const router = Router();
const todosCtrl = require("../../src/controllers/todosController");

// Routes Products
router.get("/", todosCtrl.get_todos);
router.post("/", todosCtrl.add_todo);
router.delete("/:id", todosCtrl.delete_todo);
router.get("/:id" ,todosCtrl.get_todo);
router.put("/:id" ,todosCtrl.edit_todo);

module.exports = router;
