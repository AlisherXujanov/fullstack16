import { useState } from 'react'
import "./test.scss"

function Test(props) {
    const [theme, setTheme] = useState(true)
    // const theme = false

    return (
        <div className='wrapper'>
            <div className={theme ? 'dark' : 'light'}>
                <h1>Test</h1>

                {/* 
                props === {bemiyya: 10, children:lorem} 
            */}
                {props.bemiyya}
                {props.children}
            </div>
        </div>
    );
}

export default Test;