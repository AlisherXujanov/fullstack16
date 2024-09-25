import "./style.scss"
import { useContext } from "react"
import { context } from "../../store"

function Blog() {
    const state = useContext(context)

    return (
        <div align='center'>
            <h1>Blog</h1>
            <hr />
            <br />
            <button className="cancel-btn"
                onClick={() => { state.dispatch({ type: "DECREMENT" }) }}
            >Decrement</button>

            {state.first}

            <button className="delete-btn"
                onClick={() => { state.dispatch({ type: "INCREMENT" }) }}
            >Increment</button>
        </div>
    )
}

export default Blog;