import "./style.scss"
import Heading from "../common/Heading"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import LatestProducts from "../Home/LatestProducts"
import { useState, useEffect } from "react";
import CreateForm from "./Create.jsx"
import { useTranslation } from "react-i18next"


function Products(props) {
    const { t } = useTranslation()
    const [sectionName, setSectionName] = useState("products")

    function activateSection(e=null, item_created=false) {
        const btns = document.querySelectorAll(".settings-wrapper .action-buttons button")
        btns.forEach(btn => { btn.classList.remove("active") })

        if (item_created) {
            btns[0].classList.add("active")
            setSectionName("products")
        } else {
            const { name } = e.target
            e.target.classList.add("active")
            setSectionName(name)
        }
    }

    useEffect(() => {
        document.title = "Products"
    }, [])


    return (
        <div className="products-page-wrapper">
            <Heading title={t("heading.products")} path={t("heading.path.products")}>
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
                    <CreateForm activateSection={activateSection} />
            }
        </div>
    )
}

export default Products;