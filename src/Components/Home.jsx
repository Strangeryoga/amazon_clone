import React from 'react'
import '../C_ss/Home.css'
import '../C_ss/Product.css'
import Product from './Product';

function Home() {
  return (

    <div className='home'>
        <div className='home_container'>
            <img
            className='home_image' 
            src='https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />

            <div className="home_row">
                {/* Product1 */}
                <Product 
                id="1"
                title="The lean startup"
                price={200}
                image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
                rating={2}
                />
                {/* Product2 */}
                <Product
                id="94094"
                title="MI 138 cm (55 inches) X 4K Dolby Vision Series Smart Google TV L55M8-A2IN (Black) "
                price={30000}
                image="https://m.media-amazon.com/images/I/710a8lTyPnL._SL1500_.jpg"
                rating={4}
                />

            </div>

            <div className="home_row">
                {/* Product */}
                <Product
                id="4233"
                title="OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage) "
                price={29000}
                image="https://m.media-amazon.com/images/I/71K84j2O8wL._SL1500_.jpg"
                rating={3}
                />
                {/* Product */}
                <Product
                id="93903"
                 title="Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black) "
                 price={2000}
                 image="https://m.media-amazon.com/images/I/61SSVxTSs3L._SL1500_.jpg"
                 rating={4}
                />
                {/* Product */}
                <Product
                id="32904"
                 title="Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves (Also Available in Plus Size)"
                 price={250}
                 image="https://m.media-amazon.com/images/I/61XzMtVz3PL._AC_UL480_FMwebp_QL65_.jpg"
                 rating={3}
                />

            </div>

            <div className="home_row">
                {/* Product */}
                <Product
                id="233432"
                title="Redmi Buds 4 Active - Bass Black, 12mm Drivers(Premium Sound Quality), Up to 30 Hours Battery Life, Google Fast Pair, IPX4, Bluetooth 5.3, ENC, Up to 60ms Low Latency Mode, App Support "
                price={1500}
                image="https://m.media-amazon.com/images/I/61dgg4KIRzL._SL1500_.jpg"
                rating={4}
                />

            </div>
        </div>
    </div>
    
  );
}

export default Home
