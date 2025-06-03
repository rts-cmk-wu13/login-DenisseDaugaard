import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import List from "./pages/List";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { handleSubmit } from "./utilities/action";
import Login from "./pages/Login";
import RequiredAuth from "./components/RequiredAuth"; //this is a custom component to protect routes that require authentication

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/list",
                element:(
                    <RequiredAuth>
                        <List/>
                    </RequiredAuth>
                )  
            },
            {
                path: "/list/:id",
                 element:(
                    <RequiredAuth>
                        <Details/>
                    </RequiredAuth>
                )
            },
            {
               path: "/contact",
               element: <Contact/>,
               action: handleSubmit
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
               path: "/thanks",
               element: <h2>Thanks for your message!!</h2>
            },
            {
               path: "*",
               element: <NotFound/>
            }
            
        ]
    }  
])

export default router;