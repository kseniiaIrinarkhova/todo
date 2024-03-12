import './Form.css'

export default function Form({title, setTitle}) {
  return (
    <form>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value) }/>
    </form>
  )
}
