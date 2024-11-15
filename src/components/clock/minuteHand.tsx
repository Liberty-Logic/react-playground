import React from "react";
import { DEGREES_IN_CIRCLE, MINUTES_PER_HOUR } from "../../util/constants";

export interface MinuteHandProps {
    minute: number;
    clockDiameter: number;
    color: string;
}

export const MinuteHand: React.FC<MinuteHandProps> = (props) => {
    const radius = props.clockDiameter / 2;
    const width = radius * 0.05;
    const rotationDegrees =
        (DEGREES_IN_CIRCLE / MINUTES_PER_HOUR) * props.minute - 180;

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
                boxShadow: `${radius * 0.005}rem ${radius * 0.01}rem ${radius * 0.01}rem ${radius * 0.005}rem rgba(0,0,0,0.33)`,
            }}
        />
    );
};
