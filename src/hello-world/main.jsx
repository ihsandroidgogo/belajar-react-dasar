import {createRoot} from 'react-dom/client';
import Helloworld from './Helloworld';
import {StrictMode} from 'react';
import Container from './Container';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Container>
      <Helloworld />
    </Container>
  </StrictMode>
);