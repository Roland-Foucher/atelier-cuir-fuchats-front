import { Route, Routes } from 'react-router-dom'

import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import ShoppingList from './shoppingPage/ShoppingList';
import Workshop from './workshopPage/Workshop';
import Contact from './contactPage/Contact';
import Photo from './photoPage/Photo';
import News from './newsPage/News';
import UseConditions from './useConditionsPage/UseConditions';
import NotFound from './NotFound';
import Cart from './CartPage/Cart'



import '../styles/App.css'
import { useEffect, useState } from 'react';
import Admin from './adminPage/Admin';

function App() {

  // usestate to display the menu or not with smartphone responsive 
  const [showMenu, setShowMenu] = useState(false);

  // load cart from local user
  const savedCart = localStorage.getItem('cart')

  // if cart is load convert JSON storage to array
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  // when cart change, store cart in JSON format
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <div className='allWebSite'>
      <Banner
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        cart={cart}
      />
      <Nav
        showMenu={showMenu}
      />
      <Routes>
        <Route exact path="/" element={<ShoppingList cart={cart} updateCart={updateCart} />} />
        <Route exact path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/photo" element={<Photo />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/mention-legal" element={<UseConditions />} />
        <Route exact path="/admin" element={<Admin />} />

        {/* page not found  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
