import React, { useState } from 'react'

const HOC = (WrappedComponent, num) => {
    function HOC(props) {

        const [count, setCount] = useState(0)
        function increment() {
            setCount(count + num)
        }
        return (
            <div>
                <WrappedComponent count={count} increment={increment} {...props} />
            </div>
        );
    }
    return HOC
}
export default HOC;