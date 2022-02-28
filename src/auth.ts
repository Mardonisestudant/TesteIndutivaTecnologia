import UserService from './models/user';
import { Application, Request, Response, NextFunction} from "express";
import JWT from 'jwt-simple';
import bcrypt from 'bcrypt';

class Auth {

	auth(){
		return 'implementar o auth jwt';
	}
}


export default new Auth()