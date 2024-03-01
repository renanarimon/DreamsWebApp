import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Dream from './pages/Dream';
import NewDreamPage from './pages/NewDreamPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home/>}
            />
            <Route 
            path='/dream'
            element={<Dream/>}
            />
            <Route path="/new-dream" element={<NewDreamPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
