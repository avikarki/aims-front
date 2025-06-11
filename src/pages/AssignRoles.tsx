import { useEffect, useState } from "react";
import { authFetch } from "../utils/authFetch";

export default function AssignRoles() {
  const [groups, setGroups] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  useEffect(() => {
    authFetch("/account/usergroups")
      .then((res) => res.json())
      .then((data) => setGroups(data));
    authFetch("/account/rolemodules")
      .then((res) => res.json())
      .then((data) => setRoles(data));
  }, []);

  const handleAssign = () => {
    authFetch(`/account/usergroups/${selectedGroup}/assign-roles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedRoles),
    });
  };

  return (
    <div>
      <h2>Assign Roles to User Group</h2>
      <select
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        <option value="">Select Group</option>
        {groups.map((g: any) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <div>
        {roles.map((role: any) => (
          <label key={role.id}>
            <input
              type="checkbox"
              checked={selectedRoles.includes(role.id)}
              onChange={(e) => {
                const updated = e.target.checked
                  ? [...selectedRoles, role.id]
                  : selectedRoles.filter((id) => id !== role.id);
                setSelectedRoles(updated);
              }}
            />
            {role.name}
          </label>
        ))}
      </div>

      <button onClick={handleAssign}>Assign Roles</button>
    </div>
  );
}
