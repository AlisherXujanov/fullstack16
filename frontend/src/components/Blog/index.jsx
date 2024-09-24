import "./style.scss"
import { useContext } from "react"
import { context } from "../../store"

function Blog() {
    const { state, setState } = useContext(context)

    return (
        <div align='center'>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog;