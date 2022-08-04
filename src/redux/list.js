/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import konfigurasi from 'config/config';

const initialState = {
    listData: [],
    users: ''
}

// CALLING GET DATA LIST
export const getDataList = async (dispatch)=>{
    let config = {
        method: "get",
        url: konfigurasi.api.baseUrl + "api/user",
    }
    axios(config)
    .then((response)=>{
        console.log(response.data.data)
        dispatch(userData(response.data.data))
    })
    .catch((error)=>{
        console.error(error)
    })
}

// CALLING GET DETAIL USER
export const getUserList = (paramId)=>async (dispatch)=>{
  let config = {
      method: "get",
      url: konfigurasi.api.baseUrl + `api/user/${paramId}`,
  }
  axios(config)
  .then((response)=>{
      console.log(response.data.data)
      dispatch(detailUser(response.data.data))
  })
  .catch((error)=>{
      console.error(error)
  })
}

export const listData = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      userData: (state,action) =>{
        state.listData = action.payload
      },
     detailUser:(state,action)=>{
      state.users = action.payload
     }

    },  
  })

// Action creators are generated for each case reducer function
export const {userData, detailUser} = listData.actions


export const selectUserData = (state)=>  state.listUser.listData
export const selectUser = (state)=>  state.listUser.users


  export default listData.reducer