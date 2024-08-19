import "./style.scss"

function Heading(props) {
    return (
        <div className="heading-wrapper">
            <h1>{props.title}</h1>
            {/* lorem 10 */}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, qui!</p>
        </div>
    );
}
export default Heading;

