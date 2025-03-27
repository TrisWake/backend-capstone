const express = require('express')
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('./controller/todoController')
const checkJwtToken = require('../utils/jwtMiddleware')
const router = express.Router()

//get all todos
router.get('/get-all-todos', checkJwtToken, getAllTodos)
//create todo POST
router.post('/create-todo', checkJwtToken, createTodo)
//edit todos by id
router.put('/edit-todo-by-id/:id',checkJwtToken, updateTodo) //expect req.body to have name or IsDone
//delete todos by id
router.delete('/delete-todo-by-id/:id', checkJwtToken, deleteTodo)

module.exports = router