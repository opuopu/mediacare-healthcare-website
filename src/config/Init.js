import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebaseConfig"

const initialize =() =>{
    return initializeApp(firebaseConfig)
}
export default initialize