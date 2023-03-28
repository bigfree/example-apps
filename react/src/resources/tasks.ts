import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import client from '../client/client';
import { ResponseWithPaginate } from '../types/Response';
import { Task } from '../types/Task';

export const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data }: AxiosResponse<ResponseWithPaginate<Task>> = await client.get('/api/tasks');
            return data;
        },
    });
};