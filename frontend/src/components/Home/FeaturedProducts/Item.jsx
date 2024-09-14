function Item(props) {
    return (
        <div className="product-item">
            <div className="img-wrapper">
                <img src={props.img} width={"100%"} height={200} />
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