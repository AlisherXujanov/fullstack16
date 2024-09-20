import Heading from "../common/Heading"
import { useParams } from "react-router-dom"
import { SlInfo } from "react-icons/sl"
import { BASE_URL } from "../../store"
import { useEffect, useState } from "react"
import "./productDetails.scss"
import Img from "../../assets/images/logo.png"

function ProductDetails() {
    const [product, setProduct] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        fetch(BASE_URL + "products/" + id)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
                document.title = "Product: " + data.name
            })
    }

    return (
        <>
            <Heading title="Product details" path={"Products: " + product?.name}>
                <SlInfo />
            </Heading>

            <div className="product-details-wrapper">
                <div className="img-wrapper">
                    <img src={Img} alt="" />
                </div>
                <div className="details">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="color">Color: {product.color}</p>
                    <p className="material">Material: {product.material}</p>
                    <p className="price">${product.price}</p>
                    <button>Buy now</button>
                </div>
            </div>

            {showAlert &&
                <div className="alert-wrapper">
                    <div className="content">
                        <h2>Delete {product?.name}</h2>
                        <p>Are you sure to delete {product?.name}</p>
                        <div className="action-buttons-wrapper">
                            <button className="delete-btn">Yes</button>
                            <button className="cancel-btn">No</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default ProductDetails;