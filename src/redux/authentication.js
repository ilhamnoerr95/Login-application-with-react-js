import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import konfigurasi from 'config/config';


const initialState = {
  email: "",
  password:"",
  token:"",
  warningLogin:"",
  loading:false
}

// CALLING API LOGIN 
// eslint-disable-next-line no-unused-vars
export const submitAuthentic = (email, password) => async (dispatch) => {
  // console.log(`email: ${email}, \n password:${password} `)
  let data = {
    email,
    password
  }

  var config = {
    method: "post",
    url: konfigurasi.api.baseUrl + "api/login" ,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + payload,
      },
      data:data
  };
  axios(config)
  .then((response)=>{
   
      localStorage.setItem("token", JSON.stringify(response.data.token))
      dispatch(setToken(response.data.token));
      dispatch(screenLoading(true))
    
    
  })
  .catch((error)=>{
    console.log(error.response.data.error)
    dispatch(setWarningLogin(error.response.data.error))
  })
}

export const authentication = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    typeEmail: (state,action) =>{
      state.email = action.payload
    },
    typePassword: (state,action)=>{
      state.password = action.payload
    },
    setToken:(state,action)=>{
      state.token = action.payload
    },
    setWarningLogin: (state,action)=>{
      state.warningLogin = action.payload
    },
    screenLoading: (state,action)=>{
      state.loading = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { increment,
   typeEmail, 
   typePassword, 
   setToken, 
   setWarningLogin, screenLoading
  } = authentication.actions

// take useState
export const selectEmail = (state)=>  state.auth.email
export const selectPassword = (state)=> state.auth.password
export const getToken = (state)=> state.auth.token
export const loadingState = (state)=> state.auth.loadingState




export default authentication.reducer