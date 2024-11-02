import React from "react";
import { DEGREES_IN_CIRCLE, SECONDS_PER_MINUTE } from "../../util/constants";

export interface SecondHandProps {
    second: number;
    clockDiameter: number;
    color: string;
}

export const SecondHand: React.FC<SecondHandProps> = (props) => {
    const radius = props.clockDiameter / 2;
    const width = radius * 0.02;
    const rotationDegrees =
        (DEGREES_IN_CIRCLE / SECONDS_PER_MINUTE) * props.second - 180;

    return (
        <div
            style={{
                top: `${radius}rem`,
                left: `${radius}rem`,
                width: `${width}rem`,
                height: `${0.8 * radius}rem`,
                marginLeft: `${-width / 2}rem`,
                borderRadius: "0% 0% 50% 50%",
                backgroundColor: `${props.color}`,
                position: "absolute",
                transformOrigin: "top center",
                rotate: `${rotationDegrees}deg`,
                boxShadow: `${0.01 * radius}rem ${0.01 * radius}rem ${0.01 * radius}rem ${0.005 * radius}rem grey`,
            }}
        />
    );
};
