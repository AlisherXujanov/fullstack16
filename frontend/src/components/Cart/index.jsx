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

    function getAllIDs() {
        return state.basket.map(p => p.id)
    }
    function getProductCount(p_id) {
        return state.basket.find(p => p.id == p_id).count
    }

    // function setProductItemCount(event, p_id) {
    //     event.preventDefault()
    //     event.stopPropagation()
    //     const { name } = event.target

    //     if (name == 'inc' || name == 'dec') {
    //         dispatch({ type: name, payload: p_id })
    //     }
    //     else {
    //         console.error("Invalid btn name")
    //     }
    // }

    return (
        <>
            <Heading title="Cart" path="Cart">
                <FaCartArrowDown />
            </Heading>
            <div className="cart-page-wrapper">
                <div className="products-content">
                    {
                        FProductsJSON.filter(p =>
                            getAllIDs().includes(p.id)
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
                                        <button name="dec"
                                            onClick={(e) => dispatch({ type: e.target.name, payload: product.id })}
                                        >➖</button>
                                        {getProductCount(product.id)}
                                        <button name="inc"
                                            onClick={(e) => dispatch({ type: e.target.name, payload: product.id })}
                                        >➕</button>
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