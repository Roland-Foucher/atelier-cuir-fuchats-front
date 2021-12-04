import '../../styles/ShoppingPageStyle/ItemList.css'
import { useState } from 'react'
import Item from './Item';

import { itemToSale } from '../../datas/itemToSale';
import ItemModal from './ItemModal';

function ItemList({activeCategory}){
    const [activeModaleItem, setActiveModaleItem] = useState('')
	const [modaleItemOpen, setModaleItemOpen] = useState(false)
    


    return <section className="acf-shopping-item">
        <ul className="acf-item-list">
            {itemToSale.map(({name, cover, id, price, category, fullName, comment}) => 
               !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <Item
                            name = {name}
                            cover = {cover}
                            price = {price}
                            setActiveModaleItem = {setActiveModaleItem}
                            setModaleItemOpen = {setModaleItemOpen}
                            
                        />
                        {modaleItemOpen && (
                            activeModaleItem === name &&(
                                
                                <ItemModal
                                    name = {name}
                                    cover = {cover}
                                    price = {price}
                                    fullName = {fullName}
                                    comment = {comment}
                                    setActiveModaleItem = {setActiveModaleItem}
                                />
                            )
                        )}
                        
                        
                    </div>
                   
                    
                ) : null
            )}
        </ul>
    </section>
}

export default ItemList;