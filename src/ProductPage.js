import { useParams } from 'react-router';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './shoppingbasketSlice'
import  {useHistory } from 'react-router-dom'

export default function ProductPage() {
    const history = useHistory();
    const dispatch = useDispatch()
    const { id } = useParams();
    const products = useSelector((state) => state.products.value)
    const product = products.find(product => product.id == id);
    const [amount, setAmount] = useState(1);

    function amountChange(e) {
        setAmount(e.target.value);
    }

    function addItemtoBasket(e) {
        dispatch(addItem({id: id, amount: amount}));
        history.push('/');
    }

    return (
        <div className="product">
            <img className="product_picture" src={product.picture_url} alt="Product picture"/>
            <div className="product_info">
                <a className="product_name">{product.name}</a>
                <a className="product_decription">{product.description}</a>
                <a className="product_prize">{product.prize_euro + "€"}</a>
            </div>
            <input name="amount" onChange={amountChange} />
            <button onClick={addItemtoBasket}>Add item</button>
        </div>
    );
}