import React, { useState } from "react";
import "./style.scss";
import { BsInfoSquareFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; // Иконки меню и закрытия
import Heading from "../common/Heading";
import PAGE1 from "../Home/FeaturedProducts";
import PAGE2 from "../Home/LatestProducts";
import PAGE3 from "../Home/ShopexProducts";
import PAGE4 from "../Home/TrendingItems";

const Shop = () => {
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние бургер-меню

    const handlePriceChange = (e) => {
        setPriceRange([0, e.target.value]);
    };

    const handleColorChange = (color) => {
        setSelectedColors((prevColors) =>
            prevColors.includes(color) ? prevColors.filter(c => c !== color) : [...prevColors, color]
        );
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Heading title="Магазин" path="Путь к магазину">
                <BsInfoSquareFill />
            </Heading>
            <div className="shop-container">
                <button className="burger-menu" onClick={toggleMenu}>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
                    <h2>Категории</h2>
                    <ul>
                        <li><a href="#">Электроника</a></li>
                        <li><a href="#">Мода</a></li>
                        <li><a href="#">Сумки</a></li>
                        <li><a href="#">Ювелирные изделия</a></li>
                        <li><a href="#">Часы</a></li>
                    </ul>

                    <h3>Фильтр по цене</h3>
                    <input 
                        type="range" 
                        min="0" 
                        max="500" 
                        value={priceRange[1]} 
                        onChange={handlePriceChange} 
                    />
                    <p>Цена: от {priceRange[0]} до {priceRange[1]}</p>

                    <h3>Фильтр по цвету</h3>
                    <ul>
                        {['blue', 'orange', 'brown', 'green', 'purple', 'sky'].map(color => (
                            <li key={color}>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedColors.includes(color)} 
                                        onChange={() => handleColorChange(color)} 
                                    /> 
                                    {color}
                                </label>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="content">
                    <header>
                        <h1>Магазин</h1>
                        <div className="results-info">
                            <span>Результаты</span>
                        </div>
                        <br /><br />
                    </header>
                    <section className="products">
                    <div className="product-card">
                            <h2>Coaster Furniture</h2>
                            <p>$26.00 <span className="original-price">$52.00</span></p>
                            <p>(32 отзыва)</p>
                            <p>Описание продукта</p>
                        </div>
                    <div className="product-card">
                            <h2>Coaster Furniture</h2>
                            <p>$26.00 <span className="original-price">$52.00</span></p>
                            <p>(32 отзыва)</p>
                            <p>Описание продукта</p>
                        </div>
                   
                    <div className="product-card">
                            <h2>Coaster Furniture</h2>
                            <p>$26.00 <span className="original-price">$52.00</span></p>
                            <p>(32 отзыва)</p>
                            <p>Описание продукта</p>
                        </div>
                        <div className="Pages">
                            <PAGE1 />
                            <PAGE2 />
                            <PAGE3 />
                            <PAGE4 />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Shop;
