import "./style.scss"
import { FaCartArrowDown } from "react-icons/fa";
import Heading from '../common/Heading';
import Item from "../Home/FeaturedProducts/Item.jsx"
import { useContext } from "react";
import { context } from "../../store";
import FProductsJSON from "../../db/featured_products.json"
import Img from "../../assets/FeaturesImg/image2.png"

function Cart() {
    const { state, dispatch } = useContext(context)

    return (
        <>
            <Heading title="Cart" path="Cart">
                <FaCartArrowDown />
            </Heading>
            <div className="cart-page-wrapper">
                <div className="products-content">
                    {
                        FProductsJSON.filter(p =>
                            state.basket.includes(p.id)
                        ).map((product, index) => {
                            return (
                                <div className="product-item" key={index}>
                                    <Item
                                        id={product.id}
                                        img={Img}
                                        title={product.title}
                                        code={product.code}
                                        price={product.price}
                                    />
                                    <div className="products-count">
                                        <button>-</button>
                                        {/* {count} */}
                                        <button>+</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="prices-wrapper">
                    <h2>In total:</h2>
                </div>
            </div>
        </>
    );
}

export default Cart;