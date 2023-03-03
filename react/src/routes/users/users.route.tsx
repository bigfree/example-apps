import { FC } from 'react';
import { useUsers } from '../../resources/users';

const UsersRoute: FC = (): JSX.Element => {
    const {data} = useUsers();

    return (
        <div>
            Users route
            <hr/>
            {JSON.stringify(data?.data)}
        </div>
    );
};

export default UsersRoute;