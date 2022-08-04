import { Link } from "react-router-dom";

const dataItem = ({data})=>  {
    return (  
        <div className="col-sm-4 my-3">
            <div className="card" >
                <div className="card-body" style={{backgroundColor: `${data.color}`}}>
                        <h6 className="card-subtitle mb-2 text-muted">{data.id}</h6>
                        <p className="card-text">{data.year}</p>
                        <Link to={`/users/${data.id}`} className="card-link">{data.name}</Link>  
                </div>
            </div>
 
        </div>

            
        
    );
}

export default dataItem ;