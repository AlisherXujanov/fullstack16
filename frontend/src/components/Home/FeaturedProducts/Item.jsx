import { FiShoppingCart } from 'react-icons/fi'
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from 'react-icons/fa'
import { HiMagnifyingGlassPlus } from "react-icons/hi2"
import { FaHeart } from "react-icons/fa";
import { useContext, memo } from 'react'
import { context } from "../../../store"
import FProductsJSON from "../../../db/featured_products.json"
import { toast } from 'react-toastify'

function Item(props) {
    const { state, dispatch } = useContext(context)

    function addToWishlist(e) {
        e.stopPropagation()
        if (state.selectedProducts.includes(props.id)) {
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: props.id })
        } else {
            dispatch({ type: "ADD_TO_WISHLIST", payload: props.id })
        }
    }
    function addToBasket(e) {
        e.stopPropagation()

        let product = FProductsJSON.find(p => p.id == props.id)

        if (state.basket.map(p => p.id).includes(props.id)) {
            dispatch({ type: "REMOVE_FROM_BASKET", payload: props.id })
        } else {
            dispatch({ type: "ADD_TO_BASKET", payload: { id: props.id, count: 1, price: product.price } })
        }
    }

    return (
        <div className="product-item">
            <div className="img-wrapper">
                <div className="icons">
                    {
                        state.selectedProducts.includes(props.id)
                            ?
                            <span className='manual-icon show-icon'>
                                <FaHeart color='#7E33E0' onClick={addToWishlist} />
                            </span>
                            :
                            <span className='manual-icon'>
                                <FaRegHeart onClick={addToWishlist} />
                            </span>
                    }
                    {
                        state.basket.map(p => p.id).includes(props.id)
                            ?
                            <span className='manual-icon show-icon'>
                                <BsCartCheckFill color='#7E33E0' onClick={addToBasket} />
                            </span>
                            :
                            <span className='manual-icon'>
                                <FiShoppingCart onClick={addToBasket} />
                            </span>
                    }

                    <span className='manual-icon'>
                        <HiMagnifyingGlassPlus />
                    </span>

                </div>
                <img src={props.img} alt={props.title} onClick={(e) => e.target.requestFullscreen()} />
            </div>
            <h4>{props.title}</h4>
            <div className="colors">
                <div className="green"></div>
                <div className="red"></div>
                <div className="blue"></div>
            </div>
            <p className="code">Code - {props.code}</p>
            <p className="price">${props.price}</p>
        </div>
    )
}

export default memo(Item)