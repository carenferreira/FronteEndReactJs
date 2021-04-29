import React from 'react';
import {Title,TitleSmall} from './styles';

function App() {
  return (
    <div>
     <Title fontSize={20}>
       Opa bom?
       <span>texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
