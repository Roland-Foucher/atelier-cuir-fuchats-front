import '../../styles/ShoppingPageStyle/ItemList.css'
import { useEffect, useState } from 'react'
import Item from './Item';
import ItemModal from './ItemModal';
import swal from 'sweetalert'

// display list of items to sale.
// filter item by category (or not if activeCategory is null)
// modal is in the same div and same map than item 

function ItemList({ activeCategory, cart, updateCart }) {
    // get object from backend
    const [itemToSale, setItemToSale] = useState(null);
    const [fetchError, setFetchError] = useState(true)
   
    useEffect(() => {
        async function getData() {
            const response = await fetch("http://localhost:3001/api/shoppingList")
            if(!response.ok){
                console.log(response.status, response.statusText)
                
            }
            else{
                const data = await response.json()
                setItemToSale(data);
                setFetchError(false)
            }
        }
        getData();
    }, []);


    // choose the item to show in modal
    const [activeModaleItem, setActiveModaleItem] = useState('')

    // switch modal open or close
    const [modaleItemOpen, setModaleItemOpen] = useState(false)
    
    function addItemToCart(name,price,cover){
        const currentItemAdd = cart.find((item) => item.name === name);
        if(currentItemAdd){
            const otherItem = cart.filter((item) =>item.name !== name);
            updateCart([...otherItem, {name, price, cover, amount: currentItemAdd.amount + 1}]);
        }else{
            updateCart([...cart, {name, price, cover, amount: 1}]);
        }
        swal("l'article à été ajouté au panier !","", "success");
    }
    return (
        <section className="acf-shopping-item">
            {fetchError && (
                <h1>erreur de connexion au serveur</h1>
            )}
            <ul className="acf-item-list">
                {itemToSale && itemToSale.map(({ name, cover, id, price, category, fullName, comment, allCover, quantity }) =>

                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <Item
                                id={id}
                                name={name}
                                cover={cover}
                                price={price}
                                setActiveModaleItem={setActiveModaleItem}
                                setModaleItemOpen={setModaleItemOpen}
                                modaleItemOpen={modaleItemOpen}
                                addItemToCart = {addItemToCart}


                            />

                            {/* if modal is open choose the id of the item to display in modal and show modal */}
                            
                            {modaleItemOpen && (
                                activeModaleItem === id && (
                                    
                                    <ItemModal
                                    key = {id + name}
                                        name={name}
                                        price={price}
                                        fullName={fullName}
                                        comment={comment}
                                        allCover={allCover}
                                        setModaleItemOpen={setModaleItemOpen}
                                        addItemToCart = {addItemToCart}

                                    />
                                    
                                )
                            )}
                            
                        </div>

                        // if there is no article to display return null
                    ) : null
                )}
            </ul>
        </section>
    )
}

export default ItemList;