const ChangeQuantity = ({quantity, setQuantity}) => {
       
    const addThing = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }

    const removeThing = () => {
      if (quantity <= 1) return;
      const newThing = quantity - 1;
      setQuantity(newThing);
    }


    return(
      <div className="cont">
      <button className="btn" onClick={removeThing}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="btn" onClick={addThing}>+</button>
      </div>
    )
 }

 export default ChangeQuantity;
