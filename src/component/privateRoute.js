import { Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Login from "./pages/Login";

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Element {...props} />}</Route>
  ) : (
    <Route exact path="/login" element={<Login />} />
  );
}
