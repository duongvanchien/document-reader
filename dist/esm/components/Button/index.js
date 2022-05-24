import React, { useEffect, useState } from "react";
import './styles.css';
export const CustomButton = (props) => {
    const { variant, content } = props;
    const [color, setColor] = useState('');
    useEffect(() => {
        if (variant) {
            if (variant === 'primary') {
                setColor('#0077ff');
            }
            else if (variant === 'secondary') {
                setColor('#ff0062');
            }
            else if (variant === 'success') {
                setColor('#0f8000');
            }
            else {
                setColor('#949393');
            }
        }
    });
    return (React.createElement("button", { className: 'buttonComponent', style: {
            backgroundColor: color
        } }, content.toUpperCase()));
};
//# sourceMappingURL=index.js.map