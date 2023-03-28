import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import client from '../client/client';
import { Avatar } from '../types/Avatars';

export const useAvatar = (id: string) => {
    return useQuery({
        queryKey: ['avatar', id],
        queryFn: async () => {
            const { data }: AxiosResponse<Avatar> = await client.get(
                `/api/avatars/${id}`,
            );

            return (data as Avatar);
        },
    });
};