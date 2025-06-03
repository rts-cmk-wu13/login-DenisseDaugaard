import { useParams } from "react-router"
import { useEffect, useState } from "react";

export default function Details (){
    const {id} = useParams()

    const [users , setUsers] = useState();
    const [isLoading , setIsLoading] = useState(true);

     useEffect(() => {
      
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then((usersData) => {setUsers(usersData)})
        .finally(() => setIsLoading(false));
    }, []); 

    
    //console.log( id);

    return isLoading ? (<p>Loading ....</p>) : (
      <>

        <h1>{users.name}</h1>
        <p>{users.email}</p>
        <p>{users.phone}</p>
      </>

    )
}