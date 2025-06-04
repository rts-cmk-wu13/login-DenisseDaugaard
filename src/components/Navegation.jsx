import { NavLink } from "react-router"


export default function Navegation() {

    return (
        <>

        <nav className="nav__links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statements">Statements</NavLink>
            <NavLink to="/secrets">Secrets</NavLink>
        </nav>
        </>
    )
}