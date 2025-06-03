import { Link } from "react-router"

export default function NotFound() {

    return (
<>
        <h1>404</h1>
        <h3>We are sorry! but it seems like you have landed on a unexpected page</h3>
        <p>check our List   <Link to="/">Home</Link></p>
        
</>
    )
}