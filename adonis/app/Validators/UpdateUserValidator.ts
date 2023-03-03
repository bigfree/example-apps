import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CustomMessages, rules, schema, validator } from '@ioc:Adonis/Core/Validator';

export default class UpdateUserValidator {
    public reporter = validator.reporters.api;

    public schema = schema.create({
        firstName: schema.string.optional([
            rules.minLength(2),
            rules.maxLength(100),
            rules.trim(),
        ]),
        lastName: schema.string.optional([
            rules.minLength(2),
            rules.trim(),
        ]),
        email: schema.string.optional([
            rules.minLength(2),
            rules.email(),
            rules.normalizeEmail({
                allLowercase: true,
            }),
            rules.unique({
                table: 'users',
                column: 'email',
            }),
        ]),
    });

    public messages: CustomMessages = {
        'email.unique': 'Email is exist',
    };

    constructor(protected ctx: HttpContextContract) {
    }
}
