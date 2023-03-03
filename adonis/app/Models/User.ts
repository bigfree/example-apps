import { beforeCreate } from '@adonisjs/lucid/build/src/Orm/Decorators';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import { CamelCaseNamingStrategy } from 'App/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

export default class User extends BaseModel {
    public static selfAssignPrimaryKey = true;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({isPrimary: true})
    public id: string;

    @column()
    public firstName: string;

    @column()
    public lastName: string;

    @column()
    public email: string;

    @column.dateTime({autoCreate: true})
    public createdAt: DateTime;

    @column.dateTime({autoCreate: true, autoUpdate: true})
    public updatedAt: DateTime;

    @beforeCreate()
    public static assignUuid(user: User) {
        user.id = uuidv4();
    }
}
