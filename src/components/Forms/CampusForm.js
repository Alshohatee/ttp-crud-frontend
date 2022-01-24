



export default  function CampusFrom (props){
    console.log({props})
    console.log(props.props)
    const [submitHandler, name, imageUrl, address, description, setName , setImageUrl, setAddress, setDescription] = [...props.props]
    return  (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                Name: 
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label><br/>
                <label>
                Image Url: 
                <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                </label><br/>

                <label>
                Address: 
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </label><br/>

                <label>
                Description:   
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label><br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}