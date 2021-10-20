import  { useHistory } from 'react-router-dom'

export default function Product({product}) {
    const history = useHistory();
    return (
        <div className="product" onClick={e => {
            history.push("/product/" + product.id);}
        }>
            <img className="product_picture" src={product.picture_url} alt="Product picture"/>
            <div className="product_info">
                <a className="product_name">{product.name}</a>
                <a className="product_prize">{product.prize_euro + "€"}</a>
            </div>
        </div>
    );
}