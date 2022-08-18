import { useEffect, useState } from "react";
import initializeFirebase from "./../Pages/Authentication/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// initializeFirebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');

  const auth = getAuth();

  const registerUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      }).finally(()=> setLoading(false));
  };

  const loginUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(''); 
      })
      .catch((error) => {
        setError(error.message);
      }).finally(()=> setLoading(false));
  };
  // State Observed user
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }setLoading(false)
    });
    return () => unSubscribe;
  }, [auth]);

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
    
      }).finally(()=> setLoading(false));
  };

  return {
    user,
    registerUser,
    loginUser,
    loading,
    error,
    logout,
  };
};
export default useFirebase;
