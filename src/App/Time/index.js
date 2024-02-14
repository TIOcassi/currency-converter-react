import { useEffect, useState } from "react";
import "./style.css"

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
        <div className="time">
           Dzisiaj jest
           {" "}
           {date.toLocaleString("pl", 
           {weekday: "long", day: "numeric", month: "long", 
            minute: "numeric", hour: "2-digit", second: "2-digit"
           })}
        </div>
    )
};    