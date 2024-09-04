import LProductsJSON from "../../../db/latest_products.json"
import Img from "../../../assets/images/404_page.png"
import "./style.scss"

function LatestProducts() {
    return (
        <div className="latest-products-wrapper">
            <h1>Latest Products</h1>

            <div className="products-wrapper-container">
                {
                    LProductsJSON.map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="product-item-wrapper">
                                    <img src={Img} />
                                    <div className="row">
                                        <p>{product.name}</p>
                                        <div className="price-wrapper">
                                            <span className="price">
                                                ${product.price - (product.price*(product.discount/100))}
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