export async function pingServer() {
  const res = await fetch("http://localhost:5183/ping");
  return await res.text();
}
