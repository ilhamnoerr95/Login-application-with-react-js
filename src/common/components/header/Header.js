// import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setToken } from "redux/authentication"
// import { userData } from "redux/list"


const Header = ()=>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
const logOut = ()=>{
    localStorage.removeItem("token")

    setTimeout(()=>{
        dispatch(setToken(""))
        // dispatch(userData(""))
        navigate("/")
    },1000)
}
    return (
        
        <div className="col-auto">
            <button 
            type="submit" 
            className="btn btn-primary mb-3" 
            onClick={logOut}>LOGOUT</button>
        </div>
    )
}

export default Header