import { NavLink } from "react-router"


export default function Navegation() {

    return (
        <>

        <nav>
            <div className="logo">
             <img src="/img/emojione_bird.svg" alt="image of a logo" />
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        </>
    )
}