import '../../styles/ShoppingPageStyle/Item.css'

function Item({cover, name, price, setActiveModaleItem, setModaleItemOpen}){

    function modalConfiguration(name){
        setActiveModaleItem(name)
        setModaleItemOpen(true)
    }
    return <li className="acf-item">
        <span className="acf-item-price">{price}€</span>
        <img src={cover}  
            alt={`${name} cover`} 
            className = "acf-item-img acf-item-img-animation" 
            onClick = {() => modalConfiguration(name)} />
        <p className = "acf-item-name">{name}</p>
        <button className = "acf-item-addButton">ajouter</button>
        
    </li>
}

export default Item;

