import { Application, Request, Response, NextFunction} from "express";
import User from '../modules/user/user';

class Routes {
	initRoutes(app: Application ): void {
	   app.route('/user').post(User.create);
	   app.route('/users').get(User.allusers);
	   app.route('/user/:id').get(User.userId);
	   app.route('/user/update').put(User.update);
	   app.route('/user/:id').delete(User.delete);
	}
}


export default new Routes();