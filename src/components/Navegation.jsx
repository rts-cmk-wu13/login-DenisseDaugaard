import { NavLink } from "react-router"


export default function Navegation() {

    return (
        <>

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">Statements</NavLink>
            <NavLink to="/secrets">Secrets</NavLink>
        </nav>
        </>
    )
}