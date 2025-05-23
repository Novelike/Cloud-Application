/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';

function CounterFunction(props) {
    const [number, setNumber] = useState(0);

    // componentDidMount
    useEffect(() => {
        console.log('componentDidMount(함수형)');

        // componentWillUnmount
        return () => {
            console.log('componentWillUnmount(함수형)');
        };
    }, []);

    // componentDidUpdate
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            console.log('componentDidUpdate(함수형)');
        }
    });

    const handleIncrease = () => {
        setNumber(number + 1);
    };

    function handleDecrease() {
        setNumber(number - 1);
    }

    return (
        <div>
            {console.log('render(함수형)')}
            <h1 style={{ color: 'blue' }}>함수형 컴포넌트</h1>
            <p>Count: {number}</p>
            <button onClick={handleIncrease}>증가</button>
            <button onClick={handleDecrease}>감소</button>
        </div>
    );
}

export default CounterFunction;
