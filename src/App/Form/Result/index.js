import { Effect } from "./styled";

export const Result = ({ result }) => (
      <Effect>
            {result !== undefined && (
                  <>
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                        <strong>
                              {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                        </strong>
                  </>
            )}
      </Effect>
);