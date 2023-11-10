import { useState } from "react"
import "./style.css"

export default function App(){
  const [newItem, setNewItem] = useState("hello world")
  const [todos, setTodos] = useState([])

  function handleSubmit(e)
  {
    e.preventDefault()

    setTodos(
      todos+[ 
      {id: crypto.randomUUID(), title: newItem, completed: false},
    ])
  }

  console.log(todos)

  return <><form className="note">
    <div className="to-do-list">
      <label htmlFor="item">New Item</label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)}
      onSubmit={handleSubmit} 
      type="text" 
      id="item" 
      className="content" />
    </div>
    <button className="btn add-bt">Add</button>
    <h1 className="header">To Do List</h1>
    <ul className="list">
      <li>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Item 1
        </label>
        <button className="btn btn-danger add-bt"></button>
      </li>
    </ul>
  </form>
</>
}