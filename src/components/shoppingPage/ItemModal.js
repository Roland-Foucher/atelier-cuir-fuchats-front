import '../../styles/ShoppingPageStyle/ItemModal.css'


function ItemModal({cover, name, price, fullName, comment, setActiveModaleItem}){
    return (
    <article className="acf-item-modal" >
        <input type="search" onBlur = {() => setActiveModaleItem(false)} autoFocus />
        <span className="acf-item-modal-close" onClick = {() => setActiveModaleItem(false)}>X</span>
        <div className="acf-item acf-item-modal-left" > 
            
            <span className="acf-item-price">{price}€</span>
            <img src={cover}  
                alt={`${name} cover`} 
                className = "acf-item-img" 
                />
            <p className = "acf-item-name">{name}</p>
            <button className = "acf-item-addButton" >ajouter</button>
        
        </div>
        <div className="acf-item-modal-comment">
            <h2>{fullName}</h2>
            <p>{`${comment}`}</p>
        </div>
    </article>
    )
}

export default ItemModal;