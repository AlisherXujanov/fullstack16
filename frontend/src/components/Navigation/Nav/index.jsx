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
import "./style.scss"


function Nav(props) {
    const { state, dispatch } = useContext(context)
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetchLatestProducts()
    }, [])
    function fetchLatestProducts() {
        fetch(BASE_URL + "products")
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                console.log(data)
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
                    <Link to="#" className="dropdown">
                        {state.languages.find(lang => lang.active).code} <RiArrowDropDownLine />
                        <div className="drp-content">
                            {
                                state.languages.map((lang, idx) => {
                                    return (
                                        <p key={idx}
                                            onClick={(e) => { activateLang(lang) }}
                                            className={lang.active == true ? "active" : ""}
                                        >
                                            {lang.code}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </Link>

                    <Link to="#" className="dropdown">
                        {state.currencies.find(c => c.active).code} <RiArrowDropDownLine />
                        <div className="drp-content">
                            {
                                state.currencies.map((cur, idx) => {
                                    return (
                                        <p key={idx}
                                            onClick={(e) => { activateCurrency(cur) }}
                                            className={cur.active == true ? "active" : ""}
                                        >
                                            {cur.code}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </Link>

                    <Link to="login">Login <CgProfile /></Link>
                    <Link to="wishlist">Wishlist <CiHeart /></Link>
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
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                        <NavLink to="about" activeclassname="active">About</NavLink>
                        <NavLink to="products" activeclassname="active">Products</NavLink>
                        <NavLink to="blog" activeclassname="active">Blog</NavLink>
                        <NavLink to="shop" activeclassname="active">Shop</NavLink>
                        <NavLink to="contact" activeclassname="active">Contact</NavLink>
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