
import { useEffect, useState } from "react";
import {FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function Statement() {
    const [statement, setStatement] = useState([]);
  
    useEffect(() => {
        async function fetchStatement() {
            
                const response = await fetch('http://localhost:4000/statements', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch Statement');
                }

                const data = await response.json();
                setStatement(data);
               
        }

        fetchStatement();
    }, []);
    


    return (

        <>

          <div className="login__header">
             <Link to="/" className="goback__container" >
                <button className="btn_goback btn__signin"><FaArrowLeft /></button>
            </Link>
        </div> 

        <h2>Statements</h2>

        <ul>
            {statement.map(item => (
                <li key={item.id}>
                    <p>{item.sentence}</p>
                </li>
            ))}
        </ul>
        </>
        


    )
}