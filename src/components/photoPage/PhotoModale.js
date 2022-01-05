import onClickOutside from "react-onclickoutside";
import '../../styles/PhotoPage/PhotoModale.css'

function PhotoModale({ photoToDisplay, name, cover, setPhotoToDisplay, maxPhoto, setActivePhotoModal}) {

    
    const navCover = (operator) => {
        let nav = photoToDisplay + operator;
        if (nav<1){
            nav = maxPhoto
        }
        if (nav>maxPhoto){
            nav = 1
        }
        setPhotoToDisplay(nav);
    }

    // definition de methode clickoutside
    PhotoModale.handleClickOutside = () => setActivePhotoModal(false)

    return <div className="acf-photoModale">
         <span   
            className=  "acf-item-modal-close" 
            onClick = {() => setActivePhotoModal(false)}
            >X</span>
        <img src="https://img.icons8.com/flat-round/64/000000/left--v1.png"
            alt="fleche gauche"
            className="acf-photoModale-arrow"
            onClick={() => navCover(-1)}
        />
        <div className='acf-photoModale-blockCover'>
            <img src={cover} alt={`${name} cover`} className='acf-photoModale-cover' />
        </div>
        <img src="https://img.icons8.com/flat-round/64/000000/right--v1.png"
            alt="fleche gauche"
            className="acf-photoModale-arrow"
            onClick={() => navCover(1)}
        />
    </div>
}

const clickOutsideConfig = {
    handleClickOutside: () => PhotoModale.handleClickOutside,
};


export default onClickOutside(PhotoModale, clickOutsideConfig);
