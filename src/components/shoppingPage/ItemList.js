import '../../styles/ShoppingPageStyle/ItemList.css'

import Item from './Item';
import { itemToSale } from '../../datas/itemToSale';

function ItemList({activeCategory}){


    return <section className="acf-shopping-item">
        <ul className="acf-item-list">
            {itemToSale.map(({name, cover, id, price, category}) => 
               !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <Item
                            name = {name}
                            cover = {cover}
                            price = {price}
                        >
                        </Item>
                        
                    </div>
                    
                ) : null
            )}
        </ul>
    </section>
}

export default ItemList;