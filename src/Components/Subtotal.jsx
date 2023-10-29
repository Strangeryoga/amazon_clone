import CurrencyFormatter from 'currency-formatter'
import React from 'react'
import '../C_ss/Subtotal.css'
import FormatPrice from '../Helpers/FormatPrice';
import { useStateValue } from './StateProvider';
import { getCartTotal } from '../reducer/reducer';

function Subtotal() {
  const [{cart} , dispatch] = useStateValue();
  console.log(cart);
   
  return (
    <div className='subtotal'>
      
      <>
          <p>
            Subtotal ({cart?.length} items): <strong><FormatPrice price={getCartTotal(cart)}/>
            </strong>
          </p>
          <small className='subtotal_gift'>
            <input type="checkbox" /> This order 
            contains a gift
          </small>
       </>

       {/* <FormatPrice 
       price={(value) => (
        <>
        <p>
          Subtotal ({cart.length} items): <strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
          <input type="checkbox" /> This order contains  a
          gift
        </small>
        
        </>
       )}
  
    
      /> */}
      <button>Proceed To Checkout</button>
     
    </div>
  );
}

export default Subtotal
