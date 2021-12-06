import '../../styles/ShoppingPageStyle/Aside.css'


// Aside comprend le filtre de categorie
// on entre les props de usestate activecategory
// value '' pour defaut et categorie pour les autre avec un map de l'array
// on change on set l'active category 

function Aside({activeCategory, categories, setActiveCategory}){

    return <aside className="acf-aside">
        <p>Filtrer les articles</p>
        
        <select name="typeOfItem"  
                id= "typeOfItem"   
                className="acf-filtre-selector"
                option = {activeCategory}
                onChange = {(e) => setActiveCategory(e.target.value)} >
            
            <option value=''>tous les articles</option>
            {categories.map((cat) =>
                <option value={cat} key = {cat}>{cat}</option>
            )}

        </select>
        

    </aside>
}

export default Aside;