import React from 'react';
import { Redirect, Route } from 'react-router';
import { CircularProgress } from '@mui/material';
import useAuth from './../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading } = useAuth();
    // Prevent after login  to reload page , cannot go login page
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // if user email is reamain go to where you wanted to go if not redirect to login page
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;