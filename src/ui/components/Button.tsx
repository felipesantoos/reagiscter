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
            let backgroundColor = "#3ddc84";

            if (type === "error") {
                backgroundColor = "#ff9999";
            }

            buttonRef.current.style.backgroundColor = backgroundColor;
            buttonRef.current.style.color = "#262626";
        }
    }, []);

    let attrColorType = {'color-type': type}

    return (
        <button ref={buttonRef} className="app-button" {...attrColorType}>
            {children}
        </button>
    );
}

export default Button;