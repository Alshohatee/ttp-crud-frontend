// Create a card to hold the student info
export default function StudentCard( props ) {
  
    
 
    return (
        <div>
            <img src={pors.imageUrl } /> 
            <p>{props.firstName }</p>
            <p>{props.lastName }</p>
            <p>{props.email }</p>           
             <p>{props.gpa }</p>
            
        </div>
    )
}