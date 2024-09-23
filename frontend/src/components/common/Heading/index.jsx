import "./style.scss"
import { context } from "../../../store";
import { useContext } from "react";

function Heading(props) {
    const { state, setState } = useContext(context)

    return (
        <div className="heading-wrapper">
            <h1>
                {props.children}
                <span style={{ color: state.color }}>{props.title}</span>
            </h1>
            <p>
                Home.Pages<span className="path">.{props.path}</span>
            </p>
        </div>
    );
}
export default Heading;

