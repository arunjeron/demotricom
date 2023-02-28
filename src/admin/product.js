import { useState,useEffect } from "react";
import AddProduct from "./addproduct ";




const MyProduct=()=>{
    let [allproduct,updateProduct] =useState([]);
    const getProduct =()=>{
        let url="http://localhost:1234/productlist"
        fetch(url)
        .then(Response=>Response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
    },[1]);




       //// componet of delete
       const delCart =(pid)=>{
        let url="http://localhost:1234/productlist/"+pid;
        var postData={method:"DELETE"};
        fetch(url,postData)
        .then(Response=>Response.json())
        .then((serverRes)=>{

            getProduct();
        })
    }    



    


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-primary">{allproduct.length} : Product Mangement</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                        <AddProduct/>
                 </div>






                <div className="col-lg-9">
                <table className="table table-bordered shadow-lg mt-4">
                        <thead>
                         <tr className="bg-light text-primary text-center">
                            <th>Item Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Photo</th>
                            <th>Details</th>
                            <th>Delete</th>
                            
                        </tr>
                        </thead >
                        <tbody className="text-center">
                        {
                            allproduct.map((product,index2)=>{

                                return(
                                    <tr key={index2}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td><img src={product.photo} height="40"/></td>
                                        <td>{product.details}</td>

                                        <td className="text-end">
                                            <button
                                             className=" btn btn-danger btn-sm " 
                                            onClick={delCart.bind(this,product.id)}>
                                            Delete
                                        </button>
                                        </td>

                                    </tr>
                                )

                            })
                        }</tbody>
                        </table>

                </div>
            </div>
        </div>
    )
}
export default MyProduct;
