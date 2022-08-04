// import 'styles/_text.scss'
import './_login.scss'
import React, {useState,useEffect} from 'react';
import {  useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {typeEmail,typePassword,submitAuthentic, setToken,getToken, setWarningLogin, warningLogin} from 'redux/authentication'
// eslint-disable-next-line no-unused-vars
import {useSelector} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
// eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch()
// eslint-disable-next-line no-unused-vars
  const token = useSelector(getToken)
// eslint-disable-next-line no-unused-vars
  const warning = useSelector(warningLogin)
  const localToken = JSON.parse(localStorage.getItem("token"))
  
  const [text,setUpdate] = useState({
    email:"",
    password:""
  })
  useEffect(()=>{
    dispatch(typeEmail(text.email))
    dispatch(typePassword(text.password))
    dispatch(submitAuthentic(text.email, text.password))
    dispatch(setToken(localToken))
    // if(tokenLocal){

    // }
    
  },[text.email,text.password])

  const handleLogin = (e,input)=>{
    const value = e.target.value
    setUpdate({...text, [input]: value})
  }

  const submitLogin = async (e)=>{
    e.preventDefault()
    if(!warning){
      await navigate("/users") 
    }
    // if(token){
    //   setTimeout(async ()=>{
    //     // dispatch(submitAuthentic(text.email, text.password))
    //     // dispatch(setToken(localStorage.getItem("token")))
    //     // dispatch(setWarningLogin(""))
        
    //     setTimeout(async ()=>{
    //       if(!warning){
    //         await navigate("/users") 
    //       }
           
    //       },1000)
    //   },1000)
    // } 
     
  }
  return (
   
    <form id="form-login" className='needs-validation' noValidate>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-4 col-form-label">
          Email
        </label>
        
        <div className="col-sm-8 input-group">
          <input
            type="text"
            className="form-control"
            id="staticEmail"
            onChange={(e)=> handleLogin(e, "email")}
            value={text.email}
            required
          />
       
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="validationCustomPassword" className="col-sm-4 col-form-label">
          Password
        </label>
        <div className="col-sm-8 input-group">
          <input type="password" 
          className="form-control" 
          id="inputPassword" 
          onChange={(e)=> handleLogin(e, "password")}
          value={text.password}
          required
          />
        </div>
      </div>
     
      <div className="col-auto">
       <button type="submit" 
        className="btn btn-primary mb-3 text-white"
        onClick={submitLogin}>
     
            LOGIN
          
        </button>
      </div>
    </form>
  );
};

export default Login;
