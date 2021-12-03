import '../../styles/ShoppingPageStyle/Aside.css'


function Aside(){
    return <aside className="acf-aside">
        <p>Filtrer les articles</p>
        <div className="acf-filtre-selector">
            <select name="typeOfItem"  id= "typeOfItem">
            
                <option value="all">tous les articles</option>
                <option value="sac">Les sacs</option>
                <option value="cartable">Les sacoches et cartables</option>
            </select>
        </div>

    </aside>
}

export default Aside;