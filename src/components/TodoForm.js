import React, {useState,useEffect,useRef} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')
  const [tododate, setTododate] = useState('')
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange=e=>{
    setInput(e.target.value)
  }

  const handleChangeDate=e=>{
    setTododate(e.target.value)
  }

  const handleSubmit=e=>{
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text:input,
      date:tododate
    })
    setInput('')
    setTododate('')
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Add a todo"
        value={input} 
        name="text"
        className="todo-input" 
        onChange={handleChange}
        ref={inputRef}
      />
      <input
        type="date"
        className="todo-input-date"
        onChange={handleChangeDate}
        value={tododate}/>
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
