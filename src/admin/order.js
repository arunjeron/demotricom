import { useState,useEffect } from "react";



const MyOrder=()=>{


    let [allorder,updateoerder] =useState([]);

    const getOrder=()=>{
        let url="http://localhost:1234/order"
        fetch(url)
        .then(Response=>Response.json())
        .then(orderArray=>{
            updateoerder(orderArray.reverse());
        })


    }

    useEffect(()=>{
        getOrder();
    },[1]);






 


    


    return (
        <div className="container mt-5">
        <div className="row ">

            <div className="col-lg-12 text-center">
                <h3 className="text-primary mb-3">Recent Orders:{allorder.length}</h3>
            </div>    

        </div>
        {
            allorder.map((order,index)=>{
                return(
                    <div className="row mb-4 border-bottom" key={index}>
                        <div className="col-lg-3">
                            <div className="shadow-lg rounded p-3">
                            <h5> {order.name}</h5>
                            <p> {order.mobile}</p>
                            <p> {order.email}</p>
                            <p> {order.address}</p>
                            </div> 
                        </div>

                        <div className="col-lg-9">
                            <p className="text-center"> {order.itemlist.length} - Total Item </p>
                        <table className="table table=bordered shadow-lg mt-4">
                        <thead>
                         <tr className="bg-light text-primary">
                            <th>Item Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Photo</th>
                            
                        </tr>
                        </thead >
                        <tbody>
                        {
                            order.itemlist.map((product,index2)=>{

                                return(
                                    <tr key={index2}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.qty}</td>
                                        <td>{product.price*product.qty}</td>
                                        <td><img src={product.photo} height="40"/></td>


                                    </tr>
                                )

                            })
                        }</tbody>
                        </table>
                        </div>

                    </div>
                )

            })
        }
    </div>
    )
}
export default MyOrder;
