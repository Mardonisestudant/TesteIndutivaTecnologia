import { Request, Response } from "express";
import UserService from './services';


class UserController {

   async novoUsuario(req:Request, res:Response) {
        let data:any = req.body;

    try {
       const user = await UserService.cadastrar(data);
        if (!user) throw new Error();
       return res.json({'user': 'Usuário cadastrado !'});
     } catch (err) {
       console.log(err);
     }
   

    }

  async allusers(req:Request, res:Response) {
    try {
      const allusers = await UserService.all();
      if (!allusers) throw new Error();
      res.json({'users': allusers});
    } catch (error) {
      console.log(error)
    }
  }

  async userbyId(req:Request, res:Response){
    const id = req.params.id
    try{
      const userId = await UserService.userId(parseInt(id));
      if(!userId) throw new Error();
      res.json({'user': userId})
    }catch(error){
      console.log(error)
    }
  }

  async updateUser(req:Request , res:Response){
    const data:any = {
      "id": req.body.id,
      "name":req.body.name,
      "email":req.body.email
    }
    try{
      const update = await UserService.update(data);
     if(!update) throw new Error();
      return res.json({'message': 'User atualizado!'});
    }catch(error){
      console.log(error);
    }
  }

  async deleteUser(req:Request, res:Response){
    const id = req.params.id
    try{
      const deleteUser = await UserService.deleteUser(parseInt(id));
      if(!deleteUser) throw new Error();
      return res.json({'message':'User deletado !'})
    }catch(error){
      console.log(error)
    }
  }
}

export default new UserController();