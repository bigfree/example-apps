import { User } from './User';

export enum TaskSeverity {
    HIGHEST = 'HIGHEST',
    HIGHT = 'HIGHT',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    LOWES = 'LOWEST',
}

export type Task = {
    id: string;
    name: string;
    description: string;
    severity: TaskSeverity;
    createdAt: string;
    updatedAt: string;
    createdById: string;
    createdBy: User;
    assignUserId: string | null;
    assignUser: User | null;
}