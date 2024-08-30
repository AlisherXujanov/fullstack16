import "./style.scss"

function FeaturedProducts(props) {
    return (
        <section className="featured-products-wrapper">
            <h1>Featured Products</h1>

            <div className="products-content">
                <div className="product-item">
                    <div className="img-wrapper"></div>
                    <h4>Cantilever chair</h4>
                    <div className="colors">
                        <div className="green"></div>
                        <div className="red"></div>
                        <div className="blue"></div>
                    </div>
                    <p className="code">Code - Y641923</p>
                    <p className="price">$42.00</p>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;