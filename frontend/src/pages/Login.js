import React, { useState } from 'react'
import Styled from '@emotion/styled'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        axios.post('http://localhost:5000/api/auth', user)
            .then(res => console.log(res.data));

    }

    return(
        <LoginStyled>
            <div className="login">
                <form className="user-form" onSubmit={onSubmit}>
                    <h2>Login</h2>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <Button className="btn">Login</Button>
                    <span>Don't have account? Signup <Link to="/signup">here</Link></span>
                </form>
            </div>
        </LoginStyled>
    )
}

const LoginStyled = Styled.div`
    display:flex;
    width:100%;
    height:100vh;

    justify-content:center;
    align-items:center;
    position:relative;

`

export default Login