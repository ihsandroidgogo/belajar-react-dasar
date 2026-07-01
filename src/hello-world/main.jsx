import {createRoot} from 'react-dom/client';
import Helloworld from './Helloworld';
import {StrictMode} from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Helloworld />
  </StrictMode>
);