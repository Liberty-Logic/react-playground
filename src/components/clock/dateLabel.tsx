import React from "react";

interface DateLabelProps {
    day: number;
    clockDiameter: number;
}

export const DateLabel: React.FC<DateLabelProps> = (props) => {
    const radius = props.clockDiameter / 2;
    const transform = `translateX(${radius * 0.35}rem)`;

    return (
        <div
            style={{
                top: `${radius}rem`,
                left: `${radius}rem`,
                height: `${radius * 0.25}rem`,
                width: `${radius * 0.25}rem`,
                position: "absolute",
                transform: transform,
                transformOrigin: "center center",
                display: "flex",
                marginLeft: `${-radius * 0.25 / 2}rem`,
                marginTop: `${-radius * 0.25 / 2}rem`,
                border: `${radius * 0.02}rem solid #ff980082`,
                boxShadow: `inset ${radius * 0.015}rem ${radius * 0.01}rem ${radius * 0.02}rem ${radius * 0.01}rem grey`,
            }}
        >
            <div
                style={{
                    margin: "auto",
                    fontSize: `${radius / 5}rem`,
                    fontFamily: "Times New Roman, Times, serif",
                }}
            >
                {props.day}
            </div>
        </div>
    );
};
