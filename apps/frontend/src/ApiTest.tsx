import { useEffect, useState } from "react"

type User = {
  id: number
  name: string
  email: string
}

export default function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(res => setUsers(res.data))
  }, [])

  return (
    <div className="p-6 space-y-6">
      
      {/* Title */}
      <h1 className="text-2xl font-bold">Users</h1>

      {/* Card */}
      <div className="p-4 border rounded-2xl shadow">
        <p>Total Users: {users.length}</p>
      </div>

      {/* Table */}
      <div className="border rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}