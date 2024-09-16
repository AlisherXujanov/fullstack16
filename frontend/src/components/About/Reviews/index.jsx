import "./style.scss"
import Img1 from "../../../assets/ReviewrsImg/First.png"
import Img2 from "../../../assets/ReviewrsImg/Second.png"
import Img3 from "../../../assets/ReviewrsImg/Third.png"

function Reviews() {
    return (
        <div className="reviews-wrapper">
            <h1>Our Client Say!</h1>

            <div className="reviews-container">
                <div className="photos">
                    <img src={Img2} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img3} alt="" />
                </div>

                <div className="reviews">
                    <h2>Selena Gomez</h2>
                    <h5>Ceo At Webecy Digital</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br />
                        aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
                        <br />aliquam lacus volutpat praesent.
                    </p>
                    <div className="pagination">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;