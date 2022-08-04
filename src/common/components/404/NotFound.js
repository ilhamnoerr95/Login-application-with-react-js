// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";



const NotFound = ()=> {
    // let navigate = useNavigate();
   
    // const redirectLink = (e)=>{
    //     e.preventDefault();
    //     const localToken = JSON.parse(localStorage.getItem("token"))
      
    //       if(localToken) {
    //           navigate("/users")
    //       } 
    //       navigate("/")
    //   }
      
// const getToken = localStorage.getItem("token") 
// useEffect(()=>{
//     if(!getToken){
//         navigate("/")
//   } else {
//     navigate("/users")

//   }
// },[])
   
    return (  
        <>
        <h1>Page Not Found</h1>
        {/* <button type="submit" 
        className="btn btn-primary mb-3 text-white"
        onClick={redirectLink}>
     
            Back To The Nature
          
        </button> */}
        </>
       
    );
}

export default NotFound;