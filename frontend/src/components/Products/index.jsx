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

            <div className="settings-wrapper">
                <div className="action-buttons">
                    <button
                        onClick={activateSection}
                        className="toggle-products active" name="products"
                    >
                        Products
                    </button>
                    <button
                        onClick={activateSection}
                        className="toggle-product-form" name="products-form"
                    >
                        Create product
                    </button>
                </div>
            </div>

            <LatestProducts />
        </div>
    )
}

export default Products;