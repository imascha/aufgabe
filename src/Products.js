import Product from "./Product"
import { useSelector, useDispatch } from 'react-redux'

export default function Products() {
    const products = useSelector((state) => state.products.value)

    return (
        <div id="products">
            {products.map(product => {
                return <Product product={product}/>
            })}
        </div>
    );
  }