import { useState } from "react";

function Create(props) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        material: "",
        color: "",
        description: "",
    })


    function submit(e) {
        e.preventDefault()
        const newProduct = {...form, id:(new Date).getTime()}
    }

    function handleFormChange(e) {
        const { name, value } = e.target
    }


    return (
        <div className="create-product-wrapper">
            <h1>Create Product</h1>

            <form onSubmit={submit}>
                <div className="left">
                    <div className="form-control">
                        <label htmlFor="product-name-input">Name of the product</label>
                        <input id="product-name-input"
                            onClick={handleFormChange}
                            type="text" placeholder="Product name" name="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-color-input">Color of the product</label>
                        <input id="product-color-input"
                            onClick={handleFormChange}
                            type="color" name="color" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-price-input">Price of the product</label>
                        <input id="product-price-input"
                            onClick={handleFormChange}
                            type="number" placeholder="Price" name="price" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-material-input">Material type</label>
                        <input id="product-material-input"
                            onClick={handleFormChange}
                            type="text" placeholder="Material type" name="material" />
                    </div>
                </div>
                <div className="right">
                    <div className="form-control">
                        <label htmlFor="product-desctiption">Desctiption</label>
                        <textarea id="product-desctiption"
                            onClick={handleFormChange}
                            name="desctiption" placeholder="Desctiption" />
                    </div>

                    <div className="form-control">
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;