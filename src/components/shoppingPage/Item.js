import '../../styles/ShoppingPageStyle/Item.css'

function Item({cover, name, price}){
    return <li className="acf-item">
        <span className="acf-item-price">{price}€</span>
        <img src={cover}  alt={`${name} cover`} className = "acf-item-img" />
        <p className = "acf-item-name">{name}</p>
        <button className = "acf-item-addButton">ajouter</button>
        
    </li>
}

export default Item;

