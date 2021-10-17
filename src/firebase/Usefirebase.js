import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../hooks/init";
import Initialize from "./init";
initialize()
const Usefirebase = () =>{
    const[user,setuser] = useState({})
    const[error,seterror] = useState('')
    const [loading,setloading] = useState(true)
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const googlesignin = () =>{
        setloading(true)
 return signInWithPopup(auth,provider)
// .then(result=>{
//     const user = result.user
//     setuser(user)
// })

.finally(()=> setloading(false))
    }

// onserved user state change
    useEffect(()=>{
onAuthStateChanged(auth,user=>{
    if(user){
        
        setuser(user)
    }
    else {
        // User is signed out
        // ...
        setuser({})
      }
      setloading(false)
})

    },[])

    const logout = () =>{
        setloading(true)
        signOut(auth)
        .then(()=>{
            seterror("sign out successfull")
        })
        // .catch((error) => {
        //     seterror('An error happened.')
        //   })
          .finally(()=> setloading(false))
    }
    // sign in with email
    const emailsignin = (email,password) =>{
        setloading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {

    const user = result.user;
    setuser(user)
    // ...
  })
  .finally(()=>setloading(false))
    }
  
    return {user,error,googlesignin,logout,loading,emailsignin}
}
export default Usefirebase