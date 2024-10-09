import Heading from "../common/Heading"
import { useParams, useNavigate } from "react-router-dom"
import { SlInfo } from "react-icons/sl"
import { BASE_URL } from "../../store"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import "./productDetails.scss"
import Img from "../../assets/images/logo.png"

function ProductDetails() {

    const [product, setProduct] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()
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

    async function fetchDelete() {
        let response = axios.delete(BASE_URL + "products/" + id)
        console.log(response)
        toast.success("Product deleted successfully", { theme: "dark" })
        setShowAlert(false)
        navigate("/products")
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
                    <button className="delete-btn"
                        onClick={() => setShowAlert(true)}
                    >Delete</button>

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
                        <p>Are you sure to delete - <b>{product?.name}</b> ?</p>
                        <div className="action-buttons-wrapper">
                            <button className="delete-btn"
                                onClick={fetchDelete}
                            >YES</button>
                            <button className="cancel-btn"
                                onClick={() => setShowAlert(false)}
                            >NO</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default ProductDetails;