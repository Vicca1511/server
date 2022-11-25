import { IUserEntity } from './entities/user.entity';
import { UserDto } from './services/dto/userImput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './services/partialUserInput.do';

export class userService {
  private users: IUserEntity[] = [];
  
  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    this.users.push(userEntity);
    return userEntity;
    // return  Promise.resolve(userEntity);
  }

  async updateUser(userPrimal: PartialUserDto): Promise<IUserEntity> {
    this.users.map((user, index) => {
      if (user.id === userPrimal.id) {
        const updatedUser = Object.assign(user, userPrimal);
        this.users.splice(index, 1, updatedUser);
      }
    });
    const updatedUser = this.users.find((user) => user.id === updatedUser.id);
    return updatedUser;
  }

  async getAllUsers():Promise<IUserEntity[]> {
    return this.users;
} 
  async deleteByid(userId): Promise<boolean> {
    const IsUserReal = this.users.find((user) => user.id === userId);
    if(!IsUserReal) return false;

    this.users.map((user, index) => {
      if (user.id === userId) {
        this.users.splice(index, 1);
      }
      return true;
    });
  }





}
