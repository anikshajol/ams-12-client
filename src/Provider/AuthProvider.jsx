import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //   registration

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current suer", currentUser);
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
