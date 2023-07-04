import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { MantineProvider, MantineTheme } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { LocalForageWrapper, persistCache } from 'apollo3-cache-persist';
import { createClient } from 'graphql-ws';
import * as localForage from 'localforage';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import 'unfonts.css';
import PlaygroundRoute from './playground/playground.route';
import ReactiveVarsRoute from './playground/reactivevars.route';
import ActionCreateRoute from './routes/actions/ActionCreate.route';
import ActionsRoute from './routes/actions/Actions.route';
import ErrorRoute from './routes/error.route';
import NodeTypesCreateRoute from './routes/node-types/node-types-create.route';
import NodeTypesUpdateRoute from './routes/node-types/node-types-update.route';
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
    url: 'ws://localhost:4000/graphql',
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

export const client = new ApolloClient({
    link: splitLink,
    cache,
    connectToDevTools: true,
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
                    {
                        path: ':nodeTypeId',
                        element: <NodeTypesUpdateRoute />,
                    },
                ],
            },
            {
                path: 'actions',
                element: <ActionsRoute />,
                children: [
                    {
                        path: 'create',
                        element: <ActionCreateRoute />,
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
        <DndProvider backend={HTML5Backend}>
            <ReactFlowProvider>
                <MantineProvider withNormalizeCSS withGlobalStyles theme={{
                    fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
                    defaultRadius: 0,
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
                        '::-webkit-scrollbar': {
                            width: 8,
                        },
                        '::-webkit-scrollbar-track': {
                            background: theme.colors.gray[0],
                        },
                        '::-webkit-scrollbar-thumb': {
                            background: theme.colors.gray[3],
                        },
                        '::-webkit-scrollbar-thumb:hover': {
                            background: theme.colors.gray[4],
                        },
                    }),
                    components: {
                        TextInput: {
                            styles: () => ({
                                label: {
                                    marginBottom: '0.3rem',
                                },
                            }),
                        },
                        NumberInput: {
                            styles: () => ({
                                label: {
                                    marginBottom: '0.3rem',
                                },
                            }),
                        },
                        ColorInput: {
                            styles: () => ({
                                label: {
                                    marginBottom: '0.3rem',
                                },
                            }),
                        },
                        Select: {
                            styles: () => ({
                                label: {
                                    marginBottom: '0.3rem',
                                },
                            }),
                        },
                        Textarea: {
                            styles: () => ({
                                label: {
                                    marginBottom: '0.3rem',
                                },
                            }),
                        },
                        Button: {
                            styles: (theme: MantineTheme) => ({
                                root: {
                                    boxShadow: `3px 3px 0 0 ${theme.fn.rgba(theme.fn.primaryColor(), 0.4)}`,
                                },
                            }),
                        },
                    },
                }}>
                    <RouterProvider router={router} />
                    <ModalsProvider>
                        <Notifications containerWidth={300} />
                    </ModalsProvider>
                </MantineProvider>
            </ReactFlowProvider>
        </DndProvider>
    </ApolloProvider>,
);
