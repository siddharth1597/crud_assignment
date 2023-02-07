import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Homepage  from './Dashboard/Homepage';
import CreateUser from './Create/CreateUser';
import UpdateUsers from './Update/UpdateUser';

function App() {
  return (
      <Router>
        <div className="App">
          <header>
            <nav className='bg-slate-900 py-4 px-7 text-2xl text-white flex justify-start'>
              CRUD Users
            </nav>
          </header>
          <Routes>
            <Route path='/*'>
              <Route index element={<Homepage/>} />
              <Route path="user/create" element={<CreateUser/>} />
              <Route path="user/update/:id" element={<UpdateUsers/>} />
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
