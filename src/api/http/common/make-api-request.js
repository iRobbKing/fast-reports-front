import { toCamelCase, toSnakeCase } from "src/api/http/common/formating.js";

async function makeApiRequest(service, method, data = {}) {
  const request = toSnakeCase(data);
  const url = makeUrl(service, request.query ?? {});
  const body = makeBody(method, request.data);
  const response = await fetch(url, { method, body, credentials: "include" });
  return await getResult(response);
}

function makeUrl(service, query) {
  const url = new URL(import.meta.env.VITE_BACKEND_URL + service);
  for (const [key, value] of Object.entries(query))
    if (value) url.searchParams.set(key, value.toString());
  return url;
}

function makeBody(method, data) {
  if (!data || ["GET", "HEAD"].includes(data)) return null;
  if (data instanceof FormData) return data;
  return JSON.stringify(data);
}

async function getResult(response) {
  try {
    const result = await response.json();
    return toCamelCase(result);
  } catch {
    return null;
  }
}

export default makeApiRequest;
