import { gql, makeVar, ReactiveVar, useQuery, useReactiveVar } from '@apollo/client';
import { nanoid } from 'nanoid';
import { FC } from 'react';

type Todo = {
    id: string;
    name: string;
    __typename: string;
}

export const todoItemsVar: ReactiveVar<Todo[]> = makeVar<Todo[]>([]);

// export const GET_TODOS = gql`
//     query GetTodos {
//         todos @client
//     }
// `;

const ReactiveVarsRoute: FC = (): JSX.Element => {
    const todos: Todo[] = useReactiveVar(todoItemsVar);
    // const { data, loading, error } = useQuery(GET_TODOS);
    return (
        <div>
            <button onClick={() => {
                todoItemsVar(todos.concat([{
                    name: 'abc',
                    id: nanoid(),
                    __typename: 'Todo',
                }]));
            }}>Add todo</button>
            <hr/>
            {/*{JSON.stringify(data)}*/}
        </div>
    )
}

export default ReactiveVarsRoute;