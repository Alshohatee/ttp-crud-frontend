import { Link } from 'react-router-dom';

// view all campuses and all students here
export default function Home( props ) {
 
    return (
        <div>
            
            <h1>students and Campuses</h1>
            <Link to="/campusesview">
                 <button>Campuses </button>
            </Link> 
            <Link to="/studentsview">
                 <button>studentsview </button>
            </Link> 

            
        </div>
    )
}