import { memo } from 'react';

function Test() {


    console.log("Test построен заново");

    return (
        <>
            <h1>Test Memo</h1>
        </>
    );
}

export default memo(Test);