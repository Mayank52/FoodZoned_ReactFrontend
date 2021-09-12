import { AuthContext } from "../Context/AuthProvider";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

// let isAuthenticated = false;

export default function ProtectedRoute(props) {
  const { currentUser } = useContext(AuthContext);
  let Component = props.abc;

  console.log(currentUser);

  return (
    <Route
      {...props}
      render={(props) => {
        return currentUser ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin"></Redirect>
        );
      }}
    ></Route>
  );
}
