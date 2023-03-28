import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import client from '../client/client';
import { ResponseWithPaginate } from '../types/Response';
import { AccountStatusEnum, CreateUser, User } from '../types/User';

export const useUsers = (page: number, search: string, status: AccountStatusEnum | null) => {
    return useQuery({
        queryKey: ['users', {
            page,
            search,
            status,
        }],
        queryFn: async () => {
            const url = new URL(`http://localhost:3000/api/users`);
            const params = url.searchParams;

            params.set('limit', '100');
            params.set('page', `${page ?? 1}`);

            if ('' !== search) {
                params.set('search', search);
            }

            if (null !== status) {
                params.set('status', status);
            }

            const { data }: AxiosResponse<ResponseWithPaginate<User[]>> = await client.get(
                `/api/users?${params.toString()}`,
            );
            return (data as ResponseWithPaginate<User[]>);
        },
        keepPreviousData: true,
    });
};

export const useUserDetail = (id: string) => {
    return useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const { data }: AxiosResponse<User> = await client.get(
                `/api/users/${id}`,
            );
            return (data as User);
        },
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateUser) => {
            return await client.post(`/api/users`, data);
        },
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ['users'],
            });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            return await client.delete(`/api/users/${id}`);
        },
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ['users'],
            });
        },
    });
};