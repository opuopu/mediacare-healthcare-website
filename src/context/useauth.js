import { useContext } from "react"
import { authcontext } from "./useProvider"



const Useauth = () =>{
    return useContext(authcontext)
}
export default Useauth