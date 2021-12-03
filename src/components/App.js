import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import '../styles/App.css' 
import ShoppingList from './shoppingPage/ShoppingList';

function App() {
  return (
    <div>
      <Banner></Banner>
      <Nav></Nav>
      <ShoppingList></ShoppingList>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
