import "./style.scss"
import { useContext, useState, useReducer } from "react"
import { context } from "../../store"


function globalReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, first: state.first + 1 }
        case "DECREMENT":
            return { ...state, first: state.first - 1 }
    }
}
const initialState = {
    first: 0,
    second: 0,
    third: 0,
}

function Blog() {
    // const { state, setState } = useContext(context)
    // const [variable, setVariable] = useState({
    //     name: 'John Doe',
    //     age: 30
    // })
    const [state, dispatch] = useReducer(globalReducer, initialState)


    return (
        <div align='center'>
            <h1>Blog</h1>
            <hr />
            <br />
            <button className="cancel-btn"
                onClick={() => { dispatch({ type: "DECREMENT" }) }}
            >Decrement</button>
            {state.first}
            <button className="delete-btn"
                onClick={() => { dispatch({ type: "INCREMENT" }) }}
            >Increment</button>
        </div>
    )
}

export default Blog;