export async function authFetch(input: RequestInfo, init?: RequestInit) {
  const token = localStorage.getItem('token');
  const headers = {
    ...init?.headers,
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch('http://localhost:5211' + input, { ...init, headers });

  if (res.status === 401) {
    window.location.href = '/login';
  }

  return res;
}
