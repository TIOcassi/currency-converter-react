import { useState } from 'react';
import { Form } from './Form';
import { currencies } from './currencies';
import { Time } from './Time';
import { Wrapper } from './styled';

function App() {

  return (
    <Wrapper>
      <Time />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Wrapper>
  );
}

export default App;