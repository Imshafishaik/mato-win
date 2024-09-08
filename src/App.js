import { Route, Routes } from 'react-router-dom';
import './App.css';
import MatowinPage from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MatowinPage />} />
      </Routes>
    </div>
  );
}

export default App;
