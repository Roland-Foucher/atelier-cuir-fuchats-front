import '../../styles/ShoppingPageStyle/Item.css'

function Item({cover, name, price}){
    return <li className="item">
        <span className="item-price">{price}€</span>
        <img src={cover}  alt={`${name} cover`} className = "item-img" />
        <p className = "item-name">{name}</p>
    </li>
}

export default Item;

