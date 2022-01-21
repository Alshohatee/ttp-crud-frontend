
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './compoents/Home'
import CampusesView from './compoents/CampusesView'
import StudentsView from './compoents/StudentsView'
// import Home from './compoents/Home'
function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/campusesview" element={<CampusesView />} />
        <Route exact path="/studentsview" element={<StudentsView />} />
      
    </Routes>
</BrowserRouter>
  );
}

export default App;
