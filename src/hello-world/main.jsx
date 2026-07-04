import {createRoot} from 'react-dom/client';
import Helloworld from './Helloworld';
import {StrictMode} from 'react';
import Container from './Container';
import TodoList from '../todolist/Todolist';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Container>
      <Helloworld />
      <TodoList/>
    </Container>
  </StrictMode>
);