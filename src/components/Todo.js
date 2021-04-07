import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'

function Todo({todos,changeStyleTodo,removeTodo}) {

    return todos.length>0? todos.map((todo,index)=>(
        <div
            className={todo.isChanged ? 'todo-row complete' : 'todo-row'}
            key={index}
            onDoubleClick={()=>{changeStyleTodo(todo.id)}}
        >
            <div key={todo.id} className="todo-text">
                {todo.text}
            </div>
            <div>
                {todo.date}
            </div>
            
            <div className="icons">
                <RiCloseCircleLine
                    onClick={()=>removeTodo(todo.id)}
                    className="delete-icon"
                />
            </div>
        </div>
    )):(
        <p>there are no tasks here yet</p>
    )
}

export default Todo
