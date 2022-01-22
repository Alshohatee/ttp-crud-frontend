import NavBar from './NavBar'


// ○	[   ] see details about a single campus, including enrolled students (if any)
// ○	[   ] see an informative message if no students are enrolled at that campus
// ○	[   ] navigate to any student’s single student view 
// ○	[   ] delete the campus (and elegantly handle associated students)
// ○	[   ] edit campus information (including adding/removing students)
//     ■	[   ] with a validated form displaying real-time error messages
//     ■	[   ] which redirects back to the single campus view

export default function SingleCampusView( props) {
    const [campusInfo, setCampusInfo] = useState([])

    // will hold the students info at this campus 
    const [studentsAtCampus, setStudentsAtCampus] = useState([])

 

   useEffect(() => {
    async function fectchData(){
      const campusAPIInfo = await Axios.get(`http://localhost:8080/api/campuses/${props.id}`)
      console.log("this", campusAPIInfo)
      setCampusInfo(campusAPIInfo.data)
    }
    fectchData()
      console.log("this", campusAPIInfo)
  },[]);

  
  
 
    return (
        <div>
        <NavBar />
        <img  src={campusInfo.imageUrl} />
        <p> {campusInfo.name}</p>
        <p> {campusInfo.address}</p>
        <p> {campusInfo.description}</p>
           
{/* studentsAtCampus will be render here  */}
            
        </div>
    )
}