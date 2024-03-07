import Sidebar from './components/SideBar';
import './App.css';
import LandingPage from './LandingPage';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>
      
      {/* <LandingPage/> */}

       <div className="App">
              <Sidebar />
              <div className="content">
                <h2>Main Content Area</h2>
                <p>This is the main content area.</p>
              </div>
            </div>
      <Navbar />

      <Router>
        <Routes>
          <Route>

           

          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
