
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src={"https://media.istockphoto.com/id/928418914/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%B1%D0%B0%D0%BA-%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%B1%D0%B0%D0%BA-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B0%D0%BA%D0%B0.jpg?s=2048x2048&w=is&k=20&c=hurRmksCBHN0LiwOePe9H7LtBaXcFK658d5taC7csFA="}/>
           <h3>TOTAL: ${totalPrice}</h3>
             {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)} 
        </div>
    )
}


export default Cart;

