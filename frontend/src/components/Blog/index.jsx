import "./style.scss"
import { useContext, useState, useEffect } from "react"
import { context } from "../../store"

function Blog() {
    const { state, dispatch } = useContext(context)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let counterLS = JSON.parse(localStorage.getItem('counter') || "0")
        setCounter(counterLS)

        return () => {
            console.log("Counter is getting saved into LOCAL STORAGE")
            // localStorage.setItem('counter', JSON.stringify(counter))
        }
    }, [])

    function increment(e) {
        setCounter(counter + 1)
        localStorage.setItem('counter', JSON.stringify(counter))
    }
    function decrement(e) {
        setCounter(counter - 1)
        localStorage.setItem('counter', JSON.stringify(counter))
    }


    return (
        <div align='center'>
            <h1>Blog</h1>

            <hr />
            <div className="container">
                <button className="delete-btn" onClick={increment}>Decrement</button>
                <h2>{counter}</h2>
                <button className="cancel-btn" onClick={decrement}>Increment</button>
            </div>
        </div>
    )
}

export default Blog;