import ShopexOffersJSON from "../../../db/shopex_offers.json"
import Img from "../../../assets/images/404_page.png"
import "./style.scss"

function ShopexProducts() {
    return (
        <div className="shopex-offers-wrapper">
            <h1>What Shopex Offer!</h1>

            <div className="offers-container">
                {
                    ShopexOffersJSON.map((offer, index) => {
                        return (
                            <div key={index} className="offer">
                                <img src={Img} />
                                <h2>{offer.title}</h2>
                                <p>{offer.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopexProducts;