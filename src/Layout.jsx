
import { Outlet } from "react-router"
import '/src/style/layout.scss'
import Header from "./components/Header"
import Navegation from "./components/Navegation"


function Layout() {
 

  return (
    <>

      <Header />
    
     <main>
      <Outlet />
     </main>

     <footer>
    <small>Copy Right © 2025  My App</small>
     </footer>
    </>
  )
}

export default  Layout
