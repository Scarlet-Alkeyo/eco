

const ProductCard = ({image, title, price})=>{
    return (
        <div>
           <img src={image} alt = {title}/>
        
           {/* <h2>{image}</h2> */}
           <p> {title}</p>
           <p>{price} </p>
           {/* <p>{address}</p> */}
            
        </div>
    )
}
export  default ProductCard;