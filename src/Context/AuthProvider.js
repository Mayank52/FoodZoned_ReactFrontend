import React, { useState, useEffect } from "react";
// import firebase from "../Firebase/firebase";

export const AuthContext = React.createContext();
// const auth = firebase.auth();

// children is a keyword, it refers to all children wrapped inside AuthProvider
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({"name": "test"});
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    // return auth.signInWithEmailAndPassword(email, password);
  };

  const signup = async (email, password) => {
    // return auth.createUserWithEmailAndPassword(email, password);
  };

//   useEffect(() => {
//     // listener -> runs whenever state changes because of login or logout
//     auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//   }, []);

  // values that components can get from this context using useContext
  const value = {
    login,
    signup,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
