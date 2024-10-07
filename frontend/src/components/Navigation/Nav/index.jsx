import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { BASE_URL, context } from "../../../store";
import Logo from "../../../assets/images/logo.png";
import NavLinkDrp from './NavLinkDrp.jsx'
import "./style.scss"
import { useTranslation } from "react-i18next"


function Nav(props) {
    const { state, dispatch } = useContext(context)
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const { t, i18n: { changeLanguage } } = useTranslation()

    useEffect(() => {
        fetchLatestProducts()
    }, [])

    function fetchLatestProducts() {
        fetch(BASE_URL + "products")
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
    }
    function handleSearch(e) {
        let value = e.target.value.toLowerCase()

        if (value.length == 0) {
            setSearchResults([])
        } else {
            let result = products.filter(p => p.name.toLowerCase().includes(value))

            if (result.length == 0) {
                setSearchResults([{ name: "No results found", id: '/not_found' }])
            } else {
                setSearchResults(result)
            }
        }
    }
    function activateCurrency(currency) {
        dispatch({ type: "ACTIVATE_CURRENCY", payload: currency.code })
    }
    function activateLang(language) {
        dispatch({ type: "SET_LANG", payload: language.code })
        changeLanguage(language.code)
    }

    const borderStyle = {
        border: "1px solid #FB2E86",
        borderTop: "none",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
    }
    return (
        <nav>
            <div className="top">
                <div className="left">
                    <a href="mailto:WebMaster@gmail.com">
                        <AiOutlineMail />
                        WebMaster@gmail.com
                    </a>
                    <a href="tel:+998334747477">
                        <BsTelephoneOutbound />
                        +99833 4747477
                    </a>
                </div>
                <div className="right">
                    <NavLinkDrp items={state.languages} activateFn={activateLang} />
                    <NavLinkDrp items={state.currencies} activateFn={activateCurrency} />

                    <Link to="login">{t("navigation.login")} <CgProfile /></Link>
                    <Link to="wishlist">{t("navigation.wishlist")} <CiHeart /></Link>
                    <Link to="cart"><MdOutlineShoppingCart /></Link>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <Link to={"/"}>
                        <h1 className="logo">
                            <img src={Logo} width={100} height={100} style={{ transform: "scale(2)" }} />
                        </h1>
                    </Link>
                </div>


                <div id="burger-menu-wrapper">
                    <div className="burger-top"></div>
                    <div className="burger-middle"></div>
                    <div className="burger-bottom"></div>
                </div>
                <input id="burger-menu-toggler-input-checkbox" type="checkbox" />


                <div className="right">
                    <div className="links">
                        <NavLink to="/" activeclassname="active">{t("navigation.home")}</NavLink>
                        <NavLink to="about" activeclassname="active">{t("navigation.about")}</NavLink>
                        <NavLink to="products" activeclassname="active">{t("navigation.products")}</NavLink>
                        <NavLink to="blog" activeclassname="active">{t("navigation.blog")}</NavLink>
                        <NavLink to="shop" activeclassname="active">{t("navigation.shop")}</NavLink>
                        <NavLink to="contact" activeclassname="active">{t("navigation.contact")}</NavLink>
                    </div>
                    <div className="searchbar">
                        <input type="search" placeholder="Search" onChange={handleSearch} />
                        <button><IoSearch /></button>

                        {searchResults &&
                            <div className="search-info"
                                style={searchResults.length > 0 ? borderStyle : {}}
                            >
                                {
                                    searchResults.map((product, idx) => {
                                        return (
                                            <div key={idx}>
                                                <Link to={"products/" + product.id}
                                                    className={searchResults.length - 1 == idx ? "last" : ""}
                                                >
                                                    <div className="search-link">
                                                        <h4>{product.name}</h4>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;