import '../../styles/Contact/Contact.css'
import icoSac from '../../assets/sacCarreMarron/sac-cuir-artisanal-rectangle-marron.jpeg'
import michele from '../../assets/workshop/Michele-Foucher-Atelier-cuir-fuchats.jpeg'


function Contact(){

    return <main className="acf-contact-page">
        <div className='acf-contact-pageup'>

        <aside className="acf-contact-right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88959.47025468003!2d4.662871362860385!3d46.30982172079913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f37153408d0b57%3A0x52d9a1006d6603ca!2sAtelier%20cuir%20Fuchats!5e0!3m2!1sfr!2sfr!4v1640700867246!5m2!1sfr!2sfr" 
                    width="600" 
                    height="450" 
                    loading="lazy" 
                    title="map-acf"></iframe>
        </aside>
        
        <article className="acf-contact-left">
            
            <div>

                <h2>Atelier cuir des Fuchats</h2>
                <p>201 chemin des Fuchats <br />
                71960 Bussières</p>
                <p>Téléphone : <br />
                06 25 22 64 23</p>
                <p className="acf-contact-siret"><em>siret : 793 412 248 00015</em></p>

                <h3>L'atelier est ouvert sur demande,<br />n'hésitez pas à me contacter pour venir voir mes articles! </h3>
            </div>
            <div className='acf-contact-ico'>
                <img src={icoSac} alt="icone sac a main" />
            </div>
            <h4>Les amis de la région ✨</h4>
            <p>Boutique associative La Crémaillère à St Gengoux le National :<br /> 
            <a href="www.boutiquelacremaillere.fr"><u>www.boutiquelacremaillere.fr</u></a></p>
            <p>Les Mères Noël et Belles de Mai :<br />
            <a href="www.meresnoel-bellesdemai.com"><u>www.meresnoel-bellesdemai.com</u></a></p>
            

        </article>
       
       
        </div>
        <div className='acf-contact-pagedown'>
            <div className='acf-contact-form'>
                <h2 className='acf-contact-form-title'>📭 Contactez-moi! 📭</h2>
                <form action="" method="POST">
                    <fieldset>
                        <legend>Vos Coordonnées</legend>
                        <p>
                            <label for = "Nom">Nom :</label>
                            <input  type="text" 
                                    name="Nom" 
                                    id="nom" 
                                    size="50" 
                                    placeholder="ex: Holmes"
                                    required /></p>

                        <p>
                            <label for = "Prenom">Prénom :</label>
                            <input  type="text" 
                                    name="Prenom" 
                                    id="prenom" 
                                    size="50" 
                                    placeholder="ex: Sherlock"                                   
                                    required /></p>
                        <p>
                            <label for = "Prenom">Adresse :</label>
                            <input  type="text" 
                                    name="Prenom" 
                                    id="prenom" 
                                    size="50" 
                                    placeholder="ex: 221B Baker St, London NW1 6XE, Royaume-Uni "                                   
                                    required /></p>

                        <p>
                            <label for = "Mail">Mail :</label>
                            <input  type="email" 
                                    name="Mail" 
                                    id="mail" 
                                    size="50" 
                                    placeholder="ex: sherlock@holmes.net" 
                                    required /></p>
                    
                    </fieldset>

                    <fieldset>
                        <legend>Votre Message</legend>
                        <p>
                            
                            <input  type="text" 
                                    name="object" 
                                    id="object" 
                                    size="60"
                                    placeholder="Objet du message"                                   
                                    required /></p>

                        <textarea name="message" id="message" placeholder="Inscrivez ici votre demande" required></textarea>

                    </fieldset>

                    <p><input type="submit" name="submit" value="Envoyer" /></p>

                </form>
            </div>
            <div className='acf-contact-form-img'>
                <img src={michele} alt="Michèle Foucher"  />
            </div>
            
        </div>
    </main>
}

export default Contact;