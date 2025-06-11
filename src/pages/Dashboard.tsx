import { useEffect, useState } from "react";
import { authFetch } from "../utils/authFetch";

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    authFetch("/account/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {profile ? (
        <div>
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Role Modules:</strong> {profile.roleModules.join(", ")}
          </p>
          <p>
            <strong>Roles:</strong> {profile.roles.join(", ")}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
