import "./style.scss"
import { useContext } from "react"
import { context } from "../../store"

function Blog() {
    const { state, setState } = useContext(context)

    return (
        <div align='center'>
            <button className="delete-btn"
                onClick={(e) => { setState({ ...state, counter: state.counter - 1 }) }}>
                Decrement
            </button>

            <h1>{state.counter}</h1>

            <button className="cancel-btn"
                onClick={(e) => { setState({ ...state, counter: state.counter + 1 }) }}>
                Increment
            </button>
        </div>
    )
}

export default Blog;