import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserList, selectUser } from "redux/list";

const DetailUser = ()=> {
    const {id} = useParams()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserList(id))
    },[])

    return (  
        <>
        <div className="container row mx-auto">
            <div className="card" style={{width: "18rem", backgroundColor:`${user.color}`}}>
                <div className="card-body">
                    <h5 className="card-title">Name: {user.name}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <p href="#" className="btn btn-primary">Year: {user.year}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetailUser;