// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import {Route, Routes as Switch, useNavigate} from 'react-router-dom';
import UserList from 'common/components/list';
import DetailUser from 'common/components/list/DetailUser';


const Link = () => {

    return  (
    <Switch>    
         <Route index element={<UserList/>} />
         <Route path=":id" element={<DetailUser/>} />
    </Switch>
    ) 
    
}

export default Link;