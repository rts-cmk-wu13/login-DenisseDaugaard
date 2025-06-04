import { NavLink } from "react-router"


export default function Navegation() {

    return (
        <>

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        </>
    )
}