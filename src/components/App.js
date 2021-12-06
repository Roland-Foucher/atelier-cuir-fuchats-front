import { Route, Routes } from 'react-router-dom'

import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import ShoppingList from './shoppingPage/ShoppingList';
import Workshop from './workshopPage/Workshop';
import Contact from './contactPage/Contact';
import Photo from './photoPage/Photo';
import News from './newsPage/News';
import NotFound from './NotFound';

import '../styles/App.css' 



function App() {
  return (
    <div>
      
      <Banner />
      <Nav />
        <Routes>
          <Route exact path="/" element={<ShoppingList />} />
          <Route exact path="/workshop" element={<Workshop />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path= "*" element={<NotFound />} />
        </Routes>
        <Footer />
      
      
    </div>
  );
}

export default App;
