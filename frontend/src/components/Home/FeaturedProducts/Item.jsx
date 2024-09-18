import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

function Item(props) {
    return (
        <div className="product-item">
            <div className="img-wrapper">
                <button className="view-details">View Details</button>
                <div className="icons">
                    <FiShoppingCart />
                    <FaRegHeart />
                    <HiMagnifyingGlassPlus />
                </div>
                <img src={props.img} alt={props.title} />
            </div>
            <div className="content">
                <h4>{props.title}</h4>
                <div className="colors">
                    <div className="green"></div>
                    <div className="blue"></div>
                    <div className="red"></div>
                </div>
                <p className="code">Code - {props.code}</p>
                <p className="price">${props.price}</p>
            </div>
        </div>
    );
}

export default Item;
