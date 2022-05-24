import React, { useEffect, useState } from "react";

export const CustomButton = (props: {
    variant: "primary" | "secondary" | "success",
    content: string
}) => {
    const { variant, content } = props;
    const [color, setColor] = useState<string>('')

    useEffect(() => {
        if (variant) {
            if (variant === 'primary') {
                setColor('#0077ff')
            } else if (variant === 'secondary') {
                setColor('#ff0062')
            } else if (variant === 'success') {
                setColor('#0f8000')
            } else {
                setColor('#949393')
            }
        }
    })

    return (
        <button
            className="buttonComponent"
            style={{
                backgroundColor: color
            }}
        >
            {content}
        </button>
    )
}