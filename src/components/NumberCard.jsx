import React, { memo, useEffect, useState } from "react";

const NumberCard = ({ number, description }) => {
    const [time, setTime] = useState(number);

    useEffect(() => {
        if (
            number === 1 ||
            number === 2 ||
            number === 3 ||
            number === 4 ||
            number === 5 ||
            number === 6 ||
            number === 7 ||
            number === 8 ||
            number === 9 ||
            number === 0
        ) {
            setTime("0" + number);
        } else {
            setTime(number);
        }
    }, [number]);

    return (
        <div className="number-card">
            <div className="number-card__number-wrapper">
                <div className="number-card__number-content">
                    <div className="number-card__layer"></div>
                    <div className="number-card__number">{time}</div>
                </div>
            </div>
            <div className="number-card__description">{description}</div>
        </div>
    );
};

export default memo(NumberCard);
