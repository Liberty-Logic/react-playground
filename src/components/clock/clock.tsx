import React from "react";
import { useEffect, useState } from "react";
import { Gradulation } from "./gradulation";
import { HourHand } from "./hourHand";
import { MinuteHand } from "./minuteHand";
import { getCurrentTime, getDay } from "../../util/dateTimeUtils";
import { SecondHand } from "./secondHand";
import { HourLabel } from "./hourLabel";
import { DateLabel } from "./dateLabel";
import { range } from "../../util/arrayUtils";

export interface ClockProps {
    clockDiameter: number;
}

export const Clock: React.FC<ClockProps> = (props) => {
    const initialTime = getCurrentTime();
    const [hour, setHour] = useState<number>(initialTime.hour);
    const [minute, setMinute] = useState<number>(initialTime.minute);
    const [second, setSecond] = useState<number>(initialTime.second);
    const [day, setDay] = useState<number>(getDay());

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = getCurrentTime();

            setHour(currentTime.hour);
            setMinute(currentTime.minute);
            setSecond(currentTime.second);
            setDay(getDay());
        }, 500);

        return () => clearInterval(timer);
    }, []);

    const hourLabels = range(1, 12);
    const gradulationValues = range(1, 60);
    const clockRadius = props.clockDiameter / 2;
    const pinDiameter = clockRadius * 0.1;

    return (
        <div>
            <div
                style={{
                    width: `${props.clockDiameter}rem`,
                    height: `${props.clockDiameter}rem`,
                    border: "1px solid black",
                    borderRadius: "50%",
                    position: "relative",
                    userSelect: "none"
                }}
            >
                {gradulationValues.map((val) => (
                    <Gradulation
                        clockDiameter={props.clockDiameter}
                        color="black"
                        second={val}
                        key={val}
                    />
                ))}
                {hourLabels.map((hour) => (
                    <HourLabel
                        clockDiameter={props.clockDiameter}
                        hour={hour}
                        key={hour}
                    />
                ))}
                <DateLabel clockDiameter={props.clockDiameter} day={day} />
                <HourHand
                    clockDiameter={props.clockDiameter}
                    color="black"
                    hour={hour}
                    minute={minute}
                />
                <MinuteHand
                    clockDiameter={props.clockDiameter}
                    color="black"
                    minute={minute}
                />
                <SecondHand
                    clockDiameter={props.clockDiameter}
                    color="red"
                    second={second}
                />
                <div
                    style={{
                        top: `${clockRadius}rem`,
                        left: `${clockRadius}rem`,
                        width: `${pinDiameter}rem`,
                        height: `${pinDiameter}rem`,
                        marginLeft: `${-pinDiameter / 2}rem`,
                        marginTop: `${-pinDiameter / 2}rem`,
                        backgroundColor: "darkgrey",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                ></div>
            </div>
        </div>
    );
};
