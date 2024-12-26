import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { logout, setCredentails } from "../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  // Login function
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dispatch to Redux
      dispatch(
        setCredentails({
          userName: user.email, // Or another user property
          accessToken: user.accessToken,
        })
      );
      console.log("User logged in:", user);
      navigate('/')
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const registerUser = async (email, password,userName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Dispatch to Redux
      console.log('register successfully')
      navigate('/login')

    } catch (error) {
      console.error("Registration failed:", error);
      console.log(error)
    }
  };

  // Logout function
  const userLogout = async () => {
    try {
      await signOut(auth);

      dispatch(logout());
      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

   // Google Sign-In
   const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Dispatch to Redux
      dispatch(setCredentails({ 
        userName: user.email, 
        accessToken: user.accessToken, 
        image: user.photoURL 
      }));
            navigate('/')
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      throw error;
    }
  };

  return { login, userLogout,googleSignIn,registerUser };
};

export default useAuth;
