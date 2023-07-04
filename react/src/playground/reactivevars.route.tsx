import { makeVar, ReactiveVar, useApolloClient, useReactiveVar } from '@apollo/client';
import { useForm, UseFormReturnType } from '@mantine/form';
import { nanoid } from 'nanoid';
import { FC, useEffect } from 'react';
import { NodeType, NodeTypeCreateWithoutNodeInput, NodeTypeGeometryEnum } from '../__generated__/graphql';

type Todo = {
    id: string;
    name: string;
    __typename: string;
}

// export const nodeTypeReactiveVar: ReactiveVar<NodeType> = makeVar<NodeType>([]);

// export const GET_TODOS = gql`
//     query GetTodos {
//         todos @client
//     }
// `;

const ReactiveVarsRoute: FC = () => {
    // const client = useApolloClient();
    // const nodeType = useReactiveVar(nodeTypeReactiveVar);
    // const todos: Todo[] = useReactiveVar(nodeTypeReactiveVar);
    // const { data, loading, error } = useQuery(GET_TODOS);

    const form: UseFormReturnType<NodeTypeCreateWithoutNodeInput> = useForm<NodeTypeCreateWithoutNodeInput>({
        initialValues: {
            name: '',
            externalId: '',
            nodeTypeData: {
                create: {
                    color: '',
                    acronym: '',
                    description: '',
                    geometry: NodeTypeGeometryEnum.Square,
                    width: null,
                    height: null,
                },
            },
        },
    });

    // useEffect(() => {
    //     client.writeQuery({
    //         query: gql`
    //             query
    //         `
    //     })
    // }, [form.values]);

    return (
        <div>
            <form>

            </form>
            <button onClick={() => {
                todoItemsVar(todos.concat([{
                    name: 'abc',
                    id: nanoid(),
                    __typename: 'Todo',
                }]));
            }}>Add todo
            </button>
            <hr />
            {JSON.stringify(form.values)}
        </div>
    );
};

export default ReactiveVarsRoute;