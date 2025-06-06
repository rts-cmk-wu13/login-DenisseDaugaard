import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

import { useLocation } from "react-router";
import LogoutButton from "../components/LogoutButton";
import GoBackBtn from "../components/GoBackBtn";

export default function Secrets() {
    const [secrets, setSecrets] = useState([]);
    const [error, setError] = useState(null);
    const { token } = useAuth();
    const location = useLocation(); // Get the current location to redirect after login

    useEffect(() => {
        async function fetchSecrets() {
            
                const response = await fetch('http://localhost:4000/secrets', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch secrets');
                }

                const data = await response.json();
                setSecrets(data);
               
        }

        fetchSecrets();
    }, []);

    return  (
        <>
            <div className="secundary__header">
                <GoBackBtn />
                
            </div>

            <h2 className="secrets__title">Secrets</h2>
            {error && <p>Error: {error}</p>}
          

            <ul>
                {secrets.map(secret => (
                    <li key={secret.id}>
                        <p>"{secret.quote}"</p>
                        <small className="author">  - {secret.author} ({secret.origin})</small>
                    </li>
                ))}
            </ul>
        </>
    );
}

