import { useEffect, useState } from 'react';
import PhotoModale from './PhotoModale';
import '../../styles/PhotoPage/Photo.css'

// main function of photoPage
// display list of photo with photo.js data

function Photo({serverURL}) {

    //connect to backend
    const [photos, setPhotos] = useState(null);
    const [fetchError, setFetchError] = useState(false)

    useEffect(() => {
        async function getData() {
            try{
                const response = await fetch(serverURL + "/photos")
                const data = await response.json()
                setPhotos(data);
            }catch(error){
                console.error(error)
                setFetchError(true)
            }
        }
        getData();
    }, [serverURL]);
    // switch photo modal active or not
    const [activePhotoModal, setActivePhotoModal] = useState(false)

    // select the photo to display in the modal
    const [photoToDisplay, setPhotoToDisplay] = useState(0)

    // define the number of photos (if not null)
    const maxPhoto = photos ? photos.length : 0;

    // open modal with the id of the photo to display
    const openModal = (id) => {
        setActivePhotoModal(true);
        setPhotoToDisplay(id);
    }

    return (
        <main className='acf-photo-page'>
            <ul className='acf-photo-list'>
            {fetchError && (
                <h1>erreur de connexion au serveur</h1>
            )}

                {photos && photos.map(({ id, cover, name }) =>
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