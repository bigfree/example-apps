import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import useAuthStore from '../store/auth.store';

export type RequireAuthComponentProps = {
    children: JSX.Element
}

const RequireAuthComponent: FC<RequireAuthComponentProps> = ({ children }): JSX.Element => {
    const location = useLocation();
    const { user, token } = useAuthStore(state => ({
        user: state.user,
        token: state.token,
    }), shallow);

    if (!user || !token) {
        return <Navigate
            to='/login'
            state={{ from: location }}
            replace
        />;
    }

    return children;
};

export default RequireAuthComponent;