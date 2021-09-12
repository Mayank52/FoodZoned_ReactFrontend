import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import LandingPage from "./LandingPage/LandingPage";
import Profile from "./Profile/Profile";
import Plans from "./Plans/Plans";

function App() {
  return (
      <>
        <AuthProvider>
          <Switch>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/" component={LandingPage} exact></Route>
            <ProtectedRoute path="/profile" abc={Profile}></ProtectedRoute>
            <ProtectedRoute path="/plans" abc={Plans}></ProtectedRoute>
            <Redirect path="/" to="/"></Redirect>
          </Switch>
        </AuthProvider>
      </>
  );
}

export default App;
