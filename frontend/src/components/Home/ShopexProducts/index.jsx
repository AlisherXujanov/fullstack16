import ShopexOffersJSON from "../../../db/shopex_offers.json"
import Img1 from "../../../assets//ShopexImg/img-1.png"
import Img2 from "../../../assets//ShopexImg/img-2.png"
import Img3 from "../../../assets//ShopexImg/img-3.png"
import Img4 from "../../../assets//ShopexImg/img-4.png"
import "./style.scss"

function ShopexProducts() {
    let imgs = [Img1, Img2, Img3, Img4];
    

    return (
        <div className="shopex-offers-wrapper">
            <h1>What Shopex Offer!</h1>

            <div className="offers-container">
                {
                    ShopexOffersJSON.map((offer, index) => {
                        return (
                            <div key={index} className="offer">
                                <img src={imgs[offer.id % imgs.length]} />
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