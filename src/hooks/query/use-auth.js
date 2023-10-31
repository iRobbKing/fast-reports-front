import { useMutation } from "@tanstack/react-query";
import { useApi } from "src/hooks/use-api.js";

export function useSignInMutation() {
  const api = useApi();
  return useMutation({ mutationFn: api.auth.signIn });
}

export function useSignOutMutation() {
  const api = useApi();
  return useMutation({ mutationFn: api.auth.signOut });
}
