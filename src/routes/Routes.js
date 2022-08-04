import React, { useEffect } from 'react';
import {Route, Routes as Switch, useNavigate} from 'react-router-dom';
import UserList from 'common/components/list';
import DetailUser from 'common/components/list/DetailUser';
import {getToken} from 'redux/authentication'
import { useSelector } from 'react-redux';

const localToken = localStorage.getItem("token") 

const Link = () => {
  const navigate = useNavigate();
    const token = useSelector(getToken)
    useEffect(()=>{
        if(!token ||!localToken ){
            navigate("/")
        } 
        if(token || localToken){
            navigate("/users")
        }
    },[])

    return  (
    <Switch>    
        {token || localToken ? <Route index element={<UserList/>} /> : ""}  
        {token || localToken ? <Route path=":id" element={<DetailUser/>} /> : ""}  
    </Switch>
    ) 
    
}

export default Link;