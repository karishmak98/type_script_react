import { useCartDispatch, useCartSelector } from '../store/hooks.ts';
import { type CartItem,addToCart,removeFromCart } from '../store/cart-slice.ts';

export default function CartItems() {
  const cartItems=useCartSelector((state)=>state.cart.items);
 const dispatch= useCartDispatch()
  const total=cartItems.reduce((value,item)=>value+item.price*item.quantity,0)
  const formattedTotalPrice=total.toFixed(2)

  function handleRemoveFromCart(id:string){
    dispatch(removeFromCart(id))
  }
  function handleAddToCart(item:CartItem){
    dispatch(addToCart(item))
  }
  return (
    <div id="cart">
      {cartItems.length==0 && <p>No items in cart!</p>}
      

      <ul id="cart-items">
          {cartItems.length>0 && cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
