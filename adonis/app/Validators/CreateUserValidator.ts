import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CustomMessages, rules, schema, validator } from '@ioc:Adonis/Core/Validator';

export default class CreateUserValidator {

    public cacheKey = this.ctx.routeKey;

    public reporter = validator.reporters.api;

    public schema = schema.create({
        firstName: schema.string([
            rules.maxLength(100),
            rules.trim(),
        ]),
        lastName: schema.string([
            rules.trim(),
        ]),
        email: schema.string([
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
        'email.unique': 'Email is exist'
    };

    constructor(protected ctx: HttpContextContract) {
    }
}
