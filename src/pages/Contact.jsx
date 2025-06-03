import { Form, useActionData } from "react-router"


export default function Contact() {

  const errors = useActionData();

    return (
        <>
        <h2>Contact</h2>
        
        <Form method="post">
            <div className="mandatory">
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" name="name" id="name" placeholder="Name"/>
                <p className="error">{errors && errors?.name?.errors[0]}</p>
            </div>
            <div className="mandatory">
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" name="email" id="email" placeholder="Email"/>
                <p className="error">{errors && errors?.email?.errors[0]}</p>
            </div>
            <div className="mandatory">
                {/* <label htmlFor="message">Message</label> */}
                <textarea name="message" id="" placeholder="Please write your message here..." rows="10"></textarea>
                <p className="error">{errors && errors?.message?.errors[0]}</p>
            </div>
            <button type="submit">Send</button>
        </Form>
        </>

    )
}