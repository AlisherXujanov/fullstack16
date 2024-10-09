import Img1 from "../../../assets/LatestPImg/img-1.png"
import Img2 from "../../../assets/LatestPImg/img-2.png"
import Img3 from "../../../assets/LatestPImg/img-3.png"
import Img4 from "../../../assets/LatestPImg/img-4.png"
import Img5 from "../../../assets/LatestPImg/img-5.png"
import Img6 from "../../../assets/LatestPImg/img-6.png"
import { useState, useEffect } from "react"
import { range } from "../../../store/helpers"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../../store"
import "./style.scss"
import { useTranslation } from "react-i18next"



function LatestProducts() {
    const { t } = useTranslation();
    let imgs = [Img1, Img2, Img3, Img4, Img5, Img6];
    const [products, setProducts] = useState([])
    const [numberOfItems, setNumberOfItems] = useState(0)

    useEffect(() => {
        fetchLatestProducts()
    }, [])

    function fetchLatestProducts() {
        fetch(BASE_URL + "products")
            .then(response => response.json())
            .then(data => {
                setProducts(data.sort((a, b) => parseInt(b.id) - parseInt(a.id)))
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
            <h1>{t('latest.title')}</h1>
            <div className="products-wrapper-container">

                {products?.length > 0 ?
                    products.slice(numberOfItems, numberOfItems + 3).map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="product-item-wrapper">
                                    <Link to={"/products/" + product.id}>
                                        {/* <img src={product.image} /> */}
                                        <img src={imgs[(parseInt(product.id) % imgs.length) || 1]} />
                                        <div className="row">
                                            <p>{product.name}</p>
                                            <div className="price-wrapper">
                                                <span className="price">
                                                    ${(product.price - (product.price * (product.discount / 100))).toFixed(2)}
                                                </span>
                                                <del className="discount">
                                                    ${product.price}
                                                </del>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                    : <h4><i>{t('latest.err')}</i></h4>
                }
            </div>

            <div className="pagination-wrapper">
                { products.length > 3 &&
                    range(Math.ceil(products.length / 3)).map((_, index) => {
                        return (
                            <button className={index === numberOfItems / 3 ? "active item" : "item"} key={index}
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