import LProductsJSON from "../../../db/latest_products.json"
import Img from "../../../assets/images/404_page.png"
import { useState } from "react"
import "./style.scss"

function LatestProducts() {
    const [numberOfItems, setNumberOfItems] = useState(0)
    let numberOfPages = LProductsJSON.length


    function activateNumber(e, number) {
        setNumberOfItems(number)
        const buttons = document.querySelectorAll(".pagination-wrapper button.item")
        buttons.forEach(btn => {
            btn.classList.remove("active")
        })
        e.target.classList.add("active")
    }


    return (
        <div className="latest-products-wrapper">
            <h1>Latest Products</h1>

            <div className="pagination-wrapper">
                {
                    "_".repeat(numberOfPages / 3).split("").map((_, index) => {
                        return (
                            <button className="item" key={index}
                                onClick={(e) => {activateNumber(e, index*3)}}
                            >
                                {index+1}
                            </button>
                        )
                    })
                }
            </div>
            <div className="products-wrapper-container">

                {
                    LProductsJSON.slice(numberOfItems, numberOfItems+3).map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="product-item-wrapper">
                                    <img src={Img} />
                                    <div className="row">
                                        <p>{product.name}</p>
                                        <div className="price-wrapper">
                                            <span className="price">
                                                ${product.price - (product.price * (product.discount / 100))}
                                            </span>
                                            <del className="discount">
                                                ${product.price}
                                            </del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LatestProducts;