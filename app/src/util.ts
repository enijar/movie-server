export async function api(endpoint: string, init: RequestInit & { params?: string[][] }) {
  const url = new URL(`${process.env.CMS_URL ?? ""}${endpoint}`);
  if (init.params !== undefined) {
    for (const [key, value] of init.params) {
      url.searchParams.set(key, value);
    }
  }
  return fetch(url, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      Authorization: `Bearer ${process.env.CMS_API_TOKEN ?? ""}`,
    },
  });
}
