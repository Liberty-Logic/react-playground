import React from "react";

export interface HourHandProps {
    hour: number;
    minute: number;
    clockWidth: number;
    color: string;
}

export const HourHand: React.FC<HourHandProps> = (props) => {
    const position = `${props.clockWidth / 2}rem`;
    const width = 0.1;
    const rotationDegrees = `${(360 / 12) * props.hour + (props.minute / 60) * (360 / 12) - 180}deg`;

    return (
        <div
            style={{
                top: position,
                left: position,
                width: `${width}rem`,
                height: "5rem",
                marginLeft: `${-width / 2}rem`,
                border: `1px solid ${props.color}`,
                backgroundColor: `${props.color}`,
                position: "absolute",
                transformOrigin: "top center",
                rotate: rotationDegrees,
            }}
        />
    );
};
