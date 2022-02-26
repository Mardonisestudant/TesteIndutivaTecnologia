import UserModel from './../../models/user';


class Userservice {
  async cadastrar(data: any) {

    try {
      const user = await UserModel.create(data);
      if (!user) throw new Error();
      console.log(user);
      return data;
    } catch (error) {
      console.log(error);
    }

  }

  async all() {
    try {
      const alluser = await UserModel.findAll();
      if(!alluser) throw new Error(); 
      return alluser;
    } catch (error) {
      return error;
    }
  }

  async userId(id:number){
    try{
      const userId = await UserModel.findByPk(id);
      if(!userId) throw new Error();
      return userId;
    }catch(error){
      console.log(error)
    }
  }

  async update(data:any){
    try{
      const update = await UserModel.update({name:data.name,email:data.email},{
        where:{
          id:parseInt(data.id)
        }
      });
      if(!update) throw new Error();
      return update;
    }catch(error){
      console.log(error)
    }
   }

   async deleteUser(id:number){
    try{
      const deleteUser = await UserModel.destroy({where:{id:id}});
      if(!deleteUser) throw new Error();
      return deleteUser;
    }catch(error){
      console.log(error);
    }
   }
}

export default new Userservice();