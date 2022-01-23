
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import CampusesView from './components/CampusesView'
import StudentsView from './components/StudentsView'
import CreateStudent from './components/CreateStudent'
import CreateCampus from './components/CreateCampus'
import SingleCampusView from './components/SingleCampusView'
import SingleStudentView from './components/SingleStudentView'
import EditCampus from "./components/EditCampus";
import EditStudent from "./components/EditStudent"
// import Home from './components/Home'
function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/campusesview" element={<CampusesView />} />
        <Route exact path="/studentsview" element={<StudentsView />} />
        <Route exact path="/createstudent" element={<CreateStudent />} />
        <Route exact path="/createcampus" element={<CreateCampus />} />
        <Route exact path="/SingleCampusView/:id" element={<SingleCampusView />} />
        <Route exact path="/studentsingleview/:id" element={<SingleStudentView />} />
        <Route exact path="/editcampus/:id" element={<EditCampus />} />
        <Route exact path="/editstudent/:id" element={<EditStudent />} />

    </Routes>
</BrowserRouter>
  );
}

export default App;
