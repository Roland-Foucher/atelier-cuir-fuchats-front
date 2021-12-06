import '../../styles/ShoppingPageStyle/ShoppingList.css'
import Aside from './Aside';
import ItemList from './ItemList';
import { useState } from 'react'
import { itemToSale } from '../../datas/itemToSale';

// generate array categorie et state activeCategory

function ShoppingList(){
    const [activeCategory, setActiveCategory] = useState('')
    
    var categories = [];
    itemToSale.forEach((el) =>{
        if ((!categories.includes(el.category))){
            categories.push(el.category)
        }
    })


    return(
        <main className="ShoppingList">
            <Aside
            activeCategory = {activeCategory}
            setActiveCategory = {setActiveCategory}
            categories = {categories}
            >

            </Aside>
            <ItemList
            activeCategory = {activeCategory}
            >

            </ItemList>
        </main>
    )
}

export default ShoppingList;