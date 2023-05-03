import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { LocalForageWrapper, persistCache } from 'apollo3-cache-persist';
import { createClient } from 'graphql-ws';
import * as localForage from 'localforage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import PlaygroundRoute from './playground/playground.route';
import ReactiveVarsRoute from './playground/reactivevars.route';
import ErrorRoute from './routes/error.route';
import NodeTypesCreateRoute from './routes/node-types/node-types-create.route';
import NodeTypesRoute from './routes/node-types/node-types.route';
import RootRoute from './routes/root.route';

// type ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor;

// export interface MantineThemeColorsOverride {
//     colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
// }

const cache: InMemoryCache = new InMemoryCache({
    // typePolicies: {
    //     Query: {
    //         fields: {
    //             todos: {
    //                 read: () => todoItemsVar(),
    //             },
    //         },
    //     },
    // },
    // dataIdFromObject: object => {
    //     console.log(object);
    //     switch (object.__typename) {
    //         case 'todos':
    //             return object;
    //         default: return object.id || object._id;
    //     }
    // }
    // dataIdFromObject: (object) => {
    //     if ('Todo' === object.__typename) {
    //         return object.id;
    //     }
    //     return defaultDataIdFromObject(object);
    // },
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000',
}));

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition'
            && definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

await persistCache({
    cache,
    storage: new LocalForageWrapper(localForage),
    maxSize: false,
});

const client = new ApolloClient({
    link: splitLink,
    cache,
    connectToDevTools: true,
    resolvers: {
        Mutation: {
            addTodo: (_root, variables, { cache }) => {
                cache.modify({
                    id: cache.identify({
                        __typename: 'TodoItem',
                        id: variables.id,
                    }),
                    fields: {},
                });
            },
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/playground',
        element: <PlaygroundRoute />,
    },
    {
        path: '/reactiveVars',
        element: <ReactiveVarsRoute />,
    },
    {
        path: '/',
        // element: <RequireAuthComponent><RootRoute /></RequireAuthComponent>,
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: 'node-types',
                element: <NodeTypesRoute />,
                children: [
                    {
                        path: 'create',
                        element: <NodeTypesCreateRoute />,
                    },
                ],
            },
            // {
            //     path: '/users',
            //     element: <UsersRoute />,
            // },
            // {
            //     path: '/users/:id',
            //     element: <UserRoute />,
            //     children: [
            //         {
            //             path: 'profile',
            //             element: <UserProfileRoute />,
            //         },
            //         {
            //             path: 'tasks',
            //             element: <UserTasksRoute />,
            //         },
            //         {
            //             path: 'logs',
            //             element: <UserLogsRoute />,
            //         },
            //         {
            //             path: 'settings',
            //             element: <UserSettingsRoute />,
            //         },
            //     ],
            // },
            // {
            //     path: '/tasks',
            //     element: <TasksRoute />,
            // },
        ],
    },
    // {
    //     path: '/login',
    //     element: <LoginRoute />,
    // },
]);

const colors = {
    red: [
        '#ffe3e5',
        '#ffb4b7',
        '#fc848a',
        '#f9535c',
        '#f6232d',
        '#dc0914',
        '#ac040f',
        '#7b0109',
        '#4c0004',
        '#200000',
    ],
    blue: [
        '#f1e3ff',
        '#d1b2ff',
        '#b17fff',
        '#914dff',
        '#721aff',
        '#5800e6',
        '#4500b4',
        '#310082',
        '#1c0050',
        '#0b0020',
    ],
    green: [
        '#e3fce7',
        '#bfefc7',
        '#99e4a5',
        '#72d883',
        '#4bcd61',
        '#32b447',
        '#258c36',
        '#186426',
        '#0a3d15',
        '#001600',
    ],
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
        <ReactFlowProvider>
            <MantineProvider withNormalizeCSS withGlobalStyles theme={{
                colors: {
                    // ...colors,
                },
                globalStyles: (theme) => ({
                    'html, body': {
                        width: '100%',
                        maxHeight: '100vh',
                        scrollBehavior: 'smooth',
                    },
                    '#root': {
                        height: '100vh',
                    },
                }),
                components: {
                    // Header: {
                    //     styles: (theme, params, {variant}) => ({
                    //         root: {
                    //             backgroundColor: theme.colors[params.color || theme.primaryColor][0]
                    //         }
                    //     })
                    // }
                },
            }}>
                <RouterProvider router={router} />
                <ModalsProvider>
                    <Notifications />
                </ModalsProvider>
            </MantineProvider>
        </ReactFlowProvider>
    </ApolloProvider>,
);
