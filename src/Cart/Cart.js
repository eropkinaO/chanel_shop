
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import Swal from "sweetalert2";


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const checkoutAlert = () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          background: "#EEDAD1bjio",
          text: "Thank you for choosing our online store! Here must be form for payment, but it is not a real store.",
          footer: '<a href="https://www.chanel.com/#">If you want to buy Chanel products, click HERE!</a>'
        });
      }

    return(
        <div>
        <ol className="list">
            
             {cartItems.map((cartItem, index) => <li><CartItem key={index} cartItem={cartItem}/></li>)} 
             <h3>TOTAL: ${totalPrice}</h3>
             </ol>
               <div className="check">
               <button className="checkout" onClick={() => checkoutAlert()}>CHECKOUT</button>
               </div>
               </div>
    )}


export default Cart;

