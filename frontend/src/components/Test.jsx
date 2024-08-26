import { useState } from 'react'
import "./test.scss"

function Test(props) {
    const [theme, setTheme] = useState(true)
    const [counter, setCounter] = useState(0)
    // const theme = false

    function callToggler(e) {
        setTheme(!theme)
    }
    
    function changeCounter(e) {
        const name = e.target.name
        if (name == 'inc') {
            setCounter(counter+1)
        } else {
            setCounter(counter-1)
        }
    }

    return (
        <div className='wrapper'>
            <div className={theme ? 'dark' : 'light'}>

                <div className="container">
                    <h1>Test</h1>
                    <button onClick={callToggler}>
                        Toggle theme
                    </button>

                    {/* props === {bemiyya: 10, children:lorem}  */}
                    {props.bemiyya}
                    {props.children}
                </div>

                <div className="container">
                    <h2>{counter}</h2>
                    <button onClick={changeCounter} name='dec'>Decrement</button>
                    <button onClick={changeCounter} name='inc'>Increment</button>
                </div>
            </div>
        </div>
    );
}

export default Test;