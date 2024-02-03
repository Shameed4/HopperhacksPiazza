import logo from './logo.svg';
import Question from './components/Question';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Classes from './Classes';


function App() {
  const redirectToClasses = () => {
    window.location.href = '/classes';
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <button onClick={redirectToClasses}>Login</button>
              </div>
            }
          />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
