import './Todo.css'

export default function Todo({todo}) {
  return (
    <>
    <div className="todo">
      <input type="checkbox" name="isactive" />
      <p>{todo.title}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    </>
  )
}
