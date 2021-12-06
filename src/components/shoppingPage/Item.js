import '../../styles/ShoppingPageStyle/Item.css'

// Item est la configuration item par item de la liste


function Item({cover, name, price, setActiveModaleItem, setModaleItemOpen,modaleItemOpen}){

    function modalConfiguration(name){
        setActiveModaleItem(name)
        setModaleItemOpen(true)
    }

    
    return <li className="acf-item">
        <span className="acf-item-price">{price}€</span>
        <img src={cover}  
            alt={`${name} cover`} 
            // supprime l'effet zoom de l'image si modal open
            className = {modaleItemOpen ? "acf-item-img" : "acf-item-img acf-item-img-animation"}
            // Clic sur l'image passe le modal en open
            onClick = {() => modalConfiguration(name)} />
        <p className = "acf-item-name">{name}</p>
        <button className = "acf-item-addButton">ajouter</button>
        
    </li>
}

export default Item;

