import "./style.scss"
import { useContext, useState, useEffect } from "react"
import { context } from "../../store"

function Blog() {
    const { state, dispatch } = useContext(context)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Counter changed to ", counter)
    })


    return (
        <div align='center'>
            <h1>Blog</h1>

            <hr />
            <div className="container">
                <button className="delete-btn" onClick={(e) => setCounter(counter-1)}>Decrement</button>
                <h2>{counter}</h2>
                <button className="cancel-btn" onClick={(e) => setCounter(counter+1)}>Increment</button>
            </div>
        </div>
    )
}

export default Blog;