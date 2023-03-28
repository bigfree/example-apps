import { FC, ReactNode, useState } from 'react';

export type AuthProviderProps = {
    children: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }): JSX.Element => {
    let [user, setUser] = useState<any>(null);

    return (
        <div></div>
    );
};

export default AuthProvider;