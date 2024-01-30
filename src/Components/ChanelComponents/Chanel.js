
import { useState } from "react";
import ChangeQuantity from "../../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Chanel = ({chanel}) => {
 
    const [quantity, setQuantity] = useState(1);
     const dispatch = useDispatch();

    return(
        
        <div className="container">
        <div className="product-card">

            <div className="cont name">
            <h4>{chanel.name}</h4>
            </div>

            <div className="cont">
            <p>Price: ${chanel.price}</p>
            </div>
            
            <div className="cont">
                <img className="carted"  src={`./${chanel.image}.jpg`}/>    
            </div>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

            <div className="cont">
            <button className="adding" onClick={() => {dispatch(addItemToCart({chanel, quantity}))}}>Add to cart</button>
            </div>

            </div>
        </div>
        
    )
}

export default Chanel;
