export async function getAdmin() {
  return { isAuthenticated: true };
}

export async function signIn({ login, password }) {
  if (login !== "admin" || password !== "admin")
    throw new Error(`failed to log in`);

  return null;
}

export async function signOut() {
  return null;
}
