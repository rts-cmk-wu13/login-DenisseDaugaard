import { useLocation } from "react-router"
import Navegation from "./Navegation"
import LogoutButton from "./LogoutButton"

export default function Header() {

    const location = useLocation(); // Get the current location to redirect after login
    

    return (
        
         <header>
            {location.pathname !== '/login' && (
                <>
                    <Navegation />
                    <LogoutButton/> 
                </>
            )}
           
        </header>
        
    ) 
}