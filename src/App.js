
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './compoents/Home'
import CampusesView from './compoents/CampusesView'
import StudentsView from './compoents/StudentsView'
import CreateStudent from './compoents/CreateStudent'
import CreateCampus from './compoents/CreateCampus'
// import Home from './compoents/Home'
function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/campusesview" element={<CampusesView />} />
        <Route exact path="/studentsview" element={<StudentsView />} />
        <Route exact path="/createstudent" element={<CreateStudent />} />
        <Route exact path="/createcampus" element={<CreateCampus />} />
      
    </Routes>
</BrowserRouter>
  );
}

export default App;
