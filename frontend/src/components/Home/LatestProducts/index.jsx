import LProductsJSON from "../../../db/latest_products.json"
import Img1 from "../../../assets/LatestPImg/img-1.png"
import Img2 from "../../../assets/LatestPImg/img-2.png"
import Img3 from "../../../assets/LatestPImg/img-3.png"
import Img4 from "../../../assets/LatestPImg/img-4.png"
import Img5 from "../../../assets/LatestPImg/img-5.png"
import Img6 from "../../../assets/LatestPImg/img-6.png"
import { useState } from "react"
import { range } from "../../../store/helpers"
import "./style.scss"



function LatestProducts() {
    let imgs = [Img1, Img2, Img3, Img4, Img5, Img6];
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
            <div className="products-wrapper-container">

                {
                    LProductsJSON.slice(numberOfItems, numberOfItems + 3).map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="product-item-wrapper">
                                    <img src={imgs[product.id % imgs.length]} />
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

            <div className="pagination-wrapper">
                {
                    range(numberOfPages / 3).map((_, index) => {
                        return (
                            <button className={index == 0 ? "active item" : "item"} key={index}
                                onClick={(e) => { activateNumber(e, index * 3) }}
                            >
                                {index + 1}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LatestProducts;