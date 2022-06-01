import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import MyTodoListPage from './pages/MyTodoListPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/todo-list-page' element={<MyTodoListPage />} />

        {/* <Route path='/my-todo-list-page'>
          <Route path='id' element={ <MyTodoListPage/>}/>
        </Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
