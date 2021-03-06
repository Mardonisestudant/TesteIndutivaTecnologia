import { Request, Response } from "express";
import UserService from './services';


class UserController {

   async novoUsuario(req:Request, res:Response) {
      const data:any = req.body;
    try {
      const user = await UserService.cadastrar(data);

       if(user.name === data.name){
        res.status(201).json({'message': 'Usuario cadastrado'})
       }else{
         res.status(200).json({'message': user.errors})
       }
     } catch (err) {
        res.status(500).json({'error': 'Não foi possivel cadastar usuario'})
     }
  }

  async allusers(req:Request, res:Response) {
    try {
      const allusers = await UserService.all();
      if (!allusers) throw new Error();
      if(allusers.length !== 0){
        res.status(200).json({'users': allusers});
      }else{
        res.status(200).json({'users': 'Lista vazia'});
      }
    } catch (error) {
      res.status(500).json({'error': error})
    }
  }

  async userbyId(req:Request, res:Response){
      const id = req.params.id;
      if (!id) throw new Error();
    try{
      const userId = await UserService.userId(parseInt(id, 10));
      if(userId != null){
        res.status(200).json({'user': userId})
      }
      if(userId === null){
        res.json({'message':'Usuario não encontrado'});
      }

    }catch(error){
      res.status(400).json({'message':'Usuario não encontrado'})
    }
  }

  async updateUser(req:Request , res:Response){
      const data:any = {
      "id": req.body.id,
      "name":req.body.name,
      "email":req.body.email
      }
    if(!data) throw new Error();
    try{
    const update = await UserService.update(data);
     if(!update) throw new Error();
     res.status(200).json({'message': 'User atualizado!'});
    }catch(error){
    res.status(400).json({'error':'Não foi possivel fazer atualização'})
    }
  }

  async deleteUser(req:Request, res:Response){
    const id = req.params.id;
    if(!id) throw new Error();
    try{
      const deleteUser = await UserService.deleteUser(parseInt(id, 10));
      if(!deleteUser) throw new Error();
      res.status(200).json({'message':'User deletado !'})
    }catch(error){
      res.status(400).json({'error':'Não foi possivel deletar usuario'})
    }
  }
}

export default new UserController();