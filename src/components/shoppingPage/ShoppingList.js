import '../../styles/ShoppingPageStyle/ShoppingList.css'
import Aside from './Aside';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'

// main function of shopping page
function ShoppingList({ cart, updateCart, serverURL }) {
    
        // get object from backend
const [itemToSale, setItemToSale] = useState(null);
const [fetchError, setFetchError] = useState(false)

useEffect(() => {
    async function getData() {
        try{
            const response = await fetch(serverURL + "/shoppingList")
            const data = await response.json()
            setItemToSale(data);
            
        }catch(error){
            console.error(error)
            setFetchError(true)
        }
    }
    getData();
}, [serverURL]);
    // useState for the actve category filter
    const [activeCategory, setActiveCategory] = useState('')
    
    
    // make an array with categories not duplicate
    
    var categories = [];
    if (itemToSale != null){
        itemToSale.forEach((el) => {
            if ((!categories.includes(el.category))) {
                categories.push(el.category)
            }
        })
    }

    return (
        <main className="ShoppingList">
            <Aside
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categories}
            />

            <ItemList
                activeCategory={activeCategory}
                cart = {cart}
                updateCart = {updateCart}
                fetchError = {fetchError}
                itemToSale = {itemToSale}

            />

        </main>
    )
}

export default ShoppingList;