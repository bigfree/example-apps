import { FC } from 'react';
import { useTasks } from '../../resources/tasks';

const TasksRoute: FC = (): JSX.Element => {
    const { data } = useTasks();

    return (
        <div>
            Tasks route
            <hr />
            {JSON.stringify(data?.items)}
        </div>
    );
};

export default TasksRoute;