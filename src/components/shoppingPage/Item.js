import swal from 'sweetalert'

import '../../styles/ShoppingPageStyle/Item.css'

// config of an item to display.

function Item({ cover, name, price, id, setActiveModaleItem, setModaleItemOpen, modaleItemOpen, addItemToCart }) {

    // open modal on click with the id of the cover clicked
    function modalConfiguration(idChoosen) {
        setActiveModaleItem(idChoosen)
        setModaleItemOpen(true)
    }

    // change style to disable img effect if modal is open
    function disableCoverAnimation() {
        return modaleItemOpen ? "acf-item-img" : "acf-item-img acf-item-img-animation"
    }
    
    //add item to cart
    // function addItemToCart(name,price,cover){
    //     const currentItemAdd = cart.find((item) => item.name === name);
    //     if(currentItemAdd){
    //         const otherItem = cart.filter((item) =>item.name !== name);
    //         updateCart([...otherItem, {name, price, cover, amount: currentItemAdd.amount + 1}]);
    //     }else{
    //         updateCart([...cart, {name, price, cover, amount: 1}]);
    //     }
    //     swal("l'article à été ajouté au panier !","", "success");;
    // }

    return (
        <li className="acf-item">
            <span className="acf-item-price">{price}€</span>
            
            <img src={cover}
                alt={`${name} cover`}
                className={disableCoverAnimation()}
                onClick={() => modalConfiguration(id)} />
            <p className="acf-item-name">{name}</p>
            <button className="acf-item-addButton" onClick={() => addItemToCart(name,price,cover)}>ajouter</button>
        </li>
    )
}

export default Item;

