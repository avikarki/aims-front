import { useEffect, useState } from "react";
import { authFetch } from "../utils/authFetch";

export default function RoleGroups() {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");

  useEffect(() => {
    authFetch("/account/usergroups")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  const handleCreate = () => {
    authFetch("/account/usergroups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newGroupName }),
    })
      .then((res) => res.json())
      .then(() => setNewGroupName(""));
  };

  return (
    <div>
      <h2>Role Groups</h2>
      <input
        placeholder="Group Name"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Group</button>
      <ul>
        {groups.map((g: any) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </div>
  );
}
