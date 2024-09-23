import { createContext, useContext } from "react";

const context = createContext()

function Comp2(props) {
    return (
        <>
            <h2>Comp 2</h2>
            <Comp3 />
        </>
    );
}
function Comp3(props) {
    return (
        <>
            <h3>Comp 3</h3>
            <Comp4 />
        </>
    );
}
function Comp4(props) {
    return (
        <>
            <h3>Comp 4</h3>
            <Comp5 />
        </>
    );
}
function Comp5(props) {
    const title = useContext(context)
    return (
        <>
            <h3>
                <mark>{title}</mark>
            </h3>
        </>
    );
}



function UseContextTest() {
    const title = "Title"
    return (
        <context.Provider value={title}>
            <h1>UseContext Test</h1>
            <Comp2 />
        </context.Provider>
    );
}

export default UseContextTest;