
import Login from "common/components/login"
import Header from "common/components/header"
// import UserList from "common/components/list"
import UserRoutes from 'routes'
// eslint-disable-next-line no-unused-vars
import {Routes as Switch, Route} from 'react-router-dom'
import NotFound from 'common/components/404';
import { useSelector } from 'react-redux';
import {getToken} from 'redux/authentication'


function App() {
  const localToken = localStorage.getItem("token") 

  const token = useSelector(getToken)


  return (
    
  <div>
      <Switch>
        {/* this log out just appear in /users url */}
          <Route path="/users" element={<Header/>}></Route>
      </Switch>

      <Switch>
        <Route path="/" element={<Login/>}/> 
        {localToken || token ? (<Route path="/users/*" element={<UserRoutes/>}/>) : "" }
        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound/>}></Route>
      </Switch>
   
   

  </div>


    
 

  );
}

export default App;
