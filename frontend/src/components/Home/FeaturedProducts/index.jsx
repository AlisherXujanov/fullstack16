import "./style.scss"
import Item from "./Item.jsx"
import Img from "../../../assets/images/404_page.png"
import FProductsJSON from "../../../db/featured_products.json"

function FeaturedProducts(props) {
    return (
        <section className="featured-products-wrapper">
            <h1>Featured Products</h1>

            <div className="products-content">
                {
                    FProductsJSON.map((product, index) => {
                        return (
                            <div key={index}>
                                <Item 
                                    img={Img} 
                                    title={product.title}
                                    code={product.code}
                                    price={product.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default FeaturedProducts;