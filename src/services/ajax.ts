export async function get(url: string) {
  const path = `http://${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}${url}`;
  const res = await fetch(path, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function post(url: string, body: any) {
  const path = `http://${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}${url}`;
  const res = await fetch(path, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
