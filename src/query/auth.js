export const authKeys = {
  all: [{ scope: "admin" }],
};

export function authGetAdminQuery(api) {
  return {
    queryKey: authKeys.all,
    queryFn: api.auth.getAdmin,
  };
}

export function authGetAdminLoader({ api, queryClient }) {
  return async () => {
    const query = authGetAdminQuery(api);
    return await queryClient.ensureQueryData(query);
  };
}
