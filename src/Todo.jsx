import { useState } from 'react';
const Todo = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState({})

  const getInput = (e) => {
    setInput(e.target.value)
  }
  const enter = (e) => {
    if( e.keyCode === 13 ) handleClick()
  }
  const handleClick = () => {
    if( input.trim().length == 0) return 
    setTodos([{id: Date.now(), task: input, completed: false}, ...todos])
    setInput('')
  }

  const changeTask = (id) => {
    const arr = [...todos]
    const elemento =arr.find( item => item.id === id);
    elemento.completed = !elemento.completed
    setTodo([...arr])
  }
  const handleDelete = () => {
    const arr = [...todos]
    const completados = arr.filter( item => !item.completed )
    setTodos([...completados])
  }

  return (
    <main className='text-center container-sm w-50 mt-5 '>
      <h1>ToDo List</h1>
      <input
        type="text"
        className='form-control my-4 fs-3 shadow'
        onChange={getInput}
        value={input}
        onKeyDown={enter}
      />

      <button
        className='btn btn-primary me-3 shadow'
        onClick={handleClick}
      >
        Add task
      </button>

      <button
        className='btn
        btn-danger
        shadow'
        onClick={handleDelete}
      >
        Delete task
      </button>

      {}
      { todos.length > 0
      ? <>
        <table className="table table-striped my-5">
        <thead>
          <tr>
            <th scope="col" className='fs-4'>Things To Do</th>
          </tr>
        </thead>
        <tbody className='shadow'>
          {
            todos.map( (todo, index) =>
              <tr key={index}>
                <td
                  className={ todo.completed
                              ? 'fs-4 text-start p-3 table-secondary  text-secondary'
                              : 'fs-4 text-start p-3'}
                  onClick={() => changeTask(todo.id)}
                >
                  {todo.completed ? ' ✅ ': ''}
                  <span className={
                    todo.completed ? 'text-decoration-line-through mx-2'
                    : ' mx-2'
                  }
                  >{todo.task}</span>
                </td>
              </tr>
              )
          }
        </tbody>
      </table>
      <table className='table'>
        <tdbody>
          <tr className='table-secondary'>
            <td className='text-primary col-2'>Total tasks: <span className='fw-bold'>{todos.length}</span></td>
            <td className='text-success col-2'>Completed tasks: <span className='fw-bold '>{todos.filter( item => item.completed).length}</span></td>
            <td className='text-danger col-2'>Pending tasks: <span className='fw-bold '>{todos.filter( item => !item.completed).length}</span></td>
          </tr>
        </tdbody>
      </table>
      </>
      : ''
    }
    </main>
  );
};

export default Todo;