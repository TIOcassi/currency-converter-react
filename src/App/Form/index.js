import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import {
      StyledForm, Header, Text, Field, Select,
      Button, Loading, Failure,
} from "./styled";

import { useCurrentRates } from "../../useCurrentRates";

export const Form = () => {
      const [result, setResult] = useState();
      const rates = useCurrentRates();
}

const calculateResult = (currency, amount) => {
      const rate = rates.rates[currency];

      setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
      });
}
const [currency, setCurrency] = useState(currencies[0].short);
const [amount, setAmount] = useState("");

const onSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);

      return (
            <StyledForm onSubmit={onSubmit}>
                  <Header>
                        Przelicznik walut
                  </Header>
                  {rates.state === "loading"
                        ? (
                              <Loading>
                                    Proszę czekać...
                              </Loading>
                        )
                        : (
                              rates.state === "error" ? (
                                    <Failure>
                                          Coś jest nie tak, sprawdź połączenie
                                    </Failure>
                              ) : (
      
                                    <p>
                                          <label>
                                                <Text>
                                                      Kwota w zł*:
                                                </Text>
                                                <Field
                                                      value={amount}
                                                      onChange={({ target }) => setAmount(target.value)}
                                                      placeholder="wpisz kwotę w zł"
                                                      type="number"
                                                      required
                                                      step="0.01"
                                                />
                                          </label>
                                          <p>
                                                <label>
                                                      <Text>
                                                            Waluta:
                                                      </Text>
                                                      <Select
                                                            as="select"
                                                            value={currency}
                                                            onChange={({ target }) => setCurrency(target.value)}
                                                      >
                                                            {Object.keys(rates.rates).map(((currency) => (
                                                                  <option
                                                                        key={currency}
                                                                        value={currency}
                                                                  >
                                                                        {currency}
                                                                  </option>
                                                            )))}
                                                      </Select>
                                                </label>
                                          </p>
      
      
      
                                          <p>
                                                <Button>Przelicz!</Button>
                                          </p>
      
                                          <Result result={result} />
                                    </p>
                              )
                        )}
            </StyledForm>
      );
};
