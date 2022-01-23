import { Link } from 'react-router-dom'
import NavBar from './NavBar'


// view all campuses and all students here
export default function Home( props ) {
 
    return (
        <div>
            
            <h1 className = {"title"}> Students and Campuses Website</h1>
            <NavBar />
            {/* just for now */}
          <div className ={"create"}>
            <Link to="/createstudent">
                 <button> Create Student </button>
            </Link> 
              
            <Link to="/createcampus">
                 <button> Create Campus </button>
            </Link> 
            </div>
        </div>
    )
}