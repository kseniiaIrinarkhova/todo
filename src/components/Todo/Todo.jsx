import './Todo.css'

export default function Todo({ todo }) {
  return (
    <>
      <div className='todo-container'>
        <input type="checkbox" name="completed" checked={todo.completed} />
        <p className={todo.completed ? "todo completed" : "todo"}>{todo.title}</p>
        <button className='btn'>Edit</button>
        <button className='btn'>Delete</button>
      </div>
    </>
  )
}
