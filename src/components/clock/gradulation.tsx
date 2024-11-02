import React from "react";

export interface GradulationProps {
    second: number;
    color: string;
    clockWidth: number;
}

export const Gradulation: React.FC<GradulationProps> = (props) => {
    const { color, clockWidth, second } = props;
    const gradulationLength = second % 5 == 0 ? "1rem" : "0.5rem";
    const transform = second % 5 === 0 ? `translateY(${clockWidth/2 - 1}rem)` : `translateY(${clockWidth/2 - 0.5}rem)`;
    const position = `${clockWidth/2}rem`;
    const rotationDegrees = `${(360 / 60) * second}deg`;

    return (
        <div
            style={{
                backgroundColor: color,
                height: gradulationLength,
                width: "1px",
                position: "absolute",
                top: position,
                left: position,
                transform: transform,
                rotate: rotationDegrees,
                transformOrigin: "0% 0%",
            }}
        ></div>
    );
};
