import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initialize from "../config/Init";
initialize()
const Fireuse = () =>{
   
    const [user,setuser] = useState({})
    const [loading,setloading] = useState(true)
    const[name,setname] = useState('')
    const [password,setpassword] = useState('')
    const[email,setemail] = useState('')
    const [error,seterror] = useState('')

    // console.log(user);
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    const googlesign = () =>{
      setloading(true)
return signInWithPopup(auth,provider)
// .then(result=>{
//     const user = result.user 
//     setuser(user)
//     seterror('')
// })
.catch(error=>{
    seterror("something went wrong")
})
.finally(()=>setloading(false))

    }
    //  onauthchange
    useEffect(()=>{
    
      
        onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user)
            }
            else{
                setuser({})
               
            }
            setloading(false)
        })
      
    },[])
    // displayname

    const username = () =>{
    
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(result=>{})
        
    }
    // create user using email and password
    const createuser = () =>{
    
        let passvalid =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(passvalid.test(password)){
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user =result.user
            setuser(user)
            seterror('sign up successfull please login')
            username()
           
        })
        .catch(error=>{
            seterror(error.message)
        })
        .finally(()=>setloading(false))
     
      
    }
    else{
        seterror('please use a valid password ')
        // setloading(true)
    }
    }
    // signin user
    const signinuser = (email,password)=>{
        setloading(true)

  signInWithEmailAndPassword(auth,email,password)
.then(result=>{
    const user =result.user
    setuser(user)
    seterror('sign in successfull')
   
})
.catch(error=>{
    seterror("sorry email and password not match")
})
.finally(()=>setloading(false))

    }
   
    // signout
    const logout = () =>{
       setloading(true)
        signOut(auth)
        .then(()=>{
setuser({})
        })
        .catch(error=>{
seterror("an error")
        })
        .finally(()=>setloading(false))
    }

   
    return {user,googlesign,logout,loading,createuser,error,signinuser,setname,setemail,setpassword}
}
export default Fireuse