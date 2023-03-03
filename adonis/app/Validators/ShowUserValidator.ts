import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator';

export default class ShowUserValidator {
    public data = this.ctx.request.params();

    public schema = schema.create({
        id: schema.string([
            rules.uuid(),
            rules.exists({
                table: 'users',
                column: 'id',
            }),
        ]),
    });

    public messages: CustomMessages = {
        exists: 'User not found',
    };

    constructor(protected ctx: HttpContextContract) {
    }
}
