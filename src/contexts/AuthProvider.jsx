import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({children}) {
  
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
    
  }
   const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
   const userInfo = {
    createUser,
    signIn
    
   }
    return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
}