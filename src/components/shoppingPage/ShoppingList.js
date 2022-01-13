import '../../styles/ShoppingPageStyle/ShoppingList.css'
import Aside from './Aside';
import ItemList from './ItemList';
import { useState } from 'react'
import { itemToSale } from '../../datas/itemToSale';

// main function of shopping page
function ShoppingList({ cart, updateCart }) {
    
    // useState for the actve category filter
    const [activeCategory, setActiveCategory] = useState('')
    
    
    // make an array with categories not duplicate
    var categories = [];
    itemToSale.forEach((el) => {
        if ((!categories.includes(el.category))) {
            categories.push(el.category)
        }
    })

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
            />

        </main>
    )
}

export default ShoppingList;