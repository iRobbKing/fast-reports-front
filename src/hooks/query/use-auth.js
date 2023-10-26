import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useApi } from "src/hooks/use-api.js";
import { authGetAdminQuery, authKeys } from "src/query/auth.js";

export function useAdmin() {
  const api = useApi();
  const query = authGetAdminQuery(api);
  return useQuery(query);
}

function useAuthMutation(mutationFn, data) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess() {
      queryClient.setQueriesData(authKeys.all, data);
    },
  });
}

export function useSignInMutation() {
  const api = useApi();
  return useAuthMutation(api.auth.signIn, { isAuthenticated: true });
}

export function useSignOutMutation() {
  const api = useApi();
  return useAuthMutation(api.auth.signOut, { isAuthenticated: false });
}
