import '../styles/components/Button.css';

import { ReactNode, useEffect } from "react";
import React from 'react';

interface ButtonProps {
    children: ReactNode;
    type: "error" | "success";
}

function Button({ children, type }: ButtonProps) {
    const buttonRef = React.createRef<HTMLButtonElement>();

    useEffect(function () {
        if (buttonRef.current) {
            let backgroundColor = "forestgreen";

            if (type === "error") {
                backgroundColor = "firebrick";
            }

            buttonRef.current.style.backgroundColor = backgroundColor;
            buttonRef.current.style.color = "white";
        }
    }, []);

    return (
        <button ref={buttonRef}>
            {children}
        </button>
    );
}

export default Button;