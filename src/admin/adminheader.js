import { Link } from "react-router-dom";


const AdminHeader=()=>{
    return (
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-2 stickey-top ">
          <div className="container-fluid">
              <img className="navbar-brand" height="80px" width="150px" src='trtlogo.jpg'/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                  <li className="nav-item ps-4">
                  <Link to="/" className='nav-link active'>Dashboard</Link>
                  </li>
                  <li className="nav-item ps-4">
                  <Link to="/ORDER" className='nav-link active'>Order Mangement</Link>
                  </li>
                  <li className="nav-item ps-4">
                  <Link to="/PRODUCT" className='nav-link active'>Product Mangement</Link>
                  </li>
                  <li className="nav-item ps-4">
                       <a  className="nav-link active">
                            Welcome-{localStorage.getItem("name")}-
                            <a href="javascript:void(0)" onClick={logout}>Logout</a>
                        </a>
                  </li>
              </ul>
              
              </div>
          </div>
       </nav>
    
  
    )
    }

export default AdminHeader;

const logout =()=>{
  localStorage.clear();
  //window.location.href="http://localhost:3000/#/login";
  window.location.href="http://localhost:5500/#/login"
  window.location.reload();
}