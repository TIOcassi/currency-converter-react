import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Document, Header, Text, Field, Select, Button } from "./styled";

export const Form = ({ calculateResult, result }) => {
      const [currency, setCurrency] = useState(currencies[0].short);
      const [amount, setAmount] = useState("");

      const onSubmit = (event) => {
            event.preventDefault();
            calculateResult(currency, amount);
      }
      return (
            <StyledForm onSubmit={onSubmit}>
                  <Header>
                        Przelicznik walut
                  </Header>
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
                  </p>
                  <p>
                        <label>
                              <Text>
                                    Waluta:
                              </Text>
                              <Select
                                    value={currency}
                                    onChange={({ target }) => setCurrency(target.value)}
                              >
                                    {currencies.map((currency => (
                                          <option
                                                key={currency.short}
                                                value={currency.short}
                                          >
                                                {currency.name}
                                          </option>
                                    )))}
                              </Select>
                        </label>
                  </p>
                  <p>
                        <Button>Przelicz!</Button>
                  </p>

                  <Result result={result} />
            </StyledForm>
      );
}