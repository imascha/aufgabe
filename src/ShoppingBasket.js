import { useSelector, useDispatch } from 'react-redux'

export default function ShoppingBasket() {

    const products = useSelector((state) => state.products.value)
    const basket = useSelector((state) => state.shoppingbasket.value)
    console.log(basket)

    let total = 0;
    if(basket.constructor === Array) {
        basket.forEach(item => {
            const product = products.find(product => product.id == item.id);
            total += parseFloat(product.prize_euro) * parseInt(item.amount);
        });
    }
    console.log(total);

    return (
        <div>
            <div id="basket">
                {basket.map(item => {
                    const product = products.find(product => product.id == item.id);
                    return (
                        <div className="basket_item">
                            <a className="basket_item_name">{"Item: " + product.name}</a>
                            <a className="price">{"Prize: " + product.prize_euro + "€"}</a>
                            <a className="amount">{"Amount: " + item.amount}</a>
                        </div>
                    )
                })}
            </div>
            <a>{"Total: " + total + "€"}</a>
            <button>Buy</button>
        </div>
    );
  }