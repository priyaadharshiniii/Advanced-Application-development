import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signIn } from "../Services/auth";
import { jwtDecode } from 'jwt-decode';



const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate(); 
    // const handleLogin = async(e) => {
    //     e.preventDefault(); // Prevent the default form submission behavior
    
    //     // Basic form validation
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
         
    //       return;
    //     }
    
    //     // Password validation: Ensure that the password has a minimum length
    //     if (password.length < 6) {
          
    //       return;
    //     }
    
    //     e.preventDefault();
    
    //       const form={
    //         email:email,
    //         password:password
    //       };

          
    //       signIn(form)
    //             .then((res) => {
    //                 const decoded = jwtDecode(res.data.token);
    //                 console.log(decoded.sub);
    //                 sessionStorage.setItem('token', res.data.token);
    //                 if(decoded.sub==="Guhan@gmail.com"){
    //                 setEmail("");
    //                 setPassword("");
    //                 navigate('/homes');
    //                 }
    //                 else
    //                 {
    //                 setEmail("");
    //                 setPassword("");
    //                 navigate('/home');
    //                 }
    //             })
    //             .catch((err) => {
    //                 setEmail("");
    //                 setPassword("");
    //                 console.log(err);
                   
    //             });
    //             const response = await axios.post('http://localhost:8181/login', { email, password });
    //             const token = response.data.token; // Assign token from response
    //             setToken(token);
        

    // };


    return (
        <div style={{
            margin: 0,
            padding: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0',
            backgroundImage: `url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="auth" style={{
                maxWidth: '400px',
                padding: '20px',
                borderRadius: '10px',
                
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                animation: 'fadeIn 1s ease',
            }}>
                <h2>Login</h2>
                <form  className="auth-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                       
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                       
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Link to='/home'><button type="submit" >Login</button></Link>
                </form>
                <p>
                    Don't have an account? <NavLink to="/register" className="switch">Sign Up</NavLink>
                </p>
                <br>
                </br>
               
            </div>
        </div>
    );
    };

export default Login;
