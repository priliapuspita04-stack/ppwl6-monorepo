import { useEffect, useState } from "react"
import type { User, ApiResponse } from "shared"

function App() {
  const [users, setUsers] = useState<User[]>([])

  const loadUsers = async () => {
    const res = await fetch("http://localhost:3000/users")
    const data: ApiResponse<User[]> = await res.json()

    console.log(data) // debug

    setUsers(data.data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <button onClick={loadUsers}>Refresh</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App