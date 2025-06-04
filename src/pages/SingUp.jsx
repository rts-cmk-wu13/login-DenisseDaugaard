import { Form, useNavigate } from "react-router";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";

export default function SignUp() {
  
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    // const {token} = useAuth()

  async function handleSignUp(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const user = {
      email: data.email,
      password: data.password,
      username: data.username, // Optional custom field
    }

    try {
      const response = await fetch("http://localhost:4000/register", 
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      if (!response.ok) {
        const err = await response.json()
        setError(err.message || "Failed to register")
        return
      }

      // Success: redirect to login or home
      navigate("/success")
    } catch (err) {
      setError("Something went wrong")
    }
  }

  return (
    <Form onSubmit={handleSignUp}>

      <div className="login__header">
        <button className="btn_goback btn__signin" type="button" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>
        <h2 className="login__title">Sign Up</h2>
      </div>

      <div className="form__grup">
        <input type="text" id="username" name="username" placeholder="Username" required />
      </div>
      <div className="form__grup">
        <input type="email" id="email" name="email" placeholder="Email address" required />
      </div>
      <div className="form__grup">
        <input type="password" id="password" name="password" placeholder="Password" required />
      </div>
      <div className="form__grup">
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
      </div>

      {error && <div className="error">{error}</div>}

      <button className="btn btn__signin" type="submit">
        Sign Up <FaArrowRight />
      </button>
    </Form>
  )
}
