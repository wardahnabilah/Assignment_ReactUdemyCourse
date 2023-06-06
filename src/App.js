import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JokesAPI, PageNotFound, WordCounter } from './pages'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WordCounter />}></Route>
        <Route path="/joke" element={<JokesAPI />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
