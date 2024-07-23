import React, { useState } from 'react'

import "./App.css";
import Cards from './Cards';
import Cart from './Cart';
import Header from './Header';
function App() {
  let product = [{
    id: 1,
    title: "Toy Store",
    img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpINs-qi1oeN9FXV-ww7OveYwlPOAptFVdWxu2COX7&s",
    price: 4500,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 2,
    title: 'Hot Wheels',
    img: 'https://images.unsplash.com/photo-1566219155542-f04453d00635?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 7999,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 3,
    title: 'Offer Sale',
    img: 'https://cdn4.vectorstock.com/i/1000x1000/38/93/seal-icon-with-big-sale-text-vector-18823893.jpg',
    price: 2500,
    star: false,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 4,
    title: 'Watches',
    img: 'https://images.unsplash.com/photo-1649357585015-179ed98f513d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 4999,
    star: true,
    sale: false,
    btnname: "Add to Cart",
  }, {
    id: 5,
    title: 'Beauty Products',
    img: 'https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=1024x1024&w=is&k=20&c=HYjdh-kg1C8Us70Oz9oxg92z4QvkO796J14ZTe2UgOk=',
    price: 19999,
    star: false,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 6,
    title: "Fashion",
    img: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 2499,
    star: true,
    sale: false,
    btnname: "Add to Cart",
  }, {
    id: 7,
    title: 'Mobiles',
    img: 'https://images.unsplash.com/photo-1706372124821-952b522c8961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 34999,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  }, {
    id: 8,
    title: 'Furniture',
    img: 'https://media.istockphoto.com/id/1472836616/photo/interior-of-modern-dining-room-wooden-dining-table-and-chairs-in-room-with-window-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=pQ0P5rottMb1nH2p7ikFomXW7vohS7kSmKXyOvd0FEQ=',
    price: 9000,
    star: true,
    sale: true,
    btnname: "Add to Cart",
  },
  {
    id: 9,
    title: 'Home',
    img: 'https://media.istockphoto.com/id/1345589509/photo/household-appliances-different-appliances-on-counter-in-the-kitchen.jpg?s=1024x1024&w=is&k=20&c=C7I6llbftuMUWit9idqdIht4TX9PSqzPx-vwxLUicK8=',
    price: 2199,
    star: false,
    sale: false,
    btnname: "Add to Cart",
  }
  ];
  const [counts, setCounts] = useState(0)
  const [cartList, setCart] = useState([])
  const [total, setTotal] = useState(0)


  let addToCart = (product) => {
    setCart([...cartList, product])
    setTotal(total + product.price)
    setCounts(counts + 1);
  };
  
let removeCart = (product) =>{
  let itemIndex = cartList.findIndex((item)=> product.id === item.id);
  cartList.splice(itemIndex,1);
  setCart([...cartList]);
  setTotal(total-product.price);
  setCounts(counts - 1);
}

const incQuant = (cartItems) => {
  let itemIndex = cartList.findIndex((item)=> product.id === item.id);
  cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
  setCart([...cartList])
  setTotal(total + cartItems.price)
}

const decQuant = (cartItems) => {
  let itemIndex = cartList.findIndex((item)=> product.id === item.id);
  cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
  setCart([...cartList])
  setTotal(total - cartItems.price)
}

  return (
    <div className="App">
      <Header counts = {counts}/>
    <div className="conatiner">
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            {product.map((product) => <Cards product={product} addToCart={addToCart} cartList={cartList} />)}
          </div>
        </div>
        <div className='col-lg-4'>
          <h3>My Cart List</h3>
          <Cart 
          cartList={cartList} 
          removeCart={removeCart}
          incQuant={incQuant}
          decQuant={decQuant}
          />
          <h4>Total :Rs.{total} </h4>
        </div>
      </div>
      <footer class="py-5 bg-dark">
        <div class="container"><p class=" text-center text-white">Copyright © Your Website 2024</p></div>
      </footer>
      </div>
</div>
  );
}

export default App