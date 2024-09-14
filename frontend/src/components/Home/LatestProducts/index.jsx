import LProductsJSON from "../../../db/latest_products.json"
import Img1 from "../../../assets/LatestPImg/img-1.png"
import Img2 from "../../../assets/LatestPImg/img-2.png"
import Img3 from "../../../assets/LatestPImg/img-3.png"
import Img4 from "../../../assets/LatestPImg/img-4.png"
import Img5 from "../../../assets/LatestPImg/img-5.png"
import Img6 from "../../../assets/LatestPImg/img-6.png"
import { useState, useEffect } from "react"
import { range } from "../../../store/helpers"
import "./style.scss"



function LatestProducts() {
    let imgs = [Img1, Img2, Img3, Img4, Img5, Img6];
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
                setProducts(data.sort((a, b) => parseInt(b.id) - parseInt(a.id)))
                console.log(data)
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

                {products?.length > 0 ?
                    products.slice(numberOfItems, numberOfItems + 3).map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="product-item-wrapper">
                                    <img src={imgs[(parseInt(product.id) % imgs.length) || 1]} />
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
                    : <h4><i>No products found</i></h4>
                }
            </div>

            <div className="pagination-wrapper">
                {
                    range(parseInt(products.length / 3)).map((_, index) => {
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