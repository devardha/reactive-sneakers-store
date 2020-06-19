import React, { useState } from 'react'
import Styled from '@emotion/styled'
import Button from '../components/Button'
import {Link, useHistory} from 'react-router-dom'
import { loginUser } from '../redux/actions/authActions'
import {connect} from 'react-redux'

const Login = ({login}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        login(user);
        history.push('/')

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

const mapDispatchToProps = dispatch => ({
    login: (e) => dispatch(loginUser(e))
});

export default connect(null, mapDispatchToProps )(Login);