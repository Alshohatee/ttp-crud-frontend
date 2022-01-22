// Create a card to hold the campus info


export default function CampusCard( {props} ) {
  
    
 
    return (
        <div>
    

            <img src={props.imageUrl } /> 
            <p>{props.name}</p>
            <p>{props.address }</p>
            <p>{props.description }</p>
            
        </div>
    )
}