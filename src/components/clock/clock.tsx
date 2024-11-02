import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Gradulation } from "./gradulation";
import { HourHand } from "./hourHand";
import { MinuteHand } from "./minuteHand";
import { getCurrentTime } from "../../util/timeUtils";

export interface ClockProps {
  width: number;
}

export const Clock: React.FC<ClockProps> = (props) => {
    const initialTime = getCurrentTime();
    const [hour, setHour] = useState<number>(initialTime.hour);
    const [minute, setMinute] = useState<number>(initialTime.minute);
    const [second, setSecond] = useState<number>(initialTime.second);

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = getCurrentTime();

            setHour(currentTime.hour);
            setMinute(currentTime.minute);
            setSecond(currentTime.second);
        }, 500);

        return () => clearInterval(timer);
    }, []);

    function getGradulations(): ReactNode[] {
        const gradulations = [];
        for (let i = 0; i < 60; i++) {
            gradulations.push(
                <Gradulation
                    clockWidth={props.width}
                    color="black"
                    second={i}
                    key={i}
                />,
            );
        }
        return gradulations;
    }

    return (
        <div>
            <div
                style={{
                    width: "20rem",
                    height: "20rem",
                    border: "1px solid black",
                    borderRadius: "50%",
                    position: "relative",
                }}
            >
                {(() => getGradulations())()}
                <MinuteHand clockWidth={props.width} color="red" minute={second} />
                <MinuteHand clockWidth={props.width} color="black" minute={minute}/>
                <HourHand clockWidth={props.width} color="black" hour={hour} minute={minute}/>
                <div
                    style={{
                        top: "10rem",
                        left: "10rem",
                        width: "0.5rem",
                        height: "0.5rem",
                        marginLeft: "-0.25rem",
                        marginTop: "-0.25rem",
                        border: "1px solid black",
                        backgroundColor: "black",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                ></div>
            </div>
        </div>
    );
};
