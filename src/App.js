import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Page from "./page.js"
function App() {
  return (
    <>
    <Routes>
        <Route path="/*" element={<Page />} />
    </Routes>
    </>
  );
}

export default App;
