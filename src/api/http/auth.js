import makeApiRequest from "src/api/http/common/make-api-request.js";

export async function isAuthenticated() {
  return await makeApiRequest("/auth", "GET");
}

export async function signIn(data) {
  const result = await makeApiRequest("/auth/signIn", "POST", { data });
  return !result?.message;
}

export async function signOut() {
  await makeApiRequest("/auth/signOut", "POST");
}
