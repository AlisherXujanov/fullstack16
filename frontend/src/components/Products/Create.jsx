import { useState } from "react";

function Create(props) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        material: "",
        color: "",
        description: "",
        discount: 0,
        image: "",
    })


    function submit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...form, id: Date.now() })
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
        props.activateSection(null, true)
    }


    function handleFormChange(e) {
        const { name, value } = e.target

        if (name !== 'image') {
            setForm({ ...form, [name]: value })
        } else {
            const file = e.target.files[0]
            // const fileURL = URL.createObjectURL(file)
            // const fileReader = new FileReader()
            // fileReader.readAsDataURL(file)
            // fileReader.onload = function () {
            //     setForm({ ...form, [name]: fileReader.result })
            // }
        }
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
                            type="text" placeholder="Product name" name="name" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-color-input">Color of the product</label>
                        <input id="product-color-input"
                            onChange={handleFormChange}
                            type="color" name="color" required />
                    </div>
                    <div className="form-control price-discount">
                        <div>
                            <label htmlFor="product-price-input">Price of the product</label>
                            <input id="product-price-input"
                                onChange={handleFormChange}
                                type="number" placeholder="Price" name="price" required />
                        </div>
                        <div>
                            <label htmlFor="product-discount-input">Discount</label>
                            <input id="product-discount-input"
                                onChange={handleFormChange}
                                type="number" placeholder="Discount" name="discount"
                                max="99"
                            />
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
                        <label htmlFor="product-image">Image</label>
                        <input id="product-image"
                            onChange={handleFormChange}
                            type="file" name="image" />
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