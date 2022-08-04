
import Login from "common/components/login"
import Header from "common/components/header"
// import UserList from "common/components/list"
import UserRoutes from 'routes'
// eslint-disable-next-line no-unused-vars
import {Routes as Switch, Route} from 'react-router-dom'

import NotFound from 'common/components/404';


function App() {
  // const getToken = localStorage.getItem("token")


  return (
    
  <div>
      <Switch>
        {/* this log out just appear in /users url */}
          <Route path="/users" element={<Header/>}></Route>
      </Switch>

      <Switch>
        <Route path="/" element={<Login/>}/> 
        <Route path="/users/*" element={<UserRoutes/>}/>
        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound/>}></Route>
      </Switch>
   
   

  </div>


    
 

  );
}

export default App;
