import '../../styles/ShoppingPageStyle/ItemList.css'
import { useState } from 'react'
import Item from './Item';

import { itemToSale } from '../../datas/itemToSale';
import ItemModal from './ItemModal';

// display list of items to sale.
// filter item by category (or not if activeCategory is null)
// modal is in the same div and same map than item 

function ItemList({ activeCategory }) {
    // choose the item to show in modal
    const [activeModaleItem, setActiveModaleItem] = useState('')

    // switch modal open or close
    const [modaleItemOpen, setModaleItemOpen] = useState(false)

    return (
        <section className="acf-shopping-item">
            <ul className="acf-item-list">
                {itemToSale.map(({ name, cover, id, price, category, fullName, comment, allCover }) =>

                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <Item
                                id={id}
                                name={name}
                                cover={cover}
                                price={price}
                                setActiveModaleItem={setActiveModaleItem}
                                setModaleItemOpen={setModaleItemOpen}
                                modaleItemOpen={modaleItemOpen}

                            />

                            {/* if modal is open choose the id of the item to display in modal and show modal */}
                            {modaleItemOpen && (
                                activeModaleItem === id && (

                                    <ItemModal
                                        name={name}
                                        price={price}
                                        fullName={fullName}
                                        comment={comment}
                                        allCover={allCover}
                                        setModaleItemOpen={setModaleItemOpen}
                                    />
                                )
                            )}
                        </div>

                        // if there is no article to display return null
                    ) : null
                )}
            </ul>
        </section>
    )
}

export default ItemList;