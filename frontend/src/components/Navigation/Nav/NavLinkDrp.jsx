import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";


function NavLinkDrp(props) {
    return (
        <Link to="#" className="dropdown">
            {props.items.find(item => item.active).code} <RiArrowDropDownLine />
            <div className="drp-content">
                {
                    props.items.map((item, idx) => {
                        return (
                            <p key={idx}
                                onClick={(e) => { props.activateFn(item) }}
                                className={item.active == true ? "active" : ""}
                            >
                                {item.code}
                            </p>
                        )
                    })
                }
            </div>
        </Link>
    );
}

export default NavLinkDrp;