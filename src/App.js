import logo from './logo.svg';
import Question from './components/Question';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Classes from './pages/Classes/Classes';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  const redirectToLogin = () => {
    window.location.href = '/login';
  };
  const redirectToClasses = () => {
    window.location.href = '/classes';
  };
  const redirectToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <button onClick={redirectToLogin}>Login</button>
                <button onClick={redirectToClasses}>Classes</button>
                <button onClick={redirectToDashboard}>Dashboard</button>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
