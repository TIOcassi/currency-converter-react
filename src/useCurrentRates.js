import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [rates, setRates] = useState({ state: "loading" });

    useEffect(() => {
        const rates = async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_T7igunZa2FeNXCeW5aRB0dR&base_currency=PLN");
                setRates(data.data.data);

                const {meta, data} = await response.data;

                setRates({
                    state: "success",
                    rates: data,
                    date: meta,
                });

            }
            catch {
                setRates({ state: "error" });
            }
        };
        setTimeout(rates, 1000);
    }, []);
    
    return rates;
};