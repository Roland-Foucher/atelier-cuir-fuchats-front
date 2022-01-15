import trash from '../../assets/logo/poubelle.svg'
import '../../styles/Cart/Cart.css';


function Cart({ cart, updateCart }) {

    // get total price
    let totalPrice = 0;
    cart.forEach((element) => {
        totalPrice += element.amount * element.price;
    });

    //update cart with amount
    const changeItemAmount = (value, name) => {
        let newCart = [];
        cart.forEach((el) => {
            if (el.name === name) {
                el.amount = parseInt(value);
            }
            newCart.push(el);
        })
        updateCart(newCart);
    }

    //delete an item in cart
    const deletItem = (name) => {
        let newCart = [];
        cart.forEach((el) => {
            if (el.name != name) {
                newCart.push(el);
            }
        })
        updateCart(newCart);
    }

    return (
        <main className="acf-cart-page">
            {cart.length === 0 && (
                <h1 className="acf-cart-title">Votre panier est vide</h1>
            )}


            {cart.length > 0 && (
                <div>
                    <h1 className="acf-cart-title">Votre panier</h1>
                    <table className="acf-cart-table">

                        <thead className="acf-cart-table-head">
                            <th scope="col" className='acf-cart-table-cel'>Produit</th>
                            <th scope="col" className='acf-cart-table-cel'>Prix Unitaire</th>
                            <th scope="col" className='acf-cart-table-cel'>Quantité</th>
                            <th scope="col" className='acf-cart-table-cel'>Prix Total</th>
                        </thead>

                        <tbody className='acf-cart-table-body'>
                            {cart.map(({ price, name, amount, cover }, index) => (
                                
                                <tr className='acf-cart-table-line' key={`${name}-${index}`}>

                                    {/* case product */}
                                    <td className='acf-cart-table-cel'>
                                        <div>
                                            <img    className='acf-cart-table-cover' 
                                                    src={cover} 
                                                    alt={`cover ${name}`} />
                                            <p className='acf-cart-table-itemName'>{name}</p>
                                        </div>
                                    </td>

                                    {/* case unique price */}
                                    <td className='acf-cart-table-cel'>{price}</td>

                                    {/* case amount */}
                                    <td className='acf-cart-table-cel'>
                                        <input  size={1} type="number" 
                                                value={amount} 
                                                min={1} 
                                                max={10} 
                                                onChange={(event) => changeItemAmount(event.target.value, name)} />
                                    </td>

                                    {/* case total price */}
                                    <td className='acf-cart-table-cel'>
                                        <div className='acf-cart-table-trash' onClick={() => deletItem(name)}>
                                            <img  src={trash} alt="corbeille" />
                                        </div>
                                        <p>{amount * price}</p></td>
                                </tr>
                            ))}
                            <tr>
                                {/* full total price */}
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='acf-cart-table-cel acf-cart-table-totalPrice'>{totalPrice}</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            )}
        </main>
    )
}

export default Cart;