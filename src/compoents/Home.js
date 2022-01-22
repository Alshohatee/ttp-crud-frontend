import { Link } from 'react-router-dom'
import NavBar from './NavBar'


// view all campuses and all students here
export default function Home( props ) {
 
    return (
        <div>
            
            <NavBar />
            <h1>students and Campuses Website</h1>
            {/* just for now */}
          
            <Link to="/createstudent">
                 <button>create student </button>
            </Link> 
              
            <Link to="/createcampus">
                 <button>create campus </button>
            </Link> 
        </div>
    )
}