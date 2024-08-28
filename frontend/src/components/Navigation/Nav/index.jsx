import "./style.scss"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";


function Nav(props) {
    return (
        <nav>
            <div className="top">
                <div className="left">
                    <a href="mailto:WebMaster@gmail.com">
                        <AiOutlineMail />
                        WebMaster@gmail.com
                    </a>
                    <a href="#">
                        <BsTelephoneOutbound />
                        +99833 4747477
                    </a>
                </div>
                <div className="right">
                    <Link to="#">English <RiArrowDropDownLine /></Link>
                    <Link to="#">USD <RiArrowDropDownLine /></Link>
                    <Link to="#">Login <CgProfile /></Link>
                    <Link to="#">Wishlist <CiHeart /></Link>
                    <Link to="#"><MdOutlineShoppingCart /></Link>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div id="logo">
                        <h1>WebMaster</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="links">
                        <Link to="#">Home</Link>
                        <Link to="#">Pages</Link>
                        <Link to="#">Products</Link>
                        <Link to="#">Blog</Link>
                        <Link to="#">Shop</Link>
                        <Link to="#">Contact</Link>
                    </div>
                    <div className="searchbar">
                        <input type="search" placeholder="Search" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;