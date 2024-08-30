import "./style.scss"
import NotFoundImg from "../../assets/images/404_page.png"
import { BsPatchQuestionFill } from "react-icons/bs";
import Heading from "../common/Heading"

function PageNotFound() {
    return (
        <div className="page-not-found-wrapper">
            <Heading title="Ooops... 404 Not Found" path="404 Not Found">
                <BsPatchQuestionFill />
            </Heading>
            <div className="content">
                <img src={NotFoundImg} alt="" />
            </div>
        </div>
    )
}

export default PageNotFound;