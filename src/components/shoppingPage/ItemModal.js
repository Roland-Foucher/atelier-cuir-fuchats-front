import '../../styles/ShoppingPageStyle/ItemModal.css'
import onClickOutside from "react-onclickoutside";
import { useState } from 'react';


// Item modal have the same structure than item display with comments and more cover.
// can zoom on the cover on click 
// comment and covers are in arrays in data 

function ItemModal({ name, price, fullName, comment, setModaleItemOpen, allCover, addItemToCart }) {

    // switch the covers on click left or right array
    const [coverSelect, setCoverSelect] = useState(0);

    // switch zoom cover or not
    const [zoomImage, setZoomImage] = useState(false);

    // make array of covers
    var coverArray = [];
    allCover.forEach(element => {
        coverArray.push(element)
    });


    // switch covers on click arrow
    // operator -1 to discrease, +1 to increase
    const switchCover = (operator) => {
        const numberOfCover = coverArray.length - 1;
        let navCover = coverSelect + operator;
        if (navCover > numberOfCover) {
            navCover = 0;
        }
        if (navCover < 0) {
            navCover = coverArray.length - 1;
        }
        setCoverSelect(navCover);
    }

    // switch style type to zoom cover selected
    const defineStyleOnZoom = (styleClass) => {

        return styleClass = zoomImage ? styleClass + " " + styleClass + "-zoom" : styleClass
    }

    // switch type of arrow when onZoom
    const changeArrowType = (zoomType, normalType) => {

        return zoomImage ? zoomType : normalType
    }

    // define methode clickoutside modal
    ItemModal.handleClickOutside = () => setModaleItemOpen(false)

    return (
        //  modal
        <article className={defineStyleOnZoom("acf-item-modal")} >

            {/* close button */}
            <span
                className={defineStyleOnZoom("acf-item-modal-close")}
                onClick={() => setModaleItemOpen(false)}
            >X</span>

            {/* modal left part */}
            <div className="acf-item acf-item-modal-left">

                {/* price */}
                <span className="acf-item-price">{price}€</span>

                {/* zoom ico */}
                <img src="https://img.icons8.com/ios/50/000000/expand--v1.png"
                    className={defineStyleOnZoom("acf-item-modal-zoomico")}
                    alt="zoom"
                    onClick={() => setZoomImage(true)}
                />

                {/* image + arrows */}
                <div className={defineStyleOnZoom("acf-item-modal-imgGlobal")}>

                    <img src={changeArrowType(
                        "https://img.icons8.com/flat-round/64/000000/left--v1.png",
                        "https://img.icons8.com/ios/50/000000/circled-chevron-left.png")}

                        alt="fleche gauche"
                        className={defineStyleOnZoom("acf-item-modal-leftArrow acf-item-modal-arrow")}
                        onClick={() => switchCover(-1)}
                    />
                    <img src={coverArray[coverSelect]}
                        alt={`${name} cover`}
                        className={defineStyleOnZoom("acf-item-modal-img")}

                    />
                    <img src={changeArrowType(
                        "https://img.icons8.com/flat-round/64/000000/right--v1.png",
                        "https://img.icons8.com/ios/50/000000/circled-chevron-right.png")}

                        alt="fleche droite"
                        className={defineStyleOnZoom("acf-item-modal-righrArrow acf-item-modal-arrow")}
                        onClick={() => switchCover(1)}
                    />
                </div>

                {/* item name + add button  */}
                <p className="acf-item-name">{name}</p>
                <button className="acf-item-addButton" onClick={() => addItemToCart(name,price,coverArray[0])}>ajouter</button>

            </div>

            {/* modal right part - comments */}
            <div className={defineStyleOnZoom("acf-item-modal-comment")}>
                <h2>{fullName}</h2>
                {comment.map((el) =>
                    <p>{el}</p>
                )}
            </div>
        </article>
    )
}

// on click outside modal
const clickOutsideConfig = {
    handleClickOutside: () => ItemModal.handleClickOutside,
};


export default onClickOutside(ItemModal, clickOutsideConfig);