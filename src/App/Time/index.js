import { useEffect, useState } from "react";
import { Date } from "./styled";

const Format = (date) => date.toLocaleString("pl",
    {
        weekday: "long", day: "numeric", month: "long",
        minute: "numeric", hour: "2-digit", second: "2-digit"
    });

export const Time = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const Interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(Interval);
        };
    }, []);

    return (
        <Date>
            Dzisiaj jest
            {" "}
            {Format(date)}
        </Date>
    )
};    