import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import '../styles/App.css' 
import ShoppingList from './shoppingPage/ShoppingList';
import { useRoutes } from 'react-router-dom'
import Workshop from './workshopPage/Workshop';
import Contact from './contactPage/Contact';
import Photo from './photoPage/Photo';
import News from './newsPage/News';


function App() {
  let shoppingList = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/',
      element: <ShoppingList />
    }
  ])
  let workshop = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/workshop',
      element: <Workshop />
    }
  ])
  let photo = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/photo',
      element: <Photo />
    }
  ])
  let news = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/news',
      element: <News />
    }
  ])
  let contact = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/contact',
      element: <Contact />
    }
  ])
  

  return (
    <div>
      <Banner />
      <Nav />
      {shoppingList}
      {workshop}
      {photo}
      {news}
      {contact}
      <Footer />
      
    </div>
  );
}

export default App;
