import { useState } from "react";

function Create(props) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        material: "",
        color: "",
        description: "",
        discount: 0,
    })


    function submit(e) {
        e.preventDefault();
        const URL = 'http://localhost:3000/products'
        const newProduct = { ...form, id: new Date().getTime() }
        fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => console.log(data))

        setForm({
            name: "",
            price: "",
            material: "",
            color: "",
            description: "",
        });
        e.target.reset()
    }


    function handleFormChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }


    return (
        <div className="create-product-wrapper">
            <h1>Create Product</h1>

            <form onSubmit={submit}>
                <div className="left">
                    <div className="form-control">
                        <label htmlFor="product-name-input">Name of the product</label>
                        <input id="product-name-input"
                            onChange={handleFormChange}
                            type="text" placeholder="Product name" name="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-color-input">Color of the product</label>
                        <input id="product-color-input"
                            onChange={handleFormChange}
                            type="color" name="color" />
                    </div>
                    <div className="form-control price-discount">
                        <div>
                            <label htmlFor="product-price-input">Price of the product</label>
                            <input id="product-price-input"
                                onChange={handleFormChange}
                                type="number" placeholder="Price" name="price" />
                        </div>
                        <div>
                            <label htmlFor="product-discount-input">Discount</label>
                            <input id="product-discount-input"
                                onChange={handleFormChange}
                                type="number" placeholder="Discount" name="discount" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-material-input">Material type</label>
                        <input id="product-material-input"
                            onChange={handleFormChange}
                            type="text" placeholder="Material type" name="material" />
                    </div>
                </div>
                <div className="right">
                    <div className="form-control">
                        <label htmlFor="product-desctiption">Desctiption</label>
                        <textarea id="product-desctiption"
                            onChange={handleFormChange}
                            name="description" placeholder="Desctiption" />
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