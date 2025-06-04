import{ Form , Link, useLocation, useNavigate} from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";




export default function Login() {
   
const {login, token} = useAuth();
const location = useLocation();
const navigate = useNavigate();
const [error, setError] = useState(null);

const from = location.state?.from?.pathname || '/secrets';

        async function handleLogin(event) {

            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            console.log(data);

            const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         });
            console.log(response);


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
            <button className="btn_goback btn__signin"><FaArrowLeft /></button>
            <h2 className="login__title">Login </h2>
            <img className="small__logo" src="/img/emojione_bird.svg" alt="LOGO" />
        </div> 

        <Form  onSubmit={handleLogin}>
           
            <div className="form__grup">
                <input type="email" id="email" name="email" placeholder="Email address" />
            </div>
            <div className="form__grup">
                <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
            {error && <div className="error">{error}</div>}
            <button className="btn btn__signin" type="submit">Login <FaArrowRight /></button>
        </Form>

        </>
    )
}