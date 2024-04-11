const HOST = 'http://localhost:3005';

export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
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
    },
  });
  return res.json();
}
