import { useState } from "react";

function Create(props) {

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div className="create-product-wrapper">
            <h1>Create Product</h1>

            <form onSubmit={submit}>
                <div className="left">
                    <div className="form-control">
                        <label htmlFor="product-name-input">Name of the product</label>
                        <input id="product-name-input" type="text" placeholder="Product name" name="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-color-input">Color of the product</label>
                        <input id="product-color-input" type="color" name="color" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-price-input">Price of the product</label>
                        <input id="product-price-input" type="number" placeholder="Price" name="price" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="product-material-input">Material type</label>
                        <input id="product-material-input" type="text" placeholder="Material type" name="material" />
                    </div>
                </div>
                <div className="right">
                    <div className="form-control">
                        <label htmlFor="product-desctiption">Desctiption</label>
                        <textarea id="product-desctiption" name="desctiption" placeholder="Desctiption" />
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