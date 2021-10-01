import axios from 'axios';
import React,{useEffect, useState} from 'react'
// import Product from "../product";
// import product from "../componenet/Data"
import { LoadingBox } from '../componenet/LoadingBox';
import { MassageBox } from '../componenet/MassageBox';
import Productss from '../Productss';
const HomeScreen = () => {
    const [Product, setProduct] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(()=>{
        const fatchdata=async()=>{
            try{
            setloading(true)
            const {data}=await axios.get("/api/product");
            setloading(false)
            setProduct(data)
        } catch(err){
            setError(err.massage);
            setloading(false)
        }
        };
        fatchdata()
    },[])

    // const [data] = useState(Product)
    return (<div>
        {loading?<LoadingBox></LoadingBox>:
        error?<MassageBox>{error}</MassageBox>:
        <div className="raw center">
        <Productss key={Product.id} Product={Product}/> 
        </div>}
        </div>
    )
}
export default HomeScreen;