import React from "react";
import "../styles/LoginForm.css";

const LoginForm = () => {
    return (
        <div>LoginForm
            <form className="form">
                <label>Username: <input type="text" placeholder="nome"/></label>
                <label>Email: <input type="email" placeholder="example@gmail.com"/></label>
                <label>Password: <input type="password" placeholder="password"/></label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;