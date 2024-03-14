import { Date } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const format = (date) => date.toLocaleString("pl",
    {
        weekday: "long", day: "numeric", month: "long",
        minute: "numeric", hour: "2-digit", second: "2-digit"
    });

export const Time = () => {
    const date = useCurrentDate();


    return (
        <Date>
            Dzisiaj jest
            {" "}
            {format(date)}
        </Date>
    );
};