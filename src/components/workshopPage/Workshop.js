import home from '../../assets/workshop/atelier-cuir-fuchats-raisin-sous-balcon.jpeg'
import maconnais from '../../assets/workshop/atelier-cuir-fuchats-roche-de-vergisson3.jpeg'
import machine from '../../assets/workshop/atelier-cuir-fuchats-machine-a-coudre.jpeg'
import michele from '../../assets/workshop/Michele-Foucher-Atelier-cuir-fuchats.jpeg'
import tools from '../../assets/workshop/atelier-cuir-fuchats-outils.jpeg'
import sacMarron from '../../assets/sacPascale/Sac-cuir-artisanal-marron-pascale-devant.jpeg'
import sacCarreMarron from '../../assets/sacCarreMarron/sac-cuir-artisanal-rectangle-marron.jpeg'

import '../../styles/Workshop/Workshop.css'

function Workshop(){
    return <main className='acf-workshop-page'>
        <div className='acf-worshop-head acf-workshop-block'>
            <h1 className='acf-workshop-title-main'>L'Atelier Cuir Les Fuchats</h1>
            <img src={machine} alt="machine a coudre" className='acf-workshop-img-machine' />
        </div>
        <div className='acf-workshop-block'>
            <h2 className='acf-workshop-title-blk2'>Bienvenus à l'atelier artisanal de maroquinerie des Fuchats à Bussières (Saône et Loire)</h2>
            <div className='acf-workshop-images'>
                <img src={home} alt="maison fushiats" className='acf-workshop-images-single' />
                <img src={maconnais} alt="maison fushiats" className='acf-workshop-images-single' />
            </div>
            <div className='acf-workshop-descritption'>
                <h3>L'atelier des Fuchats se situe  à Bussières.</h3>
                <h3>Un village de Bourgogne en Saône et Loire, à 10 kms à l'ouest de Macon.</h3>
            </div>
        </div>
        <div className='acf-workshop-block'>
            <h2 className='acf-workshop-title-blk2'>Michèle Foucher et son atelier de travail du cuir</h2>
            <div className='acf-workshop-images'>
                <img src={michele} alt="maison fushiats" className='acf-workshop-images-single' />
                <img src={tools} alt="maison fushiats" className='acf-workshop-images-single' />
            </div>
            <div className='acf-workshop-descritption'>
                <h3>Michèle vous accueillera pour vous présenter sa collection d'articles de maroquinerie en cuir de vachette.</h3>
                <h3>Des pièces uniques, confectionnées sur place, en cuir à tannage végétal ou chimique selon les modèles.</h3>
                
            </div>
        </div>
        <div className='acf-workshop-block'>
            <h2 className='acf-workshop-title-blk2'>Les Articles</h2>
            <div className='acf-workshop-images'>
                <img src={sacMarron} alt="maison fushiats" className='acf-workshop-images-single' />
                <img src={sacCarreMarron} alt="maison fushiats" className='acf-workshop-images-single' />
            </div>
            <div className='acf-workshop-descritption'>
        
                <h3>Une grande variété d'articles : sacs, ceintures, sacoches, porte-monnaie, cartables, ronds de serviette, bracelets ...</h3>
                <h3>Et bien entendu, possibilité de réalisation sur commande d'après un schéma, une photo ou tout autre modèle.</h3>
                <h3> 📦 Commande à distance et expédition possible. 📦 </h3>
            </div>
        </div>
        
        
    </main>
}

export default Workshop;