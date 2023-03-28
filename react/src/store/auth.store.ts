import { AuthUser } from '../types/User';

export type AuthState = {
    token: string | null,
    user: AuthUser | null,
}