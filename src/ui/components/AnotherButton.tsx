import React, { useEffect } from "react";

function AnotherButton() {

    const countRef = React.useRef<number>(0);
    const buttonRef = React.createRef<HTMLButtonElement>();

    function handleClick() {
        if (countRef.current !== undefined) {
            countRef.current++;
        }

        if (buttonRef.current) {
            buttonRef.current.innerText = `Nº de cliques: ${countRef.current}`;
        }
    }

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.classList.add("app-button");
            buttonRef.current.style.backgroundColor = "burlywood";
        }
    }, []);

    return (
        <button 
            ref={buttonRef} 
            onClick={handleClick}
        >
            Nº de cliques: {countRef.current}
        </button>
    );
}

export default AnotherButton;
