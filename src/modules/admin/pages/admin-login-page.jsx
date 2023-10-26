import { useNavigate } from "@tanstack/react-router";
import { useSignInMutation } from "src/hooks/query/use-auth.js";

function AdminLoginPage() {
  const navigate = useNavigate({ from: "/admin/login" });
  const signInMutation = useSignInMutation();

  function handleLogin(event) {
    event.preventDefault();
    const { login, password } = event.target.elements;
    signInMutation.mutate({ login: login.value, password: password.value }, {
      onSuccess() {
        navigate({ to: "/admin/editor" });
      },
    });
  }

  const errorMessage = signInMutation.isError && (
    <div>Error: {signInMutation.error.toString()}</div>
  );

  return (
    <form onSubmit={handleLogin}>
      <label>
        <span>Login: </span>
        <input type="text" name="login"/>
      </label>
      <label>
        <span>Login: </span>
        <input type="password" name="password"/>
      </label>
      {errorMessage}
      <input type="submit"/>
    </form>
  );
}

export default AdminLoginPage;

