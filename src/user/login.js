import { useState } from "react"
const MyLogin = () => {
    let[uname, pickUsername] = useState("");
    let[upass, pickPassword] = useState("");
    let[msg, updateMsg] = useState("Enter Login Details");

    const Gologin = () =>{
        if(uname =="" || upass == ""){
            updateMsg("Empty Email or Password !");
        }else{
            updateMsg("Please wait processing...");
            var url = "http://localhost:1234/account?email="+uname+"&password="+upass;
            fetch(url)
            .then(response=>response.json())
            .then(userinfo =>{
                if(userinfo.length >0){
                    updateMsg("Success ! Please wait redirecting...");
                    localStorage.setItem("id", userinfo[0].id);
                    localStorage.setItem("name", userinfo[0].name);
                   // window.location.href="http://localhost:3000/#/";
                   window.location.href="http://localhost:5500/#/"
                    window.location.reload();
                }else{
                    updateMsg("Fail ! Invalid or Not Exists...");
                }
            })
        }
    }

    return (
        <div className="container mt-5">
           <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <p className="text-danger text-center"> {msg} </p>
                <div className="card border-0 shadow-lg">
                    <div className="card-header bg-primary text-white">
                        Login
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <span> e-Mail Id <small className="text-danger">*</small></span>
                            <input type="email" className="form-control"
                            onChange={obj=>pickUsername(obj.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <span> Password <small className="text-danger">*</small></span>
                            <input type="password" className="form-control"
                            onChange={obj=>pickPassword(obj.target.value)}/>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-danger" onClick={Gologin}>Login</button>
                    </div>
                </div>
              </div>
              <div className="col-lg-4"></div>
           </div>
        </div>
    )
}
export default MyLogin