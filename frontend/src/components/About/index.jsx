import "./style.scss"
import Heading from "../common/Heading"
import { BsInfoSquareFill } from "react-icons/bs";
import Contact from './Contact';
import ShopexProducts from "../Home/ShopexProducts";
import Reviews from "./Reviews";
import Test from "./Test.jsx"
import UseContextTest from "./UseContextTest.jsx"
import { useContext } from "react";
import { context } from "../../store";


function About(props) {
    const { counter, setCounter } = useContext(context)
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
                <button className="delete-btn" onClick={(e) => { setCounter(counter - 1) }}>Decrement</button>
                {counter}
                <button className="cancel-btn" onClick={(e) => { setCounter(counter + 1) }}>Increment</button>
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