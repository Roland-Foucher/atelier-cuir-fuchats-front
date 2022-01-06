import '../../styles/ShoppingPageStyle/Item.css'

// config of an item to display.

function Item({ cover, name, price, id, setActiveModaleItem, setModaleItemOpen, modaleItemOpen }) {

    // open modal on click with the id of the cover clicked
    function modalConfiguration(idChoosen) {
        setActiveModaleItem(idChoosen)
        setModaleItemOpen(true)
    }

    // change style to disable img effect if modal is open
    function disableCoverAnimation() {
        return modaleItemOpen ? "acf-item-img" : "acf-item-img acf-item-img-animation"
    }


    return (
        <li className="acf-item">
            <span className="acf-item-price">{price}€</span>
            
            <img src={cover}
                alt={`${name} cover`}
                className={disableCoverAnimation()}
                onClick={() => modalConfiguration(id)} />
            <p className="acf-item-name">{name}</p>
            <button className="acf-item-addButton">ajouter</button>
        </li>
    )
}

export default Item;

