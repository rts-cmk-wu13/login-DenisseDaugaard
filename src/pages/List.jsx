//import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners"
import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext.jsx";
// import { useAuth} from "../context/AuthContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function List () {

const { token } = useAuth();
    console.log(token);


    // const [users, setUsers] = useState(null);
    // const [isLoading, setIsloading] = useState(true);
    const {data, isLoading, error} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    });

    // useEffect(() => {
       
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then((userData) => { setUsers(userData)})
    //     .finally(() => setIsloading(false))
    // }, []);

    // console.log(users);

    //console.log(data);
    
    if (error) return <h1>Somethin went wrong !!</h1>;

    // if (isLoading) return <p>Loading ...</p>;

    return isLoading ? (<h1>Loadind... <FadeLoader color="#5ce1dd" /></h1>) :(
        <>
        <ul>
            {data.map((user) => (
                <li key={user.id}>
                    <Link to={`/list/${user.id}`}>
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    );
}
