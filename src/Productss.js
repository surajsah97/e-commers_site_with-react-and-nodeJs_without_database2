import React from 'react'
import Rating from './componenet/Rating';

const Productss = ({Product}) => {
    console.log(Product);
    return (<>
        {Product.map((prod)=>{
            return(
        <div key={prod.id} className="card">
        <a href={`product/"${prod.id}"`}><img className="medium" src={prod.Image} alt="product"/></a>
        <div className="card-body">
 
            <a href={`product\${prod.id}`}>
                <h2>{prod.name}</h2>
            </a>
            <Rating prod={prod}/>
            
            <div className="price">
                {prod.Price}
            </div>
            <div className="price">
                {prod.Description}
            </div>
        </div>
    </div>
        )})}
        </>
    )
}
export default Productss;