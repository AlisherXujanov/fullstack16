import Heading from "../common/Heading"
import { useParams } from "react-router-dom"
import { SlInfo } from "react-icons/sl"
import { BASE_URL } from "../../store"
import { useEffect, useState } from "react"
import "./productDetails.scss"

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
                setTimeout(() => {
                    setProduct(data)
                    document.title = "Product: " + data.name
                }, 1000)
            })
    }

    return (
        <>
            <Heading title="Product details" path={"Products: " + product?.name}>
                <SlInfo />
            </Heading>

            <div className="product-details-wrapper">
                <h1>{product.title}</h1>
            </div>
        </>
    );
}

export default ProductDetails;