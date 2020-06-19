import React, { useState } from 'react'
import Styled from '@emotion/styled'
import Button from '../components/Button'
import {Link, useHistory} from 'react-router-dom'
import { registerUser } from '../redux/actions/authActions'
import {connect} from 'react-redux'

const Signup = ({register}) => {

    const [ firstname, setFirstname ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }

        register(user);
        history.push('/')

    }

    console.log({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    })

    return(
        <SignupStyled>
            <div className="signup">
                <form className="user-form" onSubmit={onSubmit}>
                    <h2>Signup</h2>
                    <div className="field">
                        <label htmlFor="email">First Name</label>
                        <input name="firstname" type="firstname" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
                    </div>
                    <div className="field">
                        <label htmlFor="lastname">Last Name</label>
                        <input name="lastname" type="lastname" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <Button className="btn" >Login</Button>
                    <span>Already have account? Login <Link to="/login">here</Link></span>
                </form>
            </div>
        </SignupStyled>
    )
}

const SignupStyled = Styled.div`
    display:flex;
    width:100%;
    height:100vh;

    justify-content:center;
    align-items:center;
    position:relative;
`

const mapDispatchToProps = dispatch => ({
    register: (e) => dispatch(registerUser(e))
});

export default connect(null, mapDispatchToProps )(Signup);