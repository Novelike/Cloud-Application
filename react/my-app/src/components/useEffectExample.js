import React, { useState, useEffect } from 'react';

function UseEffectExample() {
    const toastStyles = `
        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 16px;
            border-radius: 4px;
            animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;

    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = toastStyles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, [toastStyles]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = `You clicked ${count} times`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
export default UseEffectExample;
