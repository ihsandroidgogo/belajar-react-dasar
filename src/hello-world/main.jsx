import {createRoot} from 'react-dom/client';
import Helloworld from './Helloworld';
import {StrictMode} from 'react';
import Container from './Container';
import TodoList from '../todolist/Todolist';
import Table from '../table/Table';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Container>
      <Helloworld />
      <TodoList/>
      <Table/>
    </Container>
  </StrictMode>
);