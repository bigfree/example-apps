import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import client from '../client/client';
import { ResponseWithPaginate } from '../types/Response';
import { Users } from '../types/Users';

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const {data}: AxiosResponse<ResponseWithPaginate<Users>> = await client.get('/users');
            return data;
        },
    });
};