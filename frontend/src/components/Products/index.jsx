import "./style.scss"
import Heading from "../common/Heading"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import LatestProducts from "../Home/LatestProducts"
import { useState } from "react";
import CreateForm from "./Create.jsx"

function Products(props) {
    const [sectionName, setSectionName] = useState("products")

    function activateSection(e) {
        const { name } = e.target

        const btns = document.querySelectorAll(".settings-wrapper .action-buttons button")
        btns.forEach(btn => { btn.classList.remove("active") })
        e.target.classList.add("active")
        setSectionName(name)
    }


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

            {
                sectionName == 'products' ?
                    <LatestProducts />    :
                    <CreateForm />
            }
        </div>
    )
}

export default Products;