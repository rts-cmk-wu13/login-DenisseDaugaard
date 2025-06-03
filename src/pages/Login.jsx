import{ Form , Link, useLocation, useNavigate} from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";



export default function Login() {
   
const {login} = useAuth();
const location = useLocation();
const navigate = useNavigate();
const [error, setError] = useState(null);

const from = location.state?.from?.pathname || '/';

        async function handleLogin(event) {

            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            //console.log(data);

            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const userData = await response.json();
            console.log(userData);

            if (!response.ok) {
               setError(userData.message || userData.error || 'Login failed');

            } else{
                login(userData.accessToken);
                navigate(from, {replace: true});
            }
        }



    return (
        <>
        <div className="login__header">
            <img className="small__logo" src="/img/emojione_bird.svg" alt="LOgo" />
            < Link to="/"><p className="home__link">Home</p></Link>
        </div> 

        <Form  onSubmit={handleLogin}>
            <h2 className="login__title">Login</h2>
            <div className="form__grup">
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" id="username" name="username" />
            </div>
            <div className="form__grup">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" name="password" />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Login</button>
        </Form>

        </>
    )
}