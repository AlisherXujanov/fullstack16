import "./style.scss"
import { useContext } from "react"
import { context } from "../../store"

function Blog() {
    const { counter, setCounter } = useContext(context)

    return (
        <div align='center'>
            <button className="delete-btn"
                onClick={(e) => { setCounter(counter - 1) }}>
                Decrement
            </button>

            <h1>{counter}</h1>

            <button className="cancel-btn"
                onClick={(e) => { setCounter(counter + 1) }}>
                Increment
            </button>
        </div>
    )
}

export default Blog;