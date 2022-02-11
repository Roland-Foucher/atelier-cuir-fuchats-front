import '../../styles/Contact/Contact.css'
import icoSac from '../../assets/sacCarreMarron/sac-cuir-artisanal-rectangle-marron.jpeg'
import michele from '../../assets/workshop/Michele-Foucher-Atelier-cuir-fuchats.jpeg'

import swal from 'sweetalert'
import { useState } from 'react'



function Contact({ serverURL }) {
    const  [firstname, setFirstName] = useState('')
    const  [lastname, setLastName] = useState('')
    const  [adress, setAdress] = useState('')
    const  [email, setEmail] = useState('')
    const  [title, setTitle] = useState('')
    const  [content, setContent] = useState('')

    // make data to send
    const data = {firstname, lastname, adress, email, title, content};

    //post form to backend
    const handleSubmit = async (event) => {

        // button submit to default
        event.preventDefault();
        
        // take data to JSON
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        };
        
        // Post data
        await fetch(serverURL + '/contact', requestOptions)
            
            .then((response) => {
                if (response.status === 201){
                    swal("le message a été envoyé avec succès!","", "success");
                    console.log(response)
                    console.log(response.json())
                }else{
                    console.log(response.status)
                    swal("Un problème est survenu!","", "error"); 
                }
            })
            .catch((error) => {
                console.error(error);
                swal("Un problème est survenu!","", "error");
            })

    }
    

return (
    <main className="acf-contact-page">

        {/* part up of the page */}
        <div className='acf-contact-pageup'>

            {/* google map */}
            <aside className="acf-contact-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88959.47025468003!2d4.662871362860385!3d46.30982172079913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f37153408d0b57%3A0x52d9a1006d6603ca!2sAtelier%20cuir%20Fuchats!5e0!3m2!1sfr!2sfr!4v1640700867246!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    loading="lazy"
                    title="map-acf"></iframe>
            </aside>

            {/* contact part */}
            <article className="acf-contact-left">

                {/* adress */}
                <div>
                    <h2>Atelier cuir des Fuchats</h2>
                    <p>201 chemin des Fuchats <br />
                        71960 Bussières</p>
                    <p>Téléphone : <br />
                        06 25 22 64 23</p>
                    <p className="acf-contact-siret"><em>siret : 793 412 248 00015</em></p>

                    <h3>L'atelier est ouvert sur demande,<br />n'hésitez pas à me contacter pour venir voir mes articles! </h3>
                </div>

                {/* cover */}
                <div className='acf-contact-ico'>
                    <img src={icoSac} alt="icone sac a main" />
                </div>

                {/* friends */}
                <div>
                    <h4>Les amis de la région ✨</h4>
                    <p>Boutique associative La Crémaillère à St Gengoux le National :<br />
                        <a href="www.boutiquelacremaillere.fr"><u>www.boutiquelacremaillere.fr</u></a></p>
                    <p>Les Mères Noël et Belles de Mai :<br />
                        <a href="www.meresnoel-bellesdemai.com"><u>www.meresnoel-bellesdemai.com</u></a></p>
                </div>
            </article>
        </div>

        {/* part down of the page */}
        <div className='acf-contact-pagedown'>

            {/* contact form */}
            <div className='acf-contact-form'>
                <h2 className='acf-contact-form-title'>📭 Contactez-moi! 📭</h2>
                <form >

                    {/* user informations */}
                    <fieldset>
                        <legend>Vos Coordonnées</legend>
                        <p> <label for="lastName">Nom :</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastname"
                                size="50"
                                placeholder="ex: Holmes"
                                required
                                onChange={(event) => setLastName(event.target.value)}
                            /></p>

                        <p> <label for="firstName">Prénom :</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                size="50"
                                placeholder="ex: Sherlock"
                                required 
                                onChange={(event) => setFirstName(event.target.value)}
                                /></p>

                        <p> <label for="adress">Adresse :</label>
                            <input
                                type="text"
                                name="adress"
                                id="adress"
                                size="50"
                                placeholder="ex: 221B Baker St, London NW1 6XE, Royaume-Uni "
                                required 
                                onChange={(event) => setAdress(event.target.value)}
                
                                /></p>

                        <p> <label for="mail">Mail :</label>
                            <input
                                type="email"
                                name="mail"
                                id="mail"
                                size="50"
                                placeholder="ex: sherlock@holmes.net"
                                required 
                                onChange={(event) => setEmail(event.target.value)}
                                /></p>

                    </fieldset>

                    {/* user message */}
                    <fieldset>
                        <legend>Votre Message</legend>
                        <p> <input
                            type="text"
                            name="title"
                            id="title"
                            size="60"
                            placeholder="Objet du message"
                            required 
                            onChange={(event) => setTitle(event.target.value)}
                            /></p>

                        <textarea
                            name="content"
                            id="content"
                            placeholder="Inscrivez ici votre demande"
                            required
                            onChange={(event) => setContent(event.target.value)}
                            ></textarea>

                    </fieldset>

                    {/* submit button */}
                    <p><input type="submit" name="submit" value="Envoyer" onClick={(event) => handleSubmit(event)} /></p>
                </form>
            </div>

            {/* michele photo */}
            <div className='acf-contact-form-img'>
                <img src={michele} alt="Michèle Foucher" />
            </div>
        </div>
    </main>
)
}

export default Contact;