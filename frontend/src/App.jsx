import { useEffect, useState } from 'react'

import axios from 'axios'

function App() {

  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')

  const [status, setStatus] = useState('todo')

  const [dueDate, setDueDate] = useState('')

  const token = localStorage.getItem('token')

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

  const addTask = async () => {

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

    fetchTasks()

  }

  const deleteTask = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/tasks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    fetchTasks()

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

      <div className="card p-4 mb-4">

        <input
          className="form-control mb-3"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="form-select mb-3"
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
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addTask}
        >
          Add Task
        </button>

      </div>

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

            <button
              className="btn btn-danger"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>

  )

}

export default App