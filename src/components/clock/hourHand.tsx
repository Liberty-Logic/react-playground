import React from "react";
import {
    DEGREES_IN_CIRCLE,
    HOURS_IN_CLOCK,
    MINUTES_PER_HOUR,
} from "../../util/constants";

export interface HourHandProps {
    hour: number;
    minute: number;
    clockDiameter: number;
    color: string;
}

export const HourHand: React.FC<HourHandProps> = (props) => {
    const radius = props.clockDiameter / 2;
    const width = radius / 10;
    const rotationDegrees =
        (DEGREES_IN_CIRCLE / HOURS_IN_CLOCK) * props.hour +
        (props.minute / MINUTES_PER_HOUR) *
            (DEGREES_IN_CIRCLE / HOURS_IN_CLOCK) -
        180;

    return (
        <div
            style={{
                top: `${radius}rem`,
                left: `${radius}rem`,
                width: `${width}rem`,
                height: `${radius / 2}rem`,
                marginLeft: `${-width / 2}rem`,
                borderRadius: "0% 0% 50% 50%",
                backgroundColor: `${props.color}`,
                position: "absolute",
                transformOrigin: "top center",
                rotate: `${rotationDegrees}deg`,
                boxShadow: `${radius * 0.005}rem ${radius * 0.01}rem ${radius * 0.01}rem ${radius * 0.005}rem rgba(0,0,0,0.33)`
            }}
        />
    );
};
