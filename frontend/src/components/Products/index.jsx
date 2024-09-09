import "./style.scss"
import Heading from "../common/Heading"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


function Products(props) {
    return (
        <div className="products-page-wrapper">
            <Heading title="Products" path="Products">
                <MdOutlineShoppingCartCheckout />
            </Heading>
        </div>
    )
}

export default Products;