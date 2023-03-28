import { Avatar } from './Avatars';
import { Task } from './Task';

export enum AccountRoleEnum {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

export enum AccountStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    SUSPEND = 'SUSPEND',
    DELETED = 'DELETED',
}


export type User = {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    status: AccountStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    profileId: string;
    avatarId: string;
    createdTasks: Task[];
    assignedTasks: Task[];
    avatar: Avatar;
}

export type CreateUser = Pick<User, 'firstName' | 'lastName' | 'email' | 'status'>;

export type AuthUser = Pick<User, 'id' | 'email' | 'status'>