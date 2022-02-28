import UserModel from './../../models/user';


class Userservice {
  async cadastrar(data: any) {

    try {
      const user = await UserModel.create(data);
      if (!user) throw new Error();
      return data;
    } catch (error) {
      return error;
    }
  }

  async all(){
    try {
      const alluser = await UserModel.findAll();
      if(Object.keys(alluser).length === 0) throw new Error();
      return alluser;
    } catch (error:any) {
      return error;
    }
  }

  async userId(id:number):Promise<UserModel | null>{
    try{
     return await UserModel.findByPk(id);
    }catch(error:any){
      return error;
    }
  }

  async update(data:any):Promise<boolean>{
    try{
      const update:object = await UserModel.update({name:data.name,email:data.email},{
        where:{
          id:parseInt(data.id,10)
        }
      });
      if (!update) throw new Error();
      return true;
    }catch(error){
      return false;
    }
   }

   async deleteUser(id:number):Promise<boolean>{
    try{
      const deleteUser:any = await UserModel.destroy({where:{'id':id}});
      if(!deleteUser) throw new Error();
      return true;
    }catch(error:any){
     return false;
    }
   }
}

export default new Userservice();