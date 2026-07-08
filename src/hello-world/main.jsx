import {createRoot} from 'react-dom/client';
import Helloworld from './Helloworld';
import {StrictMode} from 'react';
import Container from './Container';
import TodoList from '../todolist/Todolist';
import Table from '../table/Table';
import TombolAlert from '../button/AlertButton';
import MyButton from '../button/MyButton';
import Toolbar from '../button/Toolbar';
import SearchForm from '../form/SearchForm';
import SayHelloForm from '../form/SayHelloForm';
import Counter from '../form/Counter';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Container>
      <Helloworld />
      <TodoList/>
      <Table/>
      <TombolAlert teks="Klik Disini!" pesan="Anda telah mengklik tombol ini!"/>
      <MyButton teks="Klik Saya!" onSmash={() => alert("Anda telah SMASH tombol ini!")} />
      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert("Kamu Klik Tombol Toolbar!");
      }}/>
      <SearchForm/>
      <SayHelloForm/>
      <Counter/>
    </Container>
  </StrictMode>
);