import { useState,useEffect } from "react";



const MyHome=()=>{
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


    const addtocart =(pdata)=>{
        pdata["qty"] =1;
        let url="http://localhost:1234/cart";
        let postData={
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(pdata)
        }
        fetch(url, postData)
        .then(Response=>Response.json())
        .then(serverRes=>{
            alert(pdata.name+"Added in your Cart !");
        })
        }



    const wishlist=(pdata)=>{
        alert("Added in Wishlist")
        let url="http://localhost:1234/cart";
        let postData={
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(pdata)
        }
        fetch(url, postData)
        .then(Response=>Response.json())
        .then(serverRes=>{
            alert(pdata.name+"Added in your Cart !");
        })
    }
    return (
        <>

        <section id="banner" className="container"> Keep Shopping....</section>

        <div className="container mt-4">
            <div className="row">

                {
                    allproduct.map((product,index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <div className="p-4 rounded shadow">
                                    <h5 className="text-center text-primary">{product.name}</h5>
                                    <img src={product.photo} height="140" width="100%" className="rounded"/>
                                    <p className="text-center ">
                                        <del className="text-danger m-1"> Rs.{product.price + (product.price * 15 /100)}</del>
                                        <ins className="text-primary m-1"> Rs.{product.price}</ins>
                                    </p>
                                    <p> {product.info}</p>

                                    <p className="text-center">
                                        <button 
                                        className="btn btn-primary btn-sm"
                                        onClick={addtocart.bind(this,product)}> 
                                        Add to Cart
                                        </button>

                                    &nbsp; &nbsp;
                                        <button 
                                        className="btn btn-info btn-sm"
                                        onClick={wishlist.bind(this,product)}> 
                                        WishList
                                        </button>
                                    </p>


                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>



        </>
    )
}
export default MyHome;