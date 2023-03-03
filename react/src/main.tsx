import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorRoute from './routes/error.route';
import RootRoute from './routes/root.route';
import UsersRoute from './routes/users/users.route';

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
        element: <RootRoute/>,
        errorElement: <ErrorRoute/>,
        children: [
            {
                path: '/users',
                element: <UsersRoute/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <MantineProvider theme={{
        components: {
            // AppShell:
        }
    }} withNormalizeCSS withGlobalStyles>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </MantineProvider>,
);
