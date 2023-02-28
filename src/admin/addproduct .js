import { useState,useEffect } from "react";
const AddProduct=()=>{

        let[pname,pickname]=useState("");
        let[pprice,pickprice]=useState("");
        let[pphoto,pickphoto]=useState("");
        let[pdetails,pickdetails]=useState("");
        let[msg,updatemsg]=useState("");

        const save=()=>{
            var pdata={name:pname,price:pprice,photo:pphoto,info:pdetails}
                let url="http://localhost:1234/productlist";
                let postData={
                    headers:{'Content-Type':'application/json'},
                    method:'POST',
                    body:JSON.stringify(pdata)
                }
                fetch(url, postData)
                .then(Response=>Response.json())
                .then(serverRes=>{
                    updatemsg(pdata.name+"Save Successfully !");
                    window.location.reload();
                })
                
        }



        








    
    return(
        <div className="p-3 rounded shadow">
            <h4 className="text-info text-center"> Add New Product</h4>
            <p className="text-danger">{msg}</p>
            <div className="mb-3">
                <label>Product Name</label>
                <input type="text"className="form-control"
                onChange={obj=>pickname(obj.target.value)} value={pname}/> 
            </div>
            <div className="mb-3">
                <label>Product Price</label>
                <input type="number"className="form-control"
                onChange={obj=>pickprice(obj.target.value)} value={pprice}/> 
            </div>
            <div className="mb-3">
                <label>Product Photo</label>
                <input type="text"className="form-control"
                onChange={obj=>pickphoto(obj.target.value)} value={pphoto}/> 
            </div>
            <div className="mb-3">
                <label>Product Details</label>
                <textarea className="form-control"
                onChange={obj=>pickdetails(obj.target.value)} value={pdetails}></textarea>
            </div>
            <div className="text-center">
             <button className="btn btn-primary" onClick={save}> Save Product</button>
            </div>

           
        </div>
    )
}

export default AddProduct;