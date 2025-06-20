import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "GET":
      return { ...state, user: action.payload, error: "" };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (name, surname, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: `${name} ${surname}` });
      dispatch({ type: "GET", payload: user });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const checkCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "GET", payload: user });
    });
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    checkCurrentUser();
  }, []);

  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const sigInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const EditProfile = async (name, surname, photoUrl) => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: `${name} ${surname}`,
          photoURL: photoUrl,
        });
        dispatch({ type: "GET", payload: { ...auth.currentUser } });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const values = {
    user: state.user,
    error: state.error,
    register,
    logout,
    loginUser,
    sigInWithGoogle,
    EditProfile,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
