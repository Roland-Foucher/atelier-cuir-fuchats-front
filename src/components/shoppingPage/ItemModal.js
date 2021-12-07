import '../../styles/ShoppingPageStyle/ItemModal.css'
import onClickOutside from "react-onclickoutside";
import { useState } from 'react';

//
// Le modal des Item reprend la base d'affichage des article avec des comentaires supplementaires (en array dans le fichier data)
//

function ItemModal({name, price, fullName, comment, setModaleItemOpen, allCover}){

    const [coverSelect, setCoverSelect] = useState(0)
    const [zoomImage, setZoomImage] = useState(false)
    
    // array de cover
    var coverArray = []
    allCover.forEach(element => {
        coverArray.push(element)
    });
    
    // init the number of cover and current cover to increase or decrease
    var numberOfCover = coverArray.length-1
    var numArraySelect = coverSelect

    // on click left arrow
    const leftArrow = () => {
        if (coverSelect > 0){
            numArraySelect -= 1
            setCoverSelect(numArraySelect)
        }else {
            setCoverSelect(numberOfCover)
        }
    }

    // on click right arrow
    const rightArrow = () => {
        if (coverSelect < numberOfCover){
            numArraySelect+=1
            setCoverSelect(numArraySelect)
        }else {
            setCoverSelect(0)
        }
    }

    const checkZoomClassName = (zoomClass, normalClass) => zoomImage  ? zoomClass : normalClass 
    


    ItemModal.handleClickOutside = () => setModaleItemOpen(false)
    return (
    <article className={checkZoomClassName("acf-item-modal acf-item-modal-zoom", "acf-item-modal")} >
        
        <span className=  {checkZoomClassName("acf-item-modal-close acf-item-modal-close-zoom","acf-item-modal-close")} onClick = {() => setModaleItemOpen(false)}>X</span>
        <div className= "acf-item acf-item-modal-left" onClick = {() => setZoomImage(true)}> 
            
            <span className="acf-item-price">{price}€</span>
            <div className = {checkZoomClassName("acf-item-modal-imgGlobal acf-item-modal-imgGlobal-zoom", "acf-item-modal-imgGlobal")}>
                <img src="https://img.icons8.com/ios/50/000000/circled-chevron-left.png" 
                    alt= "fleche gauche" 
                    className="acf-item-modal-arrow acf-item-modal-leftArrow"
                    onClick = {() => leftArrow()}
                    />
                <img src={coverArray[coverSelect]}  
                    alt={`${name} cover`} 
                    className = "acf-item-img" 
                />             
                <img src="https://img.icons8.com/ios/50/000000/circled-chevron-right.png" 
                    alt= "fleche droite" 
                    className="acf-item-modal-arrow acf-item-modal-rightArrow"
                    onClick = {() => rightArrow()}
                    />
            </div>
            <p className = "acf-item-name">{name}</p>
            <button className = "acf-item-addButton" >ajouter</button>
        
        </div>
        <div className={checkZoomClassName("acf-item-modal-comment acf-item-modal-comment-zoom", "acf-item-modal-comment")}>
            <h2>{fullName}</h2>
            {comment.map((el) => 
                <p>{el}</p>
            )}
            
        </div>
    </article>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => ItemModal.handleClickOutside,

};


export default onClickOutside(ItemModal, clickOutsideConfig);