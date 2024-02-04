import ChanelsData from "../Data/ChanelsData";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const chanels = ChanelsData.find(item => item.id === cartItem.chanelId);
   
    

    return (
        <div className="total">
      <h3>{chanels.name}</h3>
      <div className="textCart">
       <p>{cartItem.quantity} item(s)</p>
       <p>Price: ${chanels.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="remove"/></span>
       </div>
        </div>
    )}

export default CartItem;
