import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RequireAuthComponent from './auth/require-auth.component';
import ErrorRoute from './routes/error.route';
import LoginRoute from './routes/login.route';
import RootRoute from './routes/root.route';
import TasksRoute from './routes/tasks/tasks.route';
import UserLogsRoute from './routes/user/user-logs.route';
import UserProfileRoute from './routes/user/user-profile.route';
import UserSettingsRoute from './routes/user/user-settings.route';
import UserTasksRoute from './routes/user/user-tasks.route';
import UserRoute from './routes/user/user.route';
import UsersRoute from './routes/users/users.route';

// type ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor;

// export interface MantineThemeColorsOverride {
//     colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
// }

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuthComponent><RootRoute /></RequireAuthComponent>,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '/users',
                element: <UsersRoute />,
            },
            {
                path: '/users/:id',
                element: <UserRoute />,
                children: [
                    {
                        path: 'profile',
                        element: <UserProfileRoute />,
                    },
                    {
                        path: 'tasks',
                        element: <UserTasksRoute />,
                    },
                    {
                        path: 'logs',
                        element: <UserLogsRoute />,
                    },
                    {
                        path: 'settings',
                        element: <UserSettingsRoute />,
                    },
                ],
            },
            {
                path: '/tasks',
                element: <TasksRoute />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginRoute />,
    },
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
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
            <ModalsProvider>
                <Notifications />
            </ModalsProvider>
        </QueryClientProvider>
    </MantineProvider>,
);
