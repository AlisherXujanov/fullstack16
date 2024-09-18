function Item(props) {
    return (
        <div className="product-item">
            <div className="img-wrapper">
                <div className="icons">
                    <FiShoppingCart />
                    <FaRegHeart />
                    <HiMagnifyingGlassPlus />
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

export default Item;