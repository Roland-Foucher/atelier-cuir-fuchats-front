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
            if (el.name !== name) {
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
                <div >
                    <h1 className="acf-cart-title">Votre panier</h1>
                    <div className='acf-cart-content'>
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
                                                <img className='acf-cart-table-cover'
                                                    src={cover}
                                                    alt={`cover ${name}`} />
                                                <p className='acf-cart-table-itemName'>{name}</p>
                                            </div>
                                        </td>

                                        {/* case unique price */}
                                        <td className='acf-cart-table-cel'>{price}</td>

                                        {/* case amount */}
                                        <td className='acf-cart-table-cel'>
                                            <input size={1} type="number"
                                                value={amount}
                                                min={1}
                                                max={10}
                                                onChange={(event) => changeItemAmount(event.target.value, name)} />
                                        </td>

                                        {/* case total price */}
                                        <td className='acf-cart-table-cel'>
                                            <div className='acf-cart-table-trash' onClick={() => deletItem(name)}>
                                                <img src={trash} alt="corbeille" />
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
                                <tr>
                                    {/* full total price */}
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className='acf-cart-table-validate'>
                                        <button className='acf-cart-validate-button'>valider le panier</button>
                                    </td>
                                </tr>





                            </tbody>
                        </table>
                        <div>
                            <div className='acf-cart-cb'>
                                <p>L'atelier des Fuchats ne souhaite pas effectuer directement des achats par carte banquaire sur son site web.</p>
                                <p> Nous vous recontacterons pour vous donner nos informations de paiement.</p>
                                <p> L'article vous sera envoyé à la réception du paiement.</p>
                                <p></p>
                                <p>La livraison est possible par collisimo ou point relai pour un prix de ??</p>
                            </div>

                        </div>
                    </div>

                </div>

            )}

        </main>
    )
}

export default Cart;