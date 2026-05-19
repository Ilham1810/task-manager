import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')

  const [status, setStatus] = useState('todo')

  const [dueDate, setDueDate] = useState('')

  const [editId, setEditId] = useState(null)

  const token = localStorage.getItem('token')

  // GET TASKS
  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/tasks',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setTasks(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  // CREATE TASK
  const addTask = async () => {

    try {

      await axios.post(
        'http://localhost:5000/api/tasks',
        {
          title,
          description,
          status,
          due_date: dueDate
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      resetForm()

      fetchTasks()

    } catch (error) {

      console.log(error)

    }

  }

  // EDIT BUTTON
  const editTask = (task) => {

    setEditId(task.id)

    setTitle(task.title)

    setDescription(task.description)

    setStatus(task.status)

    setDueDate(task.due_date?.split('T')[0])

  }

  // UPDATE TASK
  const updateTask = async () => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/${editId}`,
        {
          title,
          description,
          status,
          due_date: dueDate
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      resetForm()

      fetchTasks()

    } catch (error) {

      console.log(error)

    }

  }

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      fetchTasks()

    } catch (error) {

      console.log(error)

    }

  }

  // RESET FORM
  const resetForm = () => {

    setTitle('')

    setDescription('')

    setStatus('todo')

    setDueDate('')

    setEditId(null)

  }

  useEffect(() => {

    if (token) {
      fetchTasks()
    }

  }, [])

  return (

    <div className="container mt-5">

      <h1 className="mb-4">
        Task Manager
      </h1>

      {/* FORM */}
      <div className="card p-4 mb-4">

        <input
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="form-select mb-3"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >

          <option value="todo">
            Todo
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>

        </select>

        <input
          className="form-control mb-3"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        {
          editId ? (

            <button
              className="btn btn-warning"
              onClick={updateTask}
            >
              Update Task
            </button>

          ) : (

            <button
              className="btn btn-primary"
              onClick={addTask}
            >
              Add Task
            </button>

          )
        }

      </div>

      {/* TASK LIST */}
      {
        tasks.map((task) => (

          <div
            key={task.id}
            className="card p-3 mb-3"
          >

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <strong>Status:</strong> {task.status}
            </p>

            <p>
              <strong>Due Date:</strong> {task.due_date}
            </p>

            <div className="d-flex gap-2">

              <button
                className="btn btn-warning"
                onClick={() => editTask(task)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))
      }

    </div>

  )

}

export default App