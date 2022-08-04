// eslint-disable-next-line no-unused-vars
import React, {  useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getDataList, selectUserData} from "redux/list"
// eslint-disable-next-line no-unused-vars
import {loadingState, setToken} from 'redux/authentication'
// eslint-disable-next-line no-unused-vars
import ReactLoading from 'react-loading';
// eslint-disable-next-line no-unused-vars
import DataItem from './UserData'
import { useLottie } from "lottie-react";
import * as worldLocation from 'styles/world-locations.json'


const UserList = ()=> {
  const [loadingScreen, setLoading]= useState(false)
    const dispatch = useDispatch()
// eslint-disable-next-line no-unused-vars
    const userData = useSelector(selectUserData)
// eslint-disable-next-line no-unused-vars
  // const loading = useSelector(loadingState)
  const options = {
    animationData: worldLocation,
    loop: true
  };
// eslint-disable-next-line no-unused-vars
  const { View } = useLottie(options);

  useEffect(()=>{
    dispatch(setToken(JSON.parse(localStorage.getItem("token"))))
    setTimeout(()=>{
      dispatch(getDataList)
      setLoading(true)
    },2000)
  })


    return ( 
      <>
      {/* <div className='container row mx-auto'>
            {userData.map((data)=> {
            return <DataItem key={data.id} data={data}/>
            }    
          )}  
      </div> */}
    {!loadingScreen ? 
        (
        <ReactLoading className='container row mx-auto' type="bars" color="lightblue" height={200} width={200} />
        // {View}
        ):
        (<div className='container row mx-auto'>
            {userData.map((data)=> {
            return <DataItem key={data.id} data={data}/>
            }    
          )}  
          </div>
        )
    }
      </>
   
      
     );
}

export default UserList;