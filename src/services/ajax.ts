const HOST = 'http://localhost:6001'; // Mock 的 host

export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`, {
    headers: {
      Authorization: 'Bearer token',
    },
  });
  return res.json();
}

export async function post(url: string, body: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    },
  });
  return res.json();
}
