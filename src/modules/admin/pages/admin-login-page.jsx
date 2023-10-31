import { Link, useNavigate } from "@tanstack/react-router";
import { useSignInMutation } from "src/hooks/query/use-auth.js";

function AdminLoginPage() {
  const navigate = useNavigate({ from: "/admin/login" });
  const signInMutation = useSignInMutation();

  function handleLogin(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    signInMutation.mutate(data, {
      onSuccess(signedIn) {
        if (signedIn) navigate({ to: "/admin/editor" });
      },
    });
  }

  return (
    <div className="modal is-active">
      <Link to="/news">
        <div className="modal-background"></div>
      </Link>
      <div className="box modal-content">
        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="label">Login</label>
            <div className="control">
              <input className="input" type="text" name="login"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" name="password"/>
            </div>
          </div>
          <button className="button is-link" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;

