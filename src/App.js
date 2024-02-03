import logo from './logo.svg';
import Question from './components/Question';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Classes from './pages/Classes/Classes';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  const redirectToClasses = () => {
    window.location.href = '/classes';
  };
  const redirectToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <>
    <div class="gradient"></div>
    <div class="login">
        <h4>Login</h4>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" aria-label="Recipient's username"
                aria-describedby="basic-addon2"/>
        </div>
        <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's username"
                aria-describedby="basic-addon2"/>
        </div>
        <button type="button" class="btn btn-primary">Login</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <button onClick={redirectToClasses}>Login</button>
                  <button onClick={redirectToDashboard}>Dashboard</button>
                </div>
              }
            />
            <Route path="/classes" element={<Classes />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
