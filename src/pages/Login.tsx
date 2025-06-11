import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  
  const login = async () => {
  const res = await fetch('http://localhost:5211/account/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  localStorage.setItem('token', data.token);

  // decode roles (if they are stored in JWT claims as `role`)
  const payload = JSON.parse(atob(data.token.split('.')[1]));
  const roles = Array.isArray(payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) ? payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] : [];
  localStorage.setItem('roles', JSON.stringify(roles));

  navigate('/dashboard');
};

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={login}>Login</button>
    </div>
  );
}
