import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import CreateUserValidator from 'App/Validators/CreateUserValidator';
import ShowUserValidator from 'App/Validators/ShowUserValidator';
import UpdateUserValidator from 'App/Validators/UpdateUserValidator';

export default class UsersController {
    /**
     * Index action
     * @param {RequestContract} request
     * @param {ResponseContract} response
     * @returns {Promise<void>}
     */
    public async index({request, response}: HttpContextContract) {
        const page = request.input('page', 1);
        const users = await User.query().paginate(page);

        response.json(users);
    }

    /**
     * Store action
     * @param {RequestContract} request
     * @param {ResponseContract} response
     * @returns {Promise<void>}
     */
    public async store({request, response}: HttpContextContract) {
        try {
            const payload = await request.validate(CreateUserValidator);
            const user = await User.create(payload);

            response.json(user);
        } catch (error) {
            response.badRequest(error.messages);
        }
    }

    /**
     * Show action
     * @param {RequestContract} request
     * @param {ResponseContract} response
     * @returns {Promise<void>}
     */
    public async show({request, response}: HttpContextContract) {
        try {
            await request.validate(ShowUserValidator);

            const userId = request.param('id');
            const user = await User.findOrFail(userId);

            response.json(user);
        } catch (error) {
            response.notFound(error.messages);
        }
    }

    /**
     * Update action
     * @param {RequestContract} request
     * @param {ResponseContract} response
     * @returns {Promise<void>}
     */
    public async update({request, response}: HttpContextContract) {
        const userId = request.param('id');

        try {
            const payload = await request.validate(UpdateUserValidator);
            const user = await User.findOrFail(userId);

            // delete payload.id;

            user.merge(payload);

            const updatedUser = await user.save();

            response.json(updatedUser);
        } catch (error) {
            response.badRequest(error.messages);
        }
    }

    /**
     * Destroy action
     * @param {RequestContract} request
     * @param {ResponseContract} response
     * @returns {Promise<void>}
     */
    public async destroy({request, response}: HttpContextContract) {
        const userId = request.param('id');

        try {
            await request.validate(ShowUserValidator);

            const user = await User.findOrFail(userId);
            await user.delete();
        } catch (error) {
            response.badRequest(error.messages);
        }
    }
}
