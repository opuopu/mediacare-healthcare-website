import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
const initialize =() =>{
    return initializeApp(firebaseConfig);
}
export default initialize