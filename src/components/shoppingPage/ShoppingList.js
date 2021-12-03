import '../../styles/ShoppingPageStyle/ShoppingList.css'
import Aside from './Aside';
import ItemList from './ItemList';

function ShoppingList(){
    return(
        <main className="ShoppingList">
            <Aside></Aside>
            <ItemList></ItemList>
        </main>
    )
}

export default ShoppingList;