import Heading from "../common/Heading"
import { useParams } from "react-router-dom"
import { SlInfo } from "react-icons/sl"
import { BASE_URL } from "../../store"
import { useEffect, useState } from "react"
import "./productDetails.scss"
import Img from "../../assets/images/logo.png"

function ProductDetails() {
    const [product, setProduct] = useState({})
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
        </>
    );
}

export default ProductDetails;