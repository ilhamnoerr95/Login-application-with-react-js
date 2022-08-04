// import 'styles/_text.scss'
import './_login.scss'
import React, {useState,useEffect} from 'react';
import {  useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {typeEmail,typePassword,submitAuthentic, setToken, setWarningLogin} from 'redux/authentication'
// eslint-disable-next-line no-unused-vars
import {useSelector} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const getToken = useSelector(setToken)
  // console.log("ini email", email)
  // const getToken = localStorage.getItem("token")
  
  const [text,setUpdate] = useState({
    email:"",
    password:""
  })
  useEffect(()=>{
    dispatch(typeEmail(text.email))
    dispatch(typePassword(text.password))
  
  })

  const handleLogin = (e,input)=>{
    const value = e.target.value
    setUpdate({...text, [input]: value})
  }

  const submitLogin = async (e)=>{
    e.preventDefault()
    if(getToken){
      setTimeout(()=>{
        dispatch(setWarningLogin(""))
        dispatch(setToken(localStorage.getItem("token")))
        dispatch(submitAuthentic(text.email, text.password))
          
        setTimeout(()=>{
            navigate("/users")  
          },1000)
      },1000)
    } 
     
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
