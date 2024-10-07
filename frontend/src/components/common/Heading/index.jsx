import "./style.scss"
import { context } from "../../../store";
import { useContext } from "react";
import { useTranslation } from "react-i18next";


function Heading(props) {
    const { state, setState } = useContext(context)
    const { t } = useTranslation();

    return (
        <div className="heading-wrapper">
            <h1>
                {props.children}
                <span>{props.title}</span>
            </h1>
            <p>
                {t("heading.title")}<span className="path">.{props.path}</span>
            </p>
        </div>
    );
}
export default Heading;

