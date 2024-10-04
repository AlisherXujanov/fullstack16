import "./spinner.scss"

function Spinner() {
    return (
        <div className="spinner-container">
            <div className="half-circle-spinner">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    )
}

export default Spinner;