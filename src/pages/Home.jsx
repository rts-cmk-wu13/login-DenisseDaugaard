import { NavLink,Link } from "react-router"
import HomeButton from "../components/HomeButton"

export default function Home() {

    return (
        <>

        <h1>Home</h1>
        <div className="home__text">
            <h1>early bird.</h1>
            <p>Your local discount mate</p>
        </div>

        <div className="home__buttons">
            <HomeButton
                text="Sign Up"
                style="btn btn__signin"
            />
            <HomeButton
                text="Login"
                style="btn btn__login"
            />

        </div>
       
        </>
    )
}