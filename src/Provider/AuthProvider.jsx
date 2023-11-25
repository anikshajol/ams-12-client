import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //google login

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   registration

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update User profile

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // login

  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    logOut,
    updateUserProfile,
    loginWithGoogle,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
