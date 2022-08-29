import { useEffect, useState } from "react";
import initializeFirebase from "./../Pages/Authentication/Firebase/firebase.init";
import { useLocation,useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signOut,
} from "firebase/auth";



// initializeFirebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');
  const [admin,setAdmin] = useState(false);
  const [token,setToken] = useState('');

  const auth = getAuth();

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";



  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password,name,navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = {email, displayName:name};
        setUser(newUser);
        // Save user to the database
        saveUser(email,name, 'POST');
        // send firebase after send
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
        
          }).catch((error) => {
          });
          navigate(from, { replace: true });
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

//   Google Login
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email,user.displayName, 'PUT')
    setError('')
    navigate(from, { replace: true });
  }).catch((error) => {
    setError(error.message);
  }).finally(()=> setLoading(false));
  }

  // State Observed user
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken =>{
          setToken(idToken);
        })
      } else {
        setUser({});
      }setLoading(false)
    });
    return () => unSubscribe;
  }, [auth]);

  // Admin Checked
    useEffect( ()=>{
      fetch(`https://glacial-lowlands-76878.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=> setAdmin(data.admin))
    } ,[user.email])

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
    
      }).finally(()=> setLoading(false));
  };

  const saveUser = (email,displayName,method) =>{
          const user = {email,displayName};
          fetch('https://glacial-lowlands-76878.herokuapp.com/users', {
            method: method,
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then()
  }

  return {
    user,
    admin,
    token,
    registerUser,
    loginUser,
    loading,
    error,
    signInWithGoogle,
    logout,
  };
};
export default useFirebase;
