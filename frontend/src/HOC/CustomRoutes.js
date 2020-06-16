import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import React from 'react'

export const PublicRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <div>
                <div className="header">
                    <Navbar/>
                </div>
                <Banner/>
                <Component {...props} />
                      
                <style>{`
                
                .header{
                    position:sticky;
                    top:0;
                    z-index:2;
                }
            
                `}</style>
            </div>
        )}
        />
    )
}

export const LoginRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props)=> (<Component {...props} />)}
        />
    );
};