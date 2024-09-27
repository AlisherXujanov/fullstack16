import { FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { HiMagnifyingGlassPlus } from "react-icons/hi2"
import { FaHeart } from "react-icons/fa";
import { useContext } from 'react'
import { context } from "../../../store"
import { toast } from 'react-toastify'

function Item(props) {
    const { state, dispatch } = useContext(context)

    function addToWishlist(e) {
        if (state.selectedProducts.includes(props.id)) {
            dispatch({ type: "REMOVE_FROM_CART", payload: props.id })
        } else {
            dispatch({ type: "ADD_TO_CART", payload: props.id })
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
                    <span className='manual-icon'>
                        <FiShoppingCart />
                    </span>
                    <span className='manual-icon'>
                        <HiMagnifyingGlassPlus />
                    </span>

                </div>
                <img src={props.img} alt={props.title} />
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

export default Item