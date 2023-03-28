export type Profile = {
    id: string;
    userId: string;
    avatar: string | null;
    description: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}