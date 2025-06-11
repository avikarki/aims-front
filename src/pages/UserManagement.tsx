import { useEffect, useState } from "react";
import { authFetch } from "../utils/authFetch";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    userGroupId: "",
  });
  const [userGroupId, setSelectedGroup] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    authFetch("/account/usergroups")
      .then((res) => res.json())
      .then((data) => setGroups(data));
    authFetch("/account/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleCreate = () => {
    authFetch("/account/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => {
        setNewUser({ username: "", password: "", userGroupId: "" });
      });
  };

  return (
    <div>
      <h2>User Management</h2>
      <select
        value={userGroupId}
        onChange={(e) =>
          setNewUser({ ...newUser, userGroupId: e.target.value })
        }
      >
        <option value="">Select Group</option>
        {groups.map((g: any) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <input
        placeholder="Username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button onClick={handleCreate}>Create User</button>

      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            {u.username} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
