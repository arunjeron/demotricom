import { HashRouter,Routes,Route} from "react-router-dom";

import MyCart from "./cart";
import MyHome from "./home";
import MyLogin from "./login";
import PublicHeader from "./publicheader";
import WiseList from "./wiselist"


const PublicApp=()=>{
    return (
    <HashRouter>
        <PublicHeader/>
        <Routes>
       
            <Route exact path="/" element={<MyHome/>}  />
            <Route exact path="/cart" element={<MyCart/>} />
            <Route exact path="/wiselist" element={<WiseList/>}/>
            <Route exact path="/login" element={<MyLogin/>} />
        </Routes>
    </HashRouter>
    )
}
export default PublicApp