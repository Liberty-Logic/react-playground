import React from "react";

export interface MinuteHandProps {
    minute: number;
    clockWidth: number;
    color: string;
}

export const MinuteHand: React.FC<MinuteHandProps> = (props) => {
    const position = `${props.clockWidth / 2}rem`;
    const width = 0.1;
    const rotationDegrees = `${(360 / 60) * props.minute - 180}deg`;

    return (
        <div
            style={{
                top: position,
                left: position,
                width: `${width}rem`,
                height: "8rem",
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
