import { Context, helpers } from "../../../config/deps.ts";
import type {User} from '../schema/user.ts';
import cliente from '../../../config/db.ts';
export const findUser = async (ctx: Context) =>{
    const { userId } = helpers.getQuery(ctx, {mergeParams: true});
    try {
        let user: User = await cliente.query(`SELECT * FROM users WHERE uuid LIKE '%${userId}%'`);
        ctx.response.body = user;
    } catch (error) {
        console.log(error);
    }
}