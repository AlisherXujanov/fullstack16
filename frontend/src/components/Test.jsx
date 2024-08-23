let style = {
    padding: "50px 100px"
}

function Test(props) {
    return (
        <div style={style}>
            <h1>Test</h1>

            {/* 
                props === {bemiyya: 10, children:lorem} 
            */}
            {props.bemiyya}
            {props.children}
        </div>
    );
}

export default Test;