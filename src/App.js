import './App.css';
import Main from './pages/Main';
import ViewToll from './pages/ViewToll';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  function local(){

    let data = [];
    if( localStorage['tollList']===undefined && localStorage['entries']===undefined){
      localStorage.setItem('tollList', JSON.stringify(data));
      localStorage.setItem('entries', JSON.stringify(data));
    }

  }

  local()

  return (
    <div className="App">
      <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/view" element={<ViewToll />} />
                      </Routes>
				</BrowserRouter>
        {/* <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/view" element={<ViewToll />} />
                </Routes>
            </main>
        </Router> */}
    </div>
  );
}

export default App;
