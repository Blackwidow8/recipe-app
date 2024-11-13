import React from 'react';


const withAuth = (WrappedComponent) => {
    return (props) => {
        const isAuthenticated = true; // Replace 'true' with your logic to check if the user is authenticated

        if (!isAuthenticated) {
            return <Redirect to='/login' />
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuth;