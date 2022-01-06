import { useState } from 'react';
import { photo } from '../../datas/photos'
import PhotoModale from './PhotoModale';
import '../../styles/PhotoPage/Photo.css'

// main function of photoPage
// display list of photo with photo.js data

function Photo() {
    // switch photo modal active or not
    const [activePhotoModal, setActivePhotoModal] = useState(false)

    // select the photo to display in the modal
    const [photoToDisplay, setPhotoToDisplay] = useState(0)

    // define the number of photo
    let maxPhoto = photo.length;

    // open modal with the id of the photo to display
    const openModal = (id) => {
        setActivePhotoModal(true);
        setPhotoToDisplay(id);
    }

    return (
        <main className='acf-photo-page'>
            <ul className='acf-photo-list'>

                {photo.map(({ id, cover, name }) =>
                    <div key={id}>
                        <li>
                            <img src={cover}
                                alt={`${name} cover`}
                                className='acf-photo-unit'
                                onClick={() => openModal(id)} />
                        </li>
                        {/* display modal if active with the id of cover to display */}
                        {activePhotoModal && (
                            photoToDisplay === id && (
                                <PhotoModale
                                    maxPhoto={maxPhoto}
                                    photoToDisplay={photoToDisplay}
                                    setPhotoToDisplay={setPhotoToDisplay}
                                    setActivePhotoModal={setActivePhotoModal}
                                    cover={cover}
                                    name={name}
                                />
                            )
                        )}
                    </div>
                )}
            </ul>


        </main>
    )
}

export default Photo;