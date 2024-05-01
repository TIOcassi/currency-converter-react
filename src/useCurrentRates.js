import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [rates, setRates] = useState({ state: "loading" });
    useEffect(() => {
        const rates = async () => {
            try {
                const data = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_F5cZh8xZQbbbuJXMb96MMbM2pjSN3TLER0SnHHDQ&base_currency=PLN");
                setRates(data.data.data);
            }
            catch {
                setRates({ state: "error" });
            }
        };
        rates();
    }, []);
    return rates;
};