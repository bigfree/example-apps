import { MantineColor } from '@mantine/core';

export type Avatar = {
    id: string;
    avatar: string;
    acronym: string;
    userId: string;
    color: MantineColor;
    createdAt: Date;
    updatedAt: Date;
}