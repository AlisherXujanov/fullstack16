import Img1 from "../../assets/FooterImg/footer-img-1.png"
import Img2 from "../../assets/FooterImg/footer-img-2.png"
import Img3 from "../../assets/FooterImg/footer-img-3.png"
import "./style.scss"




function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="description">

                <div id="first-column">
                <h1>Shopex</h1> <br/>
                <input className="email" type="text" placeholder="Enter your email"/> 
                <button className="sign-up">Sign up</button> <br />
                <p>
                <p style={{margin:"3px"}}>Contact Info</p> <br/>
                17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
                </div>


                <div id="second-column">

                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul>
                    <li><a href="#">Laptops & Computers</a></li>
                    <li><a href="#">Cameras & Photography</a></li>
                    <li><a href="#">Smart Phones & Tablets</a></li>
                    <li><a href="#">Video Games & Consoles</a></li>
                    <li><a href="#">Waterproof Headphones</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Customer Care</h4>
                    <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Orders History</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Pages</h4>
                    <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Browse the Shop</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Pre-Built Pages</a></li>
                    <li><a href="#">Visual Composer Elements</a></li>
                    <li><a href="#">WooCommerce Pages</a></li>
                    </ul>
                </div>

                </div>
                </div>


            </div>
                <div className="social">
                    <div>
                    ©Webecy - All Rights Reserved
                    </div>
                    <div>
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                    </div>
                </div>
        </div>
    );
}

export default Footer;