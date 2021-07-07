import React, { useEffect, useState } from "react";
import NumberCard from "./NumberCard";

const Counter = ({ toDate, whenDone }) => {
    const [times, setTimes] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const x = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(toDate).getTime() - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimes({
                ...times,
                days,
                hours,
                minutes,
                seconds,
            });

            if (distance < 0) {
                clearInterval(x);
                whenDone();
                setTimes({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        return () => {
            clearInterval(x);
        };
    }, []);

    return (
        <div className="number-cards">
            <div className="number-cards__unit">
                <NumberCard number={times.days} description={"Days"} />
            </div>
            <div className="number-cards__unit">
                <NumberCard number={times.hours} description={"Hours"} />
            </div>
            <div className="number-cards__unit">
                <NumberCard number={times.minutes} description={"Minutes"} />
            </div>
            <div className="number-cards__unit">
                <NumberCard number={times.seconds} description={"Seconds"} />
            </div>
        </div>
    );
};

export default Counter;
