import React from "react";
import { DEGREES_IN_CIRCLE, SECONDS_PER_MINUTE } from "../../util/constants";

export interface GradulationProps {
    second: number;
    color: string;
    clockDiameter: number;
}

export const Gradulation: React.FC<GradulationProps> = (props) => {
    const { color, clockDiameter, second } = props;
    const radius = clockDiameter / 2;
    const hourGradulationLength = radius * 0.15;
    const minuteGradulationLength = radius * 0.05;
    const rotationDegrees = (DEGREES_IN_CIRCLE / SECONDS_PER_MINUTE) * second;
    const isHourGradulationMark = second % 5 === 0;
    const gradulationLength = isHourGradulationMark
        ? hourGradulationLength
        : minuteGradulationLength;
    const transform = isHourGradulationMark
        ? `translateY(${radius - hourGradulationLength}rem)`
        : `translateY(${radius - minuteGradulationLength}rem)`;

    return (
        <div
            style={{
                backgroundColor: color,
                height: `${gradulationLength}rem`,
                width: "1px",
                position: "absolute",
                top: `${radius}rem`,
                left: `${radius}rem`,
                transform: transform,
                rotate: `${rotationDegrees}deg`,
                transformOrigin: "0% 0%",
            }}
        ></div>
    );
};
