import { useState } from 'react';
import { photo } from '../../datas/photos'
import PhotoModale from './PhotoModale';
import '../../styles/PhotoPage/Photo.css'


function Photo(){
    const [activePhotoModal, setActivePhotoModal] = useState(false)
    const [photoToDisplay, setPhotoToDisplay] = useState(0)
   
    let maxPhoto = photo.length;
    
    const openModal = (id) => {
        setActivePhotoModal(true);
        setPhotoToDisplay(id);
    }

    return <main className='acf-photo-page'>
        <ul className='acf-photo-list'>
        
        {photo.map(({id,cover, name}) =>
            <div key ={id}>
                <li>
                    <img src={cover} 
                        alt= {`${name} cover`} 
                        className='acf-photo-unit' 
                        onClick={() => openModal(id)}/>
                </li>
                {activePhotoModal && (
                    photoToDisplay === id &&
                    <PhotoModale 
                        maxPhoto = {maxPhoto}
                        photoToDisplay = {photoToDisplay}
                        setPhotoToDisplay = {setPhotoToDisplay}
                        setActivePhotoModal = {setActivePhotoModal}
                        cover = {cover}
                        name = {name}
                    />
                )}
            </div>
        )}
        </ul>

        
    </main>
}

export default Photo;