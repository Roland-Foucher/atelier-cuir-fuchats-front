import '../../styles/ShoppingPageStyle/Aside.css'



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