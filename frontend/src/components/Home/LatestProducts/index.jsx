import Img1 from "../../../assets/LatestPImg/img-1.png"
import Img2 from "../../../assets/LatestPImg/img-2.png"
import Img3 from "../../../assets/LatestPImg/img-3.png"
import Img4 from "../../../assets/LatestPImg/img-4.png"
import Img5 from "../../../assets/LatestPImg/img-5.png"
import { useState, useEffect } from "react"
import { range } from "../../../store/helpers"
import "./style.scss"



function LatestProducts() {
    const [products, setProducts] = useState([])
    const [numberOfItems, setNumberOfItems] = useState(0)

    useEffect(() => {
        fetchLatestProducts()
    }, [])


    function fetchLatestProducts() {
        const URL = "http://localhost:3000/products"
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
    }


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

                { products &&
                    products.slice(numberOfItems, numberOfItems + 3).map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="product-item-wrapper">
                                    <img src={Img1} />
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
                { products ?
                    range(products?.length / 3).map((_, index) => {
                        return (
                            <button className={index == 0 ? "active item" : "item"} key={index}
                                onClick={(e) => { activateNumber(e, index * 3) }}
                            >
                                {index + 1}
                            </button>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default LatestProducts;