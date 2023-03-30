import { z, ZodRawShape } from 'zod';

type AnyObj = Record<PropertyKey, unknown>

export type ZodObj<T extends AnyObj> = {
    [key in keyof T]: z.ZodType<T[key]>
}

export const zObject = <T extends AnyObj>(arg: ZodObj<T>) => z.object(arg as ZodRawShape);