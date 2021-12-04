import '../../styles/ShoppingPageStyle/ItemModal.css'


function ItemModal({cover, name, price, fullName, comment, setModaleItemOpen}){

    
    return (
    <article className="acf-item-modal" onCancel = {() => setModaleItemOpen(false)}>
        
        <span className="acf-item-modal-close" onClick = {() => setModaleItemOpen(false)}>X</span>
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
            {comment.map((el) => 
                <p>{el}</p>
            )}
            
        </div>
    </article>
    )
}

export default ItemModal;