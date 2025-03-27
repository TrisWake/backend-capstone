const Todo = require('../model/Todo')


const getAllTodos = async (req, res)=>{
    try {
        const allTodos = await Todo.find({userID: res.locals.decodedJwt.id})
        res.json({message:'Found all todos', payload: allTodos})
    } catch (error) {
        res.status(500).json({message:'Error', error: error.message})
    }
}

const createTodo = async (req, res)=>{
    try {
        const newTodo = new Todo({
            name: req.body.name,
            userID: res.locals.decodedJwt.id
        })
        await newTodo.save()
        res.json({message:'Todo created', payload: newTodo})
    } catch (error) {
        res.status(500).json({message:'Error', error: error.message})
    }
}

const updateTodo = async (req, res)=>{
    try { 
        
        const {id} = req.params
        const updatedTodo = await Todo.findByIdAndUpdate(id,req.body, {new:true})
        res.json({message:'Todo updated', payload: updatedTodo})
    } catch (error) {
        res.status(500).json({message:'Error', error: error.message})
    }
}
//delete
const deleteTodo = async (req, res)=>{
    try {
        const {id} = req.params
        const deleteTodo = await Todo.findByIdAndDelete(id)
        res.json({message:'Todo deleted', payload: deleteTodo})
    } catch (error) {
        res.status(500).json({message:'Error', error: error.message})
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}