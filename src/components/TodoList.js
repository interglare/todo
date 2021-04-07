import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo=>{
        if (!todo.text || /^\s*$/.test(todo.text) || !todo.date) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const removeTodo=id=>{
        const removeArr = [...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
    }

    const changeStyleTodo = id =>{
        let updatedTodos = todos.map(todo=>{
            if (todo.id===id) {
                todo.isChanged = !todo.isChanged
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos}
                changeStyleTodo={changeStyleTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}

export default TodoList
