import {Request , Response} from 'express';
import UserController from './controller';

class User {

    create(req:Request, res:Response) {
       return UserController.novoUsuario(req, res);
    }

    allusers(req:Request, res:Response) {
      return UserController.allusers(req, res);
    }

    userId(req:Request, res:Response){
      return UserController.userbyId(req, res);
    }

    update(req:Request, res:Response){
      return UserController.updateUser(req, res);
    }

    delete(req:Request, res:Response){
      return UserController.deleteUser(req, res);
    }
}

export default new User();