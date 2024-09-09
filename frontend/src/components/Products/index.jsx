import "./style.scss"
import Heading from "../common/Heading"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import LatestProducts from "../Home/LatestProducts"


function Products(props) {
    return (
        <div className="products-page-wrapper">
            <Heading title="Products" path="Products">
                <MdOutlineShoppingCartCheckout />
            </Heading>

            <LatestProducts />
        </div>
    )
}

export default Products;