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

import '../styles/App.css' 
import { useState } from 'react';
import Admin from './adminPage/Admin';



// fonction App utilise Route de react
//

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      
      <Banner
        showMenu = {showMenu}
        setShowMenu = {setShowMenu}
      />
      <Nav
        showMenu={showMenu}
      />
        <Routes>
          <Route exact path="/" element={<ShoppingList />} />
          <Route exact path="/workshop" element={<Workshop />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/mention-legal" element={<UseConditions />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route path= "*" element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
