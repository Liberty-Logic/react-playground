import React from "react";
import { DEGREES_IN_CIRCLE, HOURS_IN_CLOCK } from "../../util/constants";

export interface HourLabelProps {
    hour: number;
    clockDiameter: number;
}

export const HourLabel: React.FC<HourLabelProps> = (props) => {
    const radius = props.clockDiameter / 2;
    const transform = `translateY(${0.7*radius}rem)`;
    const rotationDegrees = (DEGREES_IN_CIRCLE / HOURS_IN_CLOCK) * props.hour - 180;
    const fontSize = props.clockDiameter / 10;

    return (
        <div
            style={{
                top: `${radius}rem`,
                left: `${radius}rem`,
                height: `${radius/5}rem`,
                width: `${radius/5}rem`,
                position: "absolute",
                transform: transform,
                rotate: `${rotationDegrees}deg`,
                transformOrigin: "center center",
                display: "flex",
                marginLeft: `${-fontSize/2}rem`,
                marginTop: `${-fontSize/2}rem`,
            }}
        >
            <div
                style={{
                    rotate: `${0 - rotationDegrees}deg`,
                    margin: "auto",
                    fontSize: `${fontSize}rem`,
                    fontFamily: "Times New Roman, Times, serif",
                    textShadow: "1px 1px 3px grey",
                }}
            >
                {props.hour}
            </div>
        </div>
    );
};
