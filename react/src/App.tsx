import { FC } from 'react';
import { useUsers } from './resources/users';

const App: FC = (): JSX.Element => {
    const {data} = useUsers();
    return (
        <div>
            Ahoj
            <hr/>
            {JSON.stringify(data?.data)}
        </div>
    );
};

export default App;
