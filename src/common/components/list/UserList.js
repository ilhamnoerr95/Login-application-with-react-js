// eslint-disable-next-line no-unused-vars
import React, {  useEffect } from 'react';
import {  useDispatch,useSelector } from 'react-redux';
import {getDataList, selectUserData} from "redux/list"
import {loadingState, setToken} from 'redux/authentication'
// eslint-disable-next-line no-unused-vars
import ReactLoading from 'react-loading';

import DataItem from './UserData'

const UserList = ()=> {
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
// eslint-disable-next-line no-unused-vars
    const loading = useSelector(loadingState)
  useEffect(()=>{
    dispatch(getDataList)
    dispatch(setToken(JSON.parse(localStorage.getItem("token"))))
  },[""])


    return ( 
      <>
      <div className='container row mx-auto'>
            {userData.map((data)=> {
            return <DataItem key={data.id} data={data}/>
            }    
          )}  
      </div>
    {/* {!loading ? 
        (<ReactLoading type="balls" color="green" height={667} width={375} />):
        (<div className='container row mx-auto'>
            {userData.map((data)=> {
            return <DataItem key={data.id} data={data}/>
            }    
          )}  
          </div>
        )
    } */}
      </>
   
      
     );
}

export default UserList;