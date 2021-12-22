import maison from '../../assets/workshop/atelier-cuir-fuchats-raisin-sous-balcon.jpeg'
import maconnais from '../../assets/workshop/atelier-cuir-fuchats-roche-de-vergisson3.jpeg'
import '../../styles/Workshop/Workshop.css'

function Workshop(){
    return <main className='acf-workshop-page'>
        <h2>Bienvenus à l'atelier artisanal de maroquinerie des Fuchats à Bussières (Saône et Loire)</h2>
        <div className='acf-workshop-images-bussiere'>
        <img src={maison} alt="maison fushiats" className='acf-workshop-images-bussiere-single' />
        <img src={maconnais} alt="maison fushiats" className='acf-workshop-images-bussiere-single' />
        </div>
        
        <h3>L'atelier des Fuchats se situe  à Bussières, un village de Bourgogne en Saône et Loire, à 10 kms à l'ouest de Macon.</h3>
    </main>
}

export default Workshop;