
import {Link} from 'react-router-dom';

const PublicHeader=()=>{
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-2 stickey-top ">
            <div className="container-fluid">
                <img className="navbar-brand" height="80px" width="150px" src='trtlogo.jpg'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item ps-4">
                    <Link to="/" className='nav-link active'>Shopping</Link>
                    </li>
                    <li class="nav-item ps-4">
                    <Link to="/cart" className='nav-link active'>MyCart</Link>
                    </li>
                    <li class="nav-item ps-4">
                    <Link to="/wiselist" className='nav-link active'>Wise List</Link>
                    </li>
                    <li class="nav-item ps-4">
                    <Link to="/login" className='nav-link active'>Login</Link>
                    </li>
                </ul>
                
                </div>
            </div>
         </nav>
        </>
    )
}
export default PublicHeader