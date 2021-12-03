import '../../styles/ShoppingPageStyle/ItemList.css'
import { itemToSale } from '../../datas/itemToSale';
import Item from './Item';

function ItemList(){
    return <section className="shopping-item">
        <ul className="item-list">
            {itemToSale.map(({name, cover, id, price}) => 
                <div key={id}>
                    <Item
                        name = {name}
                        cover = {cover}
                        price = {price}
                    >
                    </Item>
                </div>
            )}
        </ul>
    </section>
}

export default ItemList;