import "./style.scss";
import IMG from "../../../assets/TrendingImg/trending.png"





function Trending() {
    return (
        <>
            <div className="trending-product-wrapper">
                <div className="trending-product-img">
                    <img src={IMG} alt="" />
                </div>

                <div className="trending-product-info">
                    <h1>
                        Unique Features Of leatest & <br />
                        Trending Poducts
                    </h1>

                    <div className="trending-product-ul">
                        <ul>
                            <li>All frames constructed with hardwood solids and laminates</li>
                            <li>Reinforced with double wood dowels, glue, screw - nails corner <br />
                                blocks and machine nails</li>
                            <li>Arms, backs and seats are structurally reinforced</li>
                        </ul>
                    </div>

                    <div className="trending-product-btn-wrapper">
                    <button className="trending-product-btn">Add to cart</button>
                    <div className="trending-product-name-price">
                    <span className="trending-product-name">B&B Italian Sofa </span> <br />
                    <span className="trending-product-price">$ 3999.99</span>
                    </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Trending;