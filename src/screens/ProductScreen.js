import { Link } from 'react-router-dom';
import React from 'react';
import Rating from '../componenet/Rating';
import Product from "../product"
export const ProductScreen = (props) => {
    console.log(props.match.params.id);
    const Products=Product.find((x)=> '"'+String(x.id)+'"'===props.match.params.id)
    console.log(Products)
    if(!Products){
        return <div>Product not found</div>
    }
    else{
    return (
        <div>
            <Link to="/">Back to home</Link>
            <div className="raw top">
                <div className="col-2">
                    <img className="large" src={Products.Image} alt="product"/>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>
                            {Products.name}</h1>
                        </li>
                        <li><Rating prod={Products}/></li>
                        <li>Price:{Products.Price}</li>
                        <li> Discription: {Products.Description}</li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                            <div className="raw">
                                <div>
                                    Price
                                </div>
                                <div className="price">
                                    {Products.Price}
                                </div>
                                </div></li>
                            <li>
                            <div className="raw">
                                <div>
                                    Status
                                </div>
                                <div className="price">
                                    {Products.countInStock>0?<span className="success">IN STOCK</span>:
                                    <span className="error">OUT OF STOCK</span>}
                                </div>
                                </div>
                            </li>
                            <button className="primary block"> Add To Cart</button>


                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )}
}
 export default ProductScreen;