import React  from 'react'
import '../C_ss/Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Event/Train_GW_editorial_2300x646._CB575880778_.jpg" alt="" />

            <div>
                <h2 className="checkout_title">Your Shopping Cart</h2>

                {/* CartItem */}
                {cart.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                ))
              }
                {/* CartItem */}
                {/* CartItem */}
                {/* CartItem */}

            </div>
        </div>

        <div className="checkout_right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
