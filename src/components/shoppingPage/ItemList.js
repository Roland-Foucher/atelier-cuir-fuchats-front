import '../../styles/ShoppingPageStyle/ItemList.css'
import { useState } from 'react'
import Item from './Item';

import { itemToSale } from '../../datas/itemToSale';
import ItemModal from './ItemModal';

function ItemList({activeCategory}){
    const [activeModaleItem, setActiveModaleItem] = useState('')
	const [modaleItemOpen, setModaleItemOpen] = useState(false)
    

    // list tous les item avecun map de l'array itemToSole
    // tri les item par active category (ou l'abseance d'active category pour le general)
    // le modal fait partie du div, on recupère le name pour l'afficher
    
  
    return <section className="acf-shopping-item">
        <ul className="acf-item-list">
            {itemToSale.map(({name, cover, id, price, category, fullName, comment, allCover}) => 
               !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <Item
                            name = {name}
                            cover = {cover}
                            price = {price}
                            setActiveModaleItem = {setActiveModaleItem}
                            setModaleItemOpen = {setModaleItemOpen}
                            modaleItemOpen = {modaleItemOpen}
                            
                        />
                        {modaleItemOpen && (
                            activeModaleItem === name &&(
                                
                                <ItemModal
                                    name = {name}
                                    price = {price}
                                    fullName = {fullName}
                                    comment = {comment}
                                    allCover = {allCover}
                                    setModaleItemOpen = {setModaleItemOpen}
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