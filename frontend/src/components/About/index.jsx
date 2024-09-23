import "./style.scss"
import Heading from "../common/Heading"
import { BsInfoSquareFill } from "react-icons/bs";
import Contact from './Contact';
import ShopexProducts from "../Home/ShopexProducts";
import Reviews from "./Reviews";
import Test from "./Test.jsx"
import UseContextTest from "./UseContextTest.jsx"
import { useState } from "react";


function About(props) {
    const [count, setCount] = useState(0)
    // props = props ? props : "..."

    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
                <BsInfoSquareFill />
            </Heading>
            <Contact />
            <ShopexProducts />
            <Reviews />

            <div align='center'>
                <hr />
                <hr />
                <button className="delete-btn" onClick={(e) => { setCount(count - 1) }}>Decrement</button>
                {count}
                <button className="cancel-btn" onClick={(e) => { setCount(count + 1) }}>Increment</button>
                <hr />
                <hr />
                <Test />
            </div>
            <hr />
            <hr />
            <div align='center'>
                <UseContextTest />
            </div>
        </div>
    );
}

export default About;